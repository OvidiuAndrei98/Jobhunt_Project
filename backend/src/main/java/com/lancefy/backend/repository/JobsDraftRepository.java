package com.lancefy.backend.repository;

import com.lancefy.backend.model.jobs.JobDraft;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.function.Function;

@Repository
public interface JobsDraftRepository extends JpaRepository<JobDraft, Long> {
    Optional<JobDraft> findById(Long id);
}
