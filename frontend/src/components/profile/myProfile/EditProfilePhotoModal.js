import  React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import {useFieldArray,useForm, FieldValues} from 'react-hook-form';
import AuthService from '../../../service/AuthService';
import AppUserFreelancer from '../../../service/AppUserFreelancer';
import IconButton from '@mui/material/IconButton';


const EditProfilePhotoModal = (props) => {
    const [filterInputs, setFilterInputs] = useState([])
    console.log(props)
    const user = AuthService.getCurrentUser();
    const formData = new FormData();
    
    const {register, handleSubmit, formState: {errors} } = useForm();

    const handleCategory = (event) => {
        setFilterInputs({...filterInputs, "category": event.target.value})
      }

    
      const useStyles = makeStyles((theme) => ({
          input: {
            display: 'none',
          },
      }));


      const classes = useStyles();

    return (
        <div className="modal-container">
            <form noValidate onSubmit={
                        handleSubmit((data) => {
                            formData.append("file", data.file[0]);
                            AppUserFreelancer.editProfilePhoto(formData,user.id)
                            props.closeModal(false);}
                        )
                        }>
                <div className="modal-content-top">
                    <Typography variant="h6">Edit Photo</Typography>
                </div>
                <div className="modal-content-middle">
                    <input
                    accept="image/*"
                    className={classes.input}
                    id="file"
                    multiple
                    type="file"
                    {...register("file", {required: true})}    />
                    <label htmlFor="file">
                    <Button type='submit' variant="contained" component="span">
                        Upload
                    </Button>
                    </label>
                </div>
                <div className="modal-content-bottom">
                  <Button type="submit" style={{background:"#F0540C"}} variant="contained" sx={{borderRadius:"5px", padding:"10px 5px", height:"0", marginTop:"20px", float:"right", marginBottom:"0"}}>Save Changes</Button>
                </div>
            </form>
        </div>
    )
}

export default EditProfilePhotoModal;
