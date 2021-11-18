package com.lancefy.backend.model.appUser;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
public class Education {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String education;
    private String educationSpecialization;
    private String educationPeriod;

    public Education(String education, String educationSpecialization, String educationPeriod) {
        this.education = education;
        this.educationSpecialization = educationSpecialization;
        this.educationPeriod = educationPeriod;
    }
}
