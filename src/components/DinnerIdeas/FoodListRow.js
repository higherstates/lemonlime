import React, { useState } from 'react';
import Axios from 'axios';
import { FaSeedling } from "react-icons/fa"


export default function FoodListRow(props) {
    // Edit food name:
    const [editBtn, setEditBtn] = useState(false)
    const handleEdit = () => {
        setEditBtn(!editBtn)
    }

    // Update Food Name:
    const [newFoodName, setNewFoodName] = useState('')
    const updateFoodName = (id) => {
        if (newFoodName) {
            Axios.put("https://lemonlime-project.herokuapp.com/update", {
                id: id,
                newFoodName: newFoodName,
            })
            .then(() => {
                props.setSearchedFood(props.searchedFood.map((val) => {
                    return (
                        val._id === id ? 
                        {
                            _id: id,
                            foodName: newFoodName,
                            isVegetarian: props.isVegetarian, priceRange: props.priceRange, 
                            foodUrl: props.foodUrl,
                        } : val
                    )
                }))
                props.setFoodList(props.foodList.map((val) => {
                    return (
                        val._id === id ? 
                        {
                            _id: id,
                            foodName: newFoodName,
                            isVegetarian: props.isVegetarian, priceRange: props.priceRange, 
                            foodUrl: props.foodUrl,
                        } : val
                    )
                }))
            })
            .catch(error => console.log(`Update name failed: ${error}`))
        }
    }
    

    // Delete food:
    const deleteFood = (id) => {
        const confirm = window.confirm(`This action cannot be undone.\nAre you sure you want to delete this dish?`); 
        if(confirm === true){ 
          Axios.delete(`https://lemonlime-project.herokuapp.com/delete/${id}`)
          .then(() => {
            props.setSearchedFood(props.searchedFood.filter((val) => {
                return val._id !== id
            }))
            props.setFoodList(props.foodList.filter((val) => {
                return val._id !== id
            }))
          })
        }
    }

    return (
        <tr key={props.val._id}>
            <td>
                {props.val.foodName}
                {props.val.isVegetarian === "yes" ? <FaSeedling className="i-veggie" /> : null }
                {editBtn && 
                    <div>
                        <input
                            type="text"
                            name="edit"
                            placeholder="New food name.."
                            size="15"
                            maxLength="60"
                            autoComplete="off"
                            onChange={(event) => {setNewFoodName(event.target.value)}}
                        />
                        <button
                        className="flist-table__btn"
                        onClick={() => updateFoodName(props.val._id)}
                        >
                            ✓
                        </button> 
                    </div>
                }
            </td>
            <td>{props.val.priceRange}</td>
            <td>
                <a 
                    href={props.val.foodUrl} 
                    className="flist-table__btn"
                    target="_blank"
                    rel="noopener noreferrer" 
                >
                    🔗
                </a>
                <button 
                    onClick={handleEdit}
                    className="flist-table__btn"
                >
                    ✏️
                </button>
                <button 
                    className="flist-table__btn"
                    onClick={() => deleteFood(props.val._id)}
                >
                    ❌
                </button>
            </td>
        </tr>
    );
}
