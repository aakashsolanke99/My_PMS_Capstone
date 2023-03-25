package com.revature.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import com.revature.model.Prescription;

public interface PrescriptionRepo extends JpaRepository<Prescription, Integer>{
	

	@Query(value="select * from prescription where visit_id=:id",nativeQuery = true)
	public List<Prescription> prescriptionById(@Param(value = "id") Integer id);

 

}
