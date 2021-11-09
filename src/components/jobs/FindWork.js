import React from 'react'
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


const FindWork = () => {

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

      const buttonStyles = makeStyles((theme) => ({
        root: {
            background: '#00A392',
          },
      }));

      const classes = useStyles();
      const classes2 = buttonStyles();

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
                                     labelId="Category"
                                     id="Category"
                                     // value={age}
                                     // onChange={handleChange}
                                     label="Category"
                                     select
                                >
                                <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
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
                                        // value={age}
                                        // onChange={handleChange}
                                        label="Payement Type"
                                        select
                                    >
                                        <MenuItem value="">
                                        <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </TextField>
                                </FormControl>
                            </div>
                            <div className="filter-item">
                                <FormControl variant="outlined" sx={{ minWidth: "100%" }}>
                                <TextField
                                        className={classes.root}
                                        size="small"
                                        variant="outlined"
                                        labelId="Experience"
                                        id="Experience"
                                        // value={age}
                                        // onChange={handleChange}
                                        label="Experience Level"
                                        select
                                    >
                                        <MenuItem value="">
                                        <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </TextField>
                                </FormControl>
                            </div>
                            <div className="filter-item">
                                <FormControl variant="outlined" sx={{ minWidth: "100%"}}>
                                <TextField
                                        className={classes.root}
                                        size="small"
                                        variant="outlined"
                                        labelId="Location"
                                        id="Location"
                                        // value={age}
                                        // onChange={handleChange}
                                        label="Location"
                                        select
                                    >
                                        <MenuItem value="">
                                        <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </TextField>
                                </FormControl>
                            </div>
                        </form>
                        <Button style={{background:"#00A392"}} variant="contained" size="small">Filter</Button>
                    </div>
                </div>
                <div className="right-collumn">
                    <div className="searchContainer">
                        <input type="text" placeholder="Search" className="searchBar"></input>
                        <div className="searchIcon">
                            <div className="searchSquare"><img src={SearchIcon} style={{width:"60%"}}/></div>
                        </div>
                    </div>
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default FindWork



