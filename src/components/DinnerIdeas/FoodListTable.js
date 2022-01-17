import FoodListRow from './FoodListRow'
import Pagination from "../Pagination"


export default function FoodListTable(props) {
    return (
        <div className="flist container">
            <table className="flist__table">
                <thead>
                    <tr>
                        <th className="flist__table--name">
                            Food name
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
                    {props.searchedFood.length > 0 ? props.currentSearchedFood.map((val, key) => {
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
                    }) : props.currentFood.map((val, key) => {
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
                </tbody>
            </table>
            {props.searchedFood.length > 0 ? 
                <Pagination foodPerPage={props.foodPerPage} totalFood={props.totalSearchedFood} paginate={props.paginate} />
                :<Pagination foodPerPage={props.foodPerPage} totalFood={props.totalFood} paginate={props.paginate} />
            }
        </div>
    )
}