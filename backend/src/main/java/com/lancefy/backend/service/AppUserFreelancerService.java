package com.lancefy.backend.service;

import com.amazonaws.services.s3.model.Bucket;
import com.lancefy.backend.awsconfig.buckets.BucketName;
import com.lancefy.backend.awsconfig.filestore.FileStore;
import com.lancefy.backend.model.appUser.*;
import com.lancefy.backend.repository.AppUserFreelancerRepository;
import org.apache.http.entity.ContentType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

@Service
public class AppUserFreelancerService {
    private final AppUserFreelancerRepository appUserFreelancerRepository;
    BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    private final FileStore fileStore;

    @Autowired
    public AppUserFreelancerService(AppUserFreelancerRepository appUserFreelancerRepository, FileStore fileStore) {
        this.appUserFreelancerRepository = appUserFreelancerRepository;
        this.fileStore = fileStore;
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

    public String addEducation(Long id, Education education) {
        AppUserFreelancer editUser = appUserFreelancerRepository.findById(id).get();
        List<Education> educations = editUser.getEducation();
        educations.add(education);
        editUser.setEducation(educations);
        appUserFreelancerRepository.save(editUser);
        return "Education added";
    }

    public String updateEducation(Education education, Long id){
        appUserFreelancerRepository.updateEducation(education.getEducation(),education.getEducationSpecialization(), education.getEducationPeriod(), id);
        return "Language updated";
    }

    public String removeEducation(Long id, Education education) {
        AppUserFreelancer editUser = appUserFreelancerRepository.findById(id).get();
        List<Education> educationList = editUser.getEducation();
        educationList.remove(education);
        editUser.setEducation(educationList);
        appUserFreelancerRepository.save(editUser);
        return "Education removed";
    }

    public String updateDescription(AppUserFreelancer appUserFreelancer, Long id){
        appUserFreelancerRepository.updateDescription(appUserFreelancer.getTitle(),appUserFreelancer.getSelfDescription(), id);
        return "Language updated";
    }


    public String addSkills(AppUserFreelancer appUserFreelancer, Long id) {
        AppUserFreelancer editUser = appUserFreelancerRepository.findById(id).get();
        List<String> skills = editUser.getSkills();
        for (String skill: appUserFreelancer.getSkills()) {
            if (!skills.contains(skill)) {
                skills.add(skill);
            }
        }
        editUser.setSkills(skills);
        appUserFreelancerRepository.save(editUser);
        return "Skills added";
    }

    public String addCertification(Certification certification, Long id) {
        AppUserFreelancer editUser = appUserFreelancerRepository.findById(id).get();
        List<Certification> certificationList = editUser.getCertifications();
        if (!certificationList.contains(certification)) {
            certificationList.add(certification);
            editUser.setCertifications(certificationList);
        }
        appUserFreelancerRepository.save(editUser);
        return "Certification added";
    }

    public String updatePhoto(Long id, MultipartFile file) {
        if(file.isEmpty()) {
            throw new IllegalStateException("cannot upload empty file");
        }

//        if(Arrays.asList(ContentType.IMAGE_JPEG,ContentType.IMAGE_PNG).contains(file.getContentType())) {
//            throw new IllegalStateException("File must be an image!");
//        }

        if(!appUserFreelancerRepository.existsById(id)) {
            throw new IllegalStateException("User not found!");
        }

        Map<String, String> metadata = new HashMap<>();
        metadata.put("Content-Type", file.getContentType());
        metadata.put("Content-Length", String.valueOf(file.getSize()));

       String path =  String.format("%s/%s", BucketName.PROFILE_IMAGE.getBucketNanme(),id);
       String filename =  String.format("%s", file.getOriginalFilename());

       try {
           fileStore.save(path,filename, Optional.of(metadata),file.getInputStream());
           AppUserFreelancer user = appUserFreelancerRepository.getById(id);
           user.setProfilePic(filename);
           appUserFreelancerRepository.save(user);
       } catch (IOException e) {
           throw new IllegalStateException(e);
       }
       return "Image uploaded";
    }

    public byte[] getPhoto(Long id) {
        AppUserFreelancer user = appUserFreelancerRepository.getById(id);
        String path = String.format("%s/%s", BucketName.PROFILE_IMAGE.getBucketNanme(),id);

        return fileStore.download(path, user.getProfilePic());

    }
}
