import { AddToQueue, Announcement, HorizontalSplit, PeopleAlt, Person, ShoppingCart } from '@material-ui/icons'
import React from 'react'
import './leftSidebar.css'
export const LeftSidebar = () => {
    return (
        <div className="leftSidebar">
            <div className="iconBox">
            <HorizontalSplit/>
            </div>
            <ul className="leftSocialBox">
            <li><Announcement className="icon"/><a href="#"> Latest News</a></li>
            <li><Person className="icon"/><a href="#"> Friends</a></li>
            <li><PeopleAlt className="icon"/><a href="#">Group</a></li>
            <li><ShoppingCart className="icon"/><a href="#">MarketPlace</a></li>
            <li><AddToQueue className="icon"/><a href="#">Watch</a></li>
            <li><a href="">see more</a></li>
            </ul>
            <ul className="leftShortcuts">
<li>
    <img src="https://images.pexels.com/photos/5702306/pexels-photo-5702306.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="leftShortcutsImg"/>
    <h2 className="leftShortcutsText">web Developers</h2> 
</li>
<li>
    <img src="https://images.pexels.com/photos/5702306/pexels-photo-5702306.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="leftShortcutsImg"/>
    <h2 className="leftShortcutsText">web Design Course</h2> 
</li>
<li>
    <img src="https://images.pexels.com/photos/5702306/pexels-photo-5702306.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="leftShortcutsImg"/>
    <h2 className="leftShortcutsText">Full Stack Development</h2> 
</li>
<li>
    <img src="https://images.pexels.com/photos/5702306/pexels-photo-5702306.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="leftShortcutsImg"/>
    <h2 className="leftShortcutsText">website Experts</h2> 
</li>
            </ul>
        </div>
    )
}
