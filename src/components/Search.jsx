import React, { Component } from 'react'

export class Search extends Component {
    render() {
        return (
            <>
              <div className="flex flex-col justify-center items-center w-full h-1/3 mt-20">
                    <h3 className="h3">
                        Home Page
                    </h3>
                    <input type="text" className="input w-full" placeholder="Search any product"/>
                </div>  
            </>
        )
    }
}

export default Search
