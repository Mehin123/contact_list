import React,{useContext} from 'react'
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { ContactContext } from './contexts/ValueProvider';
const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '100px',
      textAlign: 'center',
    },
    header:{
      textAlign:"center",
      color:"gray",
      textShadow:"1px 1px 1px blue"
    },
    paper:{
      width:500,
      boxShadow:"1px 1px 1px 1px gray",
     
    }

}));

function AddContactForm() {
    const classes = useStyles();
    const history=useHistory();
    const { contacts, setContacts,handleValue,handleChange,handleChangeNumber, reset } = useContext(ContactContext);
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("sub")
        setContacts([...contacts, handleValue])
        reset()
        history.push('/');
      }
    return (
        <div>
        <Button  type="button" variant="outlined" onClick={()=>history.push("/")}>Go Back</Button>
        <h1 className={classes.header}>Add New Contact</h1>
         <div className={classes.root}>
         <Paper className={classes.paper}>
         <form onSubmit={handleSubmit} className={classes.edit}>
            <InputLabel htmlFor="firstName">First Name</InputLabel>
            <Input name="firstName" id="firstName" value={handleValue.firstName} onChange={handleChange} fullWidth />
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <Input name="lastName" id="lastName" value={handleValue.lastName} onChange={handleChange} fullWidth />
            <InputLabel htmlFor="homePhone">Home Phone</InputLabel>
            <Input  type="number" name="homePhone" id="homePhone" value={handleValue.homePhone} onChange={handleChangeNumber} fullWidth />
            <InputLabel htmlFor="mobilePhone">Mobile Phone</InputLabel>
            <Input  type="number" name="mobilePhone" id="mobilePhone" value={handleValue.mobilePhone} onChange={handleChangeNumber} fullWidth />
            <InputLabel htmlFor="workPhone">Work Phone</InputLabel>
            <Input  type="number" name="workPhone" id="workPhone" value={handleValue.workPhone} onChange={handleChangeNumber} fullWidth />
            <Button color="primary" variant="contained" type="submit">SUbmit</Button>
            <Button color="secondary" variant="outlined" type="submit">Cancel</Button>
            </form>
           </Paper>
    
      </div>   
        </div>
    )
}

export default AddContactForm
