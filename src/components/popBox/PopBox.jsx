import React,{useState} from 'react'
import './popBox.css'
import { NotificationsNone, MailOutline, Airplay,ExitToApp,Brightness3, Search, Feedback, Settings, Help, ChevronRight } from '@material-ui/icons'
export const PopBox = ({value}) => {
   const [state, setState] = useState({})
    const change=(e)=>{
    if(state.transform=='translateX(0px)')
    {
        setState({transform:'translateX(17px)'});
    }
    else{
        setState({transform:'translateX(0px)'});
    }
    }
    return (
       <div className="popBox" style={value}>
                         <div className="popBoxAvatarBox">
                         <div className="popBoxFlex">
                         <img src="https://images.pexels.com/photos/5926414/pexels-photo-5926414.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" className="headerAvatar" />
                              <div className="popBoxName">
                                  <h2>John Michloean</h2>
                                  <span>See your profile</span>
                              </div>
                              <div className="popBoxButton" onClick={change}>
                                  <div className="cirlce" style={state}>

                                  </div>
                              </div>
                         </div>
                         </div>
                         <div className="popBoxDes">
                             <Feedback className="icon"/>
                             <div className="desData">
                                 <h2>Give Feedback</h2>
                                 <span>Help us to improve design</span>
                             </div>
                         </div>
                         <ul>
                         <li><div><Settings className="icon"/><a href="#">Setting & Privacy</a></div><ChevronRight className="iconRight"/></li>
                         <li><div><Help className="icon"/><a href="#">Help & Support</a></div><ChevronRight className="iconRight"/></li>
                         <li><div><Brightness3 className="icon"/><a href="#">Display & Accessiblity</a></div><ChevronRight className="iconRight"/></li>
                         <li><div><ExitToApp className="icon"/><a href="#">Logout</a></div><ChevronRight className="iconRight"/></li>
                         </ul>
                      
                     
        </div>
    )
}
