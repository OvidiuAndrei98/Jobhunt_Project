import React, {useState, useEffect} from 'react'
import SkillsApi from '../../../service/SkillsApi';
import {useForm} from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const EditSkillsModal = (props) => {
    const [skills, setSkills] = useState([])
    const [search, setSearch] = useState('');
    const [savingSkills, setSavingSkills] = useState([]);

    const handleSearch = (event) => {
        setSearch(event.target.value);
        searchSkills();
    }

    const handleSelect = (value) => {
        if (value != null ) {
            setSavingSkills([...savingSkills, value])
            console.log(savingSkills)
        }
    }

    const searchSkills = () => {
        SkillsApi.getTenSkills(search).then(res => {
            setSkills(res.data);
        })
    }
   
    const top100Films = ["asd", "bas", "lasd"
    ]

    return (
        <div className="modal-container">
            <form>
            <div className="modal-content-top">
                    <Typography variant="h6">Edit languages</Typography>
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
                    onChange={(event, value) => {handleSelect(value); console.log(value)}}
                    sx={{ width: "60%" }}
                    renderInput={(params) => 
                    <TextField onChange={handleSearch} sx={{ minWidth: "100%" }} size="small" {...params} label="Search Skills"/>
                    }/>
                    
            </div>
            <div className="modal-content-bottom">
                <Button type="submit" style={{background:"#F0540C"}} variant="contained" sx={{borderRadius:"5px", padding:"10px 5px", height:"0", marginTop:"20px", float:"right", marginBottom:"0"}}>Save Changes</Button>
            </div>
            </form>
        </div>
    )
}

export default EditSkillsModal
