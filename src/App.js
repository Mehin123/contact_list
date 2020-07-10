import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactProvider from './contexts/ValueProvider';
import Contacts from './Contacts';
import BrowseContact from './BrowseContact';

function App() {
  return (
    <BrowserRouter>
      <ContactProvider>
        <Switch>
          <Route exact path="/">
            <Contacts />
          </Route>
          <Route exact path="/:id">
            <BrowseContact />
          </Route>
        </Switch>
      </ContactProvider>
    </BrowserRouter>
  );
}

export default App;
