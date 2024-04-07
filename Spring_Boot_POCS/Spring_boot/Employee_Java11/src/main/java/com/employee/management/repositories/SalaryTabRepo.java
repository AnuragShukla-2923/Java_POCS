package com.employee.management.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee.management.entities.Salary_Tab;

//import com.employee.apis.entities.Salary_Tab;

public interface SalaryTabRepo  extends JpaRepository<Salary_Tab, Long>{

}
