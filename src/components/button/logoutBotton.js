import React from 'react';
import './stylee.scss';

const LogoutButton = ({onClick,name}) => {

    return (
        <div >
            <button className="btn btn__logout btn--animated" onClick={onClick}>{name}</button >
        </div>
    )
}

export default LogoutButton;