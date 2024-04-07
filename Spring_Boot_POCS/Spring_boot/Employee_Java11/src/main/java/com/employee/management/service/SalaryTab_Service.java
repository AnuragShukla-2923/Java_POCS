package com.employee.management.service;


import java.util.List;

import com.employee.management.payloads.SalaryTabDto;

//import com.employee.apis.payloads.SalaryTabDto;

public interface SalaryTab_Service {
	
	
	SalaryTabDto createSalary(SalaryTabDto Salary_tab);
	SalaryTabDto updateSalary(SalaryTabDto Salary_tab,Long salaryId);
	SalaryTabDto getSalarybyId(Long salaryId);
	
	List<SalaryTabDto>getAllSalary();
	void deleteSalary(Long salaryId);

}
