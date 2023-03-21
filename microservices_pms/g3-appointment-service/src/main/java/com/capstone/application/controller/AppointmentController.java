package com.capstone.application.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;

import com.capstone.application.dto.appointmentDto;
import com.capstone.application.model.Appointment;
import com.capstone.application.service.AppointmentService;

import jakarta.transaction.Transactional;
import lombok.extern.log4j.Log4j2;


@RestController
@Log4j2
@CrossOrigin(origins = "http://localhost:4200/")
public class AppointmentController 
{
	private static final org.apache.logging.log4j.Logger log = org.apache.logging.log4j.LogManager.getLogger(AppointmentController.class);

	
	private AppointmentService appointmentService;
	

	public AppointmentController(AppointmentService appointmentService) {
		super();
		this.appointmentService = appointmentService;
	}

	
	@GetMapping("/patient/appointments/{patientId}")
	@ResponseStatus(HttpStatus.ACCEPTED)
	public Optional<Appointment> appointmetForPatientId(@PathVariable int patientId)
	{
		try {
		return appointmentService.findByAppointmentById(patientId);
		}
		catch(Exception e)
		{
			log.error(e.getMessage());
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
		}
	}
	
	@GetMapping("/appointment/{physicianEmail}")
	@ResponseStatus(HttpStatus.ACCEPTED)
	public List<Appointment> pendingAppointmentByEmail(@PathVariable String physicianEmail,@RequestParam String acceptance) {
		
		try {
		return appointmentService.findByAppointmentByPEmail(physicianEmail,acceptance);
		}
		catch(Exception e)
		{
			log.error(e.getMessage());
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
		}
	} 
	
	@GetMapping("/appointment/{physicianEmail}/{date}")
	@ResponseStatus(HttpStatus.ACCEPTED)
	public List<Appointment> AcceptedAppointmentByEmailandDate(@PathVariable String physicianEmail, @PathVariable String date,@RequestParam String acceptance) {
		try {
		return appointmentService.findByAppointmentByPEmailandDate(physicianEmail,date,acceptance);
		}
		catch(Exception e)
		{
			log.error(e.getMessage());
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
		}
	}
	
	@GetMapping("/appointments")
	@ResponseStatus(HttpStatus.ACCEPTED)
	public  List<Appointment> acceptedAppointmentForNurse(@RequestParam String acceptance)
	{
		try {
		return appointmentService.findByAcceptedAppointment(acceptance);
		}
		catch(Exception e)
		{
			log.error(e.getMessage());
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
		}
	}
	
	@PostMapping("/appointment")
	@ResponseStatus(HttpStatus.CREATED)
	public Appointment Createappointment(@RequestBody Appointment appointment)
	{
		try {
		return appointmentService.saveAppointment(appointment);
		}
		catch(Exception e)
		{
			log.error(e.getMessage());
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
		}
	}
	

	@PutMapping("/appointments/{appointmentId}/{status}")
	@Transactional
	@ResponseStatus(HttpStatus.ACCEPTED)
	public void updatedPhysicianAvailabilitys(@PathVariable int appointmentId, @PathVariable String status) 
	{
		try {
		appointmentService.updateByID(appointmentId,status);
        
		}
		catch(Exception e)
		{
			log.error(e.getMessage());
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
		}
	}
	
	@DeleteMapping("/appointment/{appointmentId}")
	@ResponseStatus(HttpStatus.ACCEPTED)
	public boolean deleteAppointmentById(@PathVariable("appointmentId")Integer appointmentId) {
		try
		{
		return appointmentService.deleteAppointment(appointmentId);
		}
		catch(Exception e)
		{
			log.error(e.getMessage());
			throw new HttpClientErrorException(HttpStatusCode.valueOf(500));
		}
	}

}
