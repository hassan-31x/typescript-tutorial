//Props are an object
type GreetProps = {
  name: string
  messageCount: number
  isLoggedin: boolean
  detail: {
    first: string,
    last: string
  }
  list: {
    first: string,
    last: string
  }[]
}

const Greet = (props: GreetProps) => {
  return (
    <div>
        {props.isLoggedin ?
          <h2 className="text-4xl font-semibold">Hello {props.name}! You have {props.messageCount} unread messages</h2> :
          <h2 className="text-3xl">Welcome User. Click here to login</h2>
        }

        <h3 className="text-2xl">First Name: <span className="text-red-300 font-semibold">{props.detail.first}</span></h3>

        {props.list.map(frnd => (
          <span key={frnd.first} className="text-blue-700 px-2">{frnd.first} {frnd.last}</span>
        ))}
    </div>
  )
}

export default Greet
