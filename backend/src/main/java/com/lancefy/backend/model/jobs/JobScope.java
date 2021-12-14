package com.lancefy.backend.model.jobs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class JobScope {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String jobSize;
    private String jobDuration;
    @Enumerated(EnumType.STRING)
    private ExperienceLevel experienceLevel;

    public JobScope(String jobSize, String jobDuration, ExperienceLevel experienceLevel) {
        this.jobSize = jobSize;
        this.jobDuration = jobDuration;
        this.experienceLevel = experienceLevel;
    }
}
