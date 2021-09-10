import './App.css';
import { useState, useEffect } from 'react'; 
import Results from './Results';
import Sort from './Sort';
import { useRef } from 'react';

function App() {

  const [ query, setQuery ] = useState("");

  const [ search, setSearch ] =useState("");

  const [ data, setData ] = useState([]);

  const [ loaded, setLoaded ] = useState( true )

  const radioRef = useRef();


  useEffect( () => {

    fetch(`http://openlibrary.org/search.json?q=${search}`)
      .then( response => response.json())
      .then( (data) => {
        
        setData(data.docs.filter((obj) => obj.publish_year && obj.isbn && obj.author_name));
        setLoaded(false);
        radioRef.current.checked = false;
      })

    }, [search])

  
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
      <Sort setData={setData} data={data} radioRef={radioRef}/>

      <Results loaded={loaded} data={data}/>

    </div>
    ) 
}

export default App;


//pseudocose 

//create search form where searching a title returns book information from API 
//create filtering form to then filter through those search items 
//