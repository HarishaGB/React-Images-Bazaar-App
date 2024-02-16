import React, {useState, useEffect} from "react";
import axios from "axios";

// console.log("ImageSearch.js", process.env.REACT_APP);

const ImageSearch = ({setImageList}) =>{

    const [searchQuery, setSearchQuery] = useState('');

    useEffect(()=>{
        handleSearch()
    },[])
    

    function handleSearch(e){
        // if(e){
        //     e.preventDefault();
        // }
        // or write 
        e && e.preventDefault();
        axios.get("https://api.unsplash.com/search/photos", 
        {
            headers: {
                "Accept-Version": "v1",
                Authorization : "Client-ID BwgzXIdNbwmvz1kD7PpgXWP0xcckG_sudaNUNvN6yTM"
                // Authorization : `Client-ID ${process.env.REACT_APP}` 
            },
            params: {
                query: searchQuery || "random"
            }
        })
        .then((Response) =>{
            console.log(Response.data);
            setImageList(Response.data.results)
        })
        .catch((error) => {
            console.log(error);
        })

    }
    return(
        <div>
            <form onSubmit={handleSearch}>
                <input type="search" placeholder="Enter Search"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default ImageSearch;