package com.revature.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Patient;
import com.revature.repository.PatientInfoRepo;

import com.revature.service.PatientInfoService;


@Service
public class PatientInfoServiceImpl implements PatientInfoService{
	
	
	@Autowired
	private PatientInfoRepo patientInfoRepo;



	@Override
	public List<Patient> finalAll() {
		// TODO Auto-generated method stub
		return patientInfoRepo.findAll();
	}

	@Override
	public Optional<Patient> findById(Integer patientId){
		// TODO Auto-generated method stub
		return patientInfoRepo.findById(patientId);
	}

	@Override
	public Patient update(Patient patient) {
		// TODO Auto-generated method stub
		Patient updateResponse = patientInfoRepo.save(patient);
		return updateResponse;
	}

}
