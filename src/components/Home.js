import React from 'react'
import CoverImage from '../media/img/first_page_cover.gif'

export const Home = () => {
  return (
    <div id="home" className="flex flex-col flex-1">
      <img src={CoverImage} alt="Manuel e sua moglie"/>
    </div>
  )
}


