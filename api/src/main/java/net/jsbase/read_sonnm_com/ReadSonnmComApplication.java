package net.jsbase.read_sonnm_com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ReadSonnmComApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReadSonnmComApplication.class, args);
	}

	@GetMapping("/")
	public String apiRoot(){
		return "read.sonnm.com";
	}
}
