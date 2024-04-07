package com.employee.management.validations;
import static java.lang.annotation.ElementType.ANNOTATION_TYPE;
import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.ElementType.TYPE;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import com.employee.management.validations.Implementations.AgeValidator;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;


@Constraint(validatedBy = AgeValidator.class)
@Target({ TYPE, FIELD, ANNOTATION_TYPE })
@Retention(RUNTIME)
@Documented
public @interface Age {
	String message() default "{com.employeeManagement.service.validation.Age.message}";
	  Class <?> [] groups() default {};
	  Class <? extends Payload> [] payload() default {};

}
