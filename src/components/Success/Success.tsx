import './Success.sass'
import image from '../../images/icon-success.svg'

const Success = () => {
  return (
    <div className="success">
      <div className="container">
        <img src={image} alt="img" className="image" />
        <h1 className="title">Thanks for subscribing!</h1>
      </div>
    </div>
  )
}

export default Success