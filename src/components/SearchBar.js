
function SearchBar()
{
   return(
    <div style={{display:"flex", justifyContent:"center",alignItems:"center",width:"80%",padding:"15px",backgroundColor:"white",margin:"35px",marginTop:"20px",position:"relative",borderRadius:"5px"}}>
         <input type="text" placeholder="Search..."style={{border:"0",width:"100%"}}></input>
    <i class="fa-solid fa-magnifying-glass" ></i>
    </div>
   )

}


export default SearchBar;