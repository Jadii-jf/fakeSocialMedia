import { ChatBubbleOutline, ExpandMore, MoreVert, Send, ThumbUpAlt } from '@material-ui/icons'
import React from 'react'
import './story.css'
import { StoryTitle } from '../storyTitle/StoryTitle'
import {postImg} from '../../dummyData'
export const Story = ({value}) => {
    const {
        id,
        img,
        date,
        desc,
        likes,
        comments,
        share
        } =value;
    return (
        <div className="story">
            <div className="storyMnHd">
                <StoryTitle value={postImg} date={date}/>
                <MoreVert className="stIcon"/>
            </div>
            <p className="stDes">{desc}</p>
            <div className="stImgBox">
                <img src={img} alt="" />
            </div>
            <div className="stIconBox">
            <div className="stImgLkBox">
            <div className="stIconWr">
               <ThumbUpAlt className="stIcon" style={{color:'blue'}}/>
               <h3>{likes}</h3>
                </div> 
                <div className="stIconWr">
               <ChatBubbleOutline className="stIcon"/>
               <h3>{comments}</h3>
                </div> 
                <div className="stIconWr">
               <Send className="stIcon" style={{color:'green'}}/>
               <h3>{share}</h3>
                </div> 
            </div>
            <div className="stSmImBx">
                <img src={postImg[0].img} alt="" />
                <ExpandMore className="icon"/>
            </div>
            </div>
        </div>
    )
}
