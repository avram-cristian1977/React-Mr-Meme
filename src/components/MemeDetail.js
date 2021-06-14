
import classes from './MemeDetail.module.css'
import { useEffect, useState } from 'react'


const MemeDetail = ({ match }) => {

    const [details, setDetails] = useState()

    useEffect(() => {

        async function fetchItem() {
            try {

                const response = await fetch(`
                https://api.giphy.com/v1/gifs/${match.params.id}?api_key=L6nDPtw5VOh9KiBzRaWThIKfXWFVfNUf`)
                const responseJson = await response.json()
                console.log(responseJson.data);
                setDetails(responseJson.data.images.preview.mp4)

            } finally {

            }

        }
        fetchItem()


    }, [match.params.id])

    console.log(match)
    return <>
        <div className={classes.videoWrapper}>
            <video src={details} autoPlay loop width="640" height="480" />
        </div>
    </>

}
export default MemeDetail