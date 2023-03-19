package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Prescription;
import com.revature.model.Tests;
import com.revature.service.PatientHealthRecordService;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class PatientHealthRecordController {
	

	@Autowired
	private PatientHealthRecordService patientHealthRecordService;

	@GetMapping("/tests")
	public List<Tests> allTests(){
		return patientHealthRecordService.findAllTesta();
	}
	
	@PostMapping("/savetest")
	public Tests saveTest(@RequestBody Tests test) {
		return patientHealthRecordService.saveTest(test);
		
	}
	
	
	
	@GetMapping("/prescription")
	public List<Prescription> allPrescription()
	{
		
		return patientHealthRecordService.findAllPrescription();
	}
	
	@PostMapping("/patient/prescription")
	public Prescription updatePrescription(@RequestBody Prescription prescription) {
		Prescription updateResponse=patientHealthRecordService.savePrescription(prescription);
		return updateResponse;
	}
	
	@DeleteMapping("/tests/{testId}")
	public void delete(@PathVariable("testId") Integer testId){
	     patientHealthRecordService.deleteTest(testId);
	  
	}
	
}
