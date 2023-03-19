package com.revature.service;

import java.util.List;
import java.util.Optional;

import com.revature.model.Prescription;
import com.revature.model.Tests;
import com.revature.model.VisitDetails;

public interface PatientHealthRecordService {
	
	public List<VisitDetails> findAll();
	
	public Optional<VisitDetails> findById(Integer visitId );
	
	public VisitDetails update(VisitDetails visitDetails);
	
	public List<Prescription> findAllPrescription();
	
	public Prescription savePrescription(Prescription prescription);

	public List<Tests> findAllTesta();
	
	public Tests saveTest(Tests test);
	
	public void deleteTest(Integer testId);
}
