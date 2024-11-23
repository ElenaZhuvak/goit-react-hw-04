import css from './ImageGallery.module.css'

const ImageGallery = ({images}) => {
  return (
    <div>
        <ul className={css.gallery}>
            {images.map(image => 
            <li className={css.galleryItem} key={image.id}>
                <div>
                    <img className={css.galleryImage} src={image.urls.small} alt={image.description} />
                </div>
            </li>)}
        </ul>
    </div>
  )
}

export default ImageGallery