const Sort = (props ) => {

    const { setData, data, radioRef } = props

    //the onChange function that takes the radio button value and applies it to the copy of Data  array which then reorganizes this array alphabetically or by date 
    
    const onChange = (event) => {
        const copyOfData = [...data];

        const sortedData = copyOfData.sort(function(a, b){
            if (event.target.value === "alphabet") {
                return a.title > b.title ? 1 : -1
            }
            else if (event.target.value === "date") {
                return b.publish_year[0] < a.publish_year[0]
            }
            return null
        })
        setData(sortedData)
    }

    
    return (
        <form onChange={onChange} className="radioButtons">
            <label htmlFor="sort" className="sr-only">Sort</label>
            sort a-z<input type="radio" value="alphabet" name="radio" ref={radioRef}/>
            sort by date<input type="radio" value="date" name="radio" ref={radioRef}/>
        </form>
    )



}


export default Sort 