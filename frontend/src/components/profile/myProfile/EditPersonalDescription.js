import  React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import {useFieldArray,useForm, FieldValues} from 'react-hook-form';
import AuthService from '../../../service/AuthService';
import AppUserFreelancer from '../../../service/AppUserFreelancer';

const EditPersonalDescription = (props) => {
    const [filterInputs, setFilterInputs] = useState([])
    const { register, handleSubmit, formState: {errors} } = useForm();

    const handleCategory = (event) => {
        setFilterInputs({...filterInputs, "category": event.target.value})
        
      }

    // const removeEducation = () => {
    // AppUserFreelancer.removeFreelancerEducation(props.education, AuthService.getCurrentUser().id)
    // props.closeModal(false);
    // }

      const useStyles = makeStyles((theme) => ({
        container: {
            display: "flex",
            flexWrap: "wrap"
          },
        root: {
            // height: '50px',
            margin: "15px 0",
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#00A392"
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#00A392"
              },
              "& .MuiInputBase-root": {
                display: "flex",
                alignItems: "start"
              }
          },
      }));


      const classes = useStyles();

    return (
        <div className="modal-container">
            <form noValidate onSubmit={
                        handleSubmit((data) => {
                            AppUserFreelancer.updateFreelancerDescription({
                              title: data.title, 
                              selfDescription: data.selfDescription,
                             }, AuthService.getCurrentUser().id);
                            props.closeModal(false);}
                        )
                        }>
                <div className="modal-content-top">
                    <Typography variant="h6">Edit personal description</Typography>
                </div>
                <div className="modal-content-middle">
                  <TextField className={classes.root} id="title" defaultValue={props.title} label="Headline" multiline variant="outlined" size="small" sx={{ minWidth: "100%" }}
                  {...register("title", {required: true})}/>
                  <TextField className={classes.root} id="selfDescription" defaultValue={props.selfDescription} label="Self Description" maxRows={5} multiline variant="outlined" size="small" sx={{ minWidth: "100%" }}
                  {...register("selfDescription", {required: true})}/>
                </div>
                <div className="modal-content-bottom">
                <Button type="submit" style={{background:"#F0540C"}} variant="contained" sx={{borderRadius:"5px", padding:"10px 5px", height:"0", marginTop:"20px", float:"right", marginBottom:"0"}}>Save Changes</Button>
                </div>
            </form>
        </div>
    )
}

export default EditPersonalDescription
