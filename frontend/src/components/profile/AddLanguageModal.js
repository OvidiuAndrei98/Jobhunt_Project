import  React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const AddLanguageModal = () => {
    const [filterInputs, setFilterInputs] = useState([])

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
            <form>
                <div className="modal-content-top">
                    <Typography variant="h6">Add Language</Typography>
                </div>
                <div className="modal-content-middle">
                <TextField className={classes.root} id="outlined-basic" label="Language" variant="outlined" size="small" sx={{ minWidth: "100%" }}/>
                <FormControl variant="outlined" sx={{ minWidth: "100%" }}>
                                <TextField
                                     className={classes.root}
                                     size="small"
                                     variant="outlined"
                                     labelId="category"
                                     id="category"
                                     onChange={handleCategory}
                                     label="Proeficiency"
                                     select
                                >
                                <MenuItem value="undefined">
                                <em>Please select</em>
                              </MenuItem>
                              <MenuItem value={"Elementary proeficiency"}>Elementary proeficiency</MenuItem>
                              <MenuItem value={"Limited Working proeficiency"}>Limited Working proeficiency</MenuItem>
                              <MenuItem value={"Full proffesional proeficiency"}>Full proffesional proeficiency</MenuItem>
                              <MenuItem value={"Native proeficiency"}>Native proeficiency</MenuItem>
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
