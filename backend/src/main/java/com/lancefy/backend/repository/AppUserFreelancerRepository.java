package com.lancefy.backend.repository;

import com.lancefy.backend.model.appUser.AppUserFreelancer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AppUserFreelancerRepository extends JpaRepository<AppUserFreelancer, Long> {
    boolean existsByEmail(String email);
    AppUserFreelancer findByEmail(String email);
    Optional<AppUserFreelancer> findById(Long id);
}
