package com.employee.management.entities;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "Educational_Details")
@NoArgsConstructor
@Getter
@Setter
public class Education_Tab {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
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
	private String graduationCGPA;
	private Boolean educationGap;
	private Integer educationGapDuration;
	@Lob
	@Column(name = "graduationMarkSheet", columnDefinition = "LONGBLOB")
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
	private String postGraduationCGPA;
	@Lob
	@Column(name = "postGraduationMarkSheet", columnDefinition = "LONGBLOB")
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
	@Lob
	@Column(name = "twelfthStandardMarkSheets", columnDefinition = "LONGBLOB")
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
	@Lob
	@Column(name = "tenthStandardMarkSheets", columnDefinition = "LONGBLOB")
	private Byte[] tenthStandardMarkSheets;
	
	
	@ManyToOne
	@JoinColumn(name = "PersonalTabId",nullable = false)
	private Personal_Tab personalId;


}
