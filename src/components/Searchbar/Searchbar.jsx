import css from './Searchbar.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { FcSearch } from 'react-icons/fa';
class Searchbar extends Component {
  state = {
    query: '',
  };
  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.query.trim());
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.searchFormButton}>
             {/* <span className={css.searchFormButtonLabel}>Search</span>  */}
            <FcSearch />
          </button>

          <input
            className={css.searchFormInput}
            type="text"
            autofocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes ={
  onSubmit: PropTypes.func.isRequired,
}
export default Searchbar;
