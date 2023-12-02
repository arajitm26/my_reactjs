import axios from "axios";
import { useState , useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  { useNavigate } from 'react-router-dom'

function Profile()
{
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
    const getProfile = () => 
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
	      let userData = result.data;
	      setName(userData.name);
	      setEmail(userData.email);


	    })
	     
	  
    }


    useEffect(() => {
	    
	    getProfile()

	  },[]);
   

   return (
   	<>
   	<div className="d-sm-flex align-items-center justify-content-between mb-4">
	  <h1 className="h3 mb-0 text-gray-800">Profile</h1>
	</div>
   	<form>
  <div className="form-group col-md-6">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input
      type="text"
      className="form-control"
      placeholder="Enter name"
      value={name}
      disabled
    />
    
  </div>
  <div className="form-group col-md-6">
    <label htmlFor="exampleInputEmail1">Email</label>
    <input
      type="email"
      className="form-control"
      placeholder="Enter email"
      value={email}
      disabled
    />
    
  </div>
  
 {/* <button type="submit" className="btn btn-primary">
    Submit
  </button> */}

</form>

   	</>
   	)
}
export default Profile;