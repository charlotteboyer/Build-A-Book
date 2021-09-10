Technical questions
1.	How long did you spend on the coding assignment? 
    I spent the better part of the last three days building this app and it took a lot of work. Luckily I was up for the challenge. I've been wanting to work more with React and one of my top skills is researching and outsourcing problems that I encounter. I'm still fairly new to React, and the API's I've worked with in the past were much more accessible and streamlined. Though it took me a long time, I'm grateful for it. I feel much more confident in my skills and I've gained a deeper understanding of React in the process. Practice makes perfect! 
a.	What would you add to your solution if you had more time?
    If I had more time I would add the below features: 
    1) to sort alphabetically and by date in ascending and descending order 
    2) try to figure out a solution to the issue that not all ISBN numbers lead to cover art. Either only show books with cover art, or present a message in the place of the missing cover art. 
    3) Adding a feature where you hover over the list-item and get a larger modal of the list item. 
2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
    Recently I've been learning a lot about class components in React. In my program we only use functional components though class components do still exist "in the wild" and a lot of resources only have solutions to problems in class components. Functional components even though they first appearing in 2018 are much more clean and readable than their predecessors. The best part about functional components are hooks! I'm a big fan of both useState and UseEffect but here is a example of me using useEffect:
        useEffect( () => {

            fetch(`http://openlibrary.org/search.json?q=${search}`)
            .then( response => response.json())
            .then( (data) => {
                
                setData(data.docs.filter((obj) => obj.publish_year && obj.isbn && obj.author_name));
                setLoaded(false);
                radioRef.current.checked = false;
            })

    }, [search]) 

3.	How would you track down a performance issue in production? Have you ever had to do this?
    Absolutley I have had to do this before. Both in building my own projects and doing code-alongs in class we often had to debug each others code. The easiest way to do this is to start in the console log. From there we can see what the issue might be whether its in regards to a certain element or the API. From that point you can find the particular area with a performance issue in the code and see what the problem might be. If I cannot resolve the error on my own, I'll either do my own research and find out what could be causing it or reach out for help from a mentor or colleague. 
4.	How would you improve the API that you just used?
    a.	There were sometimes over 100 ISBNs per book title, not all the ISBNS led to cover art. I think the photo of the book cover should be accessible through the API or there should be a seperate ISBN listed with cover art listed as a seperate key:value pair. 
    b. I will also note that I attempted to use other methods to get cover art photos including the ISBN, OCLC, LCCN, OLID and ID. None were able to produce cover art for every title that appeared in the search. A seperate cover-ISBN would be useful in this case. 
    c.	I ended up using the publishing year instead of using the dates that had months and days listed. This was because the format was messy and not reliable from book to book. Ideally the dates should be listed in the ISO8601 format you can view here: https://www.w3.org/TR/
    NOTE-datetime so that they are easily accessible and sortable. 
    d. It would be cool if there was a synopsis about the book that you could access through the api and display on the page. 
5.	Please describe yourself using correctly formatted JSON.
    {
        "Name": "charlotte",
        "webDeveloper" : true, 
            "physicalAttributes" : {
                "hairColour" : "red",
                "wearsGlasses" : true, 
                "isTall" : false,
            }
            "favorites" : {
                "book": "vernon_subutex",
                "movie": "", 
                "band" : "coldplay",

            }
            "pet": {
                "hasDog": true, 
                "hasCat" : false, 
                "dogsName" : "Larry",
                "age": "8 months"
        }
    }    
        

    
