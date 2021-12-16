package com.lancefy.backend.controller;

import com.lancefy.backend.model.appUser.*;
import com.lancefy.backend.service.AppUserFreelancerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@Controller
@CrossOrigin("*")
@RequestMapping("/user")
public class AppUserController {
    private final AppUserFreelancerService appUserFreelancerService;

    //controller advice

    @Autowired
    public AppUserController(AppUserFreelancerService appUserFreelancerService) {
        this.appUserFreelancerService = appUserFreelancerService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<AppUserFreelancer> getUserById(@PathVariable long id) {
       return ResponseEntity.ok(appUserFreelancerService.findById(id));
    }

    @CrossOrigin("*")
    @GetMapping("/get-company/{id}")
    public ResponseEntity<Company> getUserCompany(@PathVariable long id) {
        return ResponseEntity.ok(appUserFreelancerService.getUserCompany(id));
    }


    @PutMapping("/update-password/{id}")
    public ResponseEntity<String> updateUserById(@PathVariable long id, @RequestBody UpdatePasswordDto updatePasswordDto) {
        return ResponseEntity.ok(appUserFreelancerService.updateUserPassword(id, updatePasswordDto));
    }

    @PreAuthorize("hasRole('ROLE_FREELANCER')")
    @PostMapping("/add-language/{id}")
    public ResponseEntity<String> addLanguage(@PathVariable long id, @RequestBody Language language) {
        return ResponseEntity.ok(appUserFreelancerService.addLanguage(id, language));
    }

    @PreAuthorize("hasRole('ROLE_FREELANCER')")
    @PostMapping("/update-language/{id}")
    public ResponseEntity<String> updateLanguage(@PathVariable Long id, @RequestBody Language language) {
        return ResponseEntity.ok(appUserFreelancerService.updateLanguage(language,id));
    }

    @PreAuthorize("hasRole('ROLE_FREELANCER')")
    @PostMapping("/remove-language/{id}")
    public ResponseEntity<String> removeLanguage(@PathVariable Long id, @RequestBody Language language) {
        return ResponseEntity.ok(appUserFreelancerService.removeLanguage(id,language));
    }

    @PreAuthorize("hasRole('ROLE_FREELANCER')")
    @PostMapping("/add-education/{id}")
    public ResponseEntity<String> addEducation(@PathVariable Long id, @RequestBody Education education) {
        return ResponseEntity.ok(appUserFreelancerService.addEducation(id,education));
    }

    @PreAuthorize("hasRole('ROLE_FREELANCER')")
    @PostMapping("/update-education/{id}")
    public ResponseEntity<String> updateEducation(@PathVariable Long id, @RequestBody Education education) {
        return ResponseEntity.ok(appUserFreelancerService.updateEducation(education,id));
    }

    @PreAuthorize("hasRole('ROLE_FREELANCER')")
    @PostMapping("/remove-education/{id}")
    public ResponseEntity<String> removeEducation(@PathVariable Long id, @RequestBody Education education) {
        return ResponseEntity.ok(appUserFreelancerService.removeEducation(id,education));
    }

    @PreAuthorize("hasRole('ROLE_FREELANCER')")
    @PostMapping("/update-description/{id}")
    public ResponseEntity<String> updateDescription(@PathVariable Long id, @RequestBody AppUserFreelancer appUserFreelancer) {
        return ResponseEntity.ok(appUserFreelancerService.updateDescription(appUserFreelancer,id));
    }

    @PreAuthorize("hasRole('ROLE_FREELANCER')")
    @PostMapping("/add-skills/{id}")
    public ResponseEntity<String> addSkills(@PathVariable Long id, @RequestBody AppUserFreelancer appUserFreelancer) {
        return ResponseEntity.ok(appUserFreelancerService.addSkills(appUserFreelancer,id));
    }

    @PreAuthorize("hasRole('ROLE_FREELANCER')")
    @PostMapping("/add-certification/{id}")
    public ResponseEntity<String> addCertification(@PathVariable Long id, @RequestBody Certification certification) {
        return ResponseEntity.ok(appUserFreelancerService.addCertification(certification,id));
    }

    @PreAuthorize("hasRole('ROLE_FREELANCER')")
    @PostMapping(
            path = "/{id}/update-picture",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<String> updatePhoto(@PathVariable Long id, @RequestParam("file")MultipartFile file) {
//        System.out.println(file.getOriginalFilename());
        return ResponseEntity.ok(appUserFreelancerService.updatePhoto(id, file));
    }


    @GetMapping(
            path = "/get-picture/{id}"
    )
    public ResponseEntity<byte[]> getPhoto(@PathVariable Long id) {
        return ResponseEntity.ok(appUserFreelancerService.getPhoto(id));
    }


}
