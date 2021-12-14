package com.lancefy.backend.model.appUser;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Certification {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String title;
    private String issuer;
    private int year;
    private String month;
    private String credentialId;
    private String credentialUrl;

    public Certification(String title, String issuer, int year, String month, String credentialId, String credentialUrl) {
        this.title = title;
        this.issuer = issuer;
        this.year = year;
        this.month = month;
        this.credentialId = credentialId;
        this.credentialUrl = credentialUrl;
    }
}
