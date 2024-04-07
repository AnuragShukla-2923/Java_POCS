package com.employee.management.entities;

import java.util.Date;
import java.util.Set;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Personal_details")
@NoArgsConstructor
@Getter
@Setter
public class Personal_Tab {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long pid;
	@Column(nullable = false,length=20)
	private String firstName;
	private String secondName;
	private String lastName;
	private int age;

//	@Temporal(TemporalType.DATE)
//	private Date dob;
	
	private String dob;
	private String gender;
	@Column(unique = true, nullable = false,length=50)
	private String emailId;
	@Column(unique = true)
	private String mobileNo;
	private String address;
	private String city;
	private String state;
	private String country;
	private int pinCode;

	@Column(unique = true)
	private String alternateMobileNo;
	@Column(unique = true)
	private String emergencyMobileNo;
	private String bloodGroup;
	private boolean passport;

	private String passportDetails;

	@Lob
	@Column(name = "passportCopy", columnDefinition = "LONGBLOB")
	private byte[] passportCopy;
	private boolean aadhar;
	private String aadharDetails;
	@Lob
	@Column(name = "aadharCopy", columnDefinition = "LONGBLOB")
	private byte[] aadharCopy;
	private boolean drivingLicense;
	private String drivingLicenseDetails;

	@Lob
	@Column(name = "drivingLicenseCopy", columnDefinition = "LONGBLOB")
	private byte[] drivingLicenseCopy;

	private String maritalStatus;
	private String workLocation;
	
	
	@OneToMany(mappedBy = "personalId")
	private Set<Skill_Tab>skills;
	
	
	@OneToMany(mappedBy = "personalId")
	private Set<Education_Tab>educational;
	
	
	@OneToMany(mappedBy = "personalId")
	private Set<Family_Tab>families;
	
	@OneToMany(mappedBy = "personalId")
	private Set<Accommodation_Tab>accommodations;
	
	@OneToMany(mappedBy = "personalId")
	private Set<WorkExperience_Tab>workExperiences;
	
	@OneToMany(mappedBy = "personalId")
	private Set<Salary_Tab>salaries;
	
	

	@OneToOne
	@JoinColumn(name = "userId",nullable = false,unique = true)
	private User userId;
	
	
	

	
	
	
	
	
	
	
	

}
