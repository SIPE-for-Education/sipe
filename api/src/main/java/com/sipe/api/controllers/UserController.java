package com.sipe.api.controllers;

import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.sipe.api.dtos.request.UserRegisterRequest;
import com.sipe.api.dtos.request.UserUpdateEmailRequest;
import com.sipe.api.dtos.request.UserUpdatePasswordRequest;
import com.sipe.api.dtos.request.UserUpdateRequest;
import com.sipe.api.dtos.response.UserResponse;
import com.sipe.api.services.IUserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("users")
@Tag (name = "User", description = "Controlador para gerenciar usuários")
public class UserController {

    private final IUserService service;

    public UserController(IUserService service) {
        this.service = service;
    }

    @GetMapping
    @Operation (summary = "Listar todos os usuários", description = "Retorna uma lista de todos os usuários cadastrados no sistema")
    @ApiResponses (value = {
            @ApiResponse (responseCode = "200", description = "Lista de usuários retornada com sucesso"),
            @ApiResponse (responseCode = "500", description = "Erro interno do servidor")
    })
    
    public List<UserResponse> getAll() {
        return this.service.getAll();
    }

    @GetMapping("/{id}")
    @Operation (summary = "Obter usuário por ID", description = "Retorna os dados de um usuário específico com base no ID fornecido")
    @ApiResponses (value = {
            @ApiResponse (responseCode = "200", description = "Usuário retornado com sucesso"),
            @ApiResponse (responseCode = "400", description = "ID inválido fornecido"),
            @ApiResponse (responseCode = "404", description = "Usuário não encontrado"),
            @ApiResponse (responseCode = "500", description = "Erro interno do servidor")
    })
    public UserResponse getById(@PathVariable UUID id) {
        return this.service.getById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @Operation (summary = "Registrar novo usuário", description = "Cria um novo usuário no sistema com base nos dados fornecidos")
    @ApiResponses (value = {
            @ApiResponse (responseCode = "201", description = "Usuário registrado com sucesso"),
            @ApiResponse (responseCode = "400", description = "Dados inválidos fornecidos para registro"),
            @ApiResponse (responseCode = "409", description = "E-mail ou usuário já cadastrado no sistema"),
            @ApiResponse (responseCode = "500", description = "Erro interno do servidor")
    })
    public UserResponse register(@RequestBody UserRegisterRequest dto) throws Exception {
        return this.service.register(dto);
    }

    @PutMapping("/{id}")
    @Operation (summary = "Atualizar usuário", description = "Atualiza os dados de um usuário específico com base no ID fornecido")
    @ApiResponses (value = {
            @ApiResponse (responseCode = "200", description = "Usuário atualizado com sucesso"),
            @ApiResponse (responseCode = "400", description = "Dados inválidos fornecidos para atualização"),
            @ApiResponse (responseCode = "404", description = "Usuário não encontrado"),
            @ApiResponse (responseCode = "500", description = "Erro interno do servidor")
    })
    public UserResponse update(@PathVariable UUID id, @RequestBody UserUpdateRequest dto) throws Exception {
        return this.service.update(id, dto);
    }

    @PatchMapping("/{id}/status")
    @Operation (summary = "Atualizar status do usuário", description = "Atualiza o status de um usuário específico com base no ID fornecido")
    @ApiResponses (value = {
            @ApiResponse (responseCode = "204", description = "Status do usuário atualizado com sucesso"),
            @ApiResponse (responseCode = "400", description = "Status inválido fornecido para atualização"),
            @ApiResponse (responseCode = "404", description = "Usuário não encontrado"),
            @ApiResponse (responseCode = "500", description = "Erro interno do servidor"),
    })
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updatedStatus(@PathVariable UUID id) throws Exception {
        this.service.updatedStatus(id);
    }

    @PatchMapping("/{id}/email")
    @Operation (summary = "Atualizar email do usuário", description = "Atualiza o email de um usuário específico com base no ID fornecido")
    @ApiResponses (value = {
            @ApiResponse (responseCode = "204", description = "Email do usuário atualizado com sucesso"),
            @ApiResponse (responseCode = "400", description = "Email inválido fornecido para atualização"),
            @ApiResponse (responseCode = "404", description = "Usuário não encontrado"),
            @ApiResponse (responseCode = "500", description = "Erro interno do servidor"),
    })
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateEmail(@PathVariable UUID id, @RequestBody UserUpdateEmailRequest dto) throws Exception {
        this.service.updateEmail(id, dto);
    }

    @PatchMapping("/{id}/password")
    @Operation (summary = "Atualizar senha do usuário", description = "Atualiza a senha de um usuário específico com base no ID fornecido")
    @ApiResponses (value = {
            @ApiResponse (responseCode = "204", description = "Senha do usuário atualizada com sucesso"),
            @ApiResponse (responseCode = "400", description = "Senha atual incorreta ou nova senha inválida"),
            @ApiResponse (responseCode = "404", description = "Usuário não encontrado"),
            @ApiResponse (responseCode = "500", description = "Erro interno do servidor"),
    })
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updatePassword(@PathVariable UUID id, @RequestBody UserUpdatePasswordRequest dto) throws Exception {
        this.service.updatePassword(id, dto);
    }

    @DeleteMapping("/{id}")
    @Operation (summary = "Excluir usuário", description = "Remove um usuário específico do sistema com base no ID fornecido")
    @ApiResponses (value = {
            @ApiResponse (responseCode = "204", description = "Usuário excluído com sucesso"),
            @ApiResponse (responseCode = "404", description = "Usuário não encontrado"),
            @ApiResponse (responseCode = "500", description = "Erro interno do servidor")
    })
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable UUID id) throws Exception {
        this.service.delete(id);
    }
}
