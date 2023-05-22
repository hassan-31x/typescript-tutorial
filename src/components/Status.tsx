// if we want a string to have only a limited number of options
type StatusProps = {
    status: 'loading' | 'success' | 'error'
}
const Status = (props: StatusProps) => {
    let message
    if (props.status === 'loading') {
        message = 'Loading...'
    } else if (props.status === 'success') {
        message = 'Message sent successfully'
    } else if (props.status === 'error') {
        message = 'Something goes wrong'
    }
  return (
    <div>
      <h2 className="text-green-700 text-4xl py-10">Status - {message}</h2>
    </div>
  )
}

export default Status
