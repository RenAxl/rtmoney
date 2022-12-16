package com.thayren.rtmoney.entities;

public enum ReleaseType {

	RECEITA("Receita"),
	DESPESA("Despesa");
	
	private final String description;

	ReleaseType(String description) {
		this.description = description;
	}

	public String getDescription() {
		return description;
	}
	
}
