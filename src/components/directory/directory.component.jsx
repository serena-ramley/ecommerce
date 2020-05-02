import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

import flowers from '../../assets/images/flowers.jpg'
import succulents from '../../assets/images/succulents.jpg'
import fruits from '../../assets/images/fruits.jpg'
import greens from '../../assets/images/greens.jpg'
import herbs from '../../assets/images/herbs.jpg'

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'flowers',
          imageUrl: flowers,
          id: 1,
          linkUrl: 'flowers'
        },
        {
          title: 'succulents',
          imageUrl: succulents,
          id: 2,
          linkUrl: ''
        },
        {
          title: 'fruits',
          imageUrl: fruits,
          id: 3,
          linkUrl: ''
        },
        {
          title: 'greens',
          imageUrl: greens,
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'herbs',
          imageUrl: herbs,
          size: 'large',
          id: 5,
          linkUrl: ''
        }
      ]
    };
  }

  // Props contains history and match
  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size, ...props}) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}  {...props} />
        ))}
      </div>
    );
  }
}

export default Directory;