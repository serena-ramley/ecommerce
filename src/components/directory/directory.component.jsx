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
          id: 1
        },
        {
          title: 'succulents',
          imageUrl: succulents,
          id: 2
        },
        {
          title: 'fruits',
          imageUrl: fruits,
          id: 3
        },
        {
          title: 'greens',
          imageUrl: greens,
          size: 'large',
          id: 4
        },
        {
          title: 'herbs',
          imageUrl: herbs,
          size: 'large',
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;