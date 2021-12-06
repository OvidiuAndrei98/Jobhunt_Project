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

  saveJobDraftGettingStarted(jobDraft) {
    return axios.post(`${JOBS_API_URL}/save-draft-getting-started`, {workingHours: jobDraft}, {headers: AuthHeader()});
  }

  saveJobDraftTitle(jobDraft) {
    return axios.post(`${JOBS_API_URL}/save-draft-title/${13}`, jobDraft , {headers: AuthHeader()});
  }

  saveJobDraftSkills(jobDraft) {
    return axios.post(`${JOBS_API_URL}/save-draft-skills`, jobDraft , {headers: AuthHeader()});
  }

  saveJobDraftScope(jobDraft) {
    return axios.post(`${JOBS_API_URL}/save-draft-scope`, jobDraft , {headers: AuthHeader()});
  }

  saveJobDraftBudget(jobDraft) {
    return axios.post(`${JOBS_API_URL}/save-draft-budget`, jobDraft , {headers: AuthHeader()});
  }

  postJob(job, id) {
    return axios.post(`${JOBS_API_URL}/post/${id}`, job, {headers: AuthHeader()});
  }

}

export default new JobsService();