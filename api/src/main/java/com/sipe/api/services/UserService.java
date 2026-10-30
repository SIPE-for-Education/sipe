package com.sipe.api.services;

import com.sipe.api.dtos.request.UserRegisterRequest;
import com.sipe.api.dtos.request.UserUpdateEmailRequest;
import com.sipe.api.dtos.request.UserUpdatePasswordRequest;
import com.sipe.api.dtos.request.UserUpdateRequest;
import com.sipe.api.dtos.response.UserResponse;
import com.sipe.api.entities.User;
import com.sipe.api.repositories.IUserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UserService implements IUserService {
    public UserService(IUserRepository repository) {
        this.repository = repository;
    }

    private final IUserRepository repository;

    @Override
    public List<UserResponse> getAll() {
        var response = repository.findAll();

        return response.stream().map(UserResponse::toUserResponse).toList();
    }

    @Override
    public UserResponse getById(UUID id) {
        var response = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        return UserResponse.toUserResponse(response);
    }

    @Override
    public UserResponse register(UserRegisterRequest dto) throws Exception {
        var request = repository.findByEmail(dto.email());
        if (request.isPresent())
            throw new Exception("User already exist");

        User entity = User.builder()
                .name(dto.name())
                .email(dto.email())
                .password(dto.password())
                .build();

        repository.save(entity);

        return UserResponse.toUserResponse(entity);
    }

    @Override
    public UserResponse update(UUID id, UserUpdateRequest dto) throws Exception {
        var request = repository.findById(id);
        if (request.isEmpty())
            throw new Exception("User not found");

        var entity = request.get();
        BeanUtils.copyProperties(dto, entity);

        repository.save(entity);

        return UserResponse.toUserResponse(entity);
    }

    @Override
    public void updatedStatus(UUID id) throws Exception {
        var request = repository.findById(id);
        if (request.isEmpty())
            throw new Exception("User not found");

        repository.toggleActive(id);
    }

    @Override
    public void updateEmail(UUID id, UserUpdateEmailRequest dto) throws Exception {
        var request = repository.findById(id);
        if (request.isEmpty())
            throw new Exception("User not found");

        repository.updateEmail(id, dto.email());
    }

    @Override
    public void updatePassword(UUID id, UserUpdatePasswordRequest password) throws Exception {
        var request = repository.findById(id);
        if (request.isEmpty())
            throw new Exception("User not found");

        var hashPassword = password.password();

        repository.updatePassword(id, hashPassword);
    }

    @Override
    public void delete(UUID id) throws Exception {
        var request = repository.findById(id);
        if (request.isEmpty())
            throw new Exception("User not found");

        repository.deleteById(id);
    }
}
