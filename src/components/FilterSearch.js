// import React, {useState, useEffect} from 'react';
// import './FilterSearch.css'
// import FilterBoxes from "./FilterBoxes"
// import { FaSeedling } from "react-icons/fa"

// export default function FilterSearch(props) {
//   // const [searchedFood, setSearchedFood] = useState([])
//   // const [textSearch, setTextSearch] = useState('')
//   // const [priceDropdown, setPriceDropdown] = useState('')
//   // const [vegDropdown, setVegDropdown] = useState('')

//   useEffect(() => {
//     setSearchedFood(props.foodList)
//     // console.log(searchedFood)
//   }, [props.foodList]);


//   // const newSearch = props.foodList.filter((value) => {
//   //   if (textSearch === '' && priceDropdown === '' && vegDropdown === '') {
//   //     return (
//   //       value.foodName
//   //       && value.priceRange
//   //       && value.isVegetarian
//   //     )
//   //   } else if (textSearch !== '' && priceDropdown === '' && vegDropdown === '') {
//   //     return value.foodName.toLowerCase().includes(textSearch.toLowerCase())
//   //   } else if (textSearch === '' && priceDropdown !== '' && vegDropdown === '') {
//   //     return (
//   //       value.priceRange === priceDropdown
//   //       )
//   //   } else if (textSearch === '' && priceDropdown === '' && vegDropdown !== '') {
//   //     return (
//   //       value.isVegetarian === vegDropdown
//   //       )
//   //   } else if (textSearch !== '' && priceDropdown !== '' && vegDropdown !== '') {
//   //       return (
//   //         value.foodName.toLowerCase().includes(textSearch.toLowerCase())
//   //         && value.priceRange === priceDropdown
//   //         && value.isVegetarian === vegDropdown
//   //       )
//   //   }
//   // })


//   // const handleSearch = (event) => {
//   //   event.preventDefault()
//   //   if (textSearch === '' && priceDropdown !== '' && vegDropdown !== '') {
//   //     setSearchedFood(newSearch)
//   //   } else if (textSearch === '' && (priceDropdown !== '' || vegDropdown !== '')) {
//   //     setSearchedFood(newSearch)
//   //   } else if (textSearch !== '') {
//   //     setSearchedFood(newSearch)
//   //   }
//   // }

//   // const clearSearch = (event) => {
//   //   event.preventDefault()
//   //   setSearchedFood(props.foodList)
//   //   setTextSearch('')
//   //   setPriceDropdown('')
//   //   setVegDropdown('')
//   // }


//   return (
//     <section className="search">
//       {/* <FilterBoxes textSearch={textSearch} setTextSearch={setTextSearch} priceDropdown={priceDropdown} setPriceDropdown={setPriceDropdown} vegDropdown={vegDropdown} setVegDropdown={setVegDropdown} handleSearch={handleSearch} clearSearch={clearSearch} /> */}
//       {/* {searchedFood.length > 0 &&  */}
//         <div className="flist container">
//           <table className="flist__table">
//             <thead>
//                 <tr>
//                     <th className="flist__table--name">
//                         Food
//                         <span
//                             aria-label="Please only edit/delete your own inserted ideas" data-balloon-pos="up"
//                             className="i__btn tooltip-green  tooltip-big-text"
//                             >
//                             !
//                         </span>
//                     </th>
//                     <th className="flist__table--price">Price</th>
//                     <th className="flist__table--actions">
//                         Action
//                     </th>
//                 </tr>
//             </thead>
//             <tbody>
//               {searchedFood.map((val, key) => {
//                 return (
//                   <tr key={key}>
//                     <td>{val.foodName} {val.isVegetarian === "yes" ? <FaSeedling className="i-veggie" /> : null }</td>
//                     <td>{val.priceRange}</td>
//                     <td>
//                       <a href={val.foodUrl}
//                           className="flist__table--btn"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                       >
//                           🔗
//                       </a>
//                       <button
//                           // onClick={props.val.handleEdit}
//                           className="flist__table--btn"
//                       >
//                           ✏️
//                       </button>
//                       <button
//                           className="flist__table--btn"
//                           // onClick={() => props.val.deleteFood(props.val._id)}
//                       >
//                           ❌
//                       </button>
//                     </td>
//                   </tr>
//                 )
//               })}
//             </tbody>
//           </table>
//         </div>
//       {/* } */}
//     </section>
//   )
// }
