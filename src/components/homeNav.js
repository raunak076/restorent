import React from 'react'
import "./nav.css"
import Menu from './MenuApi'
import { Link, Route, Router, Routes } from "react-router-dom";

function HomeNav({menudata,setMenu}) {
  const filterItem=(cat)=>{
      const update=Menu.filter((arr)=>{
         return arr.category==cat 
      })
      console.log(update,Menu,menudata)
    setMenu(update)
  }
  return (
    <>
    
    <div className='main'>
      <nav className='nav'>
        <ul>
            <li><Link><button onClick={()=>filterItem('breakfast')}>Breakfast</button></Link></li>
            <li><Link><button onClick={()=>filterItem('lunch')}>Lunch</button></Link></li>
            <li><Link><button onClick={()=>filterItem('party')}>Party</button></Link></li>
            <input type='text' className='inp'/>
            <button className='search-btn'>Search</button>
        </ul>
        </nav>
        <div className='log-in'>
          
             <Link to="/register"> <button>Log-in</button></Link>
              {/* */}
        
        </div>
            
        </div>
       
        </>
  )
}

export default HomeNav
