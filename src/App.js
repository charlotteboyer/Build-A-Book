import './App.css';
import { useState, useEffect } from 'react'; 

function App() {

  const [ query, setQuery ] = useState("");

  const [ search, setSearch ] =useState("");

  const [ dataObj, setDataObj ] = useState([]);

  const [ loaded, setLoaded ] = useState( true )
 
  useEffect( () => {

    fetch(`http://openlibrary.org/search.json?q=${search}`)
      .then( response => response.json())
      .then( (data) => {
        setDataObj(data);
        setLoaded(false);
      })
    
    
    }, [search])


  console.log(dataObj)


  return !loaded ? 
  (
    <div className="App">
      <h1>Build A Book: Book Search</h1>
      <form >
        <input 
        type="text" 
        value={query}
        onChange={(e) => {setQuery(e.target.value)}}/>
        <button
        type="button"
        onClick={() => setSearch(query)}>submit</button>
      </form>


      <ul>
      {
        dataObj.docs.map((res) => {
          return (
            <li key={res.key}>
              <h2>{res.title}</h2>
              <p>{res.author_name}</p>
            </li>
          )})
      }
        
      
      </ul>
      



    </div>
    ) : (
      <div>
        <p>Loading...</p>
      </div>
    );
}

export default App;
