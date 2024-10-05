import { useState,useEffect } from "react";
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
  */useEffect(() => {
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

  const filterFunction = item.filter((country) => country.name.common.toLowerCase().includes(filterItem.toLowerCase()));
    
return ( 
    <div style={{
        display:"flex",
        flexDirection:"column",
        padding:"50px",
        justifyContent:"center",
        alignItems:"center",    
    }} >


        <input 
        type ="text" style={{
            width:"500px",height:"20px"
            }} 
            value={filterItem}
            placeholder="Search for Countries"
            onChange={(e)=>setFilterItem(e.target.value)} ></input>   




        <div className="countryCard" style={{
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            margin:"10px",
           

        }}>
        
        
            {filterFunction.map((country) =>{
                
                    return (
                <CardImage
                name={country.name.common}
                alt={`Flag of ${country.name.common}`} 
                image={country.flags.png}
                key={country.ccn3}
                />
               )   
            
            })}
        </div>
        </div>
    
)
}

export default CardContainer;
