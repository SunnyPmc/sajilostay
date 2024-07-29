import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './reserve.css'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'


const Reserve = ({setOpen, hotelId}) => {
  return (
    <div>
      <div className="reserve">
        <div className="rContainer">
          <FontAwesomeIcon icon={faCircleXmark} className='rclose' onClick={() => setOpen(false)} />
          <span>select your rooms:</span>
        </div>
      </div>
    </div>
  )
}

export default Reserve
