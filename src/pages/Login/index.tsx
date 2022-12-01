import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import useLocalStorage from 'react-use-localstorage';
import UserLogin from '../../models/UserLogin';
import { api } from '../../services/Service';

const Login = () => {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    );

    const updateModel = (e: ChangeEvent<HTMLInputElement>) => {
        setUserLogin({
            //O '...' desestrutura um dado maior para pegar um item especifico
            ...userLogin,
            [e.target.name]: e.target.value //Peguei o name
        })
    }

    useEffect(() => {
        if (token != '') {
            navigate('/home')
        }
    }, [token])

    //onSubmit lança os dados com o método post ao clicar no botão de enviar os dados
    const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        try { //tente
            //a constante resposta
            const resposta = await api.post('/usuarios/logar', userLogin) //Passa o array
            setToken(resposta.data.token) //o token vira o token do array

            alert('Usuario logado')
        } catch(error){//caso não consiga
            alert('Dados do usuario inconsistentes')
        } 
    }

    return (
        <Box className='container'>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box padding={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center'>Entrar</Typography>
                        <TextField id='usuario' value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} label='usuario' variant='outlined' type='text' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} label='senha' variant='outlined' type="password" name='senha' margin='normal' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary'>
                                Logar
                            </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center'>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className="imagem">

            </Grid>
        </Grid>
        </Box>
    )
}

export default Login;