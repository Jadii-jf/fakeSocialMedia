import { Cancel } from '@material-ui/icons'
import React from 'react'
import { Event } from '../rightSidebarEvents/Event'
import './rightSidebar.css'
export const RightSidebar = () => {
    return (
        <div className="rightSidebar">
            
            <div className="rightHeading">
                <h2>Events</h2>
                <h3>See All</h3>
            </div>
            <div className="eventBox">
            <Event date="18" month="March" head="Social Media" location=" Willson Tech Park"/>
            <Event date="22" month="June" head="Mobile Marketing" location=" Willson Tech Park"/>
            </div>
            <div className="rightHeading">
                <h2>Advertisement</h2>
                <h3>Close</h3>
            </div>
            <div className="rightAdvertImgBox">
                
                <div className="rightImgBox">
                <img src="https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
                </div>
            </div>
            <div className="rightHeading">
                <h2>Conversation</h2>
                <h3>Hide Chat</h3>
            </div>
            <div className="rightConversBox">
                <li>
                    <div>
                    <div className="imgBox">
                    <img src="https://images.pexels.com/photos/3848184/pexels-photo-3848184.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    </div>
                    <h2>Alina</h2>
                    </div>
                    <Cancel className="icon"/>

                </li>
                <li>
                    <div>
                    <div className="imgBox">
                    <img src="https://images.pexels.com/photos/3848184/pexels-photo-3848184.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    </div>
                    <h2>Alina</h2>
                    </div>
                    <Cancel className="icon"/>

                </li>
            </div>
        </div>
    )
}
