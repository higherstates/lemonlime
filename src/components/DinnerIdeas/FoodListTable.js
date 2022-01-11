// import React, { useState, useEffect } from "react"
// import Axios from "axios"
import FoodListRow from './FoodListRow'


export default function FoodListTable(props) {
    return (
        <div className="flist container">
            {/* <h1 className="flist__title">
                Food List
            </h1> */}
            <table className="flist__table">
                <thead>
                    <tr>
                        <th className="flist__table--name">
                            Food
                            <span 
                                aria-label="Please only edit/delete your own inserted ideas" data-balloon-pos="up"
                                className="i__btn tooltip-green  tooltip-big-text"
                            >
                                !
                            </span>
                        </th>
                        <th className="flist__table--price">Price</th>
                        <th className="flist__table--actions">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.searchedFood.length > 0 ? props.searchedFood.map((val, key) => {
                        return (
                            <FoodListRow
                                val={val}
                                key={key} 
                                foodName={val.foodName}
                                isVegetarian={val.isVegetarian}
                                priceRange={val.priceRange}
                                foodUrl={val.foodUrl}
                            />    
                        )
                    }) : props.foodList.map((val, key) => {
                        return (
                            <FoodListRow
                                val={val}
                                key={key} 
                                foodName={val.foodName}
                                isVegetarian={val.isVegetarian}
                                priceRange={val.priceRange}
                                foodUrl={val.foodUrl}
                            />    
                        )
                        })
                    
                    }
                    {/* {props.searchedFood.length < 0 ?  props.foodList.map((val, key) => {
                    return (
                        <FoodListRow
                            val={val}
                            key={key} 
                            foodName={val.foodName}
                            isVegetarian={val.isVegetarian}
                            priceRange={val.priceRange}
                            foodUrl={val.foodUrl}
                        />    
                    )
                    }) : null} */}
                </tbody>
            </table>
        </div>
    )
}