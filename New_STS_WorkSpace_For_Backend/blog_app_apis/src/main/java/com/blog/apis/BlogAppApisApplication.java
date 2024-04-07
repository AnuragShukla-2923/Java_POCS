package com.blog.apis;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.blog.apis.config.AppConstants;
import com.blog.apis.entities.Role;
import com.blog.apis.entities.User;
import com.blog.apis.repositories.RoleRepo;
import com.blog.apis.repositories.UserRepo;

@SpringBootApplication
public class BlogAppApisApplication  implements CommandLineRunner{
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private RoleRepo roleRepo;
	
	@Autowired
	private UserRepo userRepo;

	public static void main(String[] args) {
		SpringApplication.run(BlogAppApisApplication.class, args);
	}
	
	@Bean 
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println(this.passwordEncoder.encode("xyz"));
		
		try {
			Role role=new Role();
			role.setId(AppConstants.ADMIN_USER);
			role.setName("ROLE_ADMIN");
			
			Role role1=new Role();
			role1.setId(AppConstants.NORMAL_USER);
			role1.setName("ROLE_NORMAL");
			
			List<Role> roles = List.of(role,role1);
			
			List<Role> savedRolls = this.roleRepo.saveAll(roles);
			savedRolls.forEach(r->{
				System.out.println(r.getName());
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
