import React from 'react'
import Footer from '../../../navigation/Footer'
import Navbar from '../../../navigation/Navbar'
import Next from '../../../../assets/GreaterArrow.png'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useHistory, useLocation } from 'react-router-dom';
import Edit from '../../../../assets/Edit.png'
import FormHelperText from '@mui/material/FormHelperText';
import JobsService from '../../../../service/JobsService';


const JobScope = () => {
    const [size, setSize] = React.useState('');
    const [duration, setDuration] = React.useState('');
    const [experience, setExperience] = React.useState('');
    const [editSize, setEditSize] = React.useState(true);
    const [editDuration, setEditDuration] = React.useState(true);
    const [editExperience, setEditExperience] = React.useState(true);
    const [helperText, setHelperText] = React.useState('');
    const [helperTextExperience, setHelperTextExperience] = React.useState('');

    const history = useHistory();
    const location = useLocation();
    const jobDraft = location.state?.jobDraft;
    const user = location.state?.user;

    const theme = createTheme({
        palette: {
            orange: {main: "#F0540C"},
        },
        });

    const GoToNextStep = () => {
        if (size != '' && duration != '' && experience != '') {
            jobDraft.scope = {jobSize: size, jobDuration: duration, experienceLevel: experience}
            JobsService.saveJobDraftScope(jobDraft);
            history.push({
                pathname: `/job-post/budget`,
                state: {jobDraft: jobDraft, user: user}
            })
        } 
    }

    const handleEditSize = () => { 
        setEditSize(!editSize)
    }

    const handleEditDuration = () => { 
        setEditDuration(!editDuration)
    }

    const handleEditExperience = () => { 
        setEditExperience(!editExperience)
    }

    const handleChange = (event) => {
        setSize(event.target.value);
        if (event.target.value === 'large') {
            setHelperText('Longer term or complex initiatives (ex. develop and execute a brand strategy (i.e., graphics, positioning))')
        } else if (event.target.value === 'medium') {
            setHelperText('Well-defined projects (ex. design business rebrand package (i.e., logos, icons))')
        } else if (event.target.value === 'small') {
            setHelperText('Quick and straightforward tasks (ex. create logo for a new product)')
        }
        setEditSize(false)
      };

      const handleChangeDuration = (event) => { 
          setDuration(event.target.value);
          setEditDuration(false)
      };

      const handleChangeExperience = (event) => { 
        setExperience(event.target.value);
        if (event.target.value === 'Experienced') {
            setHelperTextExperience('Looking for comprehensive and deep expertise in this field')
        } else if (event.target.value === 'Intermediate') {
            setHelperTextExperience('Looking for substantial experience in this field')
        } else if (event.target.value === 'Beginner') {
            setHelperTextExperience('Looking for someone relatively new to this field')
        }
        setEditExperience(false)
    };
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
                <div className="circle-step">2</div>
                <p>Skills</p>
            </div>
            <img src={Next} style={{marginRight:"20px"}} />
            <div className="progress-section">
                <div className="circle-step active-circle">3</div>
                <p className="active-circle-text">Scope</p>
            </div>
            <img src={Next} style={{marginRight:"20px"}}/>
            <div className="progress-section">
                <div className="circle-step">4</div>
                <p>Budget</p>
            </div>
        </div>
        <div className="post-container flex-row">
            <div className="post-box">
                <h1>Next, estimate the scope of your work.</h1>
                <p>These aren’t final answers, but this information helps us recommend the right talent for what you need.</p>
            </div>
            <div className="post-box">
                <ThemeProvider theme={theme}>
                    {editSize ? (
                        [
                        // <FormLabel component="legend">Category</FormLabel>,
                        <RadioGroup
                            aria-label="size"
                            name="controlled-radio-buttons-group"
                            value={size}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="large" control={<Radio size="small" color="orange" />} label="Large" />
                            <FormHelperText>Longer term or complex initiatives (ex. develop and execute a brand strategy (i.e., graphics, positioning))</FormHelperText>
                            <FormControlLabel value="medium" control={<Radio size="small" color="orange" />} label="Medium" />
                            <FormHelperText>Well-defined projects (ex. design business rebrand package (i.e., logos, icons))</FormHelperText>
                            <FormControlLabel value="small" control={<Radio size="small" color="orange" />} label="Small" />
                            <FormHelperText>Quick and straightforward tasks (ex. create logo for a new product)</FormHelperText>
                        </RadioGroup>
                        ]):(
                    <div className="flex-row-between">
                        <div style={{width:"100%"}}>
                        <p>{size.charAt(0).toUpperCase() + size.substring(1)}</p>
                        <FormHelperText>{helperText}</FormHelperText>
                        </div>
                        <img src={Edit} style={{width:"33px", height:"33px"}} onClick={handleEditSize}/>
                    </div>
                    )}
                    <br/>
                    <br/>
                    {editDuration ? (
                    [
                    <FormLabel component="legend">How long will your work take?</FormLabel>,
                    <RadioGroup
                        aria-label="duration"
                        name="controlled-radio-buttons-group"
                        value={duration}
                        onChange={handleChangeDuration}
                    >
                        <FormControlLabel value="More than 6 months" control={<Radio size="small" color="orange" />} label="More than 6 months" />
                        <FormControlLabel value="3 to 6 months" control={<Radio size="small" color="orange" />} label="3 to 6 months" />
                        <FormControlLabel value="1 to 3 months" control={<Radio size="small" color="orange" />} label="1 to 3 months" />
                        <FormControlLabel value="Less than a month" control={<Radio size="small" color="orange" />} label="Less than a month" />
                    </RadioGroup>
                    ]):(
                <div className="flex-row-between">
                    <div style={{width:"100%"}}>
                    <p>{duration}</p>
                    </div>
                    <img src={Edit} style={{width:"33px", height:"33px"}} onClick={handleEditDuration}/>
                </div>
                )}
                <br/>
                <br/>
                {editExperience ? (
                    [
                    <FormLabel component="legend">What level of experience will it need?
                    </FormLabel>,
                    <RadioGroup
                        aria-label="duration"
                        name="controlled-radio-buttons-group"
                        value={experience}
                        onChange={handleChangeExperience}
                    >
                        <FormControlLabel value="Beginner" control={<Radio size="small" color="orange" />} label="Entry" />
                        <FormHelperText>Looking for someone relatively new to this field</FormHelperText>
                        <FormControlLabel value="Intermediate" control={<Radio size="small" color="orange" />} label="Intermediate" />
                        <FormHelperText>Looking for substantial experience in this field</FormHelperText>
                        <FormControlLabel value="Experienced" control={<Radio size="small" color="orange" />} label="Expert" />
                        <FormHelperText>Looking for comprehensive and deep expertise in this field</FormHelperText>

                    </RadioGroup>
                    ]):(
                <div className="flex-row-between">
                    <div style={{width:"100%"}}>
                    <p>{experience}</p>
                    <FormHelperText>{helperTextExperience}</FormHelperText>
                    </div>
                    <img src={Edit} style={{width:"33px", height:"33px"}} onClick={handleEditExperience}/>
                </div>
                )}
                </ThemeProvider>

                <div className="flex-row" style={{justifyContent:"flex-end", marginTop:"30px"}}>
                    <Button style={{background:"white", border:"1px solid rgba(0, 0, 0, 0.20)", color:"#F0540C"}} variant="contained" sx={{borderRadius:"25px", padding:"20px 40px", height:"0"}}>Back</Button>
                    <Button style={{background:"#F0540C", marginLeft:"20px"}} variant="contained" sx={{borderRadius:"25px", padding:"20px 40px",marginBottom:"20px", height:"0"}} onClick={GoToNextStep}>Next</Button>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default JobScope
