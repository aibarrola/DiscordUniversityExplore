import React from 'react';

import Sidebar from '../../Sidebar'
import Header from '../../Header'

import './ExplorePage.css'

function ExplorePage(){
    return(
        <div>
            <div className="row">

                <div className="col s3">
                    <Sidebar />
                </div>

                <div className="col s9">
                
                    <div className="row">
                        <Header />
                    </div>
                  {/*main page */}
                    {/*search bar */}


                    {/*home page */}
                    {/*cultural page */}
                    {/*academic page */}
                    {/*religious page */}
                    {/*club sports page */}
                    {/*special interest page */}
                    {/*fraternity page */}
                    {/*sorority page */}

                </div>

            </div>
          

          
                

        </div>
    )
}

export default ExplorePage;