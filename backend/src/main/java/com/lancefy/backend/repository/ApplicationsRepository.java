package com.lancefy.backend.repository;

import com.lancefy.backend.model.appUser.AppUserFreelancer;
import com.lancefy.backend.model.applications.Application;
import com.lancefy.backend.model.jobs.Job;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ApplicationsRepository extends JpaRepository<Application, Long> {
    boolean existsByAppUserFreelancerAndJob(AppUserFreelancer appUserFreelancer, Job job);
    List<Application> findAllByJob(Job job);
}
