import styles from './Modal.module.css'

const Modal = ({ isOpen, children, title, handleClose }) => {
  return isOpen ? (
    <>
      <div className={`${styles['Modal']}`}  >
        <div className={styles['Modal__background']} onClick={handleClose} />
        <div className={`${styles['Modal__box']} container-full mx-auto`}>
          <h2 className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
            {title}
          </h2>
          <div aria-hidden="true" className={styles['Modal__content']}>
            {children}
          </div>
        </div>
      </div>
    </>
  ) : null;
};


export default Modal;
