import React from 'react';
import cloudy from '../assets/cloudy.png';
import thunder from '../assets/thunder.png';
import sunny from '../assets/sunny.png';
import { Link } from 'react-router-dom';

const News = () => {
  return (
    <div className='news'  id='news' >
        <h1 className='heading'>News</h1> 
        <div className='primaryNews'>
            <div className='divNews'>
                <img src={cloudy} alt="" />
                <div className='weatherSentence'>Cloudstorms in manipur</div>      
                <div className='overlay'>
                    <Link>Read More</Link>
                </div>          
            </div> 
            <div className='divNews'>
                <img src={sunny} alt="" />
                <div className='weatherSentence'>It’s Summer season in Mumbai</div>    
                <div className='overlay'>
                    <Link>Read More</Link>
                </div>             
            </div> 
            <div className='divNews'>
                <img src={thunder} alt="" />
                <div className='weatherSentence'>Thunder strikes in delhi</div>                
                <div className='overlay'>
                    <Link>Read More</Link>
                </div> 
            </div> 
        </div>
        
    </div>
  )
}

export default News