const Results = (props) => {

    const { loaded, data } = props 


    return !loaded ?(

    <ul>
        {data.map((res) => {
            return (
                <li key={res.key}>
                    <h2>{res.title}</h2>
                    <p>{res.author_name.join(",")}</p>
                    <p>{res.publish_date[0]}</p>
                    <div>
                        <img src={`http://covers.openlibrary.org/b/isbn/${res.isbn[0]}-M.jpg`} alt="" />
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