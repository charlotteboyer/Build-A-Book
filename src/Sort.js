import { useState } from "react";

const Sort = (props ) => {

    const { sortData } = props

    const [filterChoice, setFilterChoice] = useState("");

    //the onChange function takes the value and sets the state with it 
    const onChange = (event) => {
        console.log(event.target.value)
        setFilterChoice(event.target.value)
        sortData(filterChoice)
    }

    // used radio buttons because when using a drop down menu or buttons the value would only be registered on the second click event not the first 
    
    return (
        <form onChange={onChange} className="radioButtons">
            <label htmlFor="sort" className="sr-only">Sort</label>
            sort a-z<input type="radio" value="alphabet" name="radio"/>
            sort by date<input type="radio" value="date" name="radio"/> 
        </form>
    )



}


export default Sort 