import 'modern-normalize'
import ImageGallery from './ImageGallery/ImageGallery';
import { useEffect, useState } from 'react';
import { fetchImageGallery } from '../services/api';
import Loader from './Loader/Loader'
import ErrorMessage from './ErrorMessage/ErrorMessage';
import SearchBar from './SearchBar/SearchBar';

const App = () => {
    const [imageGallery, setImageGallery] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [query, setQuery] = useState('')

    useEffect(() => {
        if(!query) {
            return
        }
        const getData = async()=> {
            try {
                setIsLoading(true)
                setIsError(false)
                const response = await fetchImageGallery(query)
                setIsLoading(false)
                setImageGallery(response.results)
            } catch (error) {
                console.error(error)
                setIsError(true)
                setIsLoading(false)
            } finally {
                setIsLoading(false)
            }
        }

        getData()
    }, [query])

    const handleChangeQuery = (query) => {
        setQuery(query);
    }

  return (
    <div>
        <SearchBar onChangeQuery={handleChangeQuery}/>
        {isLoading && <Loader />}
        <ImageGallery images={imageGallery}/>
        {isError && <ErrorMessage />}
    </div>
  )
}

export default App

// axios.get('https://api.unsplash.com/photos/?client_id=7q_PyXeOVgXJsZXsArM5o60MRGV_bUkd0dtYPDPVY-Y').then(res => setImageGallery(res.data))