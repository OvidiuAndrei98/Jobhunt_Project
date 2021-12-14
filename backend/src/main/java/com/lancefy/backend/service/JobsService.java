package com.lancefy.backend.service;

import com.lancefy.backend.model.appUser.AppUserFreelancer;
import com.lancefy.backend.model.appUser.Company;
import com.lancefy.backend.model.jobs.Job;
import com.lancefy.backend.model.jobs.JobDraft;
import com.lancefy.backend.repository.CompanyRepository;
import com.lancefy.backend.repository.JobsDraftRepository;
import com.lancefy.backend.repository.JobsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class JobsService {
    private final JobsRepository jobsRepository;
    private final JobsDraftRepository jobsDraftRepository;
    private final AppUserFreelancerService appUserFreelancerService;
    private final CompanyRepository companyRepository;

    @Autowired
    public JobsService(JobsRepository jobsRepository, JobsDraftRepository jobsDraftRepository, AppUserFreelancerService appUserFreelancerService, CompanyRepository companyRepository){
        this.jobsRepository = jobsRepository;
        this.jobsDraftRepository = jobsDraftRepository;
        this.appUserFreelancerService = appUserFreelancerService;
        this.companyRepository = companyRepository;
    }

    public void postJob(Job job, Long id) {
        job.setDate(LocalDateTime.now());
        AppUserFreelancer appUserFreelancer = appUserFreelancerService.findById(id);
        appUserFreelancer.getCompany().addJob(job);
        appUserFreelancerService.addUser(appUserFreelancer);
        Job job1 = jobsRepository.getById(22L);
        Company company = companyRepository.findByJobs(job1);
        System.out.println(company);
    }

    public Long saveDraft(JobDraft jobDraft) {
       return jobsDraftRepository.save(jobDraft).getId();
    }

    public Long saveDraft(JobDraft jobDraft, Long id) {
//        JobDraft jobDraftDb = jobsDraftRepository.getById(id);

        return jobsDraftRepository.save(jobDraft).getId();
    }

    public List<Job> getAllJobs() {
        return jobsRepository.findAll();
    }

    public List<Job> searchJobs(String searchContent) {

        return jobsRepository.findAllByTitleContains(searchContent);
    }

    public List<Job> filterJobs(String category, String paymentType, String experienceLevel, String location){
        List<Job> jobs = getAllJobs();
        if (!category.equals("undefined")) {
                jobs = jobs.stream().filter(job -> job.getCategory().equals(category)).collect(Collectors.toList());
            }

        if (!paymentType.equals("undefined")) {
            jobs = jobs.stream().filter(job -> job.getBudget().getPaymentType().toString().equals(paymentType)).collect(Collectors.toList());
        }

        if (!experienceLevel.equals("undefined")) {
            jobs = jobs.stream().filter(job -> job.getScope().getExperienceLevel().toString().equals(experienceLevel)).collect(Collectors.toList());
        }

        if (!location.equals("undefined")) {
            jobs = jobs.stream().filter(job -> job.getLocation().equals(location)).collect(Collectors.toList());
        }
        return jobs;
    }
}
