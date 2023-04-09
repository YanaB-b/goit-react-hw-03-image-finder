import React, { Component } from 'react';
import  Searchbar  from './Searchbar/Searchbar';
import  ImageGallery from './ImageGallery/ImageGallery';
import  Button  from './Button/Button';
import  Modal  from './Modal/Modal';
import Loader  from './Loader/Loader';
import {onImages} from './NewsApiService';
export class App extends Component {
  state = {
    nameValue: '',
    images: [],
    currentPage: 1,
    selectedImage: null,
    isShowModal: false,
    isShowLoadmore: false,
    status: 'idle',
  };

  componentDidUpdate(prevState) {
    if (
      prevState.nameValue !== this.state.nameValue ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.onImages();
    }
  }
  onImages = () => {
   
    onImages(this.state.nameValue, this.state.currentPage)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
         loadMore:
            this.state.currentPage < Math.ceil(images.totalHits / 12),
          status: 'resolved',
          
        }));
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
  };
  handleChecked = nameValue => {
    this.setState({
      nameValue,
      images: [],
      currentPage: 1,
      status: 'pending',
    });
  };

  toggleModal = () => {
    this.setState(({ isShowModal }) => ({ isShowModal: !isShowModal }));
  };

  onSelect = largeImageURL => {
    this.setState({ selectedImage: largeImageURL, isShowModal: true });
  };

  handleOpen = () => {
    this.setState(
      prevState => ({
        currentPage: prevState.currentPage + 1,
      })
    );
  };

  render() {
    
    return (
      <div>
        <Searchbar onSubmit={this.handleChecked}></Searchbar>
        {this.state.status === 'idle' && (
          <h2>Please enter your search query</h2>
        )}
        {this.state.status === 'pending' && <Loader />}
        {this.state.status === 'rejected' && (
          <h2>
            Oops, something went wrong. Please try again later.
          </h2>
        )}
        {this.state.status === 'resolved' && (
          <>
            {this.state.images.length > 0 ? (
              <>
                <ImageGallery images={this.state.images} onSelect={this.onSelect} />
                {this.state.loadMore && (
                  <Button onClick={this.handleOpen}>Load more</Button>
                )}
              </>
            ) : (
              <h2>
                Nothing was found. Please try another search.
              </h2>
            )}
          </>
        )}
        {this.state.isShowModal && (
          <Modal
            onClose={this.toggleModal}
            selectedImage={this.state.selectedImage}
          ></Modal>
        )}
      </div>
    );
  }
}
export default App;