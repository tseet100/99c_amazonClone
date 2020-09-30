import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {auth} from './firebase';

export default function ResetPw() {
  const [email, setEmail] = useState('');
  const history = useHistory();

  const forgotPass = (e) => {
    auth
      .sendPasswordResetEmail(e)
      .then(() => {
        history.push('/login');
      })
      .catch((error) => alert(error.message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    forgotPass(email);
    window.alert('Success! Check your email for your reset link.');
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login__container">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Your Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
