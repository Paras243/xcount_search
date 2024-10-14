/*import { useState,useEffect } from "react";
import CardImage from "./cardImage"
const CardContainer = () => {
//const endpoint = "https://restcountries.com/v3.1/all";
const [item , setItem] = useState([]);
const [filterItem , setFilterItem] = useState('');

/*const fetching_data = async ()=>{
    try{
        const response = await fetch("https://restcountries.com/v3.1/all");
       
        const data = await response.json();
        console.log(data)
        setItem(data);
        }catch(error){
            console.error("Error occurs during fetching ",error);
        }
    }*/

/*useEffect(() => {
fetch(endpoint)
.then(response => response.json)
.then(data => setItem(data))
.catch(error => console.error("Error fetching countries:",error));
async(){
    let data = await fetching_data();
    setItem(data);
}
},[]);*/
/*useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetch("https://restcountries.com/v3.1/all");
         let res = await data.json();
        setItem(res); 
      } catch (error) {
        console.error("Error fetching countries:", error); 
      }
    };
  
    fetchData();
  }, []); 
  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch("https://restcountries.com/v3.1/all");
          if (response.ok) { 
            const data = await response.json();
            setItem(data); 
          } else {
            console.error("Failed to fetch countries. Status:", response.status); 
          }
        } catch (error) {
          console.error("Error fetching countries:", error); 
        }
      };
  
      fetchData(); 
    }, []);

  //const filterFunction = item.filter((country) => country.name.common.toLowerCase().includes(filterItem.toLowerCase()));
  const filterFunction = item.filter((country) =>
    country?.name?.common?.toLowerCase().includes(filterItem.toLowerCase())
  );
  
    
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "50px", justifyContent: "center", alignItems: "center" }}>
      <input 
        type="text"
        className="search-input"
        style={{ width: "500px", height: "20px" }} 
        value={filterItem}
        placeholder="Search for Countries"
        onChange={(e) => setFilterItem(e.target.value)} 
      />
  
      <div className="countryCard" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", margin: "10px" }}>
        {filterFunction.length > 0 ? (
          filterFunction.map((country) => (
            <CardImage
              name={country.name.common}
              alt={`Flag of ${country.name.common}`} 
              image={country.flags.png}
              key={country.ccn3}
            />
          ))
        ) : (
          <p>No matching countries found</p>
        )}
      </div>
    </div>
  );
  
}

export default CardContainer;*/
import { useState, useEffect } from "react";
import CardImage from "./cardImage";

const CardContainer = () => {
  const [countries, setCountries] = useState([]); // To store country data
  const [searchTerm, setSearchTerm] = useState(''); // To store search input

  // Fetch country data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (response.ok) {
          const data = await response.json();
          setCountries(data); // Set country data to state
        } else {
          console.error("Failed to fetch countries. Status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    
    fetchData();
  }, []);

  // Filter countries based on the search term
  const filteredCountries = countries.filter((country) => 
    country?.name?.common?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      padding: "50px",
      justifyContent: "center",
      alignItems: "center",
    }}>
      
      {/* Search Input */}
      <input
        type="text"
        className="search-input"
        style={{ width: "500px", height: "20px" }}
        value={searchTerm}
        placeholder="Search for countries..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Country Cards */}
      <div className="countryCard" style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
      }}>
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <CardImage
              key={country.ccn3}
              name={country.name.common}
              image={country.flags.png}
              alt={`Flag of ${country.name.common}`}
            />
          ))
        ) : (
          <p>No matching countries found</p>
        )}
      </div>
    </div>
  );
};

export default CardContainer;
