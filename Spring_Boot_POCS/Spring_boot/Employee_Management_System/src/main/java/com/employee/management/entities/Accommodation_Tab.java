package com.employee.management.entities;

import java.util.Date;


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
@Table(name = "Accommodation_Details")
@NoArgsConstructor
@Getter
@Setter
public class Accommodation_Tab {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long accommodationId;
	@Column(nullable = false)
	private Boolean accommodationGivenByCompany;
	@Column(nullable = false,length = 20)
	private String flatNo;
	@Column(nullable = false,length = 50)
	private String completePostalAddress;
	@Column(nullable = false)
	private String contactDetails;
//	@Temporal(TemporalType.DATE)
//	private Date shiftedOn;
//	@Temporal(TemporalType.DATE)
//	private Date relievedOn;
	

	private String shiftedOn;
	
	private String relievedOn;
	
	@Column(nullable = true)
	private String durationOfTime;
	@Column(nullable = false)
	private String monthlyRent;
	@Column(nullable = true)
	private String miscellaneousChargesIfAny;
	@Column(nullable = true)
	private String anyIssueIf;
	
	
	@ManyToOne
	@JoinColumn(name = "PersonalTabId",nullable = false)
	private Personal_Tab personalId;

}
