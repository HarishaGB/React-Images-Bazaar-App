import React, {useState} from "react";
import axios from "axios";

const ImageSearch = () =>{

    const [searchQuery, setSearchQuery] = useState('');

    function handleSearch(e){
        e.preventDefault();
        axios.get("https://api.unsplash.com/search/photos", 
        {
            Headers: {
                "Accept-Version": "v1",
                "Authorization" : "Client-ID BwgzXIdNbwmvz1kD7PpgXWP0xcckG_sudaNUNvN6yTM"
            },
            params: {
                query: searchQuery
            }
        })
        .then((Response) =>{
            console.log(Response);
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