package com.employeeManagement.service.entities;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

//import jakarta.persistence.CascadeType;
//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.FetchType;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.JoinTable;
//import jakarta.persistence.ManyToMany;
//import jakarta.persistence.Table;
//import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users")
@NoArgsConstructor
@Setter
@Getter
public class User  implements UserDetails{

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
//	@Pattern(regexp = "^[a-zA-Z]{4,20}$", message = "Invalid Name,must between 4 to 20 chars!!")
//	@Pattern(regexp = "^[a-zA-Z\\s]{4,20}$", message = "Invalid Name,must between 4 to 20 chars!!")
	@Column(name="user_name",nullable = false)
	private String name;

//	@Column(unique = true)
//	@Pattern(regexp = "^([A-Za-z0-9-_.]+@[A-Za-z0-9-_]+(?:\\.[A-Za-z0-9]+)+)$", message = "Invalid Email!!")
	@Column(unique = true,nullable = false)
	private String email;
//	@Pattern(regexp = "^[a-zA-Z0-9@._#]{4,16}$", message = "Password must be in between 4 to 16 chars!!")
	@Column(nullable = false)
	private String password;
//	@Pattern(regexp = "^[a-zA-Z ]{4,1000}$", message = "Invalid About")
	@NotEmpty
//	@Min(message = "Min 5 chars", value = 4)
//	@Max(message = "max 50 chars allowed!!", value = 50)
//	@Pattern(regexp = "^[a-zA-Z\\s]{4,1000}$", message = "Invalid About")
	@Column(nullable = false)
	private String about;
	
	
	
	
	
	
	
	@ManyToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinTable(name ="user_role",
	joinColumns = 
	@JoinColumn(name="user",referencedColumnName = "id"),
	inverseJoinColumns = 
	@JoinColumn(name="role",referencedColumnName = "id"))
	private Set<Role>roles=new HashSet<>();
	
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		
		return null;
	}
	@Override
	public String getUsername() {
		return this.email;
	}
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}
	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}
	@Override
	public boolean isEnabled() {
		return true;
	}

}
