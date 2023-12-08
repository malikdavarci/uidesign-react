import '../styles/links.css'
import Plus from '../assets/plus.svg'

const Links = () => {
  return (
    <div className='linksContainer'>
        <button>
            <img src={Plus} alt="Ekle" />Follow
        </button>
    </div>
  )
}

export default Links