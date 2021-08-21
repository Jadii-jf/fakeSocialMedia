import React from 'react'
import './showStory.css'
export const ShowStory = ({value}) => {
    
    return(
        <>
    {value.map(item=>{
        return(
        <div className="postImg">
         <img src={item.img} alt=""  className="pImg"/>
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
