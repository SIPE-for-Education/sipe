package com.sipe.api.repositories;

import com.sipe.api.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface IUserRepository extends JpaRepository<User, UUID> {
    Optional<User> findByEmail(String email);

    @Transactional
    @Modifying
    @Query("UPDATE User u SET u.email = :email WHERE u.id = :id")
    void updateEmail(@Param("id") UUID id, @Param("email") String email);

    @Transactional
    @Modifying
    @Query("UPDATE User u SET u.password = :hashPassword WHERE u.id = :id")
    void updatePassword(@Param("id") UUID id, @Param("hashPassword") String hashPassword);

    @Transactional
    @Modifying
    @Query("UPDATE User u SET u.isActive = CASE WHEN u.isActive = true THEN false ELSE true END WHERE u.id = :id")
    void toggleActive(@Param("id") UUID id);
}
