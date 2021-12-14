package com.lancefy.backend.repository;

import com.lancefy.backend.model.appUser.AppUserFreelancer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
public interface AppUserFreelancerRepository extends JpaRepository<AppUserFreelancer, Long> {
    boolean existsByEmail(String email);
    AppUserFreelancer findByEmail(String email);
    Optional<AppUserFreelancer> findById(Long id);

    //de inlocuit cu save

    @Modifying
    @Transactional
    @Query("update Language lang set lang.language = ?1 , lang.proficiency = ?2  where lang.id = ?3")
    void updateLanguage(String language, String proficiency, Long id);

    @Modifying
    @Transactional
    @Query("update Education edu set edu.education = ?1 , edu.educationSpecialization = ?2, edu.educationPeriod = ?3  where edu.id = ?4")
    void updateEducation(String education, String educationSpecialization, String educationPeriod,  Long id);

    @Modifying
    @Transactional
    @Query("update AppUserFreelancer user set user.title = ?1 , user.selfDescription = ?2 where user.id = ?3")
    void updateDescription(String title, String selfDescription, Long id);

}
