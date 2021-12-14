package com.lancefy.backend.model.jobs;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties
@Entity
@Data
public class JobDraft {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
//    @Column(nullable = false)
    private String title;
    private String category;
    @OneToOne(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
    private JobBudget budget;
    private String workingHours;
    private LocalDateTime date;
    @Column(columnDefinition = "TEXT")
    private String description;
    @ElementCollection
    private List<String> skills = new ArrayList<>();
    private String location;
    @OneToOne(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
    private JobScope scope;

    public JobDraft(String title, String category, JobBudget budget, String workingHours, LocalDateTime date, String description, List<String> skills, String location, JobScope scope) {
        this.title = title;
        this.category = category;
        this.budget = budget;
        this.workingHours = workingHours;
        this.date = date;
        this.description = description;
        this.skills = skills;
        this.location = location;
        this.scope = scope;
    }

}
