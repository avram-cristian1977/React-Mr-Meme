import classes from './Homepage.module.css'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return <>
    <div className={classes.wrapper}>
      
      <div className={classes['typing-demo']}>Welcome to the most amazing memes you ever been exposed to!</div>
    </div>
    <h1>You're about to be MEMEFIED</h1>
    <div className={classes.steps}>
      <div >
        <h4>Step 1</h4>
        <a target="_blank" rel="noopener noreferrer" href="https://clideo.com/">Cut and Crop your image/video</a>
      </div>
      <div >
        <h4>Step 2</h4>
        <a target="_blank" rel="noopener noreferrer" href="https://giphy.com/">Decorate and Export</a>
      </div>
      <div>
        <h4>Step 3</h4>
        <Link to="./search">Enjoy your gification!</Link>
      </div>
    </div>
  </>
}

export default Homepage