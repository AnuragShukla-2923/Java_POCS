package com.userServices.micro.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "micro_users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User {
	
	@Id
	@Column(name = "id")
	private String userId;
	private String name;
	private String email;
	private String about;
	
	
//	this field will not be stored in db ,to do so we r using @Transient
	@Transient   
	private List<Rating>ratings=new ArrayList<>();
//	private List<Rating>ratings;
	

}
