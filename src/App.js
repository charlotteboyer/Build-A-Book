import './App.css';
import { useState, useEffect } from 'react'; 
import Results from './Results';
import Sort from './Sort';

function App() {

  const [ query, setQuery ] = useState("");

  const [ search, setSearch ] =useState("");

  const [ data, setData ] = useState([]);

  const [ loaded, setLoaded ] = useState( true )

  const [ sortedData, setSortedData] = useState ([])
 
  useEffect( () => {

    fetch(`http://openlibrary.org/search.json?q=${search}`)
      .then( response => response.json())
      .then( (data) => {
        
        setData(data.docs.filter((obj) => obj.publish_date && obj.isbn && obj.author_name));
        setLoaded(false);
      })

    }, [search])
  
  const sortData =  (filterChoice) => {

      const copyOfData = [...data];

      const sortedData =  copyOfData.sort((a,b) => {
        if (filterChoice === "alphabet") {
            return a.title > b.title ? 1 : -1
          }
        else if (filterChoice === "date") {
          return b.publish_year[0] < a.publish_year[0]
        } 
    })
      setData(sortedData)
  }

  
  return (
    <div className="App">
      <h1>Build A Book: Book Search</h1>
      <form className="search">
        <label className="sr-only">Enter title</label>
        <input 
        type="text" 
        placeholder="enter book title"
        value={query}
        onChange={(e) => {setQuery(e.target.value)}}/>
        <button
        type="button"
        onClick={() => setSearch(query)}>submit</button>
      </form>
      <Sort sortData={sortData}/>

      <Results loaded={loaded} data={data}/>

    </div>
    ) 
}

export default App;


//pseudocose 

//create search form where searching a title returns book information from API 
//create filtering form to then filter through those search items 
//