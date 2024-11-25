import 'modern-normalize'
import ImageGallery from './ImageGallery/ImageGallery';
import { useEffect, useState } from 'react';
import { fetchImageGallery } from '../services/api';
import Loader from './Loader/Loader'
import ErrorMessage from './ErrorMessage/ErrorMessage';
import SearchBar from './SearchBar/SearchBar';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';

const App = () => {
    const [imageGallery, setImageGallery] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(1)
    const [btnLoadMore, setBtnLoadMore] = useState(false)
    // const [numPage, setNumPage] = useState()

    useEffect(() => {
        if(!query) {
            return
        }
        const getData = async()=> {
            try {
                setIsLoading(true)
                setIsError(false)
                const response = await fetchImageGallery(query, page)
                setPage(page)
                setImageGallery(prevImages => [...prevImages, ...response.results]);
                setBtnLoadMore(response.total_pages > page)
                setIsLoading(false)
            } catch (error) {
                console.error(error)
                setIsError(true)
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

  return (
    <div>
        <SearchBar onSubmit={handleChangeQuery}/>
        {isLoading && <Loader />}
        <ImageGallery images={imageGallery}/>
        {isError && <ErrorMessage />}
        {btnLoadMore && <LoadMoreBtn onClick={handlePage}/>}
    </div>
  )
}

export default App