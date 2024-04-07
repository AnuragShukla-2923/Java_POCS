package com.employee.management.services.Implementations;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.management.entities.Salary_Tab;
import com.employee.management.exceptions.ResourceNotFoundException;
import com.employee.management.payloads.SalaryTabDto;
import com.employee.management.repositories.SalaryTabRepo;
import com.employee.management.service.SalaryTab_Service;


@Service
public class SalaryTab_Service_Implementation implements SalaryTab_Service {
	
	@Autowired
	private SalaryTabRepo salaryTabRepo;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public SalaryTabDto createSalary(SalaryTabDto Salary_tabDto) {
		Salary_Tab salaryTab = this.modelMapper.map(Salary_tabDto, Salary_Tab.class);
		Salary_Tab saved_Tab = this.salaryTabRepo.save(salaryTab);
		return this.modelMapper.map(saved_Tab, SalaryTabDto.class);
	}

	@Override
	public SalaryTabDto updateSalary(SalaryTabDto Salary_tabDto, Long salaryId) {
	Salary_Tab salary_Tab2 = this.salaryTabRepo.findById(salaryId)
			.orElseThrow(()->new ResourceNotFoundException("Salary", "SalaryId", salaryId));
	salary_Tab2.setTotolCTC(Salary_tabDto.getTotolCTC());
	salary_Tab2.setBankAddress(Salary_tabDto.getBankAddress());
	salary_Tab2.setBankName(Salary_tabDto.getBankName());
	salary_Tab2.setAccountNo(Salary_tabDto.getAccountNo());
	salary_Tab2.setIFSCCode(Salary_tabDto.getIFSCCode());
	
	Salary_Tab updated_salary = this.salaryTabRepo.save(salary_Tab2);
		return this.modelMapper.map(updated_salary, SalaryTabDto.class);
	}

	@Override
	public SalaryTabDto getSalarybyId(Long salaryId) {
		Salary_Tab salary_Tab = this.salaryTabRepo.findById(salaryId)
				.orElseThrow(()->new ResourceNotFoundException("Salary", "SalaryId", salaryId));
		return this.modelMapper.map(salary_Tab, SalaryTabDto.class);
	}

	@Override
	public List<SalaryTabDto> getAllSalary() {
	List<Salary_Tab> findAll = this.salaryTabRepo.findAll();
	if(findAll.size()==0) {
		throw new ResourceNotFoundException("Record", "", 0);
	}else {
	  List<SalaryTabDto> collected_salary = findAll.stream().map(Salary->this.modelMapper.map(Salary, SalaryTabDto.class)).collect(Collectors.toList());
//		
		return collected_salary;
	}
	}

	@Override
	public void deleteSalary(Long salaryId) {
	Salary_Tab salary_Tab = this.salaryTabRepo.findById(salaryId)
			.orElseThrow(()->new ResourceNotFoundException("Salary", "SalaryId", salaryId));
	this.salaryTabRepo.delete(salary_Tab);	
	}

}
