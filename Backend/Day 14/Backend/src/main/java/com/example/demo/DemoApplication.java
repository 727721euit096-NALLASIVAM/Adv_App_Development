package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(
		info =@Info(
				title = "Online Mobile Recharge Portal",
				version = "1.1.2",
				description = "Top Up",
				contact = @Contact(
						name = "NALLASIVAM",
						email = "nallasivampv2004@gmail.com"
						)
				)
		)
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		System.out.println("completed");
	}
} 