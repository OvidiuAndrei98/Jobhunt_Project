import React, {useState, useEffect} from 'react'
import SkillsApi from '../../../../../service/SkillsApi';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const EditSkillsModalReview = (props) => {
    const [skills, setSkills] = useState([])
    const [search, setSearch] = useState('');
    const [savingSkills, setSavingSkills] = useState([...props.skills]);

    const handleSearch = (event) => {
        setSearch(event.target.value);
        searchSkills();
    }

    const handleSelect = (value) => {
        if (value != null ) {
            setSavingSkills([...props.skills,...savingSkills, value])
        }
    }

    const searchSkills = () => {
        SkillsApi.getTenSkills(search).then(res => {
            setSkills(res.data);
        })
    }

    const saveChanges = () => {
        props.saveSkills(savingSkills);
        closeModal();
    };

    const closeModal = () => {
        props.closeModal(false);
    };
   

    return (
        <div className="modal-container">
            <form>
            <div className="modal-content-top">
                    <Typography variant="h6">Add Skills</Typography>
            </div>
            <div className="middle-skills" style={{marginTop:"30px", marginBottom:"50px", marginLeft:"0", padding:"0"}}>
                {savingSkills?.map(skill => {
                    return (
                        <div className="skill">{skill}</div>
                    )
                })}
            </div>
            <div>
                <Autocomplete
                    disablePortal
                    id="searchSkills"
                    options={skills}
                    onChange={(event, value) => {handleSelect(value) }}
                    sx={{ width: "60%" }}
                    renderInput={(params) => 
                    <TextField onChange={handleSearch} sx={{ minWidth: "100%" }} size="small" {...params} label="Search Skills"/>
                    }/>
                    
            </div>
            <div className="align-center-row mtop-40 justify-end">
                <p style={{cursor:"pointer", color:"#F0540C"}} onClick={closeModal}>Cancel</p>
                <Button style={{background:"#F0540C"}} variant="contained" sx={{borderRadius:"5px", padding:"10px 5px", float:"right", marginLeft:"20px"}} onClick={saveChanges} >Save Changes</Button>
            </div>
            </form>
        </div>
    )
}

export default EditSkillsModalReview
