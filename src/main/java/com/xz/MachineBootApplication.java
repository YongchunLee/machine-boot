package com.xz;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.xz.dao")
public class MachineBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(MachineBootApplication.class, args);
	}

}
