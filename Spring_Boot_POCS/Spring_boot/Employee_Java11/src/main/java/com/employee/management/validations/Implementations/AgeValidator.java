package com.employee.management.validations.Implementations;

import com.employee.management.validations.Age;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class AgeValidator implements ConstraintValidator<Age, Integer> {

	@Override
	public boolean isValid(Integer value, ConstraintValidatorContext context) {

		return value > 18 && value < 100;
	}

}
