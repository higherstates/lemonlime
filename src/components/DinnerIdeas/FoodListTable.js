import FoodListRow from './FoodListRow'
import Pagination from "../Pagination/Pagination"


export default function FoodListTable(props) {
    return (
        <div className="flist container">
            <table className="flist-table">
                <thead>
                    <tr className="flist-">
                        <th className="flist-table__name">
                            Food name
                            <span 
                                aria-label="Please only edit/delete your own inserted ideas" data-balloon-pos="up"
                                className="i__btn tooltip-green  tooltip-big-text"
                            >
                                !
                            </span>
                        </th>
                        <th className="flist-table__price">Price</th>
                        <th className="flist-table__actions">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.searchedFood.length > 0 ? props.currentSearchedFood.map((val) => {
                        return (
                            <FoodListRow
                                val={val}
                                key={val._id} 
                                foodName={val.foodName}
                                isVegetarian={val.isVegetarian}
                                priceRange={val.priceRange}
                                foodUrl={val.foodUrl}
                                foodList={props.foodList}
                                setFoodList={props.setFoodList}
                                searchedFood={props.searchedFood}
                                setSearchedFood={props.setSearchedFood}
                                currentSearchedFood={props.currentSearchedFood}
                            />    
                        )
                    }) : props.currentFood.map((val) => {
                        return (
                            <FoodListRow
                                val={val}
                                key={val._id}
                                foodName={val.foodName}
                                isVegetarian={val.isVegetarian}
                                priceRange={val.priceRange}
                                foodUrl={val.foodUrl}
                                foodList={props.foodList}
                                setFoodList={props.setFoodList}
                                searchedFood={props.searchedFood}
                                setSearchedFood={props.setSearchedFood}
                                currentSearchedFood={props.currentSearchedFood}
                            />
                        )
                        })
                    }
                </tbody>
            </table>
            {props.searchedFood.length > 0 ? 
                <Pagination foodPerPage={props.foodPerPage} totalFood={props.totalSearchedFood} paginate={props.paginate} currentPage={props.currentPage} />
                :<Pagination foodPerPage={props.foodPerPage} totalFood={props.totalFood} paginate={props.paginate} currentPage={props.currentPage} />
            }
        </div>
    )
}