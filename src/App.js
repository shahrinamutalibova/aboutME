
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/js/dist/collapse"
import Card from "./card";
import "./index.css"
import React, { Component } from 'react';
import { TypeAnimation } from "react-type-animation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() { 
    return (
        <div style={{overflowX:"hidden"}}>
            <nav style={{position:"fixed",backgroundColor:"white",zIndex:"2"}} class="navbar w-100 navbar-expand-lg bg-body-white shadow">
              <div  class="container-fluid">
                <a class="navbar-brand w-50 " href="#"> <img height={30} src="https://cdn.dribbble.com/users/1413861/screenshots/4536096/w.gif" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div  class="collapse navbar-collapse w-50" id="navbarSupportedContent">
                  <ul style={{fontSize:"17px",fontFamily:"sans-serif"}} class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item ">
                      <a class="nav-link" aria-current="page" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#about">About me</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#skills">Skills</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#writeups">Wripteups</a>
                    </li><li class="nav-item">
                      <a class="nav-link" href="#projects"> Projects</a>
                    </li><li class="nav-item">
                      <a class="nav-link" href="#contact">Contact</a>
                    </li>
            </ul>
                </div>
              </div>
    </nav>
            <div id="home">
            <center id="img"><img id="image" style={{width:"25%",height:"250px",marginTop:"80px"}} src="https://yt3.ggpht.com/a/AATXAJy50GM5eaWXeNWTSU0kMDhX5pWM8WQ7c8w-CHMu=s900-c-k-c0x00ffffff-no-rj" /></center>
            <center>
              <h3>I'm <TypeAnimation
        sequence={['Shahrina', 1000, 'Developer',1000, 'Freelancer', 1000]}
        style={{ fontSize: '1em', color:"yellow",fontFamily:"sans-serif" }}
        repeat={Infinity}
      /></h3></center>
      <br />
      <center><h3>Full Stack Developer <span style={{color: "yellow",fontFamily:"sans-serif" }}>/Bug Bounty Hunter</span></h3></center>     
      </div>
            <br />
            <br />
          <div id="about">
          <div style={{height:"80vh"}} className="row d-flex">
                  <div className="row bg-warning text-white px-4">
                    <center>
                      <h3 style={{marginTop:"50px"}}>About me</h3>
                    </center>
                    <div style={{ paddingLeft:"30px"}} className="col-md-6 ">
                      <h4>
                      <i><TypeAnimation
            sequence={["Hello, my name is Shakhrina, I am currently learning web programming at the it center, all I know is html, css, sass, bootstrap, javascript, react , my teacher is Ilkhom Saydaliyev. Programming languages I would like to learn in the future Python, node.js Flutter, 3d max", 1000, ]}
            style={{ fontSize: '1em', color:"white",fontFamily:"sans-serif" }}
            repeat={Infinity}/>
            </i>
                      </h4>
                    </div>
                    <div style={{marginTop:"-20px", paddingLeft:"30px"}} className="col-md-6 p-3">
                    <div id="row" className="row">
                    <div className="col-md-6">
                  <i>  <h4>LastName:</h4> 
                    <h4>FristName:</h4>  
                    <h4>Age:</h4>  
                    <h4> Birthday:</h4>
                    <h4>Hoby:</h4> 
                    <h4> Teacher:</h4></i>
                      </div>
                    <div className="col-md-6">
                    <i>
                    <h4>Mirmaxsudovna</h4>
                    <h4>Shahrina</h4>
                    <h4>13</h4>
                    <h4>2009.15.08</h4>
                    <h4>Developer</h4>
                    <h4>Ilkhom Saydaliyev</h4>
                    </i>
                    </div>
                    </div>
                    </div>
                  </div>
                </div>
          </div>
          <div id="skills">
          <Card skills = "Scills"/>
        <div className="row my-5  ">
            <div className="col-md-4">
              <center><img style={{height:"100px"}} src="https://luxe-host.ru/wp-content/uploads/b/4/2/b4285bc6dace8908557755d9773e2e3d.jpeg" /></center>
                <center>
                  <img style={{height:"100px",marginTop:"30px"}} src="https://spacenil.com/tutorial/public/uploads/categories/categories_1599665107.png" alt="" />
                  </center>
                  <center>
                    <img  style={{height:"100px",marginTop:"30px"}}src="https://2.bp.blogspot.com/-akUMQE_QrbQ/WlRknLVGMzI/AAAAAAAABK8/17IzwwW3nMEAedZP5TiP0FquLnhhIPZdgCLcBGAs/s1600/dj.png" alt="" />
                  </center>
            </div>
            <div className="col-md-4">
            <center>
                <img style={{height:"130px",marginTop:"-20px"}}  src="https://www.thecrazyprogrammer.com/wp-content/uploads/2017/11/CSS3.jpg" />
              </center>
              <center>
                <img style={{height:"100px",marginTop:"20px"}} src="https://shaxzod-dev.netlify.app/static/media/python.c9009bc340863d0fbef7.png"/>
              </center>
              <center>
                <img style={{height:"100px",marginTop:"20px"}} src="https://green-api.com/integrations/img/nodejs.png" alt="" />
              </center>
            </div>
            <div className="col-md-4">
            <center>
                    <img style={{height:"100px"}} src="https://1000marcas.net/wp-content/uploads/2021/06/MongoDB-Emblem-2048x1280.jpg" alt="" />
                  </center>
                  <center>
                <img style={{height:"100px",marginTop:"20px"}} src="https://pluspng.com/img-png/firebase-logo-png-firebase-logo-png-transparent-amp-svg-vector-pluspng-2400x3291.png" alt="" />
              </center>
              <center>
                <img style={{height:"100px",marginTop:"20px"}} src="https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png" />
              </center>
            </div>

        </div>
          </div>
          <div class="writeups bg-dark" id="writeups">
            <h1>Writeups</h1>
            <div className="wrapper">
              <div class="card_writeups_pearnts">
              <div className="row p-4">
              <div className="col-md-4  aos-init aos-animate" data-aos="fade-left" data-aos-once="true">
                <div style={{height:"400px"}} className="card p-5">
                  <h3>
                    This is a title of a writeup</h3>
                <p>Be careful making wishes in the dark, Can't e sure when they've hit their mark, and besides in the meantime...</p>
                </div>
                <div style={{height:"400px"}} className="card  my-4 aos-init aos-animate p-5" data-aos="fade-right" data-aos-once="true">
                  <h3>Another great writeup title</h3><p>stomp stiomp, I've arrivied deop the beat nasty face  why you looking at me, flyin flyin flyin flyin thrugh the sky ina sapchinp I am an alien tonight...</p>
                      </div>
                </div>
                <div className="col-md-4  aos-init aos-animate" data-aos="zoom-in" data-aos-once="true">
                <div style={{height:"400px"}} className="card p-5">
                <h3>Another great writeup title</h3>
                  <p>stomp stiomp, I've arrivied deop the beat nasty face why youlooking at me, flyin flyin flyin flyin thrugh the sky inasapchinp I am an alien tonight...</p>
                </div>
                  <div style={{height:"400px"}} class="card p-5 my-4 aos-init aos-animate" data-aos="zoom-in" data-aos-once="true">
                        <h3>Why chrissy costanza is the hottest singer alive</h3>
                      <p>Let's get this right don't make it slow, don't pretend we've never met before.  Cause baby this love is something we both know...</p>
                      </div>
                  </div>
                <div className="col-md-4   aos-init aos-animate" data-aos="fade-right" data-aos-once="true">
                <div style={{height:"400px"}} className="card p-5">
                  <h3>This is a title of a writeup</h3>
                    <p>Be careful making wishes in the dark, Can't e sure when they've hit their mark, and besides in the meantime...</p>
                </div>
                      <div style={{height:"400px"}} class="card  p-5 my-4 aos-init aos-animate" data-aos="fade-left" data-aos-once="true">
                        <h3>Why chrissy costanza is the hottest singer alive</h3><p>stomp stiomp, I've arrivied deop the beat nasty face  why you looking at me, flyin flyin flyin flyin thrugh the sky ina sapchinp I am an alien tonight...</p>
                    </div>
              </div>
            </div>    
              </div>
              </div>
              </div>
          <div id="projects">
            <div className="row p-4">
              <div className="col-md-4">
          <div className="card">
          <img style={{borderRadius:"6px"}} className="w-100" src="https://shaxzod-dev.netlify.app/static/media/1.79223825960a51c1e161.jpg" alt="" />
            </div>   
            <div className="card my-4">
            <img style={{borderRadius:"6px"}} className="w-100" src="https://shaxzod-dev.netlify.app/static/media/3.8ccb8c79d78fcb62776b.jpg" alt="" />
            </div>
            </div>
              <div className="col-md-4">
                <div className="card">
                  <img style={{borderRadius:"6px"}} className="w-100" src="https://shaxzod-dev.netlify.app/static/media/2.f71855605f84791d4c3e.jpg" alt="" />
                </div>
                <div className="card my-4">
                  <img style={{borderRadius:"6px",height:"208px"}} className="w-100" src="https://shaxzod-dev.netlify.app/static/media/4.c2b1c17d79f5bf0f9de8.jpg" alt="" />
                </div>
                </div>
              <div className="col-md-4">
                <div className="card">
                  <img style={{borderRadius:"6px"}} src="https://shaxzod-dev.netlify.app/static/media/5.b0bb72c397e706d7458a.jpg" alt="" />
                </div>
                <div className="card my-4">
                  <img  style={{borderRadius:"6px"}} src="https://shaxzod-dev.netlify.app/static/media/6.f9134ff105fce01d832f.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-dark" id="contact">
          <center><h3 className="text-white p-3">Contact</h3></center>
          <div className="row p-4">
            <div className="col-md-6">
              <input style={{width:"100%", height:"60px",padding:"10px"}} type="text" placeholder="First Name" />
              <input className="my-3" style={{width:"100%", height:"60px",padding:"10px"}} type="text" placeholder="Last Name" />
              <input style={{width:"100%", height:"60px",padding:"10px"}} type="text"  placeholder="Phone Number"/>
            </div>
            <div className="col-md-6">
              <textarea style={{padding:"10px"}} name="" id="" cols="60" rows="8" placeholder="your message...."></textarea>
            </div>
          </div>
          <center><button className="btn border text-white my-4">Submit </button>
          </center>
          <div className="footer bg-warning py-4">
            <center><h2 className="text-white">Shahrina</h2></center>
            <center><h6  style={{paddingTop:"10px",color:"white"}}>telegram : @Shahrina_Mirmaxsudovna</h6></center>
          </div>
          </div>
  </div>

    );
  }
}

export default App;


