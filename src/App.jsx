import './styles/styles.css'
import Home from './Home';
import ContactUs from './ContactUs';
import ContactUsa from './ContactUsa';
import Services from './Services';
import Aboutus from './about';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homea from './homea';
import Servicesa from './servicesa';
import Aboutusa from './abouta';
import { useEffect } from 'react';





function App() {
  useEffect( () => {
    if ( navigator.userAgent.match( /samsung/i ) ) {
      alert( "Your browser (Samsung Internet) may not show this website's colors correctly in Dark Mode with setting: 'use dark mode: always/when phone dark mode is on' or when option: 'dark theme sites' is checked. Please choose 'light theme websites' or consider using a standards-compliant browser instead. \n\n" +
        "We recommend Firefox, Microsoft Edge, or Google Chrome." );
    }
  }
    , [] )

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/index' element={ <Home /> } />
        <Route path='/Contactus' element={ <ContactUs /> } />
        <Route path='/Services' element={ <Services /> } />
        <Route path='/Aboutus' element={ <Aboutus /> } />
        <Route path='/ar' element={ <Homea /> } />
        <Route path='/arindex' element={ <Homea /> } />
        <Route path='/arContactus' element={ <ContactUsa /> } />
        <Route path='/arServices' element={ <Servicesa /> } />
        <Route path='/arAboutus' element={ <Aboutusa /> } />
      </Routes>
    </Router >
  );
}

export default App;
