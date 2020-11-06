import React from 'react';
import { useHistory } from 'react-router-dom';
import { generateTaskByDate } from '../../constants/routes/routes';
import PickerDate from '../date/date';
import './stylee.scss';
import * as moment from 'moment';

const DateTrack = ({selectDate, onDateChange}) => {


    const history = useHistory();

    return (
        <div className="header__date">
                <div className="row">
                    <div className="col-1-of-3 u-margin-top-medium ">
                        <div className="header__date-icon">
                            <ion-icon size="large" name="calendar"></ion-icon>
                        </div>
                    </div>
                    <div className="col-1-of-3 u-margin-top-medium header__date-icon--float">
                        <div className="header__date-calendar">
                            <h2><PickerDate 
                                    value={selectDate}
                                    onChange={(value) => onDateChange(value)}/></h2>
                        </div>
                        <button className="header__date-click" onClick={() => {
                            const formatedDate = moment(selectDate).format('YYYY-MM-DD')
                            history.push(generateTaskByDate(formatedDate))
                        }}>Go to</button>
                        <ion-icon name="chevron-up-outline"></ion-icon>
                    </div>
                    <div className="col-1-of-3 u-margin-top-medium ">
                        <img 
                            className="header__date-logo--box "
                            src="img/vegait-logo.svg"
                            alt="Logo" />
                    </div>
                </div>
            </div>
    )
}

export default DateTrack;