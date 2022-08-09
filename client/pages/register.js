import { useState } from "react"
import Layout from "../components/Layout"

function Register () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonText, setButtonText] = useState('Register');
  const [error, setError] = useState('')
  const [success, setSucess] = useState('')

  const registerUser = async (e) => {
    e.preventDefault();
    setButtonText('Loading');
    const res = await fetch('/api/register', { method: 'POST' })
    console.log(res)
    const result = await res.json();
    // console.log(result);
  }

  const registerForm = () => (
    <form onSubmit={registerUser}>
      <div className="form-group">
        <input type="text" onChange={e => setName(e.target.value)} className="form-control" placeholder="Type your Name" required/>
      </div>
      <div className="form-group">
        <input type="email" onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Type your Email" required/>
      </div>
      <div className="form-group">
        <input type="password" onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Type your password" required/>
      </div>
      <div className="form-group">
        <button className="btn btn-outline-warning">{buttonText}</button>
      </div>
    </form>
  )
  return (
    <Layout>
      <div className="col-md-6 offset-md-3">
        <h1>Register</h1>
        <br />
        {registerForm()}
      </div>
    </Layout>
  )
}

export default Register