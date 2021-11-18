package com.lancefy.backend.model.authentication;


import lombok.Data;

@Data
public class LoginRequestDto {
    private String email;
    private String password;
}
