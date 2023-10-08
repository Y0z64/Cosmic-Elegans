import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faFile, faHome, faWorm,  } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div className="h-screen w-64 fixed bg-gray-800 text-white">
      <ul className="space-y-6 py-6 pr-6 pl-12">
        <li>
          <a href="#" className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faWorm} size="lg" />
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faFile} size="lg" />
            <span>Settings</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faHome} size="lg" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Home;