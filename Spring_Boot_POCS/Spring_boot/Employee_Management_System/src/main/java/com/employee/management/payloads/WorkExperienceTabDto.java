package com.employee.management.payloads;



import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class WorkExperienceTabDto {

	
	private long workExperienceId;
	private String totalWorkExperience;
	private Integer totalEmployerCounts;
	private String employerDetails;
	private String employeeId;
	private String jobTitle;
	private String datesOfEmployement;
	private String listOfResponsibilities;
	private String listOfAwardsOrRecognitions;
	private String jobLocation;
	private Byte[] experienceLetter;
}
