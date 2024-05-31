import './Success.sass'
import image from '../../images/icon-success.svg'
import React from 'react'
import { SuccessProps } from '../../types/types'

const Success:React.FC<SuccessProps> = ({email}) => {
  return (
    <div className="success">
      <div className="container">
        <img src={image} alt="img" className="image" />
        <h1 className="title">Thanks for subscribing!</h1>
        <p className="paragraph">A confirmation email has been sent to
          <span className="email"> {email}</span>.
          Please open it and click the button inside to confirm your subscription.
        </p>
        <button className="button">Dismiss message</button>
      </div>
    </div>
  )
}

export default Success