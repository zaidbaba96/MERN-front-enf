import React,{ useEffect,useState  }  from 'react'
import dp from '../images/dp.jpg';
//import meme from '../images/meme.jpg';
//import edit from '../images/edit.jpg';
import { useHistory } from 'react-router';
import swal from 'sweetalert';
const About = ()=>{
    const history = useHistory();
    const [userData , setUserData]= useState({})
   
   useEffect (()=>{
       
    const callAboutPage = async () => {

        try{
            const res = await fetch('http://localhost:4000/about',{
               // mode:"no-cors",
                method:"GET",
                headers:{
                    'x-access-token': localStorage.getItem('token')
                },
                credentials : "include"
            });
            
            const data = await res.json()
            console.log(data)
            setUserData(data)   

           
            if(res.status !== 200){
                swal({
                    title: "Error!",
                    text: "user not Found",
                    icon: "warning",
                    timer: 2000,
                    button: false
                  })
                const error = new Error(res.error);
                throw error;
                
            }
            else{
                swal({
                    title: "Done!",
                    text: "User Login Succesfully",
                    icon: "success",
                    timer: 2000,
                    button: false
                  })
            }
    }
        catch(err){
            console.log(err)
            history.push('/login');
    }
    };
    callAboutPage();
    },[]);

   

    return(

        <>
        {/* <style>
         body {"background-color"="pink !important"}
        </style> */}
        <div className="container emp-profile shadow mt-5 w-50 rounded bg-light ">
            <form method="GET">
                <div className="row ">
                    <div className="col--2 mt-4">
                        <div className="profile-img">
                            <img src={dp} height="180" width="200" alt="baba"></img>
                        </div>
                    </div>
                    <div className="col-4 mt-4 ml-3">
                        <div className="profile-head">
                            <h4>{userData.name}</h4>
                            <h5>{userData.work}</h5>
                            <p className="profile-rating mt-3 mb-5">Ranking : 8/10</p>


                            <ul class="nav nav-tabs " roles="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                            </li>
                            </ul>

                        </div>    

                    </div>

                    <div className="col ml-1">
                        <input type="submit" className="profile-edit-btn shadow rounded"  value="Edit Profile"/>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <div className="profile-work">
                        <p className="mt-3 ml-3 "><u><b> Work Link</b></u></p>
                        <a className=" ml-4" href="https://www.linkedin.com/in/mansuri-zaid-52b84017a" target="_baba">LinkedIn</a><br></br>
                        <a className=" ml-4" href="https://instagram.com/zaid_baba?igshid=16ab93bm6tg3y" target="_baba">Instagram</a><br></br>
                        <a className=" ml-4" href="https://www.linkedin.com/in/mansuri-zaid-52b84017a" target="_baba">WhatAap</a><br></br>
                        <a className=" ml-4" href="https://www.linkedin.com/in/mansuri-zaid-52b84017a" target="_baba">Youtube</a><br></br>
                        <a className=" ml-4" href="https://www.linkedin.com/in/mansuri-zaid-52b84017a" target="_baba">Facebook</a>
                        </div>

                    </div>

                    <div className="col-md-8 pl-5 about-info">
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-4 mt-3 ml-5">
                                        <label>User ID</label>
                                    </div>
                                    <div className="col-md-4 mt-2 ml-5">
                                       <p className="text-primary">{userData.phone}</p>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-md-4 ml-5">
                                        <label>Name</label>
                                    </div>
                                    <div className="col-md-4 ml-5">
                                       <p className="text-primary">{userData.name}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4 ml-5">
                                        <label>Email</label>
                                    </div>
                                    <div className="col-md-4 ml-5">
                                       <p className="text-primary">{userData.email}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4 ml-5">
                                        <label>Phone</label>
                                    </div>
                                    <div className="col-md-4 ml-5">
                                       <p className="text-primary">{userData.phone}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4 ml-5">
                                        <label>Profession</label>
                                    </div>
                                    <div className="col-md-4 ml-5">
                                       <p className="text-primary">{userData.work}</p>
                                    </div>
                                </div>

                            </div>

                            <div className="tab-pane show fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="row">
                                    <div className="col-md-4 mt-3 ml-5">
                                        <label>Work</label>
                                    </div>
                                    <div className="col-md-4 mt-2 ml-5"> 
                                       <p className="text-primary">Node React MongoDb</p>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-md-4 ml-5">
                                        <label>Projecj</label>
                                    </div>
                                    <div className="col-md-4 ml-5">
                                       <p className="text-primary">4</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4 ml-5">
                                        <label>Workin Hour</label>
                                    </div>
                                    <div className="col-md-4 ml-5">
                                       <p className="text-primary">8</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4 ml-5">
                                        <label>Name</label>
                                    </div>
                                    <div className="col-md-4 ml-5">
                                       <p className="text-primary">Zaid BAba</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4 ml-5">
                                        <label>Name</label>
                                    </div>
                                    <div className="col-md-4 ml-5">
                                       <p className="text-primary">Zaid BAba</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </form>
        </div>       
        
        {/* // <div id="myCarousel" className="carousel slide" data-ride="carousel">
            
        //     <ol className="carousel-indicators">
        //         <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        //         <li data-target="#myCarousel" data-slide-to="1"></li>
        //         <li data-target="#myCarousel" data-slide-to="2"></li>
        //     </ol>   
        
        //     <div className="carousel-inner">
        //     <h2>About Me</h2>		
        //         <div className="carousel-item active">
        //             <div className="img-box"><img src={dp} alt=""/></div>
        //             <p className="testimonial">I Completed my MCA C.S.E at Nirma University.I did my B.com from GLS Institute of Commerce Which is under in Gujarat University.</p>
        //             <p className="overview"><b>Zaid Baba</b>MERN stack developer at <a href>Stimilus Cunsulting</a></p>
        //             <div className="star-rating">
        //                 <ul className="list-inline">
        //                     <li className="list-inline-item"><i className="fa fa-star"></i></li>
        //                     <li className="list-inline-item"><i className="fa fa-star"></i></li>
        //                     <li className="list-inline-item"><i className="fa fa-star"></i></li>
        //                     <li className="list-inline-item"><i className="fa fa-star"></i></li>
        //                     <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
        //                 </ul>
        //             </div>
        //         </div>
        //         <div className="carousel-item">
        //             <div className="img-box"><img src={edit} alt=""/></div>
        //             <p className="testimonial">I am intrested in MERN stack development.I have worked in technologies like Reactjs ,Nodejs,Express js,Mongo DB</p>
        //             <p className="overview"><b>Zaid Baba</b>MERN stack developer at  <a href>Stimulus Consulting</a></p>
        //             <div className="star-rating">
        //                 <ul className="list-inline">
        //                     <li className="list-inline-item"><i className="fa fa-star"></i></li>
        //                     <li className="list-inline-item"><i className="fa fa-star"></i></li>
        //                     <li className="list-inline-item"><i className="fa fa-star"></i></li>
        //                     <li className="list-inline-item"><i className="fa fa-star"></i></li>
        //                     <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
        //                 </ul>
        //             </div>
        //         </div>
        //         <div className="carousel-item">
        //             <div className="img-box"><img src={meme} alt=""/></div>
        //             <p className="testimonial">I am currently working at Stimulus Cunsulting</p>
        //             <p className="overview"><b>Zaid Baba</b>Web Developer at <a href="/">Stimulus Consulting</a></p>
        //             <div className="star-rating">
        //                 <ul className="list-inline">
        //                     <li className="list-inline-item"><i className="fa fa-star"></i></li>
        //                     <li className="list-inline-item"><i className="fa fa-star"></i></li>
        //                     <li className="list-inline-item"><i className="fa fa-star"></i></li>
        //                     <li className="list-inline-item"><i className="fa fa-star"></i></li>
        //                     <li className="list-inline-item"><i className="fa fa-star-half-o"></i></li>
        //                 </ul>
        //             </div>
        //         </div>		
        //     </div>
        
        //     <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
        //         <i className="fa fa-angle-left"></i>
        //     </a>
        //     <a className="carousel-control-next" href="#myCarousel" data-slide="next">
        //         <i className="fa fa-angle-right"></i>
        //     </a>
        // </div> */}
        </>
    )
}


export default About