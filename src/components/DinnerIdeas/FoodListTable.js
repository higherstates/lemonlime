import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { FaSeedling } from "react-icons/fa"


export default function FoodListTable(props) {
    
    //   Edit food name:
    const [editBtn, setEditBtn] = useState(false)
    const handleEdit = () => {
        setEditBtn(current => !current)
    }
    
    useEffect(() => {
        // console.log(editBtn);
    }, [editBtn]);
    

    // Update Food Name:
    const [newFoodName, setNewFoodName] = useState('')
    const updateFood = (id) => {
    if (newFoodName) {
        Axios.put("http://localhost:3001/update", {
        id: id,
        newFoodName: newFoodName,
        })
        .catch(error => console.log(`The error is: ${error}`))
    }
    }


    return (
        <tr key={props.val.id}>
            <td>
                {props.val.foodName}
                {props.val.isVegetarian ? <FaSeedling className="i-veggie" /> : null }
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
                        className="flist__table--btn"
                        onClick={() => updateFood(props.val._id)}
                        >
                            ✓
                        </button> 
                    </div>
                }
            </td>
            <td>{props.val.priceRange}</td>
            <td>
                <button 
                    onClick={handleEdit}
                    className="flist__table--btn"
                >
                    ✏️
                </button>
                <button 
                    className="flist__table--btn"
                    onClick={() => props.deleteFood(props.val._id)}
                >
                    ❌
                </button>
            </td>
        </tr>
    );
}
