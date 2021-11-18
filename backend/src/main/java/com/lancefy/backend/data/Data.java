package com.lancefy.backend.data;

import com.lancefy.backend.model.appUser.*;
import com.lancefy.backend.model.jobs.ExperienceLevel;
import com.lancefy.backend.model.jobs.Job;
import com.lancefy.backend.repository.AppUserFreelancerRepository;
import com.lancefy.backend.repository.JobsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@Component
public class Data implements CommandLineRunner {
    @Autowired
    JobsRepository jobsRepository;
    @Autowired
    AppUserFreelancerRepository appUserFreelancerRepository;

    BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Override
    public void run(String... args) throws Exception {
        Job job = new Job("Help with JPA Springboot,Docker and kafka", "web-development", "Hourly", 20, ExperienceLevel.Intermediate, LocalDateTime.now(),"I have an springboot application with Service and controllers working and model object has to be mapped to postgreSQL and containerize the application using docker.\n" +
                "\n" +
                "optionally, we can create a kafka consumer-producer in the application", List.of("Docker", "Kafka", "Spring"),"Romania");
        Job job2 = new Job("Javascript Single Spa Expert", "web-development", "Hourly", 25, ExperienceLevel.Experienced, LocalDateTime.now(),"Looking for an expert with single spa micro frontends to enable our existing web application running behind root config.\n" +
                "\n" +
                "We are looking for someone that can setup the right configs and get everything running in a short amount of time.", List.of("Java", "Docker", "Kafka"),"USA");
        Job job3 = new Job("Bookkeeping for 2 closely-held LLCs", "Accounting", "Hourly", 15, ExperienceLevel.Intermediate, LocalDateTime.now(),"Need a bookkeeper to update books and transition to QB online.", List.of("Accounting", "Data Entry"),"USA");
        Job job4 = new Job("Quick books tutoring", "Accounting", "Hourly", 20, ExperienceLevel.Experienced, LocalDateTime.now(),"I need someone who can share my screen and tutor me in Quickbooks.  I have most of it down but have a few issues that I need to address and I am not sure what I need to do.  \n" +
                "Thank you in advance for your help in this matter.", List.of("QuickBooks"),"Canada");
        Job job5 = new Job("Work on logo for clothing items", "Design", "Fixed-Price", 100, ExperienceLevel.Intermediate, LocalDateTime.now(),"I need someone who can modify my logo.  Needs to be vector format.  I will be printing it dye sublimation on fabric that is 88% polyester and 12% spandex.  I need logos that can work on black and white material.  If you can add the words Trinity Gear somewhere in the logo.  This will go in the middle of the chest of the shirt.", List.of("Adobe Photoshop", "Adobe Illustrator", "Graphic Design"),"Canada");
        Job job6 = new Job(" Influencer Marketing Consultant", "Marketing", "Hourly", 40, ExperienceLevel.Experienced, LocalDateTime.now(),"Hello!\n" +
                "\n" +
                "We are planing our first influencer marketing campaigns.\n" +
                "\n" +
                "Since we haven‘t worked with influencers yet we want to find a consultant who will bring in expertise and take over some tasks for us.\n" +
                "\n" +
                "In a first get to know we want to see who you are and what‘s your experience with influencer marketing. How will you be able to help us achieve our influencer goals?\n" +
                "Based on this conversation we will together set an outline in which activities you are going to help us.", List.of("Influencer Marketing"),"Romania");
        Job job7 = new Job("Recover FaceBook Page", "Marketing", "Fixed-Price", 15, ExperienceLevel.Experienced, LocalDateTime.now(),"Hi,\n" +
                "I need someone who is an expert in recovering Facebook and Instagram business profile.\n" +
                "Here's the problem I need you to resolve. Please read carefully and only apply if you think you're confident to nail it.\n" +
                "Facebook has removed my admin rights from my professional page and I'm no longer admin now. I added 3 profiles to my page previously but from all profiles access is gone.\n" +
                "\n" +
                "I have tried to log in from my business account as well but it is not showing in my business account. I can still see my ad account and ad manager but cannot see my page there. When I try to get access to ad manager, I'm not getting any email on any of my Gmail accounts and it's still showing pending requests.\n" +
                "\n" +
                "I have made a new page and tried to connect my Insta with it but it's saying your Instagram is already linked and it's not allowing me to unlink since it's attached with my old FB page.\n" +
                "\n" +
                "So if anyone knows how can I get my admin right back. If you have done this before please contact me so that we can discuss this. Please feel free to quote your price it's just a filler. Also, write your favourite color in your cover letter so that I know you've read the job post.   ", List.of("Facebook", "Instagram"),"USA");
        Job job8 = new Job("Titlu4", "finance", "Hourly", 100, ExperienceLevel.Experienced, LocalDateTime.now(),"Description", List.of("Skill1", "Skill2"),"USA");
        Job job9 = new Job("Titlu4", "finance", "Hourly", 100, ExperienceLevel.Experienced, LocalDateTime.now(),"Description", List.of("Skill1", "Skill2"),"USA");
        jobsRepository.saveAll(List.of(job, job2, job3, job4,job5, job6, job7));
        Address address = new Address("Bulevardul Brancoveanu 5", "Bucharest", "Romania");
        AppUserFreelancer appUserFreelancer = new AppUserFreelancer("profpic", "Penica", "Ovidiu Andrei", "Available", "English: Fluent", List.of(new Education("Academia de Studii Economice din Bucuresti", "Bachelor's Degree", "2017-2020")), "Web, Software Full Stack Dev", "Use this space to show clients you have the skills and experience they're looking for.\n" +
                "Describe your strengths and skills Highlight projects, accomplishments and education Keep it short and make sure it's error-free",List.of("IT","Skill","Skill","Skill","Skill","Skill","Skill","Skill","Skill" ),List.of(new Certification("HTML", "Coursera", 2021)), address , "0743212448","andrei.penica@yahoo.com", passwordEncoder.encode("123456"), Set.of(UserRole.ROLE_FREELANCER));
        appUserFreelancerRepository.save(appUserFreelancer);
    }
}
