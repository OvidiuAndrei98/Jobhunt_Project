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

    @Modifying
    @Transactional
    @Query("update Language lang set lang.language = ?1 , lang.proficiency = ?2  where lang.id = ?3")
    void updateLanguage(String language, String proficiency, Long id);
}
