import axios from "axios";
import AuthHeader from "./AuthHeader";
// import AuthHeader from "./AuthHeader";

const JOBS_API_URL = "http://localhost:8080/jobs";
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

class JobsService {
  getAllJobs() {
    return axios.get(`${JOBS_API_URL}/all`, {headers: AuthHeader()});
  };

  filterJobs(filterInputs) {
    return axios.get(`${JOBS_API_URL}/filter?category=${filterInputs.category}&pType=${filterInputs.pType}&experience=${filterInputs.experience}&location=${filterInputs.location}`, {headers: AuthHeader()});
  }

  search(searchPhrase) {
    return axios.get(`${JOBS_API_URL}/search?searchPhrase=${searchPhrase}`, {headers: AuthHeader()});
  }

}

export default new JobsService();