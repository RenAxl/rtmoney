package com.thayren.rtmoney.dto;

import java.io.Serializable;

import javax.persistence.Embedded;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.thayren.rtmoney.entities.Address;
import com.thayren.rtmoney.entities.Person;

public class PersonDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	
	@Size(min = 5, max = 60, message ="O nome deve ter entre 5 a 60 caracteres")
	@NotBlank(message = "Campo requerido")
	private String name;

	@Valid
	@Embedded
	private Address address;
	private Boolean active;
	
	public PersonDTO() {
	}

	public PersonDTO(Long id, String name, Address address, Boolean active) {
		this.id = id;
		this.name = name;
		this.address = address;
		this.active = active;
	}
	
	public PersonDTO(Person entity) {
		this.id = entity.getId();
		this.name = entity.getName();
		this.address = entity.getAddress();
		this.active = entity.getActive();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}
	
	

}
