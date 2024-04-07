package com.employee.management.validations.Implementations;

import java.util.Calendar;
import java.util.Date;

import com.employee.management.validations.ShiftedOn;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class ShiftedOnValidator implements ConstraintValidator<ShiftedOn, Date>{

	@Override
	public boolean isValid(Date value, ConstraintValidatorContext context) {
		Calendar getDateInCalender=Calendar.getInstance(); 
		getDateInCalender.setTime(value);
		
		return Calendar.getInstance().get(Calendar.DATE)-getDateInCalender.get(Calendar.DATE)>=1;
	}

}
