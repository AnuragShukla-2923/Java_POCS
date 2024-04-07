package com.employee.management.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee.management.entities.Role;


public interface RoleRepo extends JpaRepository<Role, Integer> {

}
