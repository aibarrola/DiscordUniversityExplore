import React, {useState} from 'react';

import Sidebar from '../../Sidebar'
import Header from '../../Header'
import Main from '../../Main'


import './ExplorePage.css'




function ExplorePage(){

    const [page, setPage] = useState("Home")

    
    const changePage = newPage =>{
        setPage(newPage);        
    }

    return(
        <div>
            <div className="row">

                <div className="col s3">
                    <Sidebar changePage={changePage}/>
                </div>

                <div className="col s9">
                
                    <div className="row">
                        <Header />
                    </div>

                    <div className="row">
                        <Main  page={page} />
                    </div>

                </div>

            </div>
          

          
                

        </div>
    )
}

export default ExplorePage;