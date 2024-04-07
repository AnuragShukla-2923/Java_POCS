package com.userServices.micro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.userServices.micro.entities.User;

public interface UserRepository  extends JpaRepository<User, String>{

}
