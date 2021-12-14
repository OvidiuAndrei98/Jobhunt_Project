package com.lancefy.backend.service;

import com.lancefy.backend.model.appUser.AppUserFreelancer;
import com.lancefy.backend.model.applications.Application;
import com.lancefy.backend.model.jobs.Job;
import com.lancefy.backend.repository.ApplicationsRepository;
import com.lancefy.backend.repository.JobsDraftRepository;
import com.lancefy.backend.repository.JobsRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Collections;
import java.util.List;

@Service
public class ApplicationService {
    private final ApplicationsRepository applicationsRepository;
    private final JobsRepository jobsRepository;
    private final AppUserFreelancerService appUserFreelancerService;

   public ApplicationService(ApplicationsRepository applicationsRepository, JobsRepository jobsRepository, AppUserFreelancerService appUserFreelancerService) {
       this.applicationsRepository = applicationsRepository;
       this.appUserFreelancerService = appUserFreelancerService;
       this.jobsRepository = jobsRepository;

   }

   public void sendApplication(Application application, Long jobId, Long userId) {
       Job job = jobsRepository.getById(jobId);
       AppUserFreelancer appUserFreelancer = appUserFreelancerService.findById(userId);
       try {
           if (!applicationsRepository.existsByAppUserFreelancerAndJob(appUserFreelancer, job)) {
               application.setAppUserFreelancer(appUserFreelancer);
               application.setJob(job);
               applicationsRepository.save(application);
           } else {
               throw new Exception();
           }

       } catch (Exception exc) {
           throw new ResponseStatusException(
                   HttpStatus.INTERNAL_SERVER_ERROR, "Foo Not Found", exc);
       }
   }

   public List<Application> getApplicationsForJob(Long jobId) {
       Job job = jobsRepository.getById(jobId);
       return applicationsRepository.findAllByJob(job);
   }
}
