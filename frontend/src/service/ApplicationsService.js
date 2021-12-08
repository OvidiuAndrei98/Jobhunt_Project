import axios from "axios";
import AuthHeader from "./AuthHeader";
// import AuthHeader from "./AuthHeader";

const JOBS_API_URL = "http://localhost:8080/applications";
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

class ApplicationsService {
//   getAllJobs() {
//     return axios.get(`${JOBS_API_URL}/all`, {headers: AuthHeader()});
//   };


  apply(application, jobId, userId) {
    return axios.post(`${JOBS_API_URL}/${jobId}/apply/${userId}`, application, {headers: AuthHeader()});
  }

  getApplicationsForJob(jobId) {
    return axios.get(`${JOBS_API_URL}/${jobId}/applications`, {headers: AuthHeader()});
  }

}

export default new ApplicationsService();