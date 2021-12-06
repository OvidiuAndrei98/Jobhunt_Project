import React, {useState} from 'react'
import Footer from '../../../navigation/Footer'
import Navbar from '../../../navigation/Navbar'
import Radio from '@mui/material/Radio';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Time from '../../../../assets/Time.png'
import Calendar from '../../../../assets/Calendar.png'
import Button from '@mui/material/Button';
import { useHistory, useLocation } from "react-router-dom";
import JobsService from '../../../../service/JobsService';


const GettingStarted = () => {
    const [selectedValue, setSelectedValue] = React.useState('a');
    const handleChange = (event) => {
        setSelectedValue(event);
    };

    const history = useHistory();
    const location = useLocation();
    const user = location.state?.user;

    const GoToNextStep = () => {
        if (selectedValue != 'a') {
            // de trimis obiectul la next page si salvat cu urmatoarea pagina in db
            JobsService.saveJobDraftGettingStarted(selectedValue).then(res => {
                history.push(`/job-post/title/${res.data}`);
                history.push({
                    pathname: `/job-post/title/${res.data}`,
                    state: {jobDraft: {workingHours: selectedValue}, user: user}
                })
            });
        }
    }

    const theme = createTheme({
    palette: {
        orange: {main: "#F0540C"},
    },
    });

    const controlProps = (item) => ({
        checked: selectedValue === item,
        value: item,
        name: 'job-complexity',
        inputProps: { 'aria-label': item },
      });

    return (
        <>
        <Navbar />
        <ThemeProvider theme={theme}>
        <div className="My-jobs-container" style={{borderRadius:"5px", marginTop:"40px"}}>
            <div className="job-box">
                <p style={{fontSize:"25px"}}>Getting started</p>
            </div>
            <div className="job-box">
                <p style={{fontSize:"18px"}}>What would you like to do?</p>
                <div className="flex-row">
                    <div className="select-card" style={{borderColor: selectedValue=="Less than 30 hrs/week"? "#F0540C" : "rgba(0, 0, 0, 0.20)" }} onClick={() => handleChange("Less than 30 hrs/week")}>
                        <div className="select-outer-circle">
                        <Radio
                            color="orange"
                            size="small"
                            {...controlProps('Less than 30 hrs/week')}
                            />
                        </div>
                        <div className="select-inner-circle"></div>
                        <img src={Time}/>
                        <h3 style={{fontSize:"17px", margin:"10px 0"}}>Short term or part time work</h3>
                        <p style={{fontSize:"17px", color:"rgba(0, 0, 0, 0.45)"}}>Less than 30 hrs/week</p>
                        <p style={{fontSize:"17px", color:"rgba(0, 0, 0, 0.45)"}}>Less than 3 months</p>
                    </div>
                    <div className="select-card"  style={{borderColor: selectedValue=="More than 30 hrs/week"? "#F0540C" : "rgba(0, 0, 0, 0.20)" }} onClick={() => handleChange("More than 30 hrs/week")}>
                        <div className="select-outer-circle">
                        <Radio
                            size="small"
                            color="orange"
                            {...controlProps('More than 30 hrs/week')}
                            />
                        </div>
                        <div className="select-inner-circle"></div>
                        <img src={Calendar}/>
                        <h3 style={{fontSize:"17px", margin:"10px 0"}}>Designated, longer term work</h3>
                        <p style={{fontSize:"17px", color:"rgba(0, 0, 0, 0.45)"}}>More than 30 hrs/week</p>
                        <p style={{fontSize:"17px", color:"rgba(0, 0, 0, 0.45)"}}>3+ months</p>
                    </div>
                </div>
            </div>
            <div className="job-box flex-row" style={{borderRadius:"5px", justifyContent:"flex-end"}}>
                <div style={{alignItems:"center", display:"flex"}}>
                <p style={{fontSize:"17px", color:"#F0540C",marginRight:"20px", cursor:"pointer"}}>Cancel</p>
                <Button type="submit" style={{background:"#F0540C"}} variant="contained" sx={{borderRadius:"25px", padding:"6px 20px"}} onClick={GoToNextStep}>Continue</Button>
                </div>
            </div>
        </div>
        </ThemeProvider>
        <Footer />
        </>
    )
}

export default GettingStarted
