package com.employeeManagement.service.validation.Implementations;


import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.employeeManagement.service.validation.Age;

//import jakarta.validation.ConstraintValidator;
//import jakarta.validation.ConstraintValidatorContext;

public class AgeValidator implements ConstraintValidator<Age, Integer>{

	@Override
	public boolean isValid(Integer value, ConstraintValidatorContext context) {
 
		 return value > 18 && value < 100;
	}




	
}
