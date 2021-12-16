package com.lancefy.backend.repository;

import com.lancefy.backend.model.appUser.Company;
import com.lancefy.backend.model.jobs.Job;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CompanyRepository extends JpaRepository<Company, Long> {
    Company findByJobs(Job job);
    Optional<Company> findById(Long id);
}
