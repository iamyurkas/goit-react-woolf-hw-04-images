import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import { Component } from 'react';

export class Modal extends Component {
  handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  handleKeyUp = (e) => {
    if (e.key === 'Escape') {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp);
    document.body.style.overflow = '';
  }

  render() {
    const { isOpen, imageUrl } = this.props;
    return (
    <div className={isOpen ? styles.Overlay : styles.Hidden} onClick={this.handleOverlayClick}>
      <div className={styles.Modal}>
        <img src={imageUrl} alt="Large" />
      </div>
      </div>
      )
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
};