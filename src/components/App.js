import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import About from './About';
import Rave from './Rave';

const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path='/' component={Landing} />
          <Route exact path='/rave' component={Rave} />
          <Route exact path='/about' component={About} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
