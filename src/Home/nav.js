import React, { memo, useEffect, useState } from 'react'
import img from '../img/arjun.webp';
import img1 from '../img/83.webp';
import img3 from '../img/kannathAra.webp';
import img4 from '../img/konda.webp';
import img5 from '../img/dsp.webp';
import img6 from '../img/eega.webp';
import video7 from '../img/pexels_videos.mp4';
import video8 from '../img/spider-man-no-way-home-best-whatsapp-status-download.mp4';
import video9 from '../img/Spider-Man-WhatsApp-Status-4K-_-Black-Spider-Man-WhatsApp-Status-4K-_-Spiderman-WhatsApp-Status-HD720P_HD.mp4';
import video1 from '../img/video5.mp4';
import video2 from '../img/video6.mp4';
import video3 from '../img/video7.mp4';
import video4 from '../img/video8.mp4';


const nav = memo(() => {
   const [mousemv,setMousemv] = useState(false)
   
   const [helper, setHelper] = useState(false);
    function forceUpdate(){
         console.log("test")
        setHelper(!helper);
    }
  return (
    <>
    <div className='container-fulid bg-black'>
    <h1 id="sri">Movie and Tvshows</h1>
    <div className='container-fulid'>
      <div className='row'>
    <div className='col-md-2'>
       <img src={img} alt="" />
    </div>
    <div className='col-md-2'>
       <img src={img1} alt="" />
    </div><div className='col-md-2'>
       <img src={img3} alt="" />
    </div><div className='col-md-2'>
       <img src={img4} alt="" />
    </div><div className='col-md-2'>
       <img src={img5} alt="" />
    </div><div className='col-md-2'>
       <img src={img6} alt="" />
    </div>
      </div>
      <hr />
    </div>
    <div className='container-fulid'>
      <h1 id="sri">Trending Now</h1>
<div className='row'>
<div className='col-md-2'>
<a href={video8} autoPlay loop > <video src={video8}  alt="" /></a>
</div>
<div className='col-md-2'>
<a href={video9} autoPlay loop > <video src={video9}  alt="" /></a>
</div>
<div className='col-md-2'>
<a href={video1} autoPlay loop > <video src={video1}  alt="" /></a>

 </div>
    <div className='col-md-2'>
    <a href={video2} autoPlay loop > <video src={video2}  alt="" /></a>
    </div>
    <div className='col-md-3'>
    <a href={video3} autoPlay loop > <img src={img4}  alt="" /></a>
    </div>
    <div className='col-md-2'>
      <a href={video4} autoPlay loop > <video src={video4}  alt="" /></a>
    </div>
</div>
    </div>
    
    <hr />
    <div className='container-fulid'>
    <div className='row'>
    <div class='col-md-3'>
    <p><a href="">Questions? Call 000-800-919-1694</a></p>
    <p><a href="">FAQ</a></p>
    <p><a href="">Account</a></p>
    <p><a href="#">Speed Test</a></p>
    <p><a href="#">Only on Newtfix</a></p>
    <p><button class="">English</button></p>
    <p><a href="">Netflix india</a></p>
    </div>
<div id='t' class='col-md-3'>
<p><a href="#">investor Relation</a></p>
    <p><a href="#">Ways to Watch</a></p>
    <p><a href="#">Privacy</a></p>
    <p><a href="#">corporate information</a></p>
</div>
<div id='t' class='col-md-3'>
  <p><a href="">Media center</a></p>
  <p><a href="">jobs</a></p>
  <p><a href="">Terms of use</a></p>
</div>
<div id='t'class='col-md-3'>
<p><a href="">cookie prefereance</a></p>
  <p><a href="">contect us</a></p>
  <p><a href="">legal Notices</a></p></div>
    </div>
    </div>
    </div>
    </>
  )
})

export default nav