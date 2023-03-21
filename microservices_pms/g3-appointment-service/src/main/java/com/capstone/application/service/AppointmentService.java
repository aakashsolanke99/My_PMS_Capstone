package com.capstone.application.service;
import java.util.List;
import java.util.Optional;

import com.capstone.application.dto.appointmentDto;
import com.capstone.application.model.Appointment;
public interface AppointmentService 
{
		Appointment saveAppointment(Appointment appointment);
		public Optional<Appointment> findByAppointmentById(Integer patientId);
		public List<Appointment> findByAppointmentByPEmail(String physicianEmail,String acceptance);
		public boolean deleteAppointment(Integer appointmentId);
		public List<Appointment> findByAcceptedAppointment(String acceptance);
		public List<Appointment> findByAppointmentByPEmailandDate(String physicianEmail, String date, String acceptance);
		void  updateByID(Integer appoitmentId, String status);

}
