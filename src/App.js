import './App.css';
// import About from './compound/Frequently';
// import Content from './compound/Content';
// import Download from './compound/Download';
// import Enjoy from './compound/Enjoy';
// import Profile from './compound/Profile';
// import Weatch from './compound/Weatch';
import Navigation from './compound/navigation';
import Home from './compound/Home';
import Video from './compound/Video';
import First1 from './Tv shows/first1';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  // const location = useLocation();
  // console.log(window.location.pathname)
  return (
    <>
    <div className="App bg-black">
      <div className='container-fulid'>
<BrowserRouter>
{/* {window.location.pathname === '/video' ? '' : <Navigation />} */}
{/* {window.location.pathname === '/first1' ? '' : <Video />} */}

       <Routes>

         <Route path="/" element={<Home/>} />
         {/* <Route path="/" element={<Navigation/>} /> */}
         <Route path="/video" element={<Video/>} />
         <Route path="/first" element={<First1/>} />
       </Routes>
    </BrowserRouter>
      
      </div>
     
    </div>
    <div className='container-fulid'>
    
    </div>
    </>
  );
}

export default App;
