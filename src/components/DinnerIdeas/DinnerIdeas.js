import React, { useState, useEffect } from "react"
import './DinnerIdeas.css'
import Axios from "axios"
import Banner from "../Banner/Banner"
import FoodListTable from "./FoodListTable"
import FormComponent from "./FormComponent"
import FilterSearch from "../FilterSearch/FilterSearch"
import ResultNotFound from "../../helpers/ResultNotFound"

export default function DinnerIdeas() {

    const [foodName, setFoodName] = useState('')
    const [isVegetarian, setIsVegetarian] = useState('no')
    const [priceRange, setPriceRange] = useState('$')
    const [foodUrl, setFoodUrl] = useState('')
    const [foodList, setFoodList] = useState([])

    const [searchedFood, setSearchedFood] = useState([])
    const [noResult, setNoResult] = useState(false)

    
    
    // Display food list:
    useEffect(() => {
      let unmounted = false
      Axios.get("https://lemonlime-project.herokuapp.com/read")
      .then((response) => {
        if (!unmounted) {
          setFoodList(response.data)
        }
      })
      .catch(error => {
        console.log(`The error is: ${error}`)
        return
      })
      return () => {
        unmounted = true
      }
    }, [foodList])
    
    
    // Add Food to list:
    const addToList = async (event) => {
      event.preventDefault()
      try {
        await Axios.post(
          "https://lemonlime-project.herokuapp.com/insert", 
          {
            foodName: foodName,
            isVegetarian: isVegetarian,
            priceRange: priceRange,
            foodUrl: foodUrl,
          }
          )
          .then(() => {
            setFoodName('')
            setIsVegetarian('no')
            setPriceRange('$')
            setFoodUrl('')
          })
        } catch(err) {
          console.error(`There was an error while trying to insert - ${err}`)
        }
      }


      // Paginate states:
      const [currentPage, setCurrentPage] = useState(1)
      const [foodPerPage] = useState(15)
      
      // Get current food:
      const indexOfLastFood = currentPage * foodPerPage
      const indexOfFirstFood = indexOfLastFood - foodPerPage
      const currentFood = foodList.slice(indexOfFirstFood, indexOfLastFood)
      const currentSearchedFood = searchedFood.slice(indexOfFirstFood, indexOfLastFood)
      
      const paginate = (pageNumber) => {
      setCurrentPage(pageNumber)
    }
    
    return (
      <section id="dinner-ideas">
        <Banner
          bannerTitle="Looking for something to eat tonight?"
          bannerSubtitle="Your ideas can also inspire others. Add your favorite dish and choose from our list! "
        />
        <FormComponent
          setFoodName={setFoodName}
          setIsVegetarian={setIsVegetarian}
          setPriceRange={setPriceRange}
          addToList={addToList}
          foodName={foodName}
          isVegetarian={isVegetarian}
          priceRange={priceRange}
          foodUrl={foodUrl}
          setFoodUrl={setFoodUrl}
        />
        <FilterSearch
          foodList={foodList}
          searchedFood={searchedFood}
          setSearchedFood={setSearchedFood}
          noResult={noResult}
          setNoResult={setNoResult}
          currentFood={currentFood}
          paginate={paginate}
        />
        {noResult ? <ResultNotFound/>
          :
            <FoodListTable
              foodName={foodName}
              priceRange={priceRange}
              isVegetarian={isVegetarian}
              foodUrl={foodUrl}
              foodList={foodList}
              currentFood={currentFood}
              searchedFood={searchedFood}
              currentSearchedFood={currentSearchedFood}
              totalFood={foodList.length}
              totalSearchedFood={searchedFood.length}
              paginate={paginate}
              noResult={noResult}
              foodPerPage={foodPerPage}
            />
        }
      </section>
    )
  }