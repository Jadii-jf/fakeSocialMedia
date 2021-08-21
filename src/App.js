import { Facebook } from '@material-ui/icons'
import React from 'react'
import './app.css'
import { Headear } from './components/heading/Headear'
import { LeftSidebar } from './components/leftSidebar/LeftSidebar'
import { NewsFeed } from './components/newsFeed/NewsFeed'
import { RightSidebar } from './components/rightSiderbar/RightSidebar'
export const App = () => {
    return (
        <div>
            <Headear/>
            <div className='mainBox'>
                  <LeftSidebar/>
              <NewsFeed/>
          <RightSidebar/>
            </div>
        </div>
    )
}
