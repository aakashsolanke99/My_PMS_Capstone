package com.revature.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="patient")
public class Patient {
	
	@Id
	@Column(name="patient_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int patientId;
	
	@Column(name="patient_email")
	private String patientEmail;
	
	@Column(name="title")
	private String title;
	
	@Column(name="first_name")
	private String firstName;
	
	@Column(name="last_name")
	private String LastName;
	
	@Column(name="age")
	private String age;
	
	@Column(name="contact_number")
	private String contactNumber;
	
	@Column(name="password")
	private String password;
	
	@Column(name="gender")
	private String gender;
	
	@Column(name="address")
	private String address;

	public Patient(int patientId, String patientEmail, String title, String firstName, String lastName,
			String dateOfBirth, String contactNumber, String password, String gender, String address) {
		super();
		this.patientId = patientId;
		this.patientEmail = patientEmail;
		this.title = title;
		this.firstName = firstName;
		LastName = lastName;
		this.age = dateOfBirth;
		this.contactNumber = contactNumber;
		this.password = password;
		this.gender = gender;
		this.address = address;
	}

	public Patient() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getPatientId() {
		return patientId;
	}

	public void setPatientId(int patientId) {
		this.patientId = patientId;
	}

	public String getPatientEmail() {
		return patientEmail;
	}

	public void setPatientEmail(String patientEmail) {
		this.patientEmail = patientEmail;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return LastName;
	}

	public void setLastName(String lastName) {
		LastName = lastName;
	}

	public String getAge() {
		return age;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.age = dateOfBirth;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "Patient [patientId=" + patientId + ", patientEmail=" + patientEmail + ", title=" + title
				+ ", firstName=" + firstName + ", LastName=" + LastName + ", dateOfBirth=" + age
				+ ", contactNumber=" + contactNumber + ", password=" + password + ", gender=" + gender + ", address="
				+ address + "]";
	}
	
	
	

}
