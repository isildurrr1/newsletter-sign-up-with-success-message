import { useState } from 'react';
import Newsletter from '../Newsletter/Newsletter';
import Success from '../Success/Success';
import './App.sass';

function App() {
  const [email, sentEmail] = useState('lol')
  return (
    <div className="App">
      {email === 'lol' ?
        <Newsletter sentEmail={sentEmail} />
        :
        <Success email={email} />
      }
    </div>
  );
}

export default App;
