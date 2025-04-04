import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import api from '../../services/api';
import {
    Container,
    Grid,
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    Box,
    CircularProgress
} from '@mui/material';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const response = await api.get('/api/jobs');
            setJobs(response.data.jobs);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch jobs');
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '80vh'
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Available Jobs
            </Typography>
            {error && (
                <Typography color="error" sx={{ mb: 2 }}>
                    {error}
                </Typography>
            )}
            <Grid container spacing={3}>
                {jobs.map((job) => (
                    <Grid item xs={12} sm={6} md={4} key={job._id}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    transition: 'transform 0.2s ease-in-out'
                                }
                            }}
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {job.jobTitle}
                                </Typography>
                                <Typography color="text.secondary" gutterBottom>
                                    {job.companyName}
                                </Typography>
                                <Typography color="primary" gutterBottom>
                                    Salary: {job.salary}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {job.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    color="primary"
                                    variant="contained"
                                    fullWidth
                                >
                                    Apply Now
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Jobs; 