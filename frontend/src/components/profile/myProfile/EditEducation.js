import  React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import {useForm} from 'react-hook-form';
import AuthService from '../../../service/AuthService';
import AppUserFreelancer from '../../../service/AppUserFreelancer';

const EditEducationModal = (props) => {
    const [filterInputs, setFilterInputs] = useState([])
    const { register, handleSubmit, formState: {errors} } = useForm();

    const handleCategory = (event) => {
        setFilterInputs({...filterInputs, "category": event.target.value})
        
      }

    const removeEducation = () => {
    AppUserFreelancer.removeFreelancerEducation(props.education, AuthService.getCurrentUser().id)
    props.closeModal(false);
    }

      const useStyles = makeStyles((theme) => ({
        root: {
            height: '50px',
            margin: "15px 0",
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#00A392"
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#00A392"
              }
          },
      }));


      const classes = useStyles();

    return (
        <div className="modal-container">
            <form noValidate onSubmit={
                        handleSubmit((data) => {
                            AppUserFreelancer.updateFreelancerEducation({
                              education: data.education, 
                              educationSpecialization: data.educationSpecialization, 
                              educationPeriod: `${data.yearFrom}-${data.yearTo}` }, props.education.id);
                            props.closeModal(false);}
                        )
                        }>
                <div className="modal-content-top">
                    <Typography variant="h6">Edit Education</Typography>
                </div>
                <div className="modal-content-middle">
                  <TextField className={classes.root} id="education" defaultValue={props.education.education} label="Institution Name" variant="outlined" size="small" sx={{ minWidth: "100%" }}
                  {...register("education", {required: true})}/>
                  <TextField className={classes.root} id="educationSpecialization" defaultValue={props.education.educationSpecialization} label="Title of calification" variant="outlined" size="small" sx={{ minWidth: "100%" }}
                  {...register("educationSpecialization", {required: true})}/>
                  <div className="years-section">
                    <FormControl variant="outlined" sx={{ minWidth: "50px" }}>
                      <TextField className={classes.root} id="yearFrom" defaultValue={props.education.educationPeriod.split("-")[0]} label="Year from" variant="outlined" size="small" sx={{ minWidth: "50px" }}
                      {...register("yearFrom", {required: true})}/>           
                    </FormControl>
                    <FormControl variant="outlined" sx={{ minWidth: "50px" }}>
                      <TextField className={classes.root} id="yearTo" defaultValue={props.education.educationPeriod.split("-")[1]} label="Year to" variant="outlined" size="small" sx={{ minWidth: "50px" }}
                      {...register("yearTo", {required: true})}/>           
                    </FormControl>
                  </div>
                </div>
                <div className="modal-content-bottom">
                <p className="remove-language" onClick={removeEducation} >Remove education</p>  
                <Button type="submit" style={{background:"#F0540C"}} variant="contained" sx={{borderRadius:"5px", padding:"10px 5px", height:"0", marginTop:"20px", float:"right", marginBottom:"0"}}>Save Changes</Button>
                </div>
            </form>
        </div>
    )
}

export default EditEducationModal;
