import React, { useState }  from 'react'
import { NavLink , useHistory  } from 'react-router-dom'
import swal from 'sweetalert';
const SignUp =()=>{
  const history = useHistory();
  const [user , setUser] = useState({
  name :"" , email:"", phone:"", work:"", password:"", confirmPassword:"" 
  })

  let name , value;
  const handleInputs = (e)=>{
    console.log(e)
    name= e.target.name;
    value = e.target.value;

    setUser({...user , [name]:value})
  }


  const PostData = async (e)=>{

    e.preventDefault();

    const {name , email , phone , work , password , confirmPassword} = user;

    const res = await fetch("http://localhost:4000/register", {
      method:"POST",
      headers:{"Content-Type" : "application/json"},
      body:JSON.stringify({
        name:name , email:email , phone:phone , work:work , password:password, confirmPassword:confirmPassword
      })
    })
    const data = await res.json();
    

    if (res.status === 422 || !data  ){
      swal({
        title: "Error!",
        text: "Invalid",
        icon: "warning",
        timer: 2000,
        button: false
      })
      
      console.log("Invalid Registration")
    }
    else{
      swal({
        title: "Done!",
        text: "User Login Succesfully",
        icon: "success",
        timer: 2000,
        button: false
      })
      console.log("Registration Successfully")

      history.push("/login");
    }
  }

    return(
        <>

        <div className="signup" >
            <div className="container">
                <div className="sign-content">
                    
                        <form className="signup-form" id="register-form">
                        <h2 className="form-title">SignUp</h2>
                            <div className="form-group">
                                <label htmlFor="name">
                                <i className="zmdi zmdi-account material-icons-name p-2"></i>
                                </label>
                                <input type="text" name="name" value={user.name} onChange={handleInputs} id="name" autoComplete="off" placeholder="Your Name"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                <i className="zmdi zmdi-email material-icons-name p-2"></i>
                                </label>
                                <input type="text" name="email" value={user.email} onChange={handleInputs} id="email" autoComplete="off" placeholder="Your Email"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">
                                <i className="zmdi zmdi-phone-in-talk material-icons-name p-2"></i>
                                </label>
                                <input type="text" name="phone"  value={user.phone} onChange={handleInputs} id="phone" autoComplete="off" placeholder="Your Phone"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="work">
                                <i className="zmdi zmdi-slideshow material-icons-name p-2"></i>
                                </label>
                                <input type="text" name="work" value={user.work} onChange={handleInputs} id="work" autoComplete="off" placeholder="Your work"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">
                                <i className="zmdi zmdi-lock material-icons-name p-2"></i>
                                </label>
                                <input type="password" name="password" value={user.password} onChange={handleInputs} id="password" autoComplete="off" placeholder="Your password"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirmPassword">
                                <i className="zmdi zmdi-lock material-icons-name p-2"></i>
                                </label>
                                <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleInputs} id="confirmPassword" autoComplete="off" placeholder="Your Confirm password"></input>
                            </div>

                            <div className="form-group form-button">
                                <input type="submit"  id ="signup" onClick={PostData} className="form-submit" value="Register"></input>
                            </div>

                            <div className="form-group">
                                <NavLink to="/login" >I am already Register</NavLink>
                            </div>
                        </form>

                    </div>
                    
                </div>

            </div>
      </>


    )
    }



export default SignUp