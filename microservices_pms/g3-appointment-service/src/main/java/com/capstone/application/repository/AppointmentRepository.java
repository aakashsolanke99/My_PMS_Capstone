package com.capstone.application.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.capstone.application.model.Appointment;


public interface AppointmentRepository extends JpaRepository<Appointment,Integer>{

	@Query(value = "SELECT * from Appointment where physician_email=?1 and acceptance=?2", nativeQuery=true)
	List<Appointment> findByEmail(String physicianEmail,String acceptance);

	@Query(value = "SELECT * from Appointment where acceptance=?1", nativeQuery=true)
	List<Appointment> findByAcceptance(String acceptance);

	@Query(value = "SELECT * from Appointment where physician_email=?1 and date=?2 and acceptance=?3", nativeQuery=true)
	List<Appointment> findByEmailandDate(String physicianEmail, String date, String acceptance);
	
	@Modifying
	@Query(value="update Appointment set acceptance=:status where appointment_id=:id",nativeQuery = true)
	void update(@Param(value = "id") Integer id,@Param(value = "status") String status);


}
