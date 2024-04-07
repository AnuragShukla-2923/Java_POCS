package com.employee.management.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity 
@Data
@Setter
@Getter

public class Role {
	
	@Id
	private Integer id;
    private String name;
}
