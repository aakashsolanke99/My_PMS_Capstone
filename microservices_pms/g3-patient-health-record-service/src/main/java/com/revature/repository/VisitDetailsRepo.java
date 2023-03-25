package com.revature.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.revature.model.Prescription;
import com.revature.model.VisitDetails;

public interface VisitDetailsRepo extends JpaRepository<VisitDetails, Integer> {
	
	@Query(value = "Select * from visit_details  where patient_id =?1 order by visit_id desc limit 1", nativeQuery =true)
	public VisitDetails  getVisitIdbyPatientid(int patient_id)	;

	@Query(value="Select * from visit_details where appointment_id=:id", nativeQuery =true)
	 public VisitDetails findVisitDetailsById(@Param(value = "id") Integer id);
	

}
