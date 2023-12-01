import axios from "axios";
import { useState , useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  { useNavigate } from 'react-router-dom'



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Loggedin = () => {

   if(localStorage.getItem("token"))
    {
      
      const configuration = {
      method: "post",
      url: process.env.REACT_APP_API_URL+"/me",
      data: {},
      headers: { 
        'Accept': 'application/json', 
        'Authorization': 'Bearer '+localStorage.getItem("token"),
      }
    };

    axios(configuration)
    .then((result) => {
      
      
        navigate('/admin/dashboard');
      
      

    }).catch((error) => {
     localStorage.clear();
    })
    }
    
  }


  const doLogin = () => { 
    
    const configuration = {
      method: "post",
      url: process.env.REACT_APP_API_URL+"/login",
      data: {
        email,
        password,
      },
    };

    axios(configuration)
    .then((result) => {
     
     let res = result.data;

     console.log(res)
     if(res.status == false)
     {
        toast.error(res.message)
     }
     else
     {
       // console.log(res.data.access_token)
       localStorage.setItem("token", res.data.access_token);
       navigate('/admin/dashboard');
     }

    })
    .catch((error) => {console.log(error);})

  };


  useEffect(() => {
   
   Loggedin(); 
   
  },[]);

  return (
    <div className="bg-gradient-primary">
  <div className="container">
    {/* Outer Row */}
    <div className="row justify-content-center">
      <div className="col-xl-10 col-lg-12 col-md-9">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            {/* Nested Row within Card Body */}
            <div className="row">
              <div className="col-lg-6 d-none d-lg-block bg-login-image" />
              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form className="user">
                    <div className="form-group">
                      <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control form-control-user"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <div className="custom-control custom-checkbox small">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck"
                        >
                          Remember Me
                        </label>
                      </div>
                    </div>
                    <a
                      onClick={() => doLogin()}
                      className="btn btn-primary btn-user btn-block"
                    >
                      Login
                      <ToastContainer />
                    </a>
                    <hr />
                    <a
                      href="index.html"
                      className="btn btn-google btn-user btn-block"
                    >
                      <i className="fab fa-google fa-fw" /> Login with Google
                    </a>
                    <a
                      href="index.html"
                      className="btn btn-facebook btn-user btn-block"
                    >
                      <i className="fab fa-facebook-f fa-fw" /> Login with
                      Facebook
                    </a>
                  </form>
                  <hr />
                  <div className="text-center">
                    <a className="small" href="forgot-password.html">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="text-center">
                    <a className="small" href="register.html">
                      Create an Account!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default Login;