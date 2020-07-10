import React from 'react';
import './App.css';
import ContactProvider from './contexts/ValueProvider';
import Contacts from './Contacts'
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch}  from 'react-router-dom'
import BrowseContact from './BrowseContact'
function App() {
  return (
    <BrowserRouter>
    <ContactProvider>
    <Switch>
    <Route exact path="/">
    <Contacts/>
    </Route>
    <Route exact path="/:id">
    <BrowseContact/>
    </Route>
    </Switch>
   </ContactProvider>
  </BrowserRouter>
   );
}

export default App;
