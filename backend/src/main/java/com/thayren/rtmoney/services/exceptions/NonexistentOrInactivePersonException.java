package com.thayren.rtmoney.services.exceptions;

public class NonexistentOrInactivePersonException extends RuntimeException {
	private static final long serialVersionUID = 1L;

	public NonexistentOrInactivePersonException(String msg) {
		super(msg);
	}
}
