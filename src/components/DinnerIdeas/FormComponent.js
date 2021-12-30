export default function FormComponent(props) {
    return (
        <div className="dinner container">
            <h1 className="dinner__title">Dinner Ideas</h1>
            <form className="dinner__form" onSubmit={props.addToList}>
                <div className="dinner__form-group">
                    <label htmlFor="name">
                        Food name:
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ex: 
                        Pasta Carbonara"
                        minLength={3}
                        maxLength={60}
                        autoComplete="off"
                        value={props.foodName}
                        onChange={(event) => {props.setFoodName(event.target.value)}}
                        required
                    />
                </div>
                <div className="dinner__form-group">
                    <label htmlFor="vegetarian">
                        Is this dish Vegetarian?
                    </label>
                    <select
                        name="vegetarian"
                        value={props.isVegetarian}
                        onChange={(event) => {props.setIsVegetarian(event.target.value)}}
                    >
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>
                <div className="dinner__form-group">
                    <label htmlFor="price">
                        Price range:
                    </label>
                    <select
                        name="price"
                        value={props.priceRange}
                        onChange={(event) => {props.setPriceRange(event.target.value)}}
                    >
                        <option value="$">$</option>
                        <option value="$$">$$</option>
                        <option value="$$$">$$$</option>
                    </select>
                </div>
                <div className="dinner__form-group">
                    <label htmlFor="url">Recipe or Image URL:</label>
                    <input
                        type="url"
                        name="url"
                        value={props.foodUrl}
                        placeholder="https://example.com"
                        pattern="https://.*"
                        onChange={(event) => {props.setFoodUrl(event.target.value)}}
                     />
                </div>
                <br />
                <button 
                    type="submit"
                    className="dinner__form-btn" 
                >
                    Add to list
                </button>

            </form>
          
        </div>
    )
}