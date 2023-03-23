import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const menuList = [
    { type:"id", name: "home", link: "home" },
    { type:"id", name: "cities", link: "cities" },
    { type:"id", name: "news", link: "news" },
  ];
  return (
    <div className='section navbar'>
        {
            menuList?.map(menu => <Link to={menu?.type === 'id' ? `#${menu?.link}` : menu?.link}> <div className='text capitalize-text'>{menu?.name}</div> </Link> )
        }
    </div>
  )
}

export default Navbar