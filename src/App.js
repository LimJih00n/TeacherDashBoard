
import './App.css';
import MainBoard from './Components/MainBoard';
import Container from 'react-bootstrap/Container';
import Router from './Components/Router';

function App() {
  return (
    
    <div className="App">
        <Container>
          <Router />
        </Container>
    </div>
  );
}

export default App;
