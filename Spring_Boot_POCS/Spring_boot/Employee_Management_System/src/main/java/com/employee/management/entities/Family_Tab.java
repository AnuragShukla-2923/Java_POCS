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
@Table(name = "Family_Details")
@NoArgsConstructor
@Getter
@Setter
public class Family_Tab {

	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long familyId;
	
	@Column(nullable = false,length = 30)
	private String fathersName;
	@Column(nullable = false,length = 30)
	private String fathersOccupation;
	@Column(nullable = false,length = 30)
	private String mothersName;
	@Column(nullable = false,length = 30)
	private String mothersOccupation;
	@Column(nullable = true)
	private Boolean marriedIf;
	@Column(nullable = true)
	private String partnerName;
	@Column(nullable = true)
	private String partnersOccupation;
	@Column(nullable = true)
	private Boolean childrenIf;
	@Column(nullable = true)
	private Integer noOfChildrens;
	
	@ManyToOne
	@JoinColumn(name = "PersonalTabId",nullable = false)
	private Personal_Tab personalId;
}
