import { CopyToClipboard } from 'react-copy-to-clipboard'
import classes from './Search.module.css'
import {Link} from 'react-router-dom'


const MemeItem = ({ memes }) => {

    return <>
        {memes.map(meme =>  <li key={meme.id} className={classes.memeItemWrapper}>
            <Link to={`/memelist/${meme.id}`}> 
            <video src={meme.images.preview.mp4} autoPlay loop width="320" height="240" />
            <h5 className={classes.memeTitle}>
               {meme.title} 
                </h5>
            <CopyToClipboard text={meme.images.preview.mp4}>
                <button>Copy link</button>
            </CopyToClipboard>
           
            </Link>
      </li>)}
          </>
}



export default MemeItem