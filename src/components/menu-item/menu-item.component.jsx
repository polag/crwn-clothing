import React from 'react';
import {withRouter} from 'react-router-dom'; //higher order component: a function that takes a component as an agument and
//returns a modified component, in this case we are going to modify MenuItem to have access to the things related to the router

import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => ( //aca podríamos pasar props y luego acceder como props.title
    <div className={`${size} menu-item`} 
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className = 'background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }}
        ></div>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
            
        </div>
    </div>

);

export default withRouter(MenuItem); //returns a menuitem component with access to location match and history of the router!!!!
