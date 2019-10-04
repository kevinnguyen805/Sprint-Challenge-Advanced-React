import React from 'react';
import { useInput } from '../hooks/useInput'


const Search = (props) => {

     let soccerPlayers = props.soccerData
     const [handleChange, searchResults, formSubmit, searchTerm] = useInput(soccerPlayers)

     return(
          <div>
               <form onSubmit={formSubmit}>
                    <input 
                         id="search"
                         type="text"
                         name="textfield"
                         value={searchTerm}
                         onChange={handleChange}
                    />
                    <button>Submit</button>
               </form>
               {
                    searchResults.map(item => {
                         return (
                         <div key={item.id}>
                              <p>{item.name}</p>
                              <p>{item.country}</p>
                         </div>
                         )
                    })
               }
     </div>
     )
}

export default Search




{/* 
               {soccerPlayers.map(item => {
                    return(
                         <div key={item.id}>{item.name}</div>
                    )
               })} */}






     // const [searchTerm, setSearchTerm] = useState('');

     // const [searchResults, setSearchResults] = useState([])


     // const handleChange = event => {
     //      setSearchTerm(event.target.value)     
     // }

     // const formSubmit = event => {
     //      event.preventDefault();
     //      const results = soccerPlayers.filter(item => item.name === searchTerm)
     //      setSearchResults(results)
     // }