import logo from './logo.svg';
import './App.css';
import './assets/css/app.css'
import SideBar from './components/sideBar/sideBar'

import ContentWrapper from './components/contentWrapper/contentWrapper';


function App() {
  return (
    <div id="wrapper">
     
    <SideBar></SideBar>
    <ContentWrapper></ContentWrapper>
    </div>
  );
}

export default App;
