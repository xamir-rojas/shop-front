import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function MainLayout(props){
    
        return (
            <>
            <Navbar></Navbar>
              {props.children}
              <footer className="footer">
                    <Link className="font-display text-gray-700 text-xl m-2 hover:text-blue-900" > © Shop</Link>
              </footer>
            </>
        )
    
}

export default MainLayout
