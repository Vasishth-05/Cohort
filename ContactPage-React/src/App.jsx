
import './App.css'
import Form from './components/ContactForm/Form';
import ContactHeader from './components/ContactHeader/ContactHeader';
import NavigationBar from './components/Navigation/NavigationBar';

function App() {
  return (
    <div>
      <NavigationBar/>
      <main className='mainContainer'>
        <ContactHeader/>
        <Form/>
      </main>
      
    </div>
  )
}

export default App;
