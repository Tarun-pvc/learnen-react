// UserCard.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChalkboardUser, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import '../styles/adminUsersCard.css'

const AdminUsersCard = (props) => {
    const role = props.user.role;
  return (
    <div className={role}>
    <div className="user-card">
      <div className="user-icon">
        {role==='mentor' ? <FontAwesomeIcon className="card_icon" icon={faChalkboardUser} /> : <FontAwesomeIcon className="card_icon" icon={faUser} />}
      </div>
      <div className="user-info">
        <p className="user-name">{props.user.name}</p>
      </div>
      <div className="menu-icon">
        <FontAwesomeIcon icon={faEllipsisH} />
      </div>
    </div>
    </div>
  );
};

export default AdminUsersCard;
