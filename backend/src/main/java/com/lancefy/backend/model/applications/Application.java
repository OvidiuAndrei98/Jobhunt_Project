package com.lancefy.backend.model.applications;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.lancefy.backend.model.appUser.AppUserFreelancer;
import com.lancefy.backend.model.jobs.Job;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @OneToOne(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
    private Job job;
    @OneToOne(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
    private Terms terms;
    @OneToOne(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
    private AdditionalDetails additionalDetails;
    @OneToOne(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
    private AppUserFreelancer appUserFreelancer;

}
