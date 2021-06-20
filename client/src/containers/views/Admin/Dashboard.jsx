import React from 'react'
import { Redirect } from 'react-router-dom';
import ManageArticle from './ManageArticle'
import ManageTopicd from './ManageTopicd';
import ManageUserd from './ManageUserd';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { instance } from '../../../axios.instance';
import Button from '@material-ui/core/Button';
import Cookies from 'universal-cookie';
import { connect } from 'react-redux';



export default class Dashboard extends React.Component {

  
  render(){
    if (!localStorage.getItem('user')) return <Redirect to="/login" />
    return (
      <>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography >Quản lý Topic</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ManageTopicd />
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={6}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography >Quản lý Người dùng</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ManageUserd />
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12}>
          <ManageArticle />
        </Grid>
      </Grid>
      </>
    )
  }
}