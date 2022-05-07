import React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './Cards.css';
import './450into300image.jpg';


const theme = createTheme({
    palette: {
        primary: {
          main: '#fafafa',
        },
        secondary: {
          main: '#212121',
        },
      },
    typography: {
      button: {
          textTransform: 'capitalize'
        }, 
    }
  });

export default function Cards(){
    return (
        <ThemeProvider theme={theme}>
          <Box sx={{ width: '100%' }}>
              <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 0.25 }} padding={16}>

                <Grid item xs={8} md={3}>
                <div class="cardext">
                    <div class="imagediv"></div>
                    <div class="datadiv">
                    </div>
                    <button>View Options</button>

                </div>
                </Grid>

                <Grid item xs={8} md={3}>
                <div class="cardext">
                    <div class="imagediv"></div>
                    <div class="datadiv">
                    </div>
                    <button>View Options</button>

                </div>
                </Grid>

                <Grid item xs={8} md={3}>
                <div class="cardext">
                    <div class="imagediv"></div>
                    <div class="datadiv">
                    </div>
                    <button>View Options</button>

                </div>
                </Grid>

                <Grid item xs={8} md={3}>
                <div class="cardext">
                    <div class="imagediv"></div>
                    <div class="datadiv">
                    </div>
                    <button>View Options</button>

                </div>
                </Grid>

                <Grid item xs={8} md={3}>
                <div class="cardext">
                    <div class="imagediv"></div>
                    <div class="datadiv">
                    </div>
                    <button>View Options</button>

                </div>
                </Grid>

                <Grid item xs={8} md={3}>
                <div class="cardext">
                    <div class="imagediv"></div>
                    <div class="datadiv">
                    </div>
                    <button>View Options</button>

                </div>
                </Grid>

                <Grid item xs={8} md={3}>
                <div class="cardext">
                    <div class="imagediv"></div>
                    <div class="datadiv">
                    </div>
                    <button>View Options</button>

                </div>
                </Grid>

                <Grid item xs={8} md={3}>
                <div class="cardext">
                    <div class="imagediv"></div>
                    <div class="datadiv">
                    </div>
                    <button>View Options</button>

                </div>
                </Grid>

              </Grid>
          </Box>
        </ThemeProvider>
    );
};