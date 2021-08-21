import React,{useState} from 'react'
import './header.css'
import { NotificationsNone, MailOutline, Airplay,ExitToApp,Brightness3, Search, Feedback, Settings, Help, ChevronRight } from '@material-ui/icons'
import { PopBox } from '../popBox/PopBox'
export const Headear = () => {
    const [state, setstate] = useState({
        display:'none'
    })
    return (
        <div className='header'>
            <div className="headerWrapper">
                <div className="headerLeftBox">
                   <div className="headerLogoBox">
                    <h1 className="headerLogo">
                        <span>G</span>ree()!()
                    </h1>
                </div>
                <div className="headerIconsBox">
                    <NotificationsNone className="icon"/>
                    <MailOutline className="icon"/>
                    <Airplay className="icon"/>
                </div>
                </div>
 
                <div className="hederSearchAvatarBox">
                    <div className="inputBox">
                        <Search className='icon'/>
                        <input type="text" placeholder="Search" className="headerInput"/>
                    </div>
                    <div className="headerImgBox">
                     <img src="https://images.pexels.com/photos/5926414/pexels-photo-5926414.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" className="headerAvatar" onClick={()=>{setstate(prev=>{
                    if(prev.display=='none')
                    {
                        return {display:'block'};
                    }
                    else{
                        return {display:'none'};
                    }
                    })}}/>
                     <PopBox value={state}/>
                    </div>
                </div>
            
            </div>

        </div>
    )
}
