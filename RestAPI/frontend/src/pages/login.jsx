import { useState} from "react";
import { FaUser } from "react-icons/fa";


function Login() {

  const [formData,setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const {email,password} = formData;

  const onchange = (e) => {
     setFormData((prevState)=>({
      prevState,
      [e.target.name]: e.target.value,
     }))
  }

  const onSubmit = (e) => {
     e.preventDefault()
  }


  return <>
    
    <section className="heading">
       <h1>
        <FaUser/>Login
       </h1>
       <p>Login and start setting goals</p>
    </section>

    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input type="text" className="form-control" id="email" name="email " value={email} placeholder="Enter your email" onChange={onchange}/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" id="password" name="password " value={password} placeholder="Enter your password" onChange={onchange}/>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">Submit</button>
        </div>
      </form>
    </section>
    
  </>
}
export default Login