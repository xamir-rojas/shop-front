import React from 'react'
import { Link } from 'react-router-dom'

function Base(props){
    
        return (
            <>
              {props.children}
              <footer className="footer">
                    <Link className="font-display text-gray-700 text-xl m-2 hover:text-blue-900" > © Shop</Link>
              </footer>
            </>
        )
    
}

export default Base
