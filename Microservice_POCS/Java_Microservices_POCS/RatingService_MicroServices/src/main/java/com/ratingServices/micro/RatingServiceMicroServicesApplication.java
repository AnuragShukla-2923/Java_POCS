package com.ratingServices.micro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
//@EnableAutoConfiguration(
//exclude = {DataSourceAutoConfiguration.class, HibernateJpaAutoConfiguration.class})
public class RatingServiceMicroServicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(RatingServiceMicroServicesApplication.class, args);
	}

}
