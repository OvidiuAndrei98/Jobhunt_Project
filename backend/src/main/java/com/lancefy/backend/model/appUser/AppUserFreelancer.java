package com.lancefy.backend.model.appUser;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@JsonIgnoreProperties
public class AppUserFreelancer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String profilePic;
    private String lastName;
    private String firstName;
    private String availability;
    @OneToMany(fetch = FetchType.LAZY, cascade=CascadeType.ALL)
    @OrderBy("id ASC")
    private List<Language> languages;
    @OneToMany(fetch = FetchType.LAZY, cascade=CascadeType.ALL)
    @Column(name = "education")
    private List<Education> education;
    private String title;
    private String selfDescription;
    @ElementCollection
    private List<String> skills;
    @OneToMany(fetch = FetchType.LAZY, cascade=CascadeType.ALL)
    @Column(name = "certifications")
    private List<Certification> certifications;
    @OneToOne(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
    private Address address;
    private String phoneNumber;
    private String email;
    private String password;
    @ElementCollection
    private Set<UserRole> roles;

    public AppUserFreelancer(String profilePic, String lastName, String firstName, String availability, List<Language> languages, List<Education> education, String title, String selfDescription, List<String> skills, List<Certification> certifications, Address address, String phoneNumber, String email, String password, Set<UserRole> roles) {
        this.profilePic = profilePic;
        this.lastName = lastName;
        this.firstName = firstName;
        this.availability = availability;
        this.languages = languages;
        this.education = education;
        this.title = title;
        this.selfDescription = selfDescription;
        this.skills = skills;
        this.certifications = certifications;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
        this.roles = roles;
    }
}
