import React, {useState, useEffect} from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const EditCategoryModal = (props) => {
    const [value, setValue] = React.useState(props.category);

    const theme = createTheme({
        palette: {
            orange: {main: "#F0540C"},
        },
        });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

    const saveChanges = () => {
        props.saveCategory(value);
        closeModal();
    };

    const closeModal = () => {
        props.closeModal(false);
    };
   

    return (
        <div className="modal-container">
             <div className="modal-content-top" style={{marginBottom:"40px"}}>
                    <Typography variant="h6">Edit Category</Typography>
            </div>
            <ThemeProvider theme={theme}>
                <FormLabel component="legend">Category</FormLabel>
                <RadioGroup
                    aria-label="category"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel value="web-development" control={<Radio size="small" color="orange" />} label="Web-Development" />
                    <FormControlLabel value="marketing" control={<Radio size="small" color="orange" />} label="Marketing" />
                    <FormControlLabel value="finance" control={<Radio size="small" color="orange" />} label="Finance" />
                </RadioGroup>
            </ThemeProvider>
            <div className="align-center-row mtop-40 justify-end">
                <p style={{cursor:"pointer", color:"#F0540C"}} onClick={closeModal}>Cancel</p>
                <Button style={{background:"#F0540C"}} variant="contained" sx={{borderRadius:"5px", padding:"10px 5px", float:"right", marginLeft:"20px"}} onClick={saveChanges} >Save Changes</Button>
            </div>
        </div>
    )
}

export default EditCategoryModal