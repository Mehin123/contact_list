import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { ContactContext } from './contexts/ValueProvider';
import Container from '@material-ui/core/Container';
import {
  faMobileAlt,faHome,faBriefcase
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles({
  root: {
    boxSizing:"border-box",
    maxWidth: 300,
    backgroundColor:"#eeeeee"
  },
  media: {
    height: 145,
  },
  link: {
    textDecoration: 'none',
  },
  list: {
    listStyle:'none',
  },
});

export default function ContactList() {
  const classes = useStyles();
  const { contacts } = useContext(ContactContext);
  return (
    <Container maxWidth="lg">
    <h2>IContact</h2>
    <Grid container spacing={3}>
      {contacts.map((contact) => (
        <Grid item xs={3}>
          <Link to={`/${contact.id}`} className={classes.link}>
            <Card className={classes.root}>
              <CardActionArea>
              <CardMedia
              className={classes.media}
              image={contact.image}
              title="Contemplative Reptile"
            />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h6">
                    {contact.firstName} {contact.lastName}
                  </Typography> 
                 <div className={classes.list}>
               <li>
               
                 <FontAwesomeIcon icon={faMobileAlt} /> {contact.mobilePhone} 
                 </li>
                 <li>
    
                 <FontAwesomeIcon icon={faHome} /> {contact.homePhone}
                 </li>
                 <li>
                 <FontAwesomeIcon icon={faBriefcase} />   {contact.workPhone}
                </li>
                 </div>
                 
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>

      ))}
    </Grid>
  </Container>
  );
}
