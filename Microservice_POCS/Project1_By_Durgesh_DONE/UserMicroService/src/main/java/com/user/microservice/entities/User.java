package com.user.microservice.entities;

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


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "micro_users")
public class User {
	
	@Id
	@Column(name = "ID")
	private String userId;
	@Column(length = 20)
	private String name;
	private String email;
	private String about;
	
	@Transient  //jpa will not save this in db
	private List<Ratings> ratings=new ArrayList<>();

}
