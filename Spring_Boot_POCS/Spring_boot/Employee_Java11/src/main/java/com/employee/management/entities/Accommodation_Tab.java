package com.employee.management.entities;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
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
	private String ContactDetails;
	@Temporal(TemporalType.DATE)
	private Date ShiftedOn;
	@Temporal(TemporalType.DATE)
	private Date RelievedOn;
	@Column(nullable = true)
	private String durationOfTime;
	@Column(nullable = false)
	private String monthlyRent;
	@Column(nullable = true)
	private String miscellaneousChargesIfAny;
	@Column(nullable = true)
	private String anyIssueIf;
	

}
