import React, { useState, useEffect } from "react"
import './DinnerIdeas.css'
import Axios from "axios"
import Banner from "../Banner/Banner"
import FoodListTable from "./FoodListTable"
import FormComponent from "./FormComponent"
import FilterBoxes from "../FilterBoxes"
// import FoodListRow from "./FoodListRow"

export default function DinnerIdeas() {

    const [foodName, setFoodName] = useState('')
    const [isVegetarian, setIsVegetarian] = useState('')
    const [priceRange, setPriceRange] = useState('$')
    const [foodUrl, setFoodUrl] = useState('')
    const [foodList, setFoodList] = useState([])


    const [searchedFood, setSearchedFood] = useState([])
    const [textSearch, setTextSearch] = useState('')
    const [priceDropdown, setPriceDropdown] = useState('')
    const [vegDropdown, setVegDropdown] = useState('')

    const handleSearch = (event) => {
      event.preventDefault()
      const newSearch = foodList.filter((value) => {
        if (textSearch !== '' && priceDropdown === '' && vegDropdown === '') {
          return value.foodName.toLowerCase().includes(textSearch.toLowerCase())
        } else if (textSearch !== '' && priceDropdown === value.priceRange && vegDropdown === value.isVegetarian) {
          return (
            value.foodName.toLowerCase().includes(textSearch.toLowerCase())
            && value.priceRange === priceDropdown
            && value.isVegetarian === vegDropdown
          )
        } else if (textSearch !== '' && priceDropdown === '' && vegDropdown === value.isVegetarian) {
          return (
            value.foodName.toLowerCase().includes(textSearch.toLowerCase())
            && value.isVegetarian === vegDropdown
          )
        } else if (textSearch !== '' && priceDropdown === value.priceRange && vegDropdown === '') {
          return (
            value.foodName.toLowerCase().includes(textSearch.toLowerCase())
            && value.priceRange === priceDropdown
          )
        } else if (textSearch === '' && priceDropdown === '' && vegDropdown === value.isVegetarian) {
          return (
            value.isVegetarian === vegDropdown
          )
        } else if (textSearch === '' && priceDropdown === value.priceRange && vegDropdown === '') {
          return (
            value.priceRange === priceDropdown
            )
        } else if (textSearch === '' && priceDropdown === value.priceRange && vegDropdown === value.isVegetarian) {
          return (
            value.priceRange === priceDropdown
            && value.isVegetarian === vegDropdown
          )
        } else {
          console.log('Unknown')
        }
      })
      if (textSearch === '' && priceDropdown !== '' && vegDropdown !== '') {
        setSearchedFood(newSearch)
      } else if (textSearch === '' && (priceDropdown !== '' || vegDropdown !== '')) {
        setSearchedFood(newSearch)
      } else if (textSearch !== '') {
        setSearchedFood(newSearch)
      }
    }
    
    const clearSearch = (event) => {
      event.preventDefault()
      setSearchedFood(foodList)
      setTextSearch('')
      setPriceDropdown('')
      setVegDropdown('')
    }

    // useEffect(() => {
    //   setSearchedFood(foodList)
    //   // console.log(searchedFood)
    // }, [foodList]);

    // Read:
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
  
    // Create:
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
          setIsVegetarian('')
          setPriceRange('$')
          setFoodUrl('')
        })
      } catch(err) {
        console.error(`The error is ${err}`)
      }
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
        <FilterBoxes
          textSearch={textSearch} 
          setTextSearch={setTextSearch} 
          priceDropdown={priceDropdown} 
          setPriceDropdown={setPriceDropdown} vegDropdown={vegDropdown} 
          setVegDropdown={setVegDropdown} 
          handleSearch={handleSearch} 
          clearSearch={clearSearch}
        />
        <FoodListTable
          searchedFood={searchedFood}
          foodName={foodName}
          priceRange={priceRange}
          isVegetarian={isVegetarian}
          foodUrl={foodUrl}
          foodList={foodList}
        />
      </section>
    )
  }