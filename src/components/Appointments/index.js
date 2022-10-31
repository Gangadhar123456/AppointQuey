import {Component} from 'react'

import {v4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {titleInput: '', appointmentsList: []}

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {titleInput} = this.state
    const newAppointment = {
      id: v4(),
      titleInput,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
    }))
  }

  render() {
    const {titleInput, appointmentsList} = this.state
    return (
      <div>
        <h1>Add Appointment</h1>
        <form onSubmit={this.onAddAppointment}>
          <label htmlFor="title">TITLE</label>
          <br />
          <input
            id="title"
            value={titleInput}
            placeholder="Title"
            onChange={this.onChangeTitleInput}
          />
          <br />
          <button type="button">Add</button>
        </form>
        <ul>
          {appointmentsList.map(eachAppoint => (
            <AppointmentItem
              appointmentDetails={eachAppoint}
              key={eachAppoint.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Appointments
