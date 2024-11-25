import css from './ImageCard.module.css'

const ImageCard = ({image, onClick}) => {
  return (
    <div onClick={() => onClick(image)}>
      <img
        className={css.galleryImage}
        src={image.urls.small}
        alt={image.description}
      />
    </div>
  );
};

export default ImageCard;
