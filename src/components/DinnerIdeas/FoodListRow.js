import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { FaSeedling } from "react-icons/fa"


export default function FoodListRow(props) {
    // Edit food name:
    const [editBtn, setEditBtn] = useState(false)
    const handleEdit = () => {
        setEditBtn(current => !current)
    }
    // Display Edit button
    useEffect(() => {
        // console.log(editBtn);
    }, [editBtn]);
    


    // Update Food Name:
    const [newFoodName, setNewFoodName] = useState('')
    const updateFoodName = (id) => {
        if (newFoodName) {
            Axios.put("https://lemonlime-project.herokuapp.com/update", {
                id: id,
                newFoodName: newFoodName,
            })
            .catch(error => console.log(`The error is: ${error}`))
        }
    }
    


    // Delete food:
    const deleteFood = (id) => {
        const confirm = window.confirm(`This action cannot be undone.\nAre you sure you want to delete this dish?`); 
        if(confirm === true){ 
          Axios.delete(`https://lemonlime-project.herokuapp.com/delete/${id}`)
        }
    }


    return (
        <tr key={props.val.id}>
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
                        className="flist__table--btn"
                        onClick={() => updateFoodName(props.val._id)}
                        >
                            ✓
                        </button> 
                    </div>
                }
            </td>
            <td>{props.val.priceRange}</td>
            <td>
                {props.val.foodUrl ? 
                    <a 
                        href={props.val.foodUrl} 
                        className="flist__table--btn"
                        target="_blank"
                        rel="noopener noreferrer" 
                    >
                        🔗
                    </a>
                        : null
                }
                <button 
                    onClick={handleEdit}
                    className="flist__table--btn"
                >
                    ✏️
                </button>
                <button 
                    className="flist__table--btn"
                    onClick={() => deleteFood(props.val._id)}
                >
                    ❌
                </button>
            </td>
        </tr>
    );
}
