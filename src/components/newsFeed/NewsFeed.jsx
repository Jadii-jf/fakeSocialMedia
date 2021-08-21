import React from 'react'
import { PostStory } from '../postStory/PostStory'
import { ShowStory } from '../showStory/ShowStory'
import './newsFeed.css'
import {images} from '../../dummyData';
import {postImg} from '../../dummyData';
import {storyData} from '../../dummyData';
import { UploadStory } from '../uploadStory/UploadStory';
import { Story } from '../story/Story';
import { Footer } from '../footer/Footer';
export const NewsFeed = () => {
    return (
     <div className="newsFeed">
         <div className="showStory">
             <PostStory value={postImg}/>
             <ShowStory value={images}/>
         </div>
         <UploadStory value={postImg}/>
         {
       storyData.map((item)=>{
           return (<Story value={item}/>)
       })
         }
         <Footer/>
     </div>
    )
}
