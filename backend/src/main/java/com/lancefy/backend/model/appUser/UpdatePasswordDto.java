package com.lancefy.backend.model.appUser;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UpdatePasswordDto {
    private String currentPassword;
    private String newPassword;
    private String repeatNewPassword;
}
