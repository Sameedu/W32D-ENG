import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Grid, Card, CardContent, CardActions } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import jwt from 'jsonwebtoken';

function QuestionComponent() {

    const [questionsList, setquestionsList] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem("token")

    useEffect( async () => {
        var decodedToken = jwt.decode(token);
        if(decodedToken.exp * 1000 < Date.now() ){
            navigate('/');
        } else {
            var response = await axios.get('http://localhost:3003/questions/get', {
                headers: {
                    "access-token": token
                }
            });
            setquestionsList(response.data);
        }
        
    }, [])

    const updatequestions = async (id, userQuantity) =>{
        var decodedToken = jwt.decode(token);
        if(decodedToken.exp * 1000 < Date.now() ){
            navigate('/');
        } else {
            var response = await axios.put(`http://localhost:3003/questions/update/${id}`, {
                questionsName : questionsName
            }, {
                headers: {
                    "access-token": token
                }
            })
        
            var index = questionsList.findIndex(row => row.id === id);
            var questionsListCopy = [...questionsList];
            questionsListCopy[index] = response.data.value;
            setquestionsList(questionsListCopy);
        }
    }
    const logout = async () => {
        await localStorage.removeItem("token");
        navigate('/')
    }
    return (
        <Grid>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Guvi - questionss
                        </Typography>
                        <Button color="inherit" onClick={logout}>Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <br />
            <Grid container spacing={2} style={{ margin: '2%' }}>
                {questionsList.map(row => (
                    <Grid item key={row._id}>
                        <Card sx={{ width: 275 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {row.questionsName}
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {row.description}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Price: {row.price}
                                </Typography>
                                <Typography variant="body2">
                                    Quantity: {row.quantity}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={e => updatequestions(row._id, ++row.userQuantity)} disabled={row.userQuantity >= row.quantity}>+</Button>  
                                    {row.userQuantity}
                                <Button onClick={e => updatequestions(row._id, --row.userQuantity)} disabled={row.userQuantity <= 0}>-</Button> 
                            </CardActions>
                        </Card>
                    </Grid>
                ))}

            </Grid>
        </Grid>
    )
}

export default QuestionComponent;

// axios.get: 1st param: URL, 2nd param: headers
// axios.post: 1st param: URL, 2nd param: req.body, 3rd: headers
// axios.put: 1st param: URL, 2nd param: req.body, 3rd: headers
// axios.delete: 1st param: URL, 2nd param: headers