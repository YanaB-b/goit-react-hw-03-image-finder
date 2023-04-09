import PropTypes from 'prop-types';
import css from 'components/Button/Button.module.css';


const Button = ({ onClick, children }) => {
    return (
      <button type="button" className={css.button} onClick={onClick}>
        {children}
      </button>
    );
  };
  
  Button.propTypes = {
    onClick: PropTypes.func.isRequired,

  };
  
  export default Button;