package com.revature.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Allergy;
import com.revature.service.AllergyService;

@RestController
public class AllergyController {
	
	public AllergyService allergyService;

	public AllergyController(AllergyService allergyService) {
		super();
		this.allergyService = allergyService;
	}
	
	
	@GetMapping("/allergy")
	public List<Allergy> allergy(){
		
		List<Allergy> allergy=allergyService.findAll();
		return allergy;
		
	}
	
	
	@GetMapping("/allergy/{allergyId}")
	public Optional<Allergy> allergyById(@PathVariable int allergyId){
		Optional<Allergy> allergybyId = allergyService.findById(allergyId);
		return allergybyId;
	}
	

}
