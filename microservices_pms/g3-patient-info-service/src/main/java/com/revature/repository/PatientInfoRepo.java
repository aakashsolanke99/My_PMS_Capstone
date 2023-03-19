package com.revature.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.model.Patient;

public interface PatientInfoRepo extends JpaRepository<Patient, Integer> {

}
