import React, { useState, useEffect } from "react"
import './DinnerIdeas.css'
import Axios from "axios"
import Banner from "../Banner/Banner"
import FoodListComponent from "./FoodListComponent"
import FormComponent from "./FormComponent"

function DinnerIdeas() {

    const [foodName, setFoodName] = useState('')
    const [isVegetarian, setIsVegetarian] = useState(false)
    const [priceRange, setPriceRange] = useState('$')
    const [foodList, setFoodList] = useState([])

  
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
    const addToList = (event) => {
      event.preventDefault()
      Axios.post(
        "https://lemonlime-project.herokuapp.com/insert", 
        {
          foodName: foodName,
          isVegetarian: isVegetarian,
          priceRange: priceRange,
        }
      )
      .then(() => {
        setFoodName('')
        setIsVegetarian(false)
        setPriceRange('$')
      })
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
        />
        <FoodListComponent 
          foodList={foodList} 
          deleteFood={deleteFood}
        />
      </section>
    )
  }
  
  export default DinnerIdeas