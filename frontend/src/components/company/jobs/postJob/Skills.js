import Footer from '../../../navigation/Footer'
import Navbar from '../../../navigation/Navbar'
import Next from '../../../../assets/GreaterArrow.png'
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import React, {useState} from 'react'
import SkillsApi from '../../../../service/SkillsApi';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useHistory, useLocation } from 'react-router-dom';
import JobsService from '../../../../service/JobsService';
import { duration } from '@mui/material';

const Skills = () => {
    const [skills, setSkills] = useState([])
    const [search, setSearch] = useState('');
    const [savingSkills, setSavingSkills] = useState([]);

    const history = useHistory();
    const location = useLocation();
    const jobDraft = location.state?.jobDraft;
    const user = location.state?.user;


    const GoToNextStep = () => {
        if (savingSkills.length > 0) {
            jobDraft.skills = savingSkills;
            JobsService.saveJobDraftSkills(jobDraft);
        history.push({
            pathname: `/job-post/scope`,
            state: {jobDraft: {id: jobDraft.id, title: jobDraft.title, category: jobDraft.category, workingHours: jobDraft.workingHours, skills: savingSkills}, user: user}
        })
    }
    }

    const handleSearch = (event) => {
        setSearch(event.target.value);
        searchSkills();
    }

    const handleSelect = (value) => {
        if (value != null ) {
            setSavingSkills([...savingSkills, value])
        }
    }

    const searchSkills = () => {
        SkillsApi.getTenSkills(search).then(res => {
            setSkills(res.data);
        })
    }
   

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
        <>
        <Navbar />
        <div className="info-header">
            <div className="progress-section">
                <div className="circle-step">1</div>
                <p>Title</p>
            </div>
            <img src={Next} style={{marginRight:"20px"}} />
            <div className="progress-section">
                <div className="circle-step active-circle">2</div>
                <p className="active-circle-text">Skills</p>
            </div>
            <img src={Next} style={{marginRight:"20px"}} />
            <div className="progress-section">
                <div className="circle-step">3</div>
                <p>Scope</p>
            </div>
            <img src={Next} style={{marginRight:"20px"}}/>
            <div className="progress-section">
                <div className="circle-step">4</div>
                <p>Budget</p>
            </div>
        </div>
        <div className="post-container flex-row">
            <div className="post-box">
                <h1>What skills does your work require?</h1>
            </div>
            <div className="post-box">
                <h4 style={{marginBottom:"15px"}}>Search skills.</h4>
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
                        sx={{ width: "100%" }}
                        renderInput={(params) => 
                        <TextField onChange={handleSearch} sx={{ minWidth: "100%" }} size="small" {...params} label="Search Skills"/>
                    }/>
                </div>
                <div className="flex-row" style={{justifyContent:"flex-end", marginTop:"141px"}}>
                    <Button style={{background:"white", border:"1px solid rgba(0, 0, 0, 0.20)", color:"#F0540C"}} variant="contained" sx={{borderRadius:"25px", padding:"20px 40px", height:"0"}}>Back</Button>
                    <Button style={{background:"#F0540C", marginLeft:"20px"}} variant="contained" sx={{borderRadius:"25px", padding:"20px 40px",marginBottom:"20px", height:"0"}} onClick={GoToNextStep}>Next</Button>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Skills
