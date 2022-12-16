package com.thayren.rtmoney.dto;

import java.io.Serializable;
import java.math.BigDecimal;

import com.thayren.rtmoney.entities.Person;
import com.thayren.rtmoney.entities.ReleaseType;

public class ReleaseStatisticsPersonDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private ReleaseType type;
	private Person person;
	private BigDecimal total;
	
	public ReleaseStatisticsPersonDTO(){
	}

	public ReleaseStatisticsPersonDTO(ReleaseType type, Person person, BigDecimal total) {
		this.type = type;
		this.person = person;
		this.total = total;
	}

	public ReleaseType getType() {
		return type;
	}

	public void setType(ReleaseType type) {
		this.type = type;
	}

	public Person getPerson() {
		return person;
	}

	public void setPerson(Person person) {
		this.person = person;
	}

	public BigDecimal getTotal() {
		return total;
	}

	public void setTotal(BigDecimal total) {
		this.total = total;
	}
	
	
	

}
