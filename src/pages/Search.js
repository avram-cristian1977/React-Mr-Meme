import classes from './Search.module.css'
import { useState, useEffect } from 'react'
import LoadingSpinner from '../components/LoadingSpinner'
import Button from '../components/Button'
import MemeList from './MemeList'

const Search = () => {

    const [search, setSearch] = useState('')
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])
    const [isLoaging, setIsLoading] = useState(false)



    useEffect(() => {

        async function fetchData() {
            try {
                setIsLoading(true)
                const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=L6nDPtw5VOh9KiBzRaWThIKfXWFVfNUf&q=${query}&limit=10&offset=0&rating=g&lang=en`)
                const responseJson = await response.json()
                setResults(responseJson.data)

            } finally {
                setIsLoading(false)
            }
        }

        if (query !== "") {
            fetchData()
        }
    }, [query])


    const submitHandler = ev => {
        ev.preventDefault()
        setQuery(search)
    }

    const searchHandler = ev => {
        setSearch(ev.target.value)
    }



    return <>
        <form onSubmit={submitHandler} className={classes.formControl}>
            <label>Needa litta cliffy giffy?</label>
            <input
                type="text"
                placeholder="Search fo' giffies!"
                value={search}
                onChange={searchHandler} />
            <Button >{"Search"}</Button>
            {isLoaging && <LoadingSpinner />}
        </form>
        <div className={classes.memesWrapper}>
                <MemeList memes={results} />
        </div>
         </>
}

export default Search