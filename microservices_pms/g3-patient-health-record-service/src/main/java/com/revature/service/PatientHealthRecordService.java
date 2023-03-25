package com.revature.service;

import java.util.List;
import java.util.Optional;

import com.revature.model.Prescription;
import com.revature.model.Tests;
import com.revature.model.VisitDetails;

public interface PatientHealthRecordService {
	
	public List<VisitDetails> findAll();
	
	public VisitDetails findVisistDetailsByAppointmentId(Integer appointmentId );
	
	public VisitDetails update(VisitDetails visitDetails);
	
	public VisitDetails getPreviousVisitDetailsByPatientId(Integer patientId);
	
	public List<Prescription> findAllPrescription();

	public List<Prescription> findPrescriptionById(Integer visitId);
	
	public Prescription savePrescription(Prescription prescription);

	public List<Tests> findAllTesta();
	
	public List<Tests> findTestById(Integer visitId);
	
	public Tests saveTest(Tests test);
	
	public void deleteTest(Integer testId);
	
	public Tests updatForTest(Tests tests);
}
