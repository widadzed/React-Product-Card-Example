// src/App.js
import React from 'react';
import { Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Descreption';
import Image from './Image';

const App = () => {
  const firstName = "widad";

  return (
    <div className="App">
      <Card style={{ width: '18rem', margin: 'auto', marginTop: '50px' }}>
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <p style={{ textAlign: 'center', marginTop: '20px' }}>
        {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
      </p>
      {firstName && <img src="https://via.placeholder.com/150" alt="Greeting" style={{ display: 'block', margin: 'auto' }} />}
    </div>
  );
};

export default App;

