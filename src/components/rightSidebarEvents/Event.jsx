import { Cancel } from '@material-ui/icons'
import React from 'react'
import './event.css'
export const Event = ({month,location,date,head}) => {
    return (
        <div className="event">
            <div className="eventLeft">

            
            <div className="dateBox">
                <h2>
                    {date}
                </h2>
                <div className="month">
                   {month} 
                </div>
            </div>
            <div className="social">
                <h2>{head}</h2>
                <h3>{location}</h3>
                <p>More Info</p>
            </div>
            </div>
            <Cancel className="icon"/>
        </div>
    )
}
