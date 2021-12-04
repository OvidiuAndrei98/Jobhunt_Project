import React from 'react'
import Footer from '../navigation/Footer'
import Navbar from '../navigation/Navbar'
import TextField from "@mui/material/TextField";
import {useForm} from 'react-hook-form';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import AuthService from '../../service/AuthService';
import { useHistory } from 'react-router-dom';

const CreateCompanyAccount = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const history = useHistory();

    const useStyles = makeStyles((theme) => ({
        root: {
            height: '50px',
            margin: "15px 0",
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#00A392"
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#00A392",
              },
          },
      }));

      const classes = useStyles();
    return (
        <div>
            <Navbar />
            <div style={{marginTop:"50px", height:"64.7vh"}}>
            <form noValidate onSubmit={
            handleSubmit((data) => {
                AuthService.createCompanyAccount(data, AuthService.getCurrentUser().id)
                history.push('/user/contact')
                window.location.reload()
                }
                )
            }>
                <div className="apply-container">
                    <div className="job-box">
                        <h2>Create a company account</h2>
                    </div>
                    <div className="job-box">
                        <h4 style={{marginBottom:"15px"}}>Setup a company account if you want to post jobs and hire talents.</h4>
                        <TextField className={classes.root} id="companyName" label="Company Name" variant="outlined" size="small" sx={{ minWidth: "50%" }}
                        {...register("companyName", {required: true})}/>
                    </div>
                    <div className="job-box">
                        <Button type="submit" style={{background:"#F0540C", width:"20%"}} variant="contained" sx={{borderRadius:"25px", padding:"6px 15px"}}>New company account</Button>
                    </div>
                </div>
            </form>
            </div>
            <Footer />
        </div>
    )
}

export default CreateCompanyAccount
