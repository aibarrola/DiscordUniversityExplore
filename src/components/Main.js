import React from 'react';
import Home from '../components/pages/Home';

import Card from './Card/Card';
function Main({page}){






    return(
        <div>
            <h4> {page} </h4> 

            <Card title = "This is a card"></Card>

        </div>
    )
}

export default Main;