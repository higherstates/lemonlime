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

  
  useEffect(() => {
    Axios.get("https://lemonlime-project.herokuapp.com/read")
      .then((response) => {
        setFoodList(response.data)
      })
      .catch(error => {
        console.log(`The error is: ${error}`)
        return
      })
  }, [])
  
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
        .then((response) => {
          setFoodList([...foodList, { _id: response.data._id, foodName: foodName, isVegetarian: isVegetarian, priceRange: priceRange, foodUrl: foodUrl }])
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
            setFoodList={setFoodList}
            currentFood={currentFood}
            searchedFood={searchedFood}
            setSearchedFood={setSearchedFood}
            currentSearchedFood={currentSearchedFood}
            totalFood={foodList.length}
            totalSearchedFood={searchedFood.length}
            currentPage={currentPage}
            paginate={paginate}
            noResult={noResult}
            foodPerPage={foodPerPage}
          />
      }
    </section>
  )
}