import React from 'react'
import './storyTitle.css'
export const StoryTitle = ({value,date}) => {
    console.log(date);
    return (
        <div className="storyTitle">
        <img src={value[0].img} alt="" className="upStImg"/>
        <div className="upStTit">
            <h2>John Nicholson</h2>
            <h3 className="storyTitDt">{date}</h3>
        </div>
        </div>
    )
}
