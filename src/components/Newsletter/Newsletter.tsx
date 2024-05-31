import './Newsletter.sass';
import image from '../../images/illustration-sign-up-desktop.svg'
import icon from '../../images/icon-list.svg'
import { NewsletterProps } from '../../types/types';

const Newsletter: React.FC<NewsletterProps> = ({ sentEmail }) => {
  const onClick = (event: any) => {
    sentEmail(event.target.email.value)
  }
  return (
    <div className='newsletter'>
      <div className="newsletter-container">
        <div className="newsletter-text">
          <h1 className="newsletter-title">Stay updated!</h1>
          <p className="newsletter-paragraph">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <div className="newsletter-list">
            <div className="newsletter-item">
              <img src={icon} alt="icon" className="icon" />
              <span className='newsletter-span'>Product discovery and building what matters</span>
            </div>
            <div className="newsletter-item">
              <img src={icon} alt="icon" className="icon" />
              <span className='newsletter-span'>Measuring to ensure updates are a success</span>
            </div>
            <div className="newsletter-item">
              <img src={icon} alt="icon" className="icon" />
              <span className='newsletter-span'>And much more!</span>
            </div>
          </div>
          <form className="newsletter-form" onSubmit={onClick}>
            <label htmlFor="email" className="newsletter-label">Email address</label>
            <input
              className='newsletter-input'
              type="email"
              name="email"
              id="email"
              placeholder='email@company.com' />
            <button className='newsletter-button' type="submit"> Subscribe to monthly newsletter</button>
          </form>
        </div>
        <img src={image} alt="img" className="newsletter-image" />
      </div>
    </div>
  )
}

export default Newsletter