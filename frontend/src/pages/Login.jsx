import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    Container,
    Paper,
    TextField,
    Button,
    Typography,
    Box,
    CircularProgress
} from '@mui/material';
import { loginStart, loginSuccess, loginFailure } from '../store/authSlice';
import api from '../services/api';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginStart());
        try {
            console.log('Attempting login with:', formData);
            const response = await api.post('/user/login', formData);
            console.log('Login response:', response.data);
            
            if (response.data.message === 'Login successful') {
                // Store user info in localStorage
                localStorage.setItem('userId', response.data.userId);
                localStorage.setItem('userType', response.data.userType);
                
                dispatch(loginSuccess({
                    id: response.data.userId,
                    type: response.data.userType
                }));
                
                console.log('User type:', response.data.userType);
                if (response.data.userType === 'admin') {
                    console.log('Redirecting to admin page');
                    navigate('/admin/users');
                } else {
                    console.log('Redirecting to jobs page');
                    navigate('/jobs');
                }
            }
        } catch (err) {
            console.error('Login error:', err);
            dispatch(loginFailure(err.response?.data?.message || 'Login failed'));
        }
    };

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        padding: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%'
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    {error && (
                        <Typography color="error" sx={{ mt: 2 }}>
                            {error}
                        </Typography>
                    )}
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, width: '100%' }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={loading}
                        >
                            {loading ? <CircularProgress size={24} /> : 'Sign In'}
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
};

export default Login;