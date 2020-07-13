import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { faMobileAlt, faHome, faBriefcase, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContactContext } from './contexts/ValueProvider';

import avatar from './images/avatar.png';
const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    maxWidth: 300,
    backgroundColor: '#eeeeee',
    [theme.breakpoints.down(600)]: {
    margin:"0px 100px",
  },
},
  header: {
    display:"inline",
  },
  media: {
    height: 145,
  },
  link: {
    textDecoration: 'none',

  },
  linkHeader : {
    float:"right",
    textDecoration: 'none',
    color:"gray",
    fontWeight:700,
    border:"1px solid gray",
    padding:"5px",
    margin:"3px",
},
  list: {
    listStyle: 'none',
    
  },
}))

export default function ContactList() {
  const classes = useStyles();
  const { contacts } = useContext(ContactContext);
  return (
    <Container maxWidth="lg">
      <h2 className={classes.header}>IContact</h2>
      <Link className={classes.linkHeader} to="/contacts/newContact"><FontAwesomeIcon icon={faPlus} />Add New Contact</Link>
      <Grid container spacing={3}>
        {contacts.map((contact) => (
          <Grid key={contact.id} item xs={12} sm={6} md={3}>
            <Link to={`/${contact.id}`} className={classes.link}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={avatar}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h6">
                      {contact.firstName}
                      {' '}
                      {contact.lastName}
                    </Typography>
                    <div className={classes.list}>
                      <li>
                        <FontAwesomeIcon icon={faMobileAlt} />
                        {' '}
                        {contact.mobilePhone}
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faHome} />
                        {' '}
                        {contact.homePhone}
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faBriefcase} />
                        {' '}
                        {contact.workPhone}
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
