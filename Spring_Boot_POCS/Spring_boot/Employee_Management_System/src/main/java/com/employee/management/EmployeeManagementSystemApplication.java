package com.employee.management;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.employee.management.config.AppConstants;
import com.employee.management.entities.Role;
import com.employee.management.entities.User;
import com.employee.management.repositories.RoleRepo;
import com.employee.management.repositories.UserRepo;
import java.util.List;

@SpringBootApplication
public class EmployeeManagementSystemApplication implements CommandLineRunner {
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private RoleRepo  roleRepo;
	@Autowired
	private UserRepo userRepo;

	public static void main(String[] args) {
		SpringApplication.run(EmployeeManagementSystemApplication.class, args);
	}

	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println(passwordEncoder.encode("Anurag@123"));
		
		try {
			Role role1=new Role();
			role1.setId(AppConstants.ADMIN_USER);
			role1.setName("ADMIN_USER");
			
			Role role2 =new Role();
			role2.setId(AppConstants.NORMAL_USER);
			role2.setName("NORMAL_USER");
			
			List<Role> listOfRoles = List.of(role1,role2);
			List<Role> savedRoles = this.roleRepo.saveAll(listOfRoles);
			savedRoles.forEach(role->{
				
				System.out.println(role.getName());
			});
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		try {
			
			List<User> all = this.userRepo.findAll();
			if (all.size()==0) {
			User user1=new User();
			user1.setId(1);
			user1.setName("Anurag Shukla");
			user1.setEmail("Shuklaanu2902@gmail.com");
			user1.setPassword(passwordEncoder.encode("Anurag@Shukla"));
			user1.setAbout("I am a Fullstack Developer");
			
			
			User first_user = this.userRepo.save(user1);
			System.out.println(first_user);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
