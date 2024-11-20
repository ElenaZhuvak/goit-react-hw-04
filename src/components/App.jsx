import 'modern-normalize'
import { useEffect, useState } from 'react'
import Articles from './Articles/Articles';
import { fetchArticles } from '../services/api';
import Loader from './Loader/Loader';

const App = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true)
                const {hits}= await fetchArticles()
                setIsLoading(false)
                setArticles(hits)
            } catch (error) {
                console.error(error)
            }
        }        
        getData()
    }, []);

  return (
    <div>
        {isLoading && <Loader />}
        <Articles articles={articles}/>
    </div>
  )
}

export default App