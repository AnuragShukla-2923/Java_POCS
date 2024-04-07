package com.user.microservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.user.microservice.entities.User;

public interface UserRepository  extends JpaRepository<User, String>{

}
