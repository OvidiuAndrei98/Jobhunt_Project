import React from 'react'
import Footer from '../../../navigation/Footer'
import Navbar from '../../../navigation/Navbar'
import Next from '../../../../assets/GreaterArrow.png'
import TextField from "@mui/material/TextField";
import {useForm} from 'react-hook-form';
import { makeStyles } from '@mui/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import JobsService from '../../../../service/JobsService';


const JobTitle = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const [value, setValue] = React.useState('a');
    const {id} = useParams()

    const history = useHistory();
    const location = useLocation();
    const jobDraft = location.state?.jobDraft;
    const user = location.state?.user;

    const theme = createTheme({
        palette: {
            orange: {main: "#F0540C"},
        },
        });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
        <form noValidate onSubmit={
            handleSubmit((data) => {
                JobsService.saveJobDraftTitle({id: id, title: data.title, category: value, workingHours: jobDraft?.workingHours});
                history.push({
                    pathname: `/job-post/skills`,
                    state: {jobDraft: {id: id, title: data.title, category: value, workingHours: jobDraft.workingHours}, user: user}
                })
                })
            }>
        <div className="info-header">
            <div className="progress-section">
                <div className="circle-step active-circle">1</div>
                <p className="active-circle-text">Title</p>
            </div>
            <img src={Next} style={{marginRight:"20px"}} />
            <div className="progress-section">
                <div className="circle-step">2</div>
                <p>Skills</p>
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
                <h1>Let's start with a strong title.</h1>
                <p>This helps your job post stand out to the right candidates. It’s the first thing they’ll see, so make it count!</p>
            </div>
            <div className="post-box">
                <h4 style={{marginBottom:"15px"}}>Write a title for your job post.</h4>
                <TextField className={classes.root} id="title" label="Title" variant="outlined" size="small" sx={{ minWidth: "50%" }}
                {...register("title", {required: true})}/>
                <ol style={{marginTop:"30px"}}>Example titles:</ol>
                <li style={{marginTop:"10px", marginLeft:"20px"}}>UX/UI designer to bring website mockup and prototype to life</li>
                <li style={{marginTop:"10px",marginLeft:"20px"}}>Video editor needed to create whiteboard explainer video</li>
                <li style={{marginTop:"10px",marginLeft:"20px"}}>UX designer with e-commerce experience to support app development</li>
                <br/>
                <br/>
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
                <div className="flex-row" style={{justifyContent:"flex-end", marginTop:"30px"}}>
                    <Button style={{background:"white", border:"1px solid rgba(0, 0, 0, 0.20)", color:"#F0540C"}} variant="contained" sx={{borderRadius:"25px", padding:"20px 40px", height:"0"}}>Back</Button>
                    <Button type="submit" style={{background:"#F0540C", marginLeft:"20px"}} variant="contained" sx={{borderRadius:"25px", padding:"20px 40px",marginBottom:"20px", height:"0"}}>Next</Button>
                </div>
            </div>
        </div>
        </form>
        <Footer />
        </>
    )
}

export default JobTitle
