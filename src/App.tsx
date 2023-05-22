import './App.css'
import Button from './components/Button'
import Greet from './components/Greet'
import Input from './components/Input'
import Status from './components/Status'
import Style from './components/Style'

function App() {

  const detail = {
    first: 'Ali',
    last: 'Ahmed'
  }

  const friends = [
    {
      first: 'Nigga',
      last: 'Niger'
    },
    {
      first: 'Bogo',
      last: 'Tiger'
    },
    {
      first: 'Kashif',
      last: 'Saleem'
    },
  ]

  return (
    <>
      <Greet name='Hassan' messageCount={10} isLoggedin={true} detail={detail} list={friends} />
      <Status status='loading' />

      {/* <Button handleClick={() => {
        console.log('Button Clicked')
      }} /> */}
      <Button handleClick={(event) => {
        console.log('Button Clicked', event)
      }} />

      <Input value='' handleChange={(event) => console.log(event)} />

      <Style styles={{border: '1px solid black', padding: '1rem '}} />
    </>
  )
}

export default App
