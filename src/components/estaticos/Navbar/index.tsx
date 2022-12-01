import React from 'react';
import { AppBar, TextField, Toolbar, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import './Navbar.css';

const navigationLinks = [
    {name: 'Home', href: '/'},
    {name: 'Posts', href: ''},
    {name: 'Perfil', href: ''},
    {name: 'Sobre', href: '/sobre'},
    {name: 'Contato', href: '/contato'},
    {name: 'Login', href: '/login'}
]

function Navbar() {
    return (
        <>
            <AppBar position="fixed" className='static'>
                <Box className='header'>
                    <Box className="cursor" >
                        <Typography variant="h5" color="inherit">
                            GeneratEdu
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="start">
                        {navigationLinks.map((item) => (
                            <Box mx={1} className="cursor cursor2">
                                <Typography variant="h6" color="inherit">
                                    <a href={item.href}>{item.name}</a>
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                    <TextField className='input' placeholder='pesquisar'/>
                </Box>
            </AppBar>
        </>
    )
}

export default Navbar;