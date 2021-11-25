import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import AuthService from "../../../service/AuthService";
import AppUserFreelancer from "../../../service/AppUserFreelancer";

const AddCertificationModal = (props) => {
  // const [filterInputs, setFilterInputs] = useState([])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const handleCategory = (event) => {
  //     setFilterInputs({...filterInputs, "category": event.target.value})

  //   }

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    root: {
      // height: '50px',
      margin: "15px 0",
      "& .MuiInputLabel-root.Mui-focused": {
        color: "#00A392",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#00A392",
      },
      "& .MuiInputBase-root": {
        display: "flex",
        alignItems: "start",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className="modal-container">
      <form
        noValidate
        onSubmit={handleSubmit((data) => {
          AppUserFreelancer.addFreelancerCertification(
            data,
            AuthService.getCurrentUser().id
          );
          props.closeModal(false);
        })}
      >
        <div className="modal-content-top">
          <Typography variant="h6">Add Certification</Typography>
        </div>
        <div className="modal-content-middle">
          <TextField
            className={classes.root}
            id="title"
            label="Name"
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            {...register("title", { required: true })}
          />
          {errors.title && (
            <p className="error-message">This field is required</p>
          )}

          <TextField
            className={classes.root}
            id="issuer"
            label="Issuing organization"
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            {...register("issuer", { required: true })}
          />
          {errors.issuer && <p>This field is required</p>}
          <div className="years-section">
            <FormControl variant="outlined" sx={{ minWidth: "48%" }}>
              <TextField
                className={classes.root}
                size="small"
                variant="outlined"
                labelId="month"
                id="month"
                //  onChange={handleCategory}
                label="Issue date"
                select
                {...register("month", { required: true })}
              >
                <MenuItem value="undefined">
                  <em>Month</em>
                </MenuItem>
                <MenuItem value={"January"}>January</MenuItem>
                <MenuItem value={"February"}>February</MenuItem>
                <MenuItem value={"March"}>March</MenuItem>
                <MenuItem value={"April"}>April</MenuItem>
                <MenuItem value={"May"}>May</MenuItem>
                <MenuItem value={"June"}>June</MenuItem>
                <MenuItem value={"July"}>July</MenuItem>
                <MenuItem value={"August"}>August</MenuItem>
                <MenuItem value={"September"}>September</MenuItem>
                <MenuItem value={"October"}>October</MenuItem>
                <MenuItem value={"November"}>November</MenuItem>
                <MenuItem value={"December"}>December</MenuItem>
              </TextField>
              {errors.month && <p>This field is required</p>}
            </FormControl>

            <FormControl variant="outlined" sx={{ minWidth: "48%" }}>
              <TextField
                className={classes.root}
                size="small"
                variant="outlined"
                labelId="year"
                id="year"
                //  onChange={handleCategory}
                select
                {...register("year", { required: true })}
              >
                <MenuItem value="undefined">
                  <em>Year</em>
                </MenuItem>
                <MenuItem value={2021}>2021</MenuItem>
                <MenuItem value={2020}>2020</MenuItem>
                <MenuItem value={2019}>2019</MenuItem>
                <MenuItem value={2018}>2018</MenuItem>
                <MenuItem value={2017}>2017</MenuItem>
                <MenuItem value={2016}>2016</MenuItem>
                <MenuItem value={2015}>2015</MenuItem>
                <MenuItem value={2014}>2014</MenuItem>
                <MenuItem value={2013}>2013</MenuItem>
                <MenuItem value={2012}>2012</MenuItem>
                <MenuItem value={2011}>2011</MenuItem>
                <MenuItem value={2010}>2010</MenuItem>
                <MenuItem value={2009}>2009</MenuItem>
              </TextField>
              {errors.year && <p>This field is required</p>}
            </FormControl>
          </div>
          <TextField
            className={classes.root}
            id="credentialId"
            label="Credential ID"
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            {...register("credentialId", { required: true })}
          />
          {errors.credentialId && <p>This field is required</p>}
          <TextField
            className={classes.root}
            id="credentialUrl"
            label="Credential URL"
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            {...register("credentialUrl", { required: true })}
          />
          {errors.credentialUrl && <p>This field is required</p>}
        </div>
        <div className="modal-content-bottom">
          <Button
            type="submit"
            style={{ background: "#F0540C" }}
            variant="contained"
            sx={{
              borderRadius: "5px",
              padding: "10px 5px",
              height: "0",
              marginTop: "20px",
              float: "right",
              marginBottom: "0",
            }}
          >
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddCertificationModal;
