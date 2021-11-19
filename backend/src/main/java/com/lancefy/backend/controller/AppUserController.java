package com.lancefy.backend.controller;

import com.lancefy.backend.model.appUser.AppUserFreelancer;
import com.lancefy.backend.model.appUser.Language;
import com.lancefy.backend.model.appUser.UpdatePasswordDto;
import com.lancefy.backend.service.AppUserFreelancerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin("*")
@RequestMapping("/user")
public class AppUserController {
    private final AppUserFreelancerService appUserFreelancerService;

    @Autowired
    public AppUserController(AppUserFreelancerService appUserFreelancerService) {
        this.appUserFreelancerService = appUserFreelancerService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<AppUserFreelancer> getUserById(@PathVariable long id) {
       return ResponseEntity.ok(appUserFreelancerService.findById(id));
    }

//    @PreAuthorize("hasRole('ROLE_FREELANCER')")
    @PutMapping("/update-password/{id}")
    public ResponseEntity<String> updateUserById(@PathVariable long id, @RequestBody UpdatePasswordDto updatePasswordDto) {
        return ResponseEntity.ok(appUserFreelancerService.updateUserPassword(id, updatePasswordDto));
    }

    @PostMapping("/add-language/{id}")
    public ResponseEntity<String> addLanguage(@PathVariable long id, @RequestBody Language language) {
        return ResponseEntity.ok(appUserFreelancerService.addLanguage(id, language));
    }

    @PostMapping("/update-language/{id}")
    public ResponseEntity<String> updateLanguage(@PathVariable Long id, @RequestBody Language language) {
        return ResponseEntity.ok(appUserFreelancerService.updateLanguage(language,id));
    }

    @PostMapping("/remove-language/{id}")
    public ResponseEntity<String> removeLanguage(@PathVariable Long id, @RequestBody Language language) {
        return ResponseEntity.ok(appUserFreelancerService.removeLanguage(id,language));
    }

}
