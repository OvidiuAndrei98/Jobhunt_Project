package com.lancefy.backend.controller;

import com.lancefy.backend.model.jobs.Job;
import com.lancefy.backend.model.jobs.JobDraft;
import com.lancefy.backend.service.JobsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
//@PreAuthorize("hasRole('FREELANCER')")
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

    @CrossOrigin("*")
    @PostMapping ("/save-draft-getting-started")
    public ResponseEntity<Long> saveJobDraftGettingStarted(@RequestBody JobDraft jobDraft) {
        return ResponseEntity.ok(jobsService.saveDraft(jobDraft));
    }

    @CrossOrigin("*")
    @PostMapping ("/save-draft-title/{id}")
    public ResponseEntity<Long> saveJobDraftTitle(@PathVariable Long id, @RequestBody JobDraft jobDraft) {
        return ResponseEntity.ok(jobsService.saveDraft(jobDraft, id));
    }

    @CrossOrigin("*")
    @PostMapping ("/save-draft-skills")
    public ResponseEntity<Long> saveJobDraftSkills(@RequestBody JobDraft jobDraft) {
        return ResponseEntity.ok(jobsService.saveDraft(jobDraft));
    }

    @CrossOrigin("*")
    @PostMapping ("/save-draft-scope")
    public ResponseEntity<Long> saveJobDraftScope(@RequestBody JobDraft jobDraft) {
        return ResponseEntity.ok(jobsService.saveDraft(jobDraft));
    }

    @CrossOrigin("*")
    @PostMapping ("/save-draft-budget")
    public ResponseEntity<Long> saveJobDraftBudget(@RequestBody JobDraft jobDraft) {
        return ResponseEntity.ok(jobsService.saveDraft(jobDraft));
    }

    @CrossOrigin("*")
    @PostMapping ("/post/{id}")
    public ResponseEntity<String> postJob(@PathVariable Long id, @RequestBody Job jobDraft) {
        jobsService.postJob(jobDraft, id);
        return ResponseEntity.ok("Job posted");
    }

}
