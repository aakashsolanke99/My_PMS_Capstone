package com.revature.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Prescription;
import com.revature.model.Tests;
import com.revature.model.VisitDetails;
import com.revature.repository.PrescriptionRepo;
import com.revature.repository.TestsRepo;
import com.revature.repository.VisitDetailsRepo;
import com.revature.service.PatientHealthRecordService;


@Service
public class PatientHealthRecordServiceImpl implements PatientHealthRecordService{


	@Autowired
	private PrescriptionRepo prescriptionRepos;
	
	@Autowired
	private TestsRepo testRepo;
	
    @Autowired
	private VisitDetailsRepo visitDetailsRepo;
	
	@Override
	public List<VisitDetails> findAll() {
		// TODO Auto-generated method stub
		return visitDetailsRepo.findAll();
	}

	@Override
	public Optional<VisitDetails> findById(Integer visitId) {
		// TODO Auto-generated method stub
		return visitDetailsRepo.findById(visitId);
	}

	@Override
	public VisitDetails update(VisitDetails visitDetails) {
		// TODO Auto-generated method stub
		VisitDetails updateDetails=visitDetailsRepo.save(visitDetails);
		return updateDetails;
	}

	@Override
	public List<Prescription> findAllPrescription() {
		// TODO Auto-generated method stub
		return prescriptionRepos.findAll();
	}

	@Override
	public Prescription savePrescription(Prescription prescription) {
	
		Prescription updateResponse=prescriptionRepos.save(prescription);
		return updateResponse;

	}

	@Override
	public List<Tests> findAllTesta() {
		// TODO Auto-generated method stub
		return testRepo.findAll();
	}

	@Override
	public Tests saveTest(Tests test) {
		// TODO Auto-generated method stub
		return testRepo.save(test);
	}

	@Override
	public void deleteTest(Integer testId) {
		 testRepo.deleteById(testId); 
	}

}
