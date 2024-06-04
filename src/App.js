import react from "react"
import reactDOM from "react-dom/client"
import SearchBar from './components/SearchBar'
import ChatList from './components/ChatList'

const root=reactDOM.createRoot(document.getElementById("root"));
function App()
{
    return(
        <div style={{backgroundColor:"gray",height:"650px",width:"600px",margin:"250px",marginLeft:"300px", position:"absolute"}}>
        <ChatList></ChatList>
        
          </div>
    );
}
export default App;