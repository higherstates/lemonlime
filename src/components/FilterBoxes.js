import { HiSearch } from "react-icons/hi"
import { MdClear } from "react-icons/md"
import './FilterSearch.css'

export default function FilterBoxes(props) {
  return (
    <section className="search container flex">
      <h2>Search for a dish</h2>
      <form className="search__form">
        <div className="search__groups">
          {/* <label htmlFor="text-search">Search a dish: </label> */}
          <input className="search__controls" type="text" placeholder="Search by food name" name="text-search" autoComplete="off" value={props.textSearch} onChange={(event) => {props.setTextSearch(event.target.value)
            console.log(event.target.value)
          }} />
        </div>
        <div className="search__groups">
          {/* <label htmlFor='price-dropdown'>Filter by price range: </label> */}
          <select className="search__controls" name='price-dropdown' value={props.priceDropdown} onChange={(event) => {props.setPriceDropdown(event.target.value)}} >
            <option value=''>All prices</option>
            <option value='$'>$</option>
            <option value='$$'>$$</option>
            <option value='$$$'>$$$</option>
          </select>
        </div>
        <div className="search__groups">
          {/* <label htmlFor="veg-dropdown">Option: </label> */}
          <select className="search__controls" name="veg-dropdown" value={props.vegDropdown} onChange={(event) => {props.setVegDropdown(event.target.value)}} >
            <option value=''>All options</option>
            <option value='no'>Non-veg</option>
            <option value='yes'>Vegetarian</option>
          </select>
        </div>
        <button className="btn" onClick={props.handleSearch}><HiSearch /></button>
        <button className="btn" onClick={props.clearSearch}><MdClear /></button>
      </form>
    </section>
  );
}
