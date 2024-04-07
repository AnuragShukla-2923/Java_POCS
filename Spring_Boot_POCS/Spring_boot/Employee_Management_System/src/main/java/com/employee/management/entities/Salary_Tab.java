package com.employee.management.entities;


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
@Table(name = "Salary_Details")
@NoArgsConstructor
@Getter
@Setter
public class Salary_Tab {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long salaryId;
	private String totolCTC;
	private String bankName;
	private String bankAddress;
	private String accountNo;
	private String ifscCode;
	
	@ManyToOne
	@JoinColumn(name = "PersonalTabId",nullable = false)
	private Personal_Tab personalId;


}
