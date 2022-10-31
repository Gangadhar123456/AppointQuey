const AppointmentItem = props => {
  const {appointmentDetails} = props
  const {title} = appointmentDetails

  return (
    <li>
      <div>
        <p>{title}</p>
      </div>
    </li>
  )
}
export default AppointmentItem
