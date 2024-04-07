package com.employeeManagement.service.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employeeManagement.service.entities.User;

public interface UserRepo extends JpaRepository<User, Integer>{
	Optional<User>findByEmail(String email);

}
