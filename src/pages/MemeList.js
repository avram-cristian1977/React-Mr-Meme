import MemeItem from './MemeItem'
import classes from './Search.module.css'


const MemeList = ({ memes }) => {
    return <ul className={classes.memesWrapper}>
                <MemeItem  memes={memes} />
          </ul>
}

export default MemeList


