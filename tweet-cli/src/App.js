import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation'
import Newtweet from './Components/Tweet/Newtweet';
import Tweetcard from './Components/cards/Tweetcard';

import {Row,Col } from "react-bootstrap";


function App() {
  return (
    <div className="App">
       <Navigation />
  <Row>
    
    <Col sm={4}><Newtweet /></Col>
    <Col sm={8}><Tweetcard /></Col>
  </Row>
  

    </div>
  );
}

export default App;
