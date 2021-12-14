package com.lancefy.backend.model.appUser;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.lancefy.backend.model.jobs.Job;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@JsonIgnoreProperties
@NoArgsConstructor
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String companyName;
    private String companyWebsite;
    private String companyDescription;
    private String companyOwner;
    private String companyPhone;
    @OneToOne(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
    private Address address;
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @OneToMany(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
    private List<Job> jobs;

    public void addJob(Job job) {
        jobs.add(job);
    }
}
