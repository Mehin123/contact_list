import React, { useContext } from 'react';
import { useParams,useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import useInputState from './hooks/useInputHooks';
import { ContactContext } from './contexts/ValueProvider';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    textAlign: 'center',
  },
  paper: {
    width: 400,
    padding: '20px',
    listStyle: 'none',
    backgroundColor: '#eeeeee',
    borderRadius: '5%',
  },
  button: {
    padding: '20px',
    margin:'3px'
  },
  avatar: {
    margin: ' 0 auto',
  },
  homeButton:{
    marginTop:"10px",
  }
}));
export default function BrowseContact() {
  const params = useParams();
  const history=useHistory();
  const classes = useStyles();
  const { contacts, edit, setEdit, handleRemove, updateContact } = useContext(ContactContext);
  const index = contacts.findIndex((contact) => contact.id == params.id);
  const [handleValue, handleChange] = useInputState(contacts[index]);
  const myId = contacts[index].id;

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContact(handleValue, myId);
    setEdit(!edit);
  };

  if (edit) {
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <form onSubmit={handleSubmit} className={classes.edit}>
            <InputLabel htmlFor="firstName">First Name</InputLabel>
            <Input name="firstName" id="firstName" value={handleValue.firstName} onChange={handleChange} fullWidth />
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <Input name="lastName" id="lastName" value={handleValue.lastName} onChange={handleChange} fullWidth />
            <InputLabel htmlFor="homePhone">Home Phone</InputLabel>
            <Input name="homePhone" id="homePhone" value={handleValue.homePhone} onChange={handleChange} fullWidth />
            <InputLabel htmlFor="mobilePhone">Mobile Phone</InputLabel>
            <Input name="mobilePhone" id="mobilePhone" value={handleValue.mobilePhone} onChange={handleChange} fullWidth />
            <InputLabel htmlFor="workPhone">Work Phone</InputLabel>
            <Input name="workPhone" id="workPhone" value={handleValue.workPhone} onChange={handleChange} fullWidth />
            <div className={classes.button}>
              <Button color="primary" variant="outlined" type="submit">Save</Button>
              <Button color="secondary" variant="outlined" type="submit">Cancel</Button>
            </div>
          </form>
        </Paper>
      </div>
    );
  }
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar} alt="avatar" src={contacts[index].image} />
        <h1>
          {contacts[index].firstName}
          {' '}
          {contacts[index].lastName}
        </h1>
        <li>
          {`Mobile Phone: ${contacts[index].mobilePhone}`}
        </li>
        <li>
          {`Work Phone: ${contacts[index].workPhone}`}
        </li>
        <li>
          {`Home Phone: ${contacts[index].homePhone}`}
        </li>

        <div className={classes.button}>
          <Button color="secondary" variant="outlined" onClick={handleRemove(myId)}>Remove</Button>
          <Button color="primary" variant="outlined" onClick={handleEdit}>Edit</Button>
       </div>
       <small>
       <strong>Created Time :</strong>
       {' '}
       {contacts[index].lastModifiedDate}
     </small>
     <small>
       {' '}
       <strong>Last Modified Date :</strong>
       {' '}
       {contacts[index].lastModifiedDate}
       {' '}
     </small>
       <div className={classes.homeButton}>
       <Button size="large" onClick={()=>history.push("/")}  variant="outlined"> <FontAwesomeIcon icon={faArrowLeft}/></Button></div>
  
      
      </Paper>
    </div>
  );
}
