package com.sipe.api.services;

import com.sipe.api.dtos.request.UserRegisterRequest;
import com.sipe.api.dtos.request.UserUpdateEmailRequest;
import com.sipe.api.dtos.request.UserUpdatePasswordRequest;
import com.sipe.api.dtos.request.UserUpdateRequest;
import com.sipe.api.dtos.response.UserResponse;

import java.util.List;
import java.util.UUID;

public interface IUserService {
    List<UserResponse> getAll();
    UserResponse getById(UUID id);
    UserResponse register(UserRegisterRequest dto) throws Exception;
    UserResponse update(UUID id, UserUpdateRequest user) throws Exception;
    void updatedStatus(UUID id) throws Exception;
    void updateEmail(UUID id, UserUpdateEmailRequest dto) throws Exception;
    void updatePassword(UUID id, UserUpdatePasswordRequest dto) throws Exception;
    void delete(UUID id) throws Exception;
}
