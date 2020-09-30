import React, {useState} from 'react';
import {forgotPass} from './Login';

export default function ResetPw() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    forgotPass(email);
    window.alert('Success! Check your email for your reset link.');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            placeholder="Your Email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
