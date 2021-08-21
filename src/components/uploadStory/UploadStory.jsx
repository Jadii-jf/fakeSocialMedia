import { AddAPhoto, Favorite, FavoriteBorder, InsertEmoticon } from '@material-ui/icons';
import React from 'react'
import './uploadStory.css'
export const UploadStory = ({value}) => {
    return (
        <div className="uploadStory">
            <div className="uploadStHdWr">
                <img src={value[0].img} alt="" className="upStImg"/>
                <div className="upStTit">
                    <h2>John Nicholson</h2>
                    <select name="" id="">
                        <option value="">Public</option>
                        <option value="">Private</option>      
                    </select>

                </div>
            </div>
            <input type="text" className="upStInput" placeholder="What's in your mind ?"/>
            <div className="upStIcBx">
            <div className="upStIcLst">
                <Favorite className="upStIcon" style={{color:'red'}}/>
                <h3>Like Video</h3>
                </div>
                <div className="upStIcLst">
                <AddAPhoto className="upStIcon" style={{color:"green"}}/>
                <h3>Photo/Video</h3>
                </div>
                <div className="upStIcLst">
                <InsertEmoticon className="upStIcon" style={{color:"yellow"}}/>
                <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}
