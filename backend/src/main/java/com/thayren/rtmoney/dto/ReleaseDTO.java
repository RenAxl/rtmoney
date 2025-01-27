package com.thayren.rtmoney.dto;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;

import com.thayren.rtmoney.entities.Category;
import com.thayren.rtmoney.entities.Person;
import com.thayren.rtmoney.entities.Release;
import com.thayren.rtmoney.entities.ReleaseType;

public class ReleaseDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String description;
	private LocalDate dueDate;
	private LocalDate datePayment;
	private BigDecimal value;
	private String observation;
	private ReleaseType type;
	private Category category;
	private Person person;

	public ReleaseDTO() {
	}

	public ReleaseDTO(Long id, String description, LocalDate dueDate, LocalDate datePayment, BigDecimal value,
			String observation, ReleaseType type, Category category, Person person) {
		this.id = id;
		this.description = description;
		this.dueDate = dueDate;
		this.datePayment = datePayment;
		this.value = value;
		this.observation = observation;
		this.type = type;
		this.category = category;
		this.person = person;
	}

	public ReleaseDTO(Release entity) {
		this.id = entity.getId();
		this.description = entity.getDescription();
		this.dueDate = entity.getDueDate();
		this.datePayment = entity.getDueDate();
		this.value = entity.getValue();
		this.observation = entity.getObservation();
		this.type = entity.getType();
		this.category = entity.getCategory();
		this.person = entity.getPerson();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public LocalDate getDueDate() {
		return dueDate;
	}

	public void setDueDate(LocalDate dueDate) {
		this.dueDate = dueDate;
	}

	public LocalDate getDatePayment() {
		return datePayment;
	}

	public void setDatePayment(LocalDate datePayment) {
		this.datePayment = datePayment;
	}

	public BigDecimal getValue() {
		return value;
	}

	public void setValue(BigDecimal value) {
		this.value = value;
	}

	public String getObservation() {
		return observation;
	}

	public void setObservation(String observation) {
		this.observation = observation;
	}

	public ReleaseType getType() {
		return type;
	}

	public void setType(ReleaseType type) {
		this.type = type;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public Person getPerson() {
		return person;
	}

	public void setPerson(Person person) {
		this.person = person;
	}

}
