import 'modern-normalize'
import ImageGallery from './ImageGallery/ImageGallery';
import { useEffect, useState } from 'react';
import { fetchImageGallery } from '../services/api';
import Loader from './Loader/Loader'
import ErrorMessage from './ErrorMessage/ErrorMessage';
import SearchBar from './SearchBar/SearchBar';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import toast from 'react-hot-toast';
import ImageModal from './ImageModal/ImageModal';

const App = () => {
    const [imageGallery, setImageGallery] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(0)
    const [btnLoadMore, setBtnLoadMore] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [selectedImage, setSelectedImage] = useState(null)
    const [isOpenModal, setIsOpenModal] = useState(false)


    useEffect(() => {
        if(!query) {
            return
        }
        const getData = async()=> {
            try {
                setIsLoading(true)
                setIsError(false)
                const response = await fetchImageGallery(query, page)
                setTotalPages(response.total_pages)
                setPage(page)
                setImageGallery(prevImages => [...prevImages, ...response.results]);
                setBtnLoadMore(response.total_pages > page)
                setIsLoading(false)
            } catch (error) {
                toast.error('Something went wrong')
                setIsError(true)
                setBtnLoadMore(false)
            } finally {
                setIsLoading(false)
            }
        }
        getData()
    }, [query, page])

    const handleChangeQuery = (query) => {
        setImageGallery([])
        setQuery(query);
        setPage(1)
    }

    const handlePage = () => {
        setPage(prev => prev + 1)
    }

    const handleImageClick = (image) => {
        setSelectedImage(image)
        setIsOpenModal(true)
    }

    const handleCloseModal = (event) => {
        if (event.target === event.currentTarget) {
            setIsOpenModal(false)
        }
        setSelectedImage(null)
    }

  return (
    <div>
        <SearchBar onSubmit={handleChangeQuery}/>
        {isLoading && <Loader />}
        <ImageGallery images={imageGallery} onImageClick={handleImageClick}/>
        {isError && <ErrorMessage />}
        {btnLoadMore && <LoadMoreBtn onClick={handlePage}/>}
        <ImageModal image={selectedImage} onOpen={isOpenModal} onClose={handleCloseModal}/>
    </div>
  )
}

export default App