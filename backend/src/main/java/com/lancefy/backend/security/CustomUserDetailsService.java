package com.lancefy.backend.security;

import com.lancefy.backend.model.appUser.AppUserFreelancer;
import com.lancefy.backend.service.AppUserFreelancerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
public class CustomUserDetailsService implements UserDetailsService {
    private final AppUserFreelancerService appUserFreelancerService;

    @Autowired
    public CustomUserDetailsService(AppUserFreelancerService appUserFreelancerService) {
        this.appUserFreelancerService = appUserFreelancerService;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if (appUserFreelancerService.existsByEmail(username)) {
            AppUserFreelancer user = appUserFreelancerService.findByEmail(username);
            return new User(user.getEmail(), user.getPassword(), user.getRoles().stream().map(role -> new SimpleGrantedAuthority(role.name())).collect(Collectors.toList()));
        }
        return null;
    }
}
