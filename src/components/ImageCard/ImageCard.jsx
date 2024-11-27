import css from './ImageCard.module.css'

const ImageCard = ({image, onClick}) => {
  return (
      <div className={css.imageCard} >
          
      <img className={css.image} onClick={() => onClick(image)}
        src={image.urls.small}
        alt={image.description}
      />
    </div>
  );
};

export default ImageCard;
