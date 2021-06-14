import prifilePicture from '../assets/profilePicture.jpg'
import classes from '../components/Card.module.css'


const Card = () => {
    return <div className={classes.cvCard}>
                <div className={classes.cvLeftSide}>
                    <div className={classes.cvPic}>
                        <img src={prifilePicture} alt="" />
                    </div>
                </div>
                <div className={classes.credentials}>
                    <h6 className={classes.cardName}>Avram Cristian</h6>
                    <p className={classes.cardTitle}>frontend develope and 3D grafic designer</p>
                    <ul>
                        <li>phone: +40728181218</li>
                        <li>email: asct1977ro@gmail.com</li>
                        <li><a target="_blank" rel="noreferrer"  href="https://www.avram-cristian.ro">web: www.avram-cristian.ro</a></li>
                    </ul>
                </div>
    </div>
}

export default Card