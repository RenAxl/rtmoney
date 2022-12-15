package com.thayren.rtmoney.dto;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;

import com.thayren.rtmoney.entities.ReleaseType;

public class ReleaseStatisticsDayDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private ReleaseType type;
    private LocalDate day;
	private BigDecimal total;
	
	public ReleaseStatisticsDayDTO() {
	}

	public ReleaseStatisticsDayDTO(ReleaseType type, LocalDate day, BigDecimal total) {
		this.type = type;
		this.day = day;
		this.total = total;
	}

	public ReleaseType getType() {
		return type;
	}

	public void setType(ReleaseType type) {
		this.type = type;
	}

	public LocalDate getDay() {
		return day;
	}

	public void setDay(LocalDate day) {
		this.day = day;
	}

	public BigDecimal getTotal() {
		return total;
	}

	public void setTotal(BigDecimal total) {
		this.total = total;
	}

}
