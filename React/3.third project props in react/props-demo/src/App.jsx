
import shivajiMaharaj from './assets/shivaji Maharaj.jpg'
import sambhajiMaharaj from './assets/sambhaji Maharaj.jpg'

import jagdambaMata from './assets/JAGDAMBA MATA.jpg'
import Card from './components/Card.jsx'
function App(){
  return(
    <>
    <h1>My Inspriations</h1>
    <Card name='Jagdamba Mata' personImg={jagdambaMata} phone='234324345' email='jagdambamata@gmail.com'/>
    <Card name='Shivaji Maharaj' personImg={shivajiMaharaj} phone='12345667' email='shivajimaharaj@gmail.com'/>
    <Card name='Sambhaji Maharaj' personImg={sambhajiMaharaj} phone='454575675' email='sambhajimaharaj@gmail.com'/>


    

    </>
  )
}
export default App