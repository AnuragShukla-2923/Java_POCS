package com.employeeManagement.service.entities;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;

public class Skill_Tab {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

}
