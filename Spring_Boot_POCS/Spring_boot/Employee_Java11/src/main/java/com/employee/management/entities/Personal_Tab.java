package com.employee.management.entities;

import java.util.Date;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Personal_Details")
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

	@Temporal(TemporalType.DATE)
	private Date dob;
	private String gender;
	@Column(nullable = false,length=50)
	private String emailId;
	private String mobileNo;
	private String address;
	private String city;
	private String country;
	private int pinCode;

	private String alternateMobileNo;

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
	
	
	
	

	
	
	
	
	
	
	
	

}
