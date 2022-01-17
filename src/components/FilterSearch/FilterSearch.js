import React, { useState, useEffect} from 'react'
import { HiSearch } from "react-icons/hi"
import { MdClear } from "react-icons/md"
import './FilterSearch.css'


export default function FilterSearch(props) {
  const [textSearch, setTextSearch] = useState('')
  const [priceDropdown, setPriceDropdown] = useState('')
  const [vegDropdown, setVegDropdown] = useState('')

  // Handle Search button:
  const handleSearch = (event) => {
    event.preventDefault()
    const newSearch = props.foodList.filter((food) => {
      if (textSearch !== '' && vegDropdown === '' && priceDropdown === '') {
        return (
          Object.values(food)[1].toLowerCase().includes(textSearch.toLowerCase())
        )
      } else if (textSearch !== '' && vegDropdown !== '' && priceDropdown !== '') {
        return (
          Object.values(food)[1].toLowerCase().includes(textSearch.toLowerCase()) &&
          Object.values(food)[2] === (vegDropdown) &&
          Object.values(food)[3] === (priceDropdown)
        )
      } else if (textSearch !== '' && (vegDropdown !== '' || priceDropdown !== '')) {
        return (
          Object.values(food)[1].toLowerCase().includes(textSearch.toLowerCase()) &&
          (Object.values(food)[2] === (vegDropdown) ||
          Object.values(food)[3] === (priceDropdown))
        )
      } else if (textSearch === '' && vegDropdown !== '' && priceDropdown !== '') {
        return (
          Object.values(food)[2] === (vegDropdown) &&
          Object.values(food)[3] === (priceDropdown)
        )
      } else if (textSearch === '' && (vegDropdown !== '' || priceDropdown !== '')) {
        return (
          Object.values(food)[2] === (vegDropdown) ||
          Object.values(food)[3] === (priceDropdown)
        )
      } else {
        return food
      }
    })
    props.setSearchedFood(newSearch)
    if (!newSearch.length) {
      props.setNoResult(true)
    } else {
      props.setNoResult(false)
    }
  }


  // Clear search input:
  const clearSearch = (event) => {
    event.preventDefault()
    props.setSearchedFood([])
    setTextSearch('')
    setPriceDropdown('')
    setVegDropdown('')
    props.setNoResult(false)
    props.paginate(1)
  }

  return (
    <section className="search container flex">
      <form className="search__form">
        <div className="search__filter">
          <input className="search__input" type="text" placeholder="Find your favorites" name="text-search" autoComplete="off" value={textSearch} onChange={(event) => {setTextSearch(event.target.value)
            console.log(event.target.value)
          }} />
          <div className="search__dropdown">
            <select className="search__options" name="veg-dropdown" value={vegDropdown} onChange={(event) => {setVegDropdown(event.target.value)}} >
              <option disabled value=''>Options</option>
              <option value='no'>Non-veg</option>
              <option value='yes'>Vegetarian</option>
            </select>
            <select className="search__options" name='price-dropdown' value={priceDropdown} onChange={(event) => {setPriceDropdown(event.target.value)}} >
              <option disabled value=''>Prices</option>
              <option value='$'>$</option>
              <option value='$$'>$$</option>
              <option value='$$$'>$$$</option>
            </select>
          </div>
        </div>
        <div className="search__buttons">
          {(textSearch || priceDropdown || vegDropdown) !== '' && 
            <button className="btn clear-btn" onClick={clearSearch}><MdClear /></button>
          }
          <button className="btn search-btn" onClick={handleSearch}><HiSearch /></button>
        </div>
      </form>
    </section>
  );
}
