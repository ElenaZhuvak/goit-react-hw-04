import Modal from 'react-modal'

const ImageModal = ({image, onOpen, onClose}) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
  return (
    <Modal
        onOpen={onOpen}
        onAfterOpen={image}
        onClose={onClose}
        style={customStyles}
    >
    {image && (
        <img src={image.urls.regular}
        alt={image.alt_description} />
    )}
    </Modal>
  )
}

export default ImageModal