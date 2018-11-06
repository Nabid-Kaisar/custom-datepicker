import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment()
    };

    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(date) {
    await this.setState({
      startDate: date
    });
  //  console.log(this.state.startDate._d);
  }

  render() {
   moment.updateLocale("en", {
      week: {
        dow: 6
      }
    });
  const m  = moment().startOf('month');
  
    return (
      <div>
        <DatePicker
          calendarClassName="custom1"
          selected={this.state.startDate}
          onChange={this.handleChange}
          showTimeSelect
          dateFormat="DD-MM-YYYY hh:mm:ss"
        />
      </div>
    );
  }
}

export default App;
