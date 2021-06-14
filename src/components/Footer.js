import   './Footer.module.css'

import { FaYoutube } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaUniversity } from 'react-icons/fa'



const Footer = () => {

  return <footer>

    <div>
      <a target="_blank" rel="noreferrer" href="https://www.rd.com/article/best-memes/">
      <FaUniversity color="white" size="30px" />
      
        Best 2020 Memes</a>
    </div>

    <div>
      <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=fm17TSZVw6U">
      <FaYoutube color="white" size="30px" />
        Youtube memes colection</a>
    </div>

    <div>
      <a target="_blank" rel="noreferrer" href="https://www.facebook.com/memes">
      <FaFacebook color="white" size="30px" />
      
        Best Facebook group</a>
    </div>




  </footer>
}

export default Footer