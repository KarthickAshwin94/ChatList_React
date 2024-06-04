import SearchBar from './SearchBar'
import Chats from './Chats'
function ChatList()
{
    return(
        <div style={{backgroundColor:"#C7C9CA",height:"550px",width:"500px",borderRadius:"10px", margin:"50px", marginTop:"50px",position:"absolute"}}>
        <SearchBar></SearchBar>
        <Chats></Chats>
        </div>
    );

}
export default ChatList;