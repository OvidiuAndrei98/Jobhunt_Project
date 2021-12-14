package com.lancefy.backend.controller;

import com.lancefy.backend.model.applications.Application;
import com.lancefy.backend.model.jobs.Job;
import com.lancefy.backend.service.ApplicationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.server.ServerErrorException;

import java.util.List;

@Controller
@RequestMapping("/applications")
public class ApplicationsController {
    private ApplicationService applicationService;

    public ApplicationsController(ApplicationService applicationService) {
        this.applicationService = applicationService;
    }

    @CrossOrigin("*")
    @PostMapping("/{jobId}/apply/{userId}")
    public ResponseEntity<String> postJob(@PathVariable Long jobId, @PathVariable Long userId, @RequestBody Application application) {
        try {
            applicationService.sendApplication(application, jobId, userId);
            return ResponseEntity.ok("Applied");
        }
        catch (Exception exc) {
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR, "Foo Not Found", exc);
        }
    }

    @CrossOrigin("*")
    @GetMapping("/{jobId}/applications")
    public ResponseEntity<List<Application>> getApplicationsForJob(@PathVariable Long jobId) {
        try {
            List<Application> applications = applicationService.getApplicationsForJob(jobId);
            return ResponseEntity.ok(applications);
        }
        catch (Exception exc) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "No applications found for that job.", exc);
        }
    }

}
