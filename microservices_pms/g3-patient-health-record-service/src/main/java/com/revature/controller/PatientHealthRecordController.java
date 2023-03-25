package com.revature.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Prescription;
import com.revature.model.Tests;
import com.revature.model.VisitDetails;
import com.revature.service.PatientHealthRecordService;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class PatientHealthRecordController {
	

	@Autowired
	private PatientHealthRecordService patientHealthRecordService;

	
	@GetMapping("/patient/health-records/{appointmentId}")
	public VisitDetails healthRecordsById(@PathVariable int appointmentId) 
	{
		
      
		return patientHealthRecordService.findVisistDetailsByAppointmentId(appointmentId);
	}
	
	//ME
	@GetMapping("/patient/Previous-health-records/{patientId}")
	public VisitDetails previousHealthRecords(@PathVariable int patientId) {
		return patientHealthRecordService.getPreviousVisitDetailsByPatientId(patientId);
		
	}
	
	
	@GetMapping("/tests")
	public List<Tests> allTests(){
		return patientHealthRecordService.findAllTesta();
	}
	
	@GetMapping("/testByVisitId/{visitId}")
	public List<Tests> previousTestsRecords( @PathVariable Integer visitId){
		return patientHealthRecordService.findTestById(visitId);
	}
	
	@PostMapping("/savetest")
	public Tests saveTest(@RequestBody Tests test) {
		return patientHealthRecordService.saveTest(test);
		
	}
	
	@DeleteMapping("/tests/{testId}")
	public void delete(@PathVariable("testId") Integer testId){
	     patientHealthRecordService.deleteTest(testId);
	  
	}
	
	
	
	@GetMapping("/prescription")
	public List<Prescription> allPrescription()
	{
		
		return patientHealthRecordService.findAllPrescription();
	}
	
	@GetMapping("/prescription/{visitId}")
	public List<Prescription> getPrescriptionById(@PathVariable Integer visitId ) {
		return patientHealthRecordService.findPrescriptionById(visitId);
	}
	
	@PostMapping("/patient/prescription")
	public Prescription updatePrescription(@RequestBody Prescription prescription) {
		Prescription updateResponse=patientHealthRecordService.savePrescription(prescription);
		return updateResponse;
	}
	
	

	
}
