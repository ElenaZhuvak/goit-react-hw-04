import 'modern-normalize'
import ImageGallery from './ImageGallery/ImageGallery';
import { useEffect, useState } from 'react';
import { fetchImageGallery } from '../services/api';
import Loader from './Loader/Loader'
import ErrorMessage from './ErrorMessage/ErrorMessage';

const App = () => {
    const [imageGallery, setImageGallery] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const getData = async()=> {
            try {
                setIsLoading(true)
                setIsError(false)
                const response = await fetchImageGallery()
                setIsLoading(false)
                setImageGallery(response)
            } catch (error) {
                console.error(error)
                setIsError(true)
                setIsLoading(false)
            } finally {
                setIsLoading(false)
            }
        }

        getData()
    }, [])

  return (
    <div>
        {isLoading && <Loader />}
        <ImageGallery images={imageGallery}/>
        {isError && <ErrorMessage />}
    </div>
  )
}

export default App

// axios.get('https://api.unsplash.com/photos/?client_id=7q_PyXeOVgXJsZXsArM5o60MRGV_bUkd0dtYPDPVY-Y').then(res => setImageGallery(res.data))