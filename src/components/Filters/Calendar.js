import React, {Component} from 'react';
import DayPicker, {DateUtils} from "react-day-picker";
import './style.css';

import "react-day-picker/lib/style.css"

class FilterCalendar extends Component {

    state = {
        from: null,
        to: null
    };

    handleDayClick = day => this.setState(DateUtils.addDayToRange(day, this.state));

    render() {
        const {from, to} = this.state;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;
        return (
            <div className="date-range">
                <DayPicker
                    ref="datepicker"
                    selectedDays={day => DateUtils.isDayInRange(day, {from, to})}
                    onDayClick={this.handleDayClick}
                />
                {selectedRange}
            </div>
        );
    }

}

export default FilterCalendar;
