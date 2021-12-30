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
          Axios.delete(`https://lemonlime-project.herokuapp.com/${id}`)
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
                    onClick={() => deleteFood(props.val._id)}
                >
                    ❌
                </button>
            </td>
        </tr>
    );
}
