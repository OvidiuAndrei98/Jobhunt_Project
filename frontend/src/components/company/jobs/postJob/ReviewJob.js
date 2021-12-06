import React, {useState} from 'react'
import Footer from '../../../navigation/Footer'
import Navbar from '../../../navigation/Navbar'
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@mui/styles';
import TextField from "@mui/material/TextField";
import { useLocation, useHistory } from 'react-router-dom';
import Edit from '../../../../assets/Edit.png'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import EditSkillsModalReview from './modals/EditSkillsModalReview';
import EditCategoryModal from './modals/EditCategoryModal';
import EditScopeModal from './modals/EditScopeModal';
import EditBudgetModal from './modals/EditBudgetModal';
import JobsService from '../../../../service/JobsService';

const ReviewJob = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const [modalContent, setModalContent] = useState([])
    const [open, setOpen] = React.useState(false);
    const [savingSkills, setSavingSkills] = useState([]);
    const [savingCategory, setSavingCategory] = useState("");
    const [savingScope, setSavingScope] = useState({});

    const location = useLocation();
    const history = useHistory();
    const jobDraft = location.state?.jobDraft;
    const user = location.state?.user;

    const handleOpenModal = (content) => {  
        setModalContent(content)
        setOpen(true);
    }

    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '10%',
        left: '31%',
        width: "40%",
        bgcolor: 'background.paper',
        outline: 'none',
        p: 4,
        borderRadius: "5px 5px 0 0",
      };

    const useStyles = makeStyles((theme) => ({
        container: {
            display: "flex",
            flexWrap: "wrap",
          },
        title: {
            width: "50%",
            "& .MuiInputLabel-root.Mui-focused": {
            color: "#00A392"
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#00A392"
            },
            "& .MuiInputBase-root": {
            display: "flex",
            alignItems: "start"},
            },
        root: {
            margin: "15px 0",
            width: "50%",
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#00A392"
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#00A392"
              },
              "& .MuiInputBase-root": {
                height:"200px",
                display: "flex",
                alignItems: "start"
              }
          },
      }));

      const classes = useStyles();
    return (
        <>
        <Navbar />
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                {modalContent}
            </Box>
        </Modal>
        <form noValidate onSubmit={
            handleSubmit((data) => {
                    jobDraft.location = data.location;
                    jobDraft.description = data.description;
                    JobsService.postJob(jobDraft, user.id);
                    history.push("/jobs");

                })
            }>
        <div className="apply-container mtop-40 br5">
            <div className="job-box flex-row-between align-center-row ">
                <p style={{fontSize:"35px", fontWeight:"530"}}>Now just finish and review your job post.</p>
                <Button type="submit" style={{background:"#F0540C", marginLeft:"20px"}} variant="contained" sx={{borderRadius:"25px", padding:"10px 40px"}}>Post your job now!</Button>
            </div>
            <div className="job-box">
                <p style={{fontSize:"20px", fontWeight:"500"}}>Title</p>
                <TextField className={classes.title} id="title" label="Title" defaultValue={jobDraft.title} variant="outlined" size="small" sx={{ minWidth: "10%", marginTop:"25px", marginBottom:"18px"}}
                {...register("title", {required: true})} /> 
            </div>
            <div className="job-box">
                <p style={{fontSize:"20px", fontWeight:"500", marginBottom:"20px"}}>Describe your job</p>
                <p>This is how talent figures out what you need and why you’re great to work with!</p>
                <p className="mtop-40">Include your expectations about the task or deliverable, what you’re looking for in a work relationship, and anything unique about your project, team, or company.</p>
                <TextField className={classes.root} id="description" label="Description" variant="outlined" size="small" maxRows={5} multiline sx={{ minWidth: "10%", marginTop:"25px", marginBottom:"18px"}}
                {...register("description", {required: true, minLength:50})} />
                {errors.description && <p style={{color:"red"}}>Must be more than 50 characters</p>}
            </div>
            <div className="job-box">
                <p style={{fontSize:"20px", fontWeight:"500", marginBottom:"15px"}}>Category</p>
                <div className="align-center-row mbottom">
                    <p>{jobDraft.category.charAt(0).toUpperCase() +jobDraft.category.substring(1) }</p>
                    <img src={Edit} style={{marginLeft:"20px", cursor:"pointer"}} onClick={() => handleOpenModal(<EditCategoryModal closeModal = {open => setOpen(open)} saveCategory = {savingCategory => jobDraft.category =  savingCategory} category={jobDraft.category}/>)} />
                </div>
                <p style={{fontSize:"20px", fontWeight:"500", marginBottom:"15px"}}>Skills</p>
                <div className="align-center-row mbottom">
                    {jobDraft.skills.map((skill, index) => {
                        return (<div className="review-skill">{skill}</div>)
                    })}
                    <img src={Edit} style={{marginLeft:"20px", cursor:"pointer"}} onClick={() => handleOpenModal(<EditSkillsModalReview closeModal = {open => setOpen(open)} saveSkills = {saveSkills => jobDraft.skills = saveSkills} skills={jobDraft.skills}  />)} />
                </div>
                <p style={{fontSize:"20px", fontWeight:"500", marginBottom:"15px"}}>Scope</p>
                <div className="align-center-row mbottom">
                    <p>{`${jobDraft.scope.jobSize.charAt(0).toUpperCase() + jobDraft.scope.jobSize.substring(1)}, ${jobDraft.scope.jobDuration}, ${jobDraft.scope.experienceLevel.charAt(0).toUpperCase() + jobDraft.scope.experienceLevel.substring(1)}`}</p>
                    <img src={Edit} style={{marginLeft:"20px", cursor:"pointer"}} onClick={() => handleOpenModal(<EditScopeModal closeModal = {open => setOpen(open)} saveScope = {(scope) => jobDraft.scope = scope.scope} scope={jobDraft.scope}/>)}/>
                </div>
                <p style={{fontSize:"20px", fontWeight:"500", marginBottom:"15px"}}>Budget</p>
                <div className="align-center-row mbottom">
                    <p>{jobDraft.budget.budget}</p>
                    <img src={Edit} style={{marginLeft:"20px", cursor:"pointer"}} onClick={() => handleOpenModal(<EditBudgetModal closeModal = {open => setOpen(open)} saveBudget = {(budget) => jobDraft.budget = budget.budget} budget={jobDraft.budget}/>)} />
                </div>
            </div>
            <div className="job-box">
                <p style={{fontSize:"20px", fontWeight:"500"}}>Location</p>
                <TextField className={classes.title} id="location" label="Location" variant="outlined" size="small" sx={{ minWidth: "10%", marginTop:"25px", marginBottom:"18px"}}
                {...register("location", {required: true})} /> 
            </div>
            <div className="job-box flex-row-between">
                <Button style={{background:"white", border:"1px solid rgba(0, 0, 0, 0.20)", color:"#F0540C"}} variant="contained" sx={{borderRadius:"25px", padding:"10px 40px", height:"0"}}>Back</Button>
                <Button type="submit" style={{background:"#F0540C", marginLeft:"20px"}} variant="contained" sx={{borderRadius:"25px", padding:"10px 40px",marginBottom:"20px", height:"0"}}>Post your job now!</Button>
            </div>
       </div>
        </form>
        <Footer />
        </>
    )
}

export default ReviewJob
