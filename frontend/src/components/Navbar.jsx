import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Menu,
    MenuItem
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { logout } from '../store/authSlice';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        // Clear localStorage
        localStorage.removeItem('userId');
        localStorage.removeItem('userType');
        
        dispatch(logout());
        handleClose();
        navigate('/login');
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, cursor: 'pointer' }}
                    onClick={() => navigate('/')}
                >
                    Job Portal
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {isAuthenticated ? (
                        <>
                            {user?.type === 'admin' ? (
                                <>
                                    <Button color="inherit" onClick={() => navigate('/admin/users')}>
                                        Manage Users
                                    </Button>
                                    <Button color="inherit" onClick={() => navigate('/add-job')}>
                                        Add Job
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button color="inherit" onClick={() => navigate('/jobs')}>
                                        Jobs
                                    </Button>
                                    <Button color="inherit" onClick={() => navigate('/companies')}>
                                        Companies
                                    </Button>
                                </>
                            )}
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button color="inherit" onClick={() => navigate('/login')}>
                                Login
                            </Button>
                            <Button color="inherit" onClick={() => navigate('/register')}>
                                Register
                            </Button>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;