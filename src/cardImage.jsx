/*function CardImage(
    {name , alt,image,key}
) {
    return (
        <div  style={{
            
            padding:"10px",

        }}>
        
        <div  className="countryCard"
        style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            width:"150px",
            height:"150px",
            borderRadius:"5px",
            border:"1px solid black",
            padding:"5px",

        }}>
        <img style={{
            height:"100px",
            width:"100px",
        }} src={image}  alt={alt} key={key}
          />

        <p>{name}</p>
        </div>
        
        </div>
    )
}*/
function CardImage({ name, image, alt }) {
    return (
      <div style={{
        padding: "10px",
      }}>
        <div className="countryCard"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "150px",
            height: "200px",
            borderRadius: "5px",
            border: "1px solid black",
            padding: "5px",
          }}>
          <img 
            src={image}
            alt={alt}
            style={{ height: "100px", width: "100px" }}
          />
          <p>{name}</p>
        </div>
      </div>
    );
  }

export default CardImage;