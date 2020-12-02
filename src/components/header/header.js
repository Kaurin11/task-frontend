import React from 'react';
import Quotes from '../quotes/quotes';
import './stylee.scss';

import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/index';

const Header = ({setShowTaskStore}) => {


    return (
        <div className="header">
            <div className="header__text-box">
                <div className="heading-quotes">
                    <h1><Quotes/></h1>
                </div>
            </div>
            <div  className="header__create-btn" onClick={()=> setShowTaskStore()}>
                <ion-icon size="large" name="add-circle"></ion-icon>
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return{
        setShowTaskStore : () => dispatch(actionCreators.setShowTask())
    }
}

export default connect(null,mapDispatchToProps)(Header);