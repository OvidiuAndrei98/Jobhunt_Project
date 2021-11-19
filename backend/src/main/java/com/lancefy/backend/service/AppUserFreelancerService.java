package com.lancefy.backend.service;

import com.lancefy.backend.model.appUser.AppUserFreelancer;
import com.lancefy.backend.model.appUser.Language;
import com.lancefy.backend.model.appUser.UpdatePasswordDto;
import com.lancefy.backend.repository.AppUserFreelancerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppUserFreelancerService {
    private final AppUserFreelancerRepository appUserFreelancerRepository;
    BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    public AppUserFreelancerService(AppUserFreelancerRepository appUserFreelancerRepository) {
        this.appUserFreelancerRepository = appUserFreelancerRepository;
    }

    public void addUser(AppUserFreelancer appUserFreelancer) {
        appUserFreelancerRepository.save(appUserFreelancer);
    }

    public boolean existsByEmail(String email) {
       return appUserFreelancerRepository.existsByEmail(email);
    }

    public AppUserFreelancer findByEmail(String email) {
        return appUserFreelancerRepository.findByEmail(email);
    }

    public AppUserFreelancer findById(Long id) {
        return appUserFreelancerRepository.findById(id).get();
    }

    public String updateUserPassword(Long id, UpdatePasswordDto updatePasswordDto) {
        AppUserFreelancer editUser = appUserFreelancerRepository.findById(id).get();
        System.out.println(updatePasswordDto);
        if (passwordEncoder.matches(updatePasswordDto.getCurrentPassword(), editUser.getPassword())) {
            editUser.setPassword(passwordEncoder.encode(updatePasswordDto.getNewPassword()));
            appUserFreelancerRepository.save(editUser);
            return "User Updated";
        }
        return "Incorrect current password";
    }

    public String addLanguage(Long id, Language language) {
        AppUserFreelancer editUser = appUserFreelancerRepository.findById(id).get();
        List<Language> languages = editUser.getLanguages();
        languages.add(language);
        editUser.setLanguages(languages);
        appUserFreelancerRepository.save(editUser);
        return "Language added";
    }

    public String removeLanguage(Long id, Language language) {
        AppUserFreelancer editUser = appUserFreelancerRepository.findById(id).get();
        List<Language> languages = editUser.getLanguages();
        languages.remove(language);
        editUser.setLanguages(languages);
        appUserFreelancerRepository.save(editUser);
        return "Language Removed";
    }

    public String updateLanguage(Language language, Long id){
        appUserFreelancerRepository.updateLanguage(language.getLanguage(),language.getProficiency(),id);
        return "Language updated";
    }
}
