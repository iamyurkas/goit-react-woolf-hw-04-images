import styles from './Modal.module.css';
import { useEffect } from 'react';

export const Modal = ({ closeModal, isOpen, imageUrl }) => {
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