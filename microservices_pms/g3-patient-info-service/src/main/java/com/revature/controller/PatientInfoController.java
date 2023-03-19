package com.revature.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Patient;
import com.revature.service.PatientInfoService;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class PatientInfoController {
	
	@Autowired
	private PatientInfoService patientInfoService;

	
	@GetMapping("/patientinfo")
	public List<Patient> patientList(){
		
		List<Patient> patientlist= patientInfoService.finalAll();
		return patientlist;
		
	}
	
	@GetMapping("/patientinfo/{patientId}")
	public Optional<Patient> getPatientById(@PathVariable int patientId){
	
	Optional<Patient> patient = patientInfoService.findById(patientId);
	
	return patient;
	}
	

	@PostMapping("/patient/{patientId}")
	public Patient updatePatientInfo(@RequestBody Patient patient) {
		Patient updatePatient=patientInfoService.update(patient);
		return updatePatient;
	}
}
