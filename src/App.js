import './App.css';
import TopSection from './components/TopSection';
import Cities from './components/Cities';
import News from './components/News';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    alert('If data is not updating then try after sometime, around 5-15 minutes. since api version i am using is free. and default is  bengaluru. Thank you. ')
  }, [])

  return (
    <div className='main'>
      <TopSection />
      <Cities />
      <div className='earthWallpaper'></div>
      <News />
      <Footer />
    </div>
  );
}

export default App;
