package com.sipe.api.controllers;

import com.sipe.api.dtos.request.UserRegisterRequest;
import com.sipe.api.dtos.request.UserUpdateEmailRequest;
import com.sipe.api.dtos.request.UserUpdatePasswordRequest;
import com.sipe.api.dtos.request.UserUpdateRequest;
import com.sipe.api.dtos.response.UserResponse;
import com.sipe.api.entities.User;
import com.sipe.api.services.IUserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("users")
public class UserController {
    public UserController(IUserService service) {
        this.service = service;
    }

    private final IUserService service;

    @GetMapping
    List<UserResponse> getAll() {
        return this.service.getAll();
    }

    @GetMapping("/{id}")
    UserResponse getById(@PathVariable UUID id) {
        return this.service.getById(id);
    }

    @PostMapping
    UserResponse register(@RequestBody UserRegisterRequest dto) throws Exception {
        return this.service.register(dto);
    }

    @PutMapping("/{id}")
    UserResponse update(@PathVariable UUID id, @RequestBody UserUpdateRequest dto) throws Exception {
        return this.service.update(id, dto);
    }

    @PatchMapping("/{id}/status")
    void updatedStatus(@PathVariable UUID id) throws Exception {
        this.service.updatedStatus(id);
    }

    @PatchMapping("/{id}/email")
    void updateEmail(@PathVariable UUID id, @RequestBody UserUpdateEmailRequest dto) throws Exception {
        this.service.updateEmail(id, dto);
    }

    @PatchMapping("/{id}/password")
    void updatePassword(@PathVariable UUID id, @RequestBody UserUpdatePasswordRequest dto) throws Exception {
        this.service.updatePassword(id, dto);
    }

    @DeleteMapping("/{id}")
    void delete(@PathVariable UUID id) throws Exception {
        this.service.delete(id);
    }
}
