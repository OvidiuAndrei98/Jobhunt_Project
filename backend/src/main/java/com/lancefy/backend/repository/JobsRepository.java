package com.lancefy.backend.repository;

import com.lancefy.backend.model.jobs.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobsRepository extends JpaRepository<Job, Long> {
    List<Job> findAllByTitleContains(String phrase);
}
