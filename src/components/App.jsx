import 'modern-normalize'
import { useEffect, useState } from 'react'
import Articles from './Articles/Articles';
import { fetchArticles } from '../services/api';
import Loader from './Loader/Loader';
import SearchBar from './SearchBar/SearchBar';
import toast from 'react-hot-toast';

const App = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(0) 
    // берем значение которое указано в данных от бекенда
    const [nbPages, setNbPages] = useState(0)

    useEffect(() => {
        if(nbPages === page) {
            toast('You have downloaded all images');
        }
    }, [nbPages, page])
    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true)
                setIsError(false)
                const {hits, nbPages}= await fetchArticles(query, page)
                setNbPages(nbPages)
                setArticles(prev => [...prev, ...hits])
            } catch (error) {
                console.error(error)
                setIsError(true)
            } finally {
                setIsLoading(false)
            }
        }        
        getData()
    }, [query, page]);

    const handleChangeQuery = (query) => {
        setArticles([])
        setQuery(query)
        setPage(0)
    }

  return (
    <div>
        <SearchBar onChangeQuery={handleChangeQuery}/>
        {isLoading && <Loader />}
        <Articles articles={articles}/>
        {isError && <h2>Something happened</h2>}
        {nbPages > page && <button onClick={() => setPage(prev => prev + 1)}>Load more</button>}
    </div>
  )
}

export default App