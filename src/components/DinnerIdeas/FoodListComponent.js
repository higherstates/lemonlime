import FoodListTable from './FoodListTable'

export default function FoodListComponent(props) {
    return (
        <div className="flist container">
            <h1 className="flist__title">
                Food List
            </h1>
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
                    {props.foodList.length > 0 && props.foodList.map((val, key) => {
                        return (
                            <FoodListTable
                                key={key} 
                                val={val}
                                deleteFood={props.deleteFood}
                                updateFood={props.updateFood}
                                foodUrl={props.foodUrl}
                            />    
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}