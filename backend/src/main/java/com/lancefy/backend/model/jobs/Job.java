package com.lancefy.backend.model.jobs;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties
@Entity
@Data
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String category;
    private String paymentType;
    private int budget;
    @Enumerated(EnumType.STRING)
    private ExperienceLevel experienceLevel;
    private LocalDateTime date;
    @Column(columnDefinition = "TEXT")
    private String description;
    @ElementCollection
    private List<String> skills = new ArrayList<>();
    private String location;

    public Job(String title, String category, String paymentType, int budget, ExperienceLevel experienceLevel, LocalDateTime date, String description, List<String> skills, String location) {
        this.title = title;
        this.category = category;
        this.paymentType = paymentType;
        this.budget = budget;
        this.experienceLevel = experienceLevel;
        this.date = date;
        this.description = description;
        this.skills = skills;
        this.location = location;
    }
}


