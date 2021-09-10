const Results = (props) => {

    const { loaded, data } = props 

    return !loaded ?(

    <ul>
        {data.map((res) => {
            return (
                <li key={res.key} tabIndex="0">
                    <h2>{res.title}</h2>
                    <div className="container">
                        <div className="photo">
                            <img src={`http://covers.openlibrary.org/b/isbn/${res.isbn[0]}-M.jpg`} alt={`book cover of ${res.title}`} />
                        </div>
                        <div className="info">
                            <p>By: {res.author_name.join(", ")}</p>
                            <p>{res.publish_year[0]}</p>   
                        </div>
                    </div>
                </li>
            )
        })
        }
    </ul>

    ) : (
        <div>
            <p>Loading...</p>
        </div>
    );

}


export default Results 