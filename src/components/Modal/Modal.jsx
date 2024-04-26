import styles from './Modal.module.css';
import { useEffect } from 'react';

export const Modal = ({ closeModal, isOpen, imageUrl }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = ''; 
    };
  }, [isOpen]); 

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  return (
    <div
      className={isOpen ? styles.Overlay : styles.Hidden}
      onClick={handleOverlayClick}
    >
      <div className={styles.Modal}>
        <img src={imageUrl} alt="Large" />
      </div>
    </div>
  );
};