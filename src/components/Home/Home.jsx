import React from 'react'
import PartyStore from '../../assets/images/PartyStore_Sadies.png'

const Home = () => {
  return (
    <div className='Home'>
      <img src={PartyStore} alt='home' usemap="#workmap" width="100%" height="550vh" />
      {/* https://www.image-map.net/ */}
      <area shape="circle" coords="25, 25, 75" href="/team.html" alt="Team page"></area>
      <area shape="circle" coords="25, 25, 75" href="/media.html" alt="MediaHub page"></area>
      <area shape="circle" coords="25, 25, 75" href="/team.html" alt="Team page"></area>
    </div>
  )
}

export default Home
