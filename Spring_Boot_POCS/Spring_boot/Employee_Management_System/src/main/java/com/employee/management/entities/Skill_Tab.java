package com.employee.management.entities;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Entity
@Table(name = "Skills_Details")
@NoArgsConstructor
@Getter
@Setter
public class Skill_Tab {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long skillsId;
	
	private Integer softSkillsCounter=0;
	@Column(name = "listOfSoftSkills",nullable = false)
	private String softSkills;
	
	
	private Integer technicalSkillsCounter=0;
	@Column(name = "listOfTechnicalSkills",nullable = false)
	private String technicalSkills;
	
	@ManyToOne
	@JoinColumn(name = "PersonalTabId",nullable = false)
	private Personal_Tab personalId;
	
	
	
	
   

}
