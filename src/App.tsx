import React from 'react';
import { Button } from './components/Button';


const App: React.FC = () => {
  return (
    <div>
      <Button onClick={() => console.log('Clicked!')}>Click Me</Button>
    </div>
  );
};

export default App;
