import React from 'react'
import axios from 'axios'

const Search = (props) => {
    const {setUrl,setHtml,url,html} = props.props
    const handleInputChange = (e) => {
        setUrl(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault();

        axios.get('http://localhost:5000/scrap', {
            params: { url}
        }).then(response => {
            setHtml(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="searchContent" style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop: '20px'}}>
            <input 
            onChange={(e)=> handleInputChange(e)}
            placeholder="Paste your link here" 
            type="text" 
            name="search" 
            id="search" 
            autoComplete="false"
            required
            style={{outline:'none', fontSize:'18px', padding: '4px', width:'450px', borderRadius:'5px 0px 0px 5px', border: '1px solid gray'}}/>
            <button
            onClick={(e)=> handleSearch(e)}
            style={{outline:'none', fontSize:'20px', padding: '4px', border: 'none', backgroundColor: '#11324D', color:'white', borderRadius:'0px 5px 5px 0px'}}
            >Search
            </button>
        </div>
    )
}

export default Search
