import React, { useEffect, useState } from "react";
import "../HomeHeader.css";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { auth, db } from '../firebase';
/* import { useStateValue } from './StateProvider';
 */import '../HomeHeader.css'


const HomeHeader = ({user, selected}) => {

  const [users, usersSet] = useState()

    return (
        <div  className="homeHeader">
            <div  className="homeHeadeLoginAndSearch">
            <Link to="/">
             <img src="https://i.ibb.co/72dN4JJ/Facebook-icon-2019-1.png" class="homeHeader__logo"  alt="Facebook"/>
           </Link>
            </div>
        </div>
    );
}

export default HomeHeader;
