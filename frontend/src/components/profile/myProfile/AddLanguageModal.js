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

const AddLanguageModal = (props) => {
    const [filterInputs, setFilterInputs] = useState([])
    const { register, handleSubmit, formState: {errors} } = useForm();

    const handleCategory = (event) => {
        setFilterInputs({...filterInputs, "category": event.target.value})
        
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
                            AppUserFreelancer.addFreelancerLanguage(data, AuthService.getCurrentUser().id);
                            props.closeModal(false);}
                        )
                        }>
                <div className="modal-content-top">
                    <Typography variant="h6">Add Language</Typography>
                </div>
                <div className="modal-content-middle">
                <TextField className={classes.root} id="language" label="Language" variant="outlined" size="small" sx={{ minWidth: "100%" }}
                {...register("language", {required: true})}/>
                <FormControl variant="outlined" sx={{ minWidth: "100%" }}>
                                <TextField
                                     className={classes.root}
                                     size="small"
                                     variant="outlined"
                                     labelId="proficiency"
                                     id="proficiency"
                                     onChange={handleCategory}
                                     label="Proficiency"
                                     select
                                    {...register("proficiency", {required: true})}
                                >
                            <MenuItem value="undefined">
                            <em>Please select</em>
                              </MenuItem>
                              <MenuItem value={"Elementary proficiency"}>Elementary proficiency</MenuItem>
                              <MenuItem value={"Limited Working proficiency"}>Limited Working proficiency</MenuItem>
                              <MenuItem value={"Full proffesional proficiency"}>Full proffesional proficiency</MenuItem>
                              <MenuItem value={"Native proficiency"}>Native proeficiency</MenuItem>
                            </TextField>
                                </FormControl>
                </div>
                <div className="modal-content-bottom">
                <Button type="submit" style={{background:"#F0540C"}} variant="contained" sx={{borderRadius:"5px", padding:"10px 5px", height:"0", marginTop:"20px", float:"right", marginBottom:"0"}}>Save Changes</Button>
                </div>
            </form>
        </div>
    )
}

export default AddLanguageModal
