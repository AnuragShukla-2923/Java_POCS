package com.employee.management.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee.management.entities.Personal_Tab;

//import com.employee.apis.entities.Personal_Tab;


public interface PersonalTabRepo extends JpaRepository<Personal_Tab, Long> {

}
