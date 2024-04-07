package com.employee.management.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "WorkExperience_Details")
@NoArgsConstructor
@Getter
@Setter
public class WorkExperience_Tab {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long WorkExperienceId;
	private Integer totalWorkExperience;
	private Integer totalEmployerCounts;
	private String employerDetails;
	private String employeeId;
	private String jobTitle;
	private String datesOfEmployement;
	private String listOfResponsibilities;
	private String listOfAwardsOrRecognitions;
	private String jobLocation;
	@Lob
	@Column(name = "experienceLetterCopy", columnDefinition = "LONGBLOB")
	private Byte[] experienceLetter;
	

}
