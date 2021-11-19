package com.lancefy.backend.controller;

import com.lancefy.backend.model.appUser.AppUserFreelancer;
import com.lancefy.backend.model.authentication.LoginRequestDto;
import com.lancefy.backend.model.authentication.LoginResponseDto;
import com.lancefy.backend.security.JwtTokenService;
import com.lancefy.backend.service.AppUserFreelancerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@Controller
@CrossOrigin("*")
@RequestMapping("/auth")
public class AuthenticationController {
    private final AuthenticationManager authenticationManager;
    private final JwtTokenService jwtTokenService;
    private final AppUserFreelancerService appUserFreelancerService;
    BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    public AuthenticationController(AuthenticationManager authenticationManager, JwtTokenService jwtTokenService, AppUserFreelancerService appUserFreelancerService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenService = jwtTokenService;
        this.appUserFreelancerService = appUserFreelancerService;
    }

    @PostMapping("/sign-in/freelancer")
    public ResponseEntity<?> userSignIn(@RequestBody LoginRequestDto data) {
        try {
            if (appUserFreelancerService.existsByEmail(data.getEmail())) {
                return ResponseEntity.ok(getResponseDto(data));
            }
            throw new BadCredentialsException("Invalid username/password");
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid username/password supplied");
            }
        }

    @PostMapping("/register-freelancer")
    public ResponseEntity<?> registerUser(@RequestBody @Valid AppUserFreelancer appUserFreelancer) {
        if (appUserFreelancerService.existsByEmail(appUserFreelancer.getEmail())) {
            return ResponseEntity.badRequest().body("An account with this email already exists.");
        }
        appUserFreelancer.setPassword(passwordEncoder.encode(appUserFreelancer.getPassword()));
        appUserFreelancerService.addUser(appUserFreelancer);
        return ResponseEntity.ok("User has been registered successfully.");
    }

    public LoginResponseDto getAccountType(String email, String token, List<String> roles) {
        LoginResponseDto loginResponseDto;

        loginResponseDto = new LoginResponseDto(appUserFreelancerService.findByEmail(email).getId(), roles, token, email);

        return loginResponseDto;
    }

    public LoginResponseDto getResponseDto(LoginRequestDto data) {
        String email = data.getEmail();

        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(email, data.getPassword());
        Authentication authentication = authenticationManager.authenticate(authenticationToken);

        List<String> roles = authentication.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        String token = jwtTokenService.createToken(email, roles);

        return getAccountType(email, token, roles);
    }
}

