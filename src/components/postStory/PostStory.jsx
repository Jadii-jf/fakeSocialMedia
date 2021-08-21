import React from 'react'
import './postStory.css'                         
export const PostStory = ({value}) => {
    return (
        <>
    {value.map(item=>{
        return(
        <div className="postImg">
         <img src={item.img} alt="" className="pImg"/> 
         <div className="postImgSmImg">
             <img src={item.img} alt="" className="pSmImg"/>
             </div> 
          <h2>{item.name}</h2>
         </div>
         )
    })}
        </>
    )
}
