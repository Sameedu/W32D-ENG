import * as React from 'react';
import './App.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function App() {
  return (
    <>
      
      <Box sx={{ flexGrow: 1}}>
      <div class="boxclass">
        <Grid  color="primary" container spacing={12} alignItems="center" direction="row" justifyContent="center" marginBottom={4} marginTop={1}   >
        
          <Grid item xs={4} md={3} ld = {2}>
            <div class="effect">
                <Card sx={{ minWidth: 275 }}>
                <div class= "btn"><CardContent>
                     <h5 class="card-title">FREE</h5>
                    <h6 class="card-price">$0<span class="period">/month</span></h6>
                    <hr/>
                    <ul class="fa-ul">
                      <i class="material-icons msize">done</i><span class="listing">Single User</span><br/>
                      <i class="material-icons msize">done</i><span class="listing">Unlimited Public Projects</span><br/>
                      <i class="material-icons msize">done</i><span class="listing">Community Access</span><br/>
                      <i class="material-icons msize">done</i><span class="listing">5GB Storage</span><br/>
                      <i class="material-icons msize grayshade">close</i><span class="listing grayshade">Unlimited
                        Private Projects</span><br/>
                        <i class="material-icons msize grayshade">close</i><span class="listing grayshade">Dedicated
                        Phone Support</span><br/>
                        <i class="material-icons msize grayshade">close</i><span class="listing grayshade">Free Subdomain
                        </span><br/>
                     <i class="material-icons msize grayshade">close</i><span class="listing grayshade">Monthly Status
                        Reports</span><br/>
                    </ul>
                  </CardContent>
                  <CardActions>
                   <Button variant="contained">BUTTON</Button>
                  </CardActions></div>
                </Card>
              </div>
          </Grid>

          <Grid item xs={4}  md={3} ld={2}>
          <div class="effect">
              <Card sx={{ minWidth: 275 }}>
              <div class= "btn"><CardContent>
                    <h5 class="card-title">PLUS</h5>
                    <h6 class="card-price">$9<span class="period">/month</span></h6>
                    <hr/>
                    <ul class="fa-ul">
                    <i class="material-icons msize">done</i><span class="listing"><strong>5 Users</strong></span><br/>
                      <i class="material-icons msize">done</i><span class="listing">50GB Storage</span><br/>
                      <i class="material-icons msize">done</i><span class="listing">Unlimited Public Projects</span><br/>
                      <i class="material-icons msize">done</i><span class="listing">Community Access</span><br/>
                      <i class="material-icons msize">done</i><span class="listing">Unlimited Private Projects</span><br/>
                      <i class="material-icons msize">done</i><span class="listing">Dedicated Phone Support</span><br/>
                      <i class="material-icons msize">done</i><span class="listing">Free Subdomain</span><br/>
                      <i class="material-icons msize grayshade">close</i><span class="listing grayshade">Monthly Status Reports</span><br/>
                    </ul>
                </CardContent>
                <CardActions>
                 <Button variant="contained">BUTTON</Button>
                </CardActions></div>
              </Card>
              </div>
        </Grid>

          <Grid item xs={4}  md={3} ls= {2}>
          <div class="effect">
               <Card sx={{ minWidth: 275 }}>
               <div class= "btn"><CardContent>
                       <h5 class="card-title">PRO</h5>
                      <h6 class="card-price">$49<span class="period">/month</span></h6>
                      <hr/>
                      <ul class="fa-ul">
                      <i class="material-icons msize">done</i><span class="listing"><strong>Unlimited Users</strong>
                        </span><br/>
                         <i class="material-icons msize">done</i><span class="listing">150GB Storage</span><br/>
                         <i class="material-icons msize">done</i><span class="listing">Unlimited Public Projects</span><br/>
                         <i class="material-icons msize">done</i><span class="listing">Community Access</span><br/>
                         <i class="material-icons msize">done</i><span class="listing">Unlimited Private Projects</span><br/>
                         <i class="material-icons msize">done</i><span class="listing">Dedicated Phone Support</span><br/>
                         <i class="material-icons msize">done</i><span class="listing"><strong>Unlimited</strong> Free
                          Subdomains</span><br/>
                          <i class="material-icons msize">done</i><span class="listing">Monthly Status Reports</span><br/>
                      </ul>
                </CardContent>
                <CardActions>
                <Button variant="contained">BUTTON</Button>
                </CardActions></div>  
              </Card>
              </div>
          </Grid>
          
        </Grid>
        </div> 
      </Box>
      
    </>
  );
}