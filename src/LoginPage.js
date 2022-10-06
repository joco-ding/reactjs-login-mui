import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FormControl, Input, InputAdornment, InputLabel } from '@mui/material';
import { CodeOutlined, Email, Key, VisibilityOff } from '@mui/icons-material';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://jocodev.id/">
                jocodev.id
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function LoginPage() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
            web: data.get('web'),
        });
    };

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={6}
                lg={8}
                sx={{
                    backgroundImage: 'url(https://img.jocodev.id/bwbg.webp)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12} sm={8} md={6} lg={4} square sx={{
                height: '100%', justifyContent: 'center', alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Box
                    sx={{
                        mx: 4,
                        maxWidth: '400px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Box sx={{ mb: 6, display: 'flex', flexDirection: 'row' }}>
                        <Avatar sx={{ bgcolor: 'secondary.main', mt: 2, mr: 2 }}>
                            <CodeOutlined />
                        </Avatar>
                        <Typography inline component="span" variant="h2" color='primary' fontWeight='bold'>
                            Joco
                        </Typography>
                        <Typography inline component="span" variant="h2" color='secondary' fontWeight='bold'>
                            Dev
                        </Typography>
                    </Box>
                    <Typography component="h1" variant="h5" fontWeight='bold'>
                        MASUK
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="filled-adornment-email">Email</InputLabel>
                            <Input
                                name='email'
                                id="filled-adornment-email"
                                type='email'
                                endAdornment={
                                    <InputAdornment
                                        position='end'>
                                        <Email />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ my: 2 }}>
                            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                            <Input
                                name='password'
                                id="filled-adornment-password"
                                type='password'
                                endAdornment={
                                    <InputAdornment
                                        position='end'>
                                        <Key sx={{ mr: 2 }} />
                                        <VisibilityOff />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Ingatkan Saya"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, borderRadius: 20 }}
                        >
                            Masuk
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Lupa Password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Belum punya akun? Registrasi"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Copyright sx={{ mt: 5 }} />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}
