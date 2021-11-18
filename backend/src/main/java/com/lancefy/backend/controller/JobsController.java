package com.lancefy.backend.controller;

import com.lancefy.backend.model.jobs.Job;
import com.lancefy.backend.service.JobsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping("/jobs")
public class JobsController {
    private final JobsService jobsService;

    @Autowired
    public JobsController(JobsService jobsService) {
        this.jobsService = jobsService;
    }

    @CrossOrigin("*")
    @GetMapping("/all")
    public ResponseEntity<List<Job>> getAllJobs() {
        return ResponseEntity.ok(jobsService.getAllJobs());
    }

    @CrossOrigin("*")
    @GetMapping("/filter")
    public ResponseEntity<List<Job>> filterJobs(@RequestParam(required=false, name="category") String category, @RequestParam(required=false, name="pType") String paymentType, @RequestParam(required=false, name="experience") String experienceLevel, @RequestParam(required=false, name="location") String location  ) {
        return ResponseEntity.ok(jobsService.filterJobs(category,paymentType,experienceLevel,location));
    }

    @CrossOrigin("*")
    @GetMapping("/search")
    public ResponseEntity<List<Job>> filterJobs(@RequestParam(required=false, name="searchPhrase") String category, @RequestParam(required=false, name="searchPhrase") String searchPhrase ) {
        return ResponseEntity.ok(jobsService.searchJobs(searchPhrase));
    }

}
