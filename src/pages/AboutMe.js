import classes from './AboutMe.module.css'
import Card from '../components/Card'

const AboutMe = () => {
        return <div className={classes.wrapper}>
        <Card />
        <div className={classes.textAlign}>
            <div className={classes['typing-demo']}>
                And that're my gifs. Click if you need to enlarge it.
            </div>
        </div>
        <iframe src="https://giphy.com/embed/c9uYRAyIYfMwZYygYH" width="200" height="200" frameBorder="0" className="giphy-embed" allowFullScreen title="mb"></iframe>
        <iframe src="https://giphy.com/embed/ZTrMOXEB5yvIcmsUeu" width="200" height="200" frameBorder="0" className="giphy-embed" allowFullScreen title='c'></iframe>
    </div>
}

export default AboutMe