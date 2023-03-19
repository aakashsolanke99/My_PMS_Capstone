package com.revature.service;

import java.util.List;
import java.util.Optional;

import com.revature.model.Patient;

public interface PatientInfoService {
	
	public List<Patient> finalAll();
	
	public Optional<Patient> findById(Integer patientId);
	
	public Patient update(Patient patient);


}
