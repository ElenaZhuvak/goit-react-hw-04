import Modal from 'react-modal'
import css from './ImageModal.module.css'

const ImageModal = ({image, isOpen, onClose, style}) => {
   
  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={style}
    >
    {image && (
        <img className={css.modalImg} src={image.urls.regular}
        alt={image.alt_description} />
    )}
    </Modal>
  )
}

export default ImageModal