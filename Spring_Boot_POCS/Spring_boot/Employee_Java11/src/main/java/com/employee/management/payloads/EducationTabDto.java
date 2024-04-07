package com.employee.management.payloads;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter

public class EducationTabDto {


	private long educationId;
//	@Column(nullable = false,length=50)
	private String graduationDegreeName;
//	@Column(nullable = false,length=50)
	private String graduationUniversityName;
//	@Column(nullable = false,length=50)
	private String graduationCollegeName;
	private String gradautionPassingYear;
	private Boolean graduationBackLogs;
	private Boolean graduationBackLogsClearedIf;
	private Integer graduationCGPA;
	private Boolean educationGap;
	private Integer educationGapDuration;
//	@Lob
//	@Column(name = "graduationMarkSheet", columnDefinition = "LONGBLOB")
	private Byte[] graduationMarkSheet;
	
	
	// for post gradautions
	private Boolean postGraduationDegree;
//	@Column(nullable = false,length=50)
	private String postGraduationDegreeName;
//	@Column(nullable = false,length=50)
	private String postGraduationUniversityName;
//	@Column(nullable = false,length=50)
	private String postGraduationCollegeName;
//	@Column(nullable = false,length=50)
	private String postGraduationPassingYear;
	private Boolean postGraduationBackLogs;
	private Boolean postGraduationBackLogsClearedIf;
	private Integer postGraduationCGPA;
//	@Lob
//	@Column(name = "postGraduationMarkSheet", columnDefinition = "LONGBLOB")
	private Byte[] postGraduationMarkSheet;
	
	
//	for twelfth standard
//	@Column(nullable = false,length=10)
	private String twelfthStandard;
//	@Column(nullable = false,length=50)
	private String twelfthStandardSchoolName;
//	@Column(nullable = false,length=50)
	private String twelfthStandardBoardName;
	private String twelfthStandardPassingyear;
	private String twelfthStandardCGPA_Percentage;
//	@Lob
//	@Column(name = "twelfthStandardMarkSheets", columnDefinition = "LONGBLOB")
	private Byte[] twelfthStandardMarkSheets;
	
	
	
//	for tenth standard
//	@Column(nullable = false,length=10)
	private String tenthStandard;
//	@Column(nullable = false,length=50)
	private String tenthStandardSchoolName;
//	@Column(nullable = false,length=50)
	private String tenthStandardBoardName;
	private String tenthStandardPassingyear;
	private String tenthStandardCGPA_Percentage;
//	@Lob
//	@Column(name = "tenthStandardMarkSheets", columnDefinition = "LONGBLOB")
	private Byte[] tenthStandardMarkSheets;
	

}
