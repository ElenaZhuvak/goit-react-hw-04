import Modal from 'react-modal'
import css from './ImageModal.module.css'

const ImageModal = ({image, isOpen, onClose}) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding: '0',
          margin: '0',
          border: 'none',
          display: 'block'
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        }
      };

  return (
    <Modal
        isOpen={isOpen}
        onAfterOpen={image}
        onClose={onClose}
        style={customStyles}
    >
    {image && (
        <img className={css.modalImg} src={image.urls.regular}
        alt={image.alt_description} />
    )}
    </Modal>
  )
}

export default ImageModal