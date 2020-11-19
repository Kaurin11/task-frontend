import React from 'react';
import Quotes from '../quotes/quotes';
import './stylee.scss';

import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/index';

const Header = ({setShowTaskStore}) => {

    

    // const showCreateTaskHandler = () => {
    //     props.showTaskHandler();
    // }

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

            {/* <div className="header__date">
                <div className="row">
                    <div className="col-1-of-3 u-margin-top-medium ">
                        <div className="header__date-icon">
                            <ion-icon size="large" name="calendar"></ion-icon>
                        </div>
                    </div>
                    <div className="col-1-of-3 u-margin-top-medium header__date-icon--float">
                        <div className="header__date-calendar">
                            <h2><PickerDate /></h2>
                        </div>
                    </div>
                    <div className="col-1-of-3 u-margin-top-medium ">
                        <img 
                            className="header__date-logo--box "
                            src={'src/img/vegait-logo.svg'}
                            alt="Logo" />
                    </div>
                </div>
            </div> */}
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return{
        setShowTaskStore : () => dispatch(actionCreators.setShowTask())
    }
}

export default connect(null,mapDispatchToProps)(Header);