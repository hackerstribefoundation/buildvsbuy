import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {withStyles} from "@material-ui/core";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Made with loads of \u2615 by '}
            <Link color="inherit" href="https://hackerstribe.tech/">
                Hacker's Tribe Foundation
            </Link>{' '}
        </Typography>
    );
}

function Header() {
    return (
        <Typography color="Secondary">
            IF YOU BUILD IT IN-HOUSE
        </Typography>
    );
}

const useStyles = (theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class Home extends Component {

    state = {
        form_details: {
            annualCostAlt: "",
            numberOfEmp: "",
            avgEmpWage: "",
            weeksToBuild: "",
            daysMaintenance: ""
        }
    }

    render() {
        const {classes} = this.props;

        const onInputChange= (event)=>{
            let form_details = Object.assign({}, this.state.form_details)
            form_details[event.target.id] = event.target.value
            this.setState({
                form_details: form_details
            })
        }

        const onSubmitForm= (event)=>{
            let form_data= Object.assign({}, this.state.form_details)
            console.log(this.state);

            if(isNaN(parseInt(form_data.annualCostAlt))){
                alterState("Error: Incorrect value provided")
                return null;
            }

            if(isNaN(parseInt(form_data.numberOfEmp))){
                alterState("Error: Incorrect value provided")
                return null;
            }

            if(isNaN(parseInt(form_data.avgEmpWage))){
                alterState("Error: Incorrect value provided")
                return null;
            }

            if(isNaN(parseInt(form_data.weeksToBuild))){
                alterState("Error: Incorrect value provided")
                return null;
            }

            if(isNaN(parseInt(form_data.daysMaintenance))){
                alterState("Error: Incorrect value provided")
                return null;
            }

            this.setState({
                notification_msg: {
                    triggered: true,
                    message: ""
                }
            })
        }

        const alterState = (message) => {
                this.setState({
                    form_details: {
                        annualCostAlt: "",
                        numberOfEmp: "",
                        avgEmpWage: "",
                        weeksToBuild: "",
                        daysMaintenance: ""
                    },
                    error_notification_msg: {
                        triggered: true,
                        message: message
                    }
                })
        }

        const onSnackBarHandleClose = () => {
            this.setState({
                notification_msg: {
                    triggered: false,
                    message: ""
                }
            })
        }

        const onErrorSnackBarHandleClose = () => {
            this.setState({
                error_notification_msg: {
                    triggered: false,
                    message: ""
                }
            })
        }

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Typography component="h1" align="center" variant="h4">
                        AI Model Feasibility Calculator
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={1}>

                            <Box mt={5}>
                                <Header/>
                             </Box>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="annualCostAlt"
                                    label="Annual Cost for External AI Model"
                                    name="annualCostAlt"
                                    autoComplete="annualCostAlt"
                                    type="annualCostAlt"
                                    value={this.state.form_details.annualCostAlt}
                                    onChange={onInputChange}
                                />
                            </Grid>

                            <Box mt={5}>
                                <Header/>
                             </Box>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="numberOfEmp"
                                    label="Number of Employees"
                                    name="numberOfEmp"
                                    autoComplete="numberOfEmp"
                                    value={this.state.form_details.numberOfEmp}
                                    onChange={onInputChange}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="avgEmpWage"
                                    label="Average Employee Wage"
                                    name="avgEmpWage"
                                    autoComplete="avgEmpWage"
                                    value={this.state.form_details.avgEmpWage}
                                    onChange={onInputChange}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="weeksToBuild"
                                    label="Weeks to Build"
                                    name="weeksToBuild"
                                    autoComplete="weeksToBuild"
                                    value={this.state.form_details.weeksToBuild}
                                    onChange={onInputChange}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="daysMaintenance"
                                    label="Days of Maintenance"
                                    name="daysMaintenance"
                                    autoComplete="daysMaintenance"
                                    value={this.state.form_details.daysMaintenance}
                                    onChange={onInputChange}
                                />
                            </Grid>

                        </Grid>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={onSubmitForm}
                        >
                            Check Feasibility
                        </Button>
                    </form>
                </div>
                <Box mt={5}>
                    <Copyright/>
                </Box>
            </Container>
        );
    }
}

export default withStyles(useStyles)(Home)