import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import useInputState from '../hooks/useInputHooks';

const initialContacts = [{
  id: 0,
  firstName: 'Mehin',
  lastName: 'Huseynova',
  homePhone: ` 012 ${811} ${37} ${57}`,
  mobilePhone: `070 ${811} ${37} ${54}`,
  workPhone: `070 ${811} ${37} ${52}`,
  createdDate: '08.07.2020',
  lastModifiedDate: '09.07.2020',
}, {
  id: 1,
  firstName: 'Fidan',
  lastName: 'Alizada',
  homePhone: `012 ${811} ${37} ${53}`,
  mobilePhone: `070 ${811} ${37} ${51}`,
  workPhone: `070 ${811} ${37} ${52}`,
  createdDate: '08.07.2020',
  lastModifiedDate: '09.07.2020',
},
{
  id: 2,
  firstName: 'Arzu',
  lastName: 'Mammadova',
  homePhone: `012 ${811} ${37} ${54}`,
  mobilePhone: `070 ${811} ${37} ${55}`,
  workPhone: `070 ${811} ${37} ${56}`,
  createdDate: '08.07.2020',
  lastModifiedDate: '09.07.2020',
},
{
  id: 3,
  firstName: 'Esmer',
  lastName: 'Mammadova',
  homePhone: `012 ${811} ${37} ${57}`,
  mobilePhone: `070 ${811} ${37} ${58}`,
  workPhone: `070 ${811} ${37} ${59}`,
  createdDate: '08.07.2020',
  lastModifiedDate: '09.07.2020',
},
{
  id: 4,
  firstName: 'Leila',
  lastName: 'Mammadova',
  homePhone: `012 ${811} ${37} ${57}`,
  mobilePhone: `070 ${811} ${37} ${57}`,
  workPhone: `070 ${811} ${37} ${57}`,
  createdDate: '08.07.2020',
  lastModifiedDate: '09.07.2020',
},
{
  id: 5,
  firstName: 'Xeyale',
  lastName: 'Mammadova',
  homePhone: `012 ${811} ${37} ${57}`,
  mobilePhone: `070 ${811} ${37} ${57}`,
  workPhone: `070 ${811} ${37} ${57}`,
  createdDate: '08.07.2020',
  lastModifiedDate: '09.07.2020',
},
{
  id: 6,
  firstName: 'Sebine',
  lastName: 'Mammadova',
  homePhone: `012 ${811} ${37} ${57}`,
  mobilePhone: `070 ${811} ${37} ${57}`,
  workPhone: `070 ${811} ${37} ${57}`,
  createdDate: '08.07.2020',
  lastModifiedDate: '09.07.2020',
},
{
  id: 7,
  firstName: 'Ulker',
  lastName: 'Mammadova',
  homePhone: `012 ${811} ${37} ${57}`,
  mobilePhone: `070 ${811} ${37} ${57}`,
  workPhone: `070 ${811} ${37} ${57}`,
  createdDate: '08.07.2020',
  lastModifiedDate: '09.07.2020',
}];
const initialValue=[{
  firstName:'',
  lastName:'',
  homePhone:``,
  mobilePhone:``,
  workPhone:``,
}]
export const ContactContext = createContext();
const ContactProvider = ({ children }) => {
  ContactProvider.propTypes = {
    children: PropTypes.element.isRequired,
  };

  const history = useHistory();
  const [contacts, setContacts] = useState(initialContacts);
  const [handleValue, handleChange,handleChangeNumber,reset]=useInputState(initialValue);
  const [edit, setEdit] = useState(false);

  const handleRemove = (id) => () => {
    if (window.confirm('Are you sure you wish to delete this contact information?')) {
      const filteredContacs = contacts.filter((contact) => contact.id !== id);
      setContacts(filteredContacs);
      history.push('/');
    }
  };

  const updateContact = (newContact, id) => {
    setContacts(contacts.map((l) => (l.id === id ? newContact : l)));
  };

  return (
    <ContactContext.Provider value={{
      contacts, setContacts, edit, setEdit, handleRemove, updateContact,handleValue,handleChange,handleChangeNumber,reset
    }}
    >
      {children}
    </ContactContext.Provider>

  );
};
export default ContactProvider;
