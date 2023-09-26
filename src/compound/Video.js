import React from 'react';
import videoBg from '../img/video.mp4';
import Nav from '../Home/nav';
import First1 from '../Tv shows/first1';
export default function Video() {
  return (
    <div className='main '>
          <video id="video" src={videoBg}  autoPlay loop  />
          <div className='content'>       
          <div id='nav'>
        <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <h1>NETFLIX</h1></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span  class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href='first'>TV shows</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="first">Movie</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href='first' aria-disabled="true">New & popular</a>
        </li>
      </ul>
    </div>
  </div>
  
</nav>

</div>
<div className='sun'>
   <h1 id="nnn">skanda</h1>
   <p id="mmm">Trailer</p>
</div>
    </div>
          <Nav/>
          {/* <First1/> */}
         
    </div>
  
    
  );
}
