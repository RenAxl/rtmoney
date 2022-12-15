package com.thayren.rtmoney.dto;

import java.io.Serializable;
import java.math.BigDecimal;

import com.thayren.rtmoney.entities.Category;

public class ReleaseStatisticsCategoryDTO  implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Category category;
	private BigDecimal total;
	
	public ReleaseStatisticsCategoryDTO() {
	}

	public ReleaseStatisticsCategoryDTO(Category category, BigDecimal total) {
		this.category = category;
		this.total = total;
	}
	
	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public BigDecimal getTotal() {
		return total;
	}

	public void setTotal(BigDecimal total) {
		this.total = total;
	}
	
	

}
