import profile1 from '../assets/images/profile-1.jpg';
import profile2 from '../assets/images/profile-2.jpg';
import profile3 from '../assets/images/profile-3.jpg';
import profile4 from '../assets/images/profile-4.jpg';
import profile5 from '../assets/images/profile-5.jpg';
import profile6 from '../assets/images/profile-6.jpg';
function Chats()
{
    return(
        <div style={{display:"flex",flexDirection:"column",margin:"0px",padding:"0px",gap:"20px"}}>
            <div style={{display:"flex",alignItems:"center",width:"80%",padding:"5px",backgroundColor:"white",marginLeft:"40px",position:"relative",borderRadius:"5px",gap:"10px"}}>
                <img src={profile1} alt="profile1" style={{height:"40px",width:"40px",borderRadius:"50px"}}></img>
                <div style={{display:"flex",flexDirection:"column",gap:"0"}}>
                <h1 style={{fontSize:"20px",padding:"0",margin:"0"}}>Jessica Koel</h1>
                <p style={{padding:"0",margin:"0"}}>Hey, Joel, I here to help you out please...</p>
                </div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <p style={{padding:"0",margin:"0"}}>11:26</p>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <div style={{display:"flex",alignItems:"center",width:"80%",padding:"5px",backgroundColor:"white",marginLeft:"40px",position:"relative",borderRadius:"5px",gap:"12px"}}>
                <img src={profile2} alt="profile1" style={{height:"40px",width:"40px",borderRadius:"50px"}}></img>
                <div style={{display:"flex",flexDirection:"column",gap:"0"}}>
                <h1 style={{fontSize:"20px",padding:"0",margin:"0"}}>Komeial Bolger</h1>
                <p style={{padding:"0",margin:"0"}}>I will send you all documents as soon as</p>
                </div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <p style={{padding:"0",margin:"0"}}>12:26</p>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <div style={{display:"flex",alignItems:"center",width:"80%",padding:"5px",backgroundColor:"white",marginLeft:"40px",position:"relative",borderRadius:"5px",gap:"10px"}}>
                <img src={profile3} alt="profile1" style={{height:"40px",width:"40px",borderRadius:"50px"}}></img>
                <div style={{display:"flex",flexDirection:"column",gap:"0"}}>
                <h1 style={{fontSize:"20px",padding:"0",margin:"0"}}>Tammara Suiale</h1>
                <p style={{padding:"0",margin:"0"}}>Are you going to business trip next week</p>
                </div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <p style={{padding:"0",margin:"0"}}>08:26</p>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <div style={{display:"flex",alignItems:"center",width:"80%",padding:"5px",backgroundColor:"white",marginLeft:"40px",position:"relative",borderRadius:"5px",gap:"28px"}}>
                <img src={profile4} alt="profile1" style={{height:"40px",width:"40px",borderRadius:"50px"}}></img>
                <div style={{display:"flex",flexDirection:"column",gap:"0"}}>
                <h1 style={{fontSize:"20px",padding:"0",margin:"0"}}>Sam Nielson</h1>
                <p style={{padding:"0",margin:"0"}}>I suggest to start new business soon</p>
                </div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <p style={{padding:"0",margin:"0"}}>07:16</p>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <div style={{display:"flex",alignItems:"center",width:"80%",padding:"5px",backgroundColor:"white",marginLeft:"40px",position:"relative",borderRadius:"5px",gap:"25px"}}>
                <img src={profile5} alt="profile1" style={{height:"40px",width:"40px",borderRadius:"50px"}}></img>
                <div style={{display:"flex",flexDirection:"column",gap:"0"}}>
                <h1 style={{fontSize:"20px",padding:"0",margin:"0"}}>Caroline Nexon</h1>
                <p style={{padding:"0",margin:"0"}}>We need to start new research center</p>
                </div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <p style={{padding:"0",margin:"0"}}>09:26</p>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <div style={{display:"flex",alignItems:"center",width:"80%",padding:"5px",backgroundColor:"white",marginLeft:"40px",position:"relative",borderRadius:"5px",gap:"149px"}}>
               <div style={{display:"flex", gap:"10px"}}>
               <img src={profile6} alt="profile1" style={{height:"40px",width:"40px",borderRadius:"50px"}}></img>
               <div style={{display:"flex",flexDirection:"column",gap:"0"}}>
                <h1 style={{fontSize:"20px",padding:"0",margin:"0"}}>Patrick Koeler</h1>
                <p style={{padding:"0",margin:"0"}}>May be yes</p>
                </div>
               </div>
               
                <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <p style={{padding:"0",margin:"0"}}>03:26</p>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
           

        </div>
    );
}

export default Chats;