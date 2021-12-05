import React from 'react'
import Footer from '../../../navigation/Footer'
import Navbar from '../../../navigation/Navbar'
import Next from '../../../../assets/GreaterArrow.png'
import TextField from "@mui/material/TextField";
import {useForm} from 'react-hook-form';
import { makeStyles } from '@mui/styles';
import Radio from '@mui/material/Radio';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useHistory, useLocation } from 'react-router-dom';
import Time from '../../../../assets/Time.png'
import Pricing from '../../../../assets/Pricing.png'
import JobsService from '../../../../service/JobsService';


const JobBudget = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const [selectedValue, setSelectedValue] = React.useState('hourly');

    const handleChange = (event) => {
        setSelectedValue(event);
    };

    const history = useHistory();
    const location = useLocation();
    const jobDraft = location.state?.jobDraft;

    const theme = createTheme({
        palette: {
            orange: {main: "#F0540C"},
        },
        });

    const controlProps = (item) => ({
        checked: selectedValue === item,
        value: item,
        name: 'job-budget',
        inputProps: { 'aria-label': item },
        });


    const useStyles = makeStyles((theme) => ({
        root: {
            height: '50px',
            width:'30%',
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
                jobDraft.budget = {paymentType: selectedValue.toUpperCase(), budget: `$${data.budget_from}-$${data.budget_to}` };
                JobsService.saveJobDraftBudget(jobDraft);
                history.push({
                    pathname: `/job-post/review-job`,
                    state: {jobDraft: jobDraft}
                })
                })
            }>
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
                <div className="circle-step">3</div>
                <p>Scope</p>
            </div>
            <img src={Next} style={{marginRight:"20px"}}/>
            <div className="progress-section ">
                <div className="circle-step active-circle">4</div>
                <p className="active-circle-text">Budget</p>
            </div>
        </div>
        <div className="post-container flex-row">
            <div className="post-box">
                <h1>Tell us about your budget.</h1>
                <p>This will help us match you to talent within your range.</p>
            </div>
            <div className="post-box">
            <ThemeProvider theme={theme}>
            <div className="flex-row">
                    <div className="select-card" style={{borderColor: selectedValue=="hourly"? "#F0540C" : "rgba(0, 0, 0, 0.20)", padding:"10px 50px"}} onClick={() => handleChange("hourly")}>
                        <div className="select-outer-circle">
                        <Radio
                            color="orange"
                            size="small"
                            {...controlProps('hourly')}
                            />
                        </div>
                        <div className="select-inner-circle"></div>
                        <img src={Time}/>
                        <h3 style={{fontSize:"15px", margin:"10px 0"}}>Hourly rate</h3>
                    </div>
                    <div className="select-card"  style={{borderColor: selectedValue=="budget"? "#F0540C" : "rgba(0, 0, 0, 0.20)", padding:"10px 50px", maxWidth:"50%" }} onClick={() => handleChange("budget")}>
                        <div className="select-outer-circle">
                        <Radio
                            size="small"
                            color="orange"
                            {...controlProps('budget')}
                            />
                        </div>
                        <div className="select-inner-circle"></div>
                        <img src={Pricing}/>
                        <h3 style={{fontSize:"15px", margin:"10px 0"}}>Project budget</h3>
                    </div>
                </div>
                </ThemeProvider>
                {selectedValue === "hourly"? (
                    <div className="budget-box dflex">
                        <div>
                            <p className="title-paragraph">From</p>
                            <div className="align-center-row" >
                                <TextField className={classes.root} id="budget_from" label="$" variant="outlined" size="small" sx={{ minWidth: "10%", marginTop:"25px", marginBottom:"18px"}}
                                {...register("budget_from", {required: true})} /> 
                                <span>/hour</span>
                            </div>
                        </div>
                        <div>
                            <p className="title-paragraph">To</p>
                            <div className="align-center-row" >
                                <TextField className={classes.root} id="budget_to" label="$" variant="outlined" size="small" sx={{ minWidth: "10%", marginTop:"25px", marginBottom:"18px"}}
                                {...register("budget_to", {required: true})} /> 
                                <span>/hour</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="budget-box">
                        <p className="title-paragraph">Maximum project budget (USD)</p>
                        <TextField className={classes.root} id="total" label="$" variant="outlined" size="small" sx={{ minWidth: "10%", marginTop:"25px", marginBottom:"18px"}}
                        {...register("total", {required: true})} />
                    </div>
                ) }
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

export default JobBudget