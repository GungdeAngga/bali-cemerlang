import React from 'react';
import { Link } from 'react-router-dom';

const UserMenu = () => {


  return (
    <div>
      <Link to='/'>
        <img
            src="/asset/user.png"
            alt="user"
        />
      </Link>
    </div>
  );
};

export default UserMenu;