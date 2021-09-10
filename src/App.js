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

  // radioRef used to clear the radio buttons after resubmitting new title without having to refresh the page 

  const radioRef = useRef();

  // API call to openlibrary
  //filtering publish year, isbn, author name so that only results with these options appear otherwise the map did not work - results came back undefined 
  useEffect( () => {

    fetch(`https://openlibrary.org/search.json?q=${search}`)
      .then( response => response.json())
      .then( (data) => {
        
        setData(data.docs.filter((obj) => obj.publish_year && obj.isbn && obj.author_name));
        setLoaded(false);
        radioRef.current.checked = false;
      })

    }, [search])

  
  return (
    <div className="App wrapper">
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

//create search form where searching a title returns book information from open libary API 
  //do this by making an api call through fetch, returning only if a title query has been submitted 
    //create an initial filter in fetch to filter out books that do not have the requirements 
//create filtering form to then filter through those search items alphabetically and by date
  //assign radio buttons values 
  //register those values 
  //create an sort function with an if else statement, depending on which value is selected, the array will sort itself accordingly 
