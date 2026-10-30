package com.sipe.api.dtos.response;

import com.sipe.api.entities.User;

import java.util.UUID;

public record UserResponse(UUID id, String name, String email) {
    public static UserResponse toUserResponse(User user) {
        return new UserResponse(user.getId(), user.getName(), user.getEmail());
    }
}
