import css from './ImageGalleryItem.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  onClick = () => {
    this.props.onSelect(this.props.largeImageURL);
  };
  render() {
    return (
      <li className={css.imageGalleryItem}>
        <img
          className={css.imageGalleryItemImage}
          src={this.props.webformatURL}
          alt={this.props.tags}
          onClick={this.onClick}
        />
      </li>
    );
  }
}
export default ImageGalleryItem;
