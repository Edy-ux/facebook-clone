import React, { useEffect, useState } from 'react';
import '../HomeHeader.css';

import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { auth, db } from '../firebase';


function HomeHeader() {



  return (
    <div class="homeHeader">
      <div class="homeHeaderLogoAndSearch">
        <Link to="/">
          <img
            src="https://i.ibb.co/72dN4JJ/Facebook-icon-2019-1.png"
            class="homeHeader__logo" alt="Facebook"
          />
        </Link>
        <div class="homeHeader__searchBack" >
          <i class="searchBackIcon" />
        </div>
        <div class="homeHeader__search" >
          <i class="searchIcon" />
        </div>
        <input
          type="text"
          className="searchBox"
          placeholder="Search Facebook"
          
        />
        <div class="dropdown-content3">
          <ul id="list"></ul>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
