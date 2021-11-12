import axios from "axios";
// import AuthHeader from "./AuthHeader";

const JOBS_API_URL = "http://localhost:8080/jobs";
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

class JobsService {
  getAllJobs() {
    return axios.get(`${JOBS_API_URL}/all`);
  };

  filterJobs(filterInputs) {
    return axios.get(`${JOBS_API_URL}/filter?category=${filterInputs.category}&pType=${filterInputs.pType}&experience=${filterInputs.experience}&location=${filterInputs.location}`);
  }

}

export default new JobsService();