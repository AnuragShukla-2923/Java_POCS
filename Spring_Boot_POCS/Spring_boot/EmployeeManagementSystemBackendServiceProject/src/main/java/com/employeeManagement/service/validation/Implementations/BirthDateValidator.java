package com.employeeManagement.service.validation.Implementations;

import java.util.Calendar;
import java.util.Date;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.employeeManagement.service.validation.BirthDate;

//import jakarta.validation.ConstraintValidator;
//import jakarta.validation.ConstraintValidatorContext;


public class BirthDateValidator implements ConstraintValidator<BirthDate, Date> {
	 @Override
	  public boolean isValid(final Date valueToValidate, final ConstraintValidatorContext context) {
	    Calendar dateInCalendar = Calendar.getInstance();
	    dateInCalendar.setTime(valueToValidate);

//	    return Calendar.getInstance().get(Calendar.YEAR) - dateInCalendar.get(Calendar.YEAR) >= 18;
	    return Calendar.getInstance().get(Calendar.YEAR) - dateInCalendar.get(Calendar.YEAR) >= 18
	    		&& Calendar.getInstance().get(Calendar.YEAR) - dateInCalendar.get(Calendar.YEAR) <= 100;
	  }

}
