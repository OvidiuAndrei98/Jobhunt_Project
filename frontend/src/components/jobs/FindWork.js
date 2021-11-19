import React, {useEffect, useState} from 'react'
import Navbar from '../navigation/Navbar'
import SearchIcon from '../../assets/SearchIcon.png'
import JobCard from './JobCard'
import Slider from '../../assets/Slider.png'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Footer from '../navigation/Footer'
import JobsService from '../../service/JobsService'


const FindWork = () => {
    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState('');
    const [filterInputs, setFilterInputs] = useState([])

    const handleCategory = (event) => {
        setFilterInputs({...filterInputs, "category": event.target.value})
        
      }

    const handlePaymentType = (event) => {
    setFilterInputs({...filterInputs, "pType": event.target.value})
    }

    const handleExperienceLevel = (event) => {
        setFilterInputs({...filterInputs, "experience": event.target.value})
        }

    const handleLocation = (event) => {
    setFilterInputs({...filterInputs, "location": event.target.value})
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const searchJobs = () => {
        JobsService.search(search).then(res => {
            setJobs(res.data)
        })
    }

    const filter = () => {
        JobsService.filterJobs(filterInputs)
        .then(response => {
            setJobs(response.data)
        });
        console.log(filterInputs);
    }

    useEffect(() => {
        JobsService.getAllJobs().then(res => {  
            setJobs(res.data)});
    },[])


    const useStyles = makeStyles((theme) => ({
        root: {
            height: 50,
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
        <>
            <Navbar />
            <div className="container-fw">
                <div className="left-collumn">
                    <h3 style={{marginBottom:"15px"}}>Find Work</h3>
                    <div className="filter">
                        <img src={Slider} alt="Slider" />
                        <p style={{marginBottom:"15px"}}>Filter</p>
                    </div>
                    <div className="filter-container">
                        <form>
                            <div className="filter-item">
                                <FormControl variant="outlined" sx={{ minWidth: "100%" }}>
                                <TextField
                                     className={classes.root}
                                     size="small"
                                     variant="outlined"
                                     labelId="category"
                                     id="category"
                                     onChange={handleCategory}
                                     label="Category"
                                     select
                                >
                                <MenuItem value="undefined">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={"web-development"}>Web Development</MenuItem>
                              <MenuItem value={"marketing"}>Marketing</MenuItem>
                              <MenuItem value={"finance"}>Finance</MenuItem>
                            </TextField>
                                </FormControl>
                            </div>
                            <div className="filter-item">
                                <FormControl variant="outlined" sx={{ minWidth: "100%" }}>
                                    <TextField
                                        className={classes.root}
                                        size="small"
                                        variant="outlined"
                                        labelId="pType"
                                        id="pType"
                                        onChange={handlePaymentType}
                                        label="Payement Type"
                                        select
                                    >
                                        <MenuItem value="undefined">
                                        <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={"Hourly"}>Hourly</MenuItem>
                                        <MenuItem value={"Fixed-Price"}>Fixed Price</MenuItem>
                                    </TextField>
                                </FormControl>
                            </div>
                            <div className="filter-item">
                                <FormControl variant="outlined" sx={{ minWidth: "100%" }}>
                                <TextField
                                        className={classes.root}
                                        size="small"
                                        variant="outlined"
                                        labelId="experience"
                                        id="experience"
                                        onChange={handleExperienceLevel}
                                        label="Experience Level"
                                        select
                                    >
                                        <MenuItem value="undefined">
                                        <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={"Beginner"}>Beginner</MenuItem>
                                        <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
                                        <MenuItem value={"Experienced"}>Experienced</MenuItem>
                                    </TextField>
                                </FormControl>
                            </div>
                            <div className="filter-item">
                                <FormControl variant="outlined" sx={{ minWidth: "100%"}}>
                                <TextField
                                        className={classes.root}
                                        size="small"
                                        variant="outlined"
                                        labelId="location"
                                        id="location"
                                        onChange={handleLocation}
                                        label="Location"
                                        select
                                    >
                                        <MenuItem value="undefined">
                                        <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={"Romania"}>Romania</MenuItem>
                                        <MenuItem value={"Canada"}>Canada</MenuItem>
                                        <MenuItem value={"USA"}>USA</MenuItem>
                                    </TextField>
                                </FormControl>
                            </div>
                        </form>
                        <Button style={{background:"#00A392"}} variant="contained" size="small" onClick={filter}>Filter</Button>
                    </div>
                </div>
                <div className="right-collumn">
                    <div className="searchContainer">
                        <input type="text" placeholder="Search" className="searchBar" id="searchPhrase" onChange={handleSearch}></input>
                        <div className="searchIcon">
                            <div className="searchSquare" onClick={searchJobs}><img src={SearchIcon} style={{width:"60%"}}/></div>
                        </div>
                    </div>
                    {jobs.map(job => <JobCard job={job} />)}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default FindWork



