package com.blog.apis.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
public class Role {
	
	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;

}
