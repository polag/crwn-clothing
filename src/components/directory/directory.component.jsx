import React from 'react';

import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

//Acá si necesitamos crear una clase porque necesitamos guardar el state
//de los menu items que queremos pasar

class Directory  extends React.Component {
    constructor(){
        super();//nos trae todo lo que necesitamos del componente de React en nuestra clase
        
        this.state = {
            sections: [{
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'shop/hats'
              },
              {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'shop/jackets'
              },
              {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'shop/sneakers'
              },
              {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens'
              },
              {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
              }]
        }
    }

    render(){
        return (
            <div className='directory-menu'>
                { 
                    this.state.sections.map(({title, imageUrl,id, size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))}
            </div>
        );
    }
}

export default Directory;