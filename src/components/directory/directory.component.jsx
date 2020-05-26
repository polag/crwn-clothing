import React from 'react';
import {connect} from 'react-redux';

import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';

//Acá si necesitamos crear una clase porque necesitamos guardar el state
//de los menu items que queremos pasar

const Directory = ({sections}) => (
  <div className='directory-menu'>
    {
      sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id}  {...otherSectionProps} /> // es igual que hacer esto:  title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}
      ))}
  </div>    
);

const mapStateToProps=  createStructuredSelector(
  {
    sections: selectDirectorySections
  }
);


export default connect(mapStateToProps)(Directory);