import './Newsletter.sass';
import image from '../../images/illustration-sign-up-desktop.svg'

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <div className="container">
        <div className="text">
          <h1 className="title">Stay updated!</h1>
        </div>
        <img src={image} alt="" className="image" />
      </div>
    </div>
  )
}

export default Newsletter