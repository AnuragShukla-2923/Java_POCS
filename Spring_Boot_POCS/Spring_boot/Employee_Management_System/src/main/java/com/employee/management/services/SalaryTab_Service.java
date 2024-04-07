package com.employee.management.services;

import java.util.List;

import com.employee.management.payloads.SalaryTabDto;





public interface SalaryTab_Service {
	
	SalaryTabDto createSalary(SalaryTabDto Salary_tab,Long pid);
	SalaryTabDto updateSalary(SalaryTabDto Salary_tab,Long salaryId);
	SalaryTabDto getSalarybyId(Long salaryId);
	
	List<SalaryTabDto>getAllSalary();
	void deleteSalary(Long salaryId);

}
