import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './stylee.scss';

const PickerDate = ({onChange, value}) => {
    
    // const getTaskByDateHandler = (value) => {
    //     history.push(getTaskByDateUrl(value));
    // }

    
    
    return (
        <div >
            <DatePicker 
                className="data-picker"
                selected={value}
                onChange={date => onChange(date)} 
                dateFormat='dd/MM/yyyy'
                showYearDropdown
                scrollableMonthYearDropdown
                
                />
        </div>
    )
}

export default PickerDate;