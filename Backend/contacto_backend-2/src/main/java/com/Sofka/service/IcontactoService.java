package com.Sofka.service;

import java.util.List;

import com.Sofka.domain.Contacto;

public interface IcontactoService {
	/**
     * Show all the contacts
     * @return List of contacts
     */
	public List<Contacto> ListContacto();
	/**
     * Save a new Contacto
     * @param contacto Object
     * @return contact
     */
	public Contacto save(Contacto contacto);
	/**
     * Update a contact
     * @param id Long
     * @param contacto Object
     * @return contacto
     */
	public Contacto update(Contacto contacto , Long Id);

    /**
     * Delete a contact
     * @param contacto Object
     */
	public void delete(Contacto contacto);
	
	
}
