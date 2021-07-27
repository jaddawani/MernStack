import React from 'react'
import {useState} from 'react'

import { Link } from '@reach/router';   


const Search = (props) => {


    const [id, setId] = useState(0);
    const [category, setCategory] = useState("people");




    return (


            <form className="searchBar" >

<h1>Search for:</h1>

<select value={category} onChange={e => setCategory(e.target.value)}>
    <option value="people">People</option>
    <option value="planets">Planets</option>
</select>

<h1>ID:</h1>

<input type="number" value={id} onChange={e => setId(e.target.value)} />
<Link to={"/" + category + "/" + id}> Search</Link>



            </form>
       
    );
}

export default Search
