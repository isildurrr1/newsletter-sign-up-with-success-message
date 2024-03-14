import './Newsletter.sass';
import image from '../../images/illustration-sign-up-desktop.svg'
import icon from '../../images/icon-list.svg'

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <div className="container">
        <div className="text">
          <h1 className="title">Stay updated!</h1>
          <p className="paragraph">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <div className="list">
            <div className="item">
              <img src={icon} alt="icon" className="icon" />
              <span className='span'>Product discovery and building what matters</span>
            </div>
            <div className="item">
              <img src={icon} alt="icon" className="icon" />
              <span className='span'>Measuring to ensure updates are a success</span>
            </div>
            <div className="item">
              <img src={icon} alt="icon" className="icon" />
              <span className='span'>And much more!</span>
            </div>
          </div>
          <form className="form">
            <label htmlFor="email" className="label">Email address</label>
            <input 
            className='input' 
            type="email" 
            name="email" 
            id="email" 
            placeholder='email@company.com'/>
            <button className='button' type="submit"> Subscribe to monthly newsletter</button>
          </form>
        </div>
        <img src={image} alt="img" className="image" />
      </div>
    </div>
  )
}

export default Newsletter