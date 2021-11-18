package com.lancefy.backend.service;

import com.lancefy.backend.model.jobs.Job;
import com.lancefy.backend.repository.JobsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class JobsService {
    private final JobsRepository jobsRepository;

    @Autowired
    public JobsService(JobsRepository jobsRepository){
        this.jobsRepository = jobsRepository;
    }

    public void postJob(Job job) {
        jobsRepository.save(job);
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
                jobs = jobs.stream().filter(job -> job.getCategory().equals(category.toLowerCase())).collect(Collectors.toList());
            }

        if (!paymentType.equals("undefined")) {
            jobs = jobs.stream().filter(job -> job.getPaymentType().equals(paymentType)).collect(Collectors.toList());
        }

        if (!experienceLevel.equals("undefined")) {
            jobs = jobs.stream().filter(job -> job.getExperienceLevel().toString().equals(experienceLevel)).collect(Collectors.toList());
        }

        if (!location.equals("undefined")) {
            jobs = jobs.stream().filter(job -> job.getLocation().equals(location)).collect(Collectors.toList());
        }
        return jobs;
    }
}
