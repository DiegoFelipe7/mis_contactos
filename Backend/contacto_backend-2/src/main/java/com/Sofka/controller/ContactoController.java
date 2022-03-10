package com.Sofka.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.Sofka.domain.Contacto;
import com.Sofka.service.ContactoService;
import com.Sofka.util.Response;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import lombok.extern.slf4j.Slf4j;

/**
 *rutas del  CRUD contactos
 *
 * @version 1.0.0
 * @author Diego Felipe Muñoz
 * @since 1.0.0
 */
@Slf4j
@RestController
public class ContactoController {
	@Autowired
	private ContactoService ContactoService;
	private Response response = new Response();
	  /**
     * Route get all contacto
     * @return List of contacto
     */
	@GetMapping(path="/contactos")
	@CrossOrigin(origins = "http://localhost:3000")
	public  List<Contacto> getContactos() {
		List<Contacto>contacto=null;
        try {
        	contacto = ContactoService.ListContacto();

        } catch (Exception e) {
        	  response.error = true;
              response.message = e.getMessage();
              response.status = "ERROR 404, NOT FOUND";
        }
        return contacto;
	}
	 /**
     * Route to create a contact
     * @param contacto Object
     * @return Entity
     */
	@PostMapping(path="/contactos")
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<Contacto> crearContacto(@RequestBody Contacto contacto) {
		try {
			ContactoService.save(contacto);
			return new ResponseEntity<>(contacto , HttpStatus.CREATED);
		} catch (Exception e) {
			return null;
		}
	}
	@PutMapping(path="/contactos/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity <Contacto> actualizarContacto(@RequestBody Contacto contacto , @PathVariable("id") Long id) {
		try {
			ContactoService.update(contacto, id);
			return new ResponseEntity<>(contacto , HttpStatus.OK);
		} catch (Exception e) {
			response.status = e.getCause().toString();
            response.error = true;
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}

	}
	
	@DeleteMapping(path = "/contactos/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public  ResponseEntity<Contacto> EliminarContacto(Contacto contacto) {
		try {
			ContactoService.delete(contacto);
			return new ResponseEntity<>(contacto , HttpStatus.OK);
		
		} catch (Exception e) {
			response.status = e.getCause().toString();
            response.error = true;
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
	
	}
	/**
     * Route to update nombre
     * @param contacto Object
     * @param id Long
     * @return Entity
     */
	@PatchMapping(path = "/contactos/nombre/{id}")
	  @CrossOrigin(origins = "http://localhost:3000")
	    public ResponseEntity<Contacto> actualizarNombre( @PathVariable("id") Long id ,@RequestBody Contacto contacto) {
		try {
		  ContactoService.updateConnombre(id, contacto);
	      return new ResponseEntity<>(contacto, HttpStatus.OK);
		} catch (Exception e) {
			response.status = e.getCause().toString();
            response.error = true;
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
			}
		}
	/**
     * Route to update telefono
     * @param contacto Object
     * @param id Long
     * @return Entity
     */
	@PatchMapping(path = "/contactos/telefono/{id}")
	  @CrossOrigin(origins = "http://localhost:3000")
	    public ResponseEntity<Contacto> actualizarTelefono( @PathVariable("id") Long id ,@RequestBody Contacto contacto) {
		try {
		  ContactoService.updateTelefono(id, contacto);
	      return new ResponseEntity<>(contacto, HttpStatus.OK);
		} catch (Exception e) {
			response.status = e.getCause().toString();
          response.error = true;
          return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
			}
		}
	/**
     * Route to update correo
     * @param contacto Object
     * @param id Long
     * @return Entity
     */
	@PatchMapping(path = "/contactos/correo/{id}")
	  @CrossOrigin(origins = "http://localhost:3000")
	    public ResponseEntity<Contacto> actualizarCorreo( @PathVariable("id") Long id ,@RequestBody Contacto contacto) {
		try {
		  ContactoService.updateCorreo(id, contacto);
	      return new ResponseEntity<>(contacto, HttpStatus.OK);
		} catch (Exception e) {
			response.status = e.getCause().toString();
          response.error = true;
          return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
			}
		}
	/**
     * Route to update fecha
     * @param contacto Object
     * @param id Long
     * @return Entity
     */
	@PatchMapping(path = "/contactos/fecha/{id}")
	  @CrossOrigin(origins = "http://localhost:3000")
	    public ResponseEntity<Contacto> actualizarFecha( @PathVariable("id") Long id ,@RequestBody Contacto contacto) {
		try {
		  ContactoService.updateFecha(id, contacto);
	      return new ResponseEntity<>(contacto, HttpStatus.OK);
		} catch (Exception e) {
			response.status = e.getCause().toString();
          response.error = true;
          return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
			}
		}
	/**
     * Route to update status
     * @param contacto Object
     * @param id Long
     * @return Entity
     */
	
	@PatchMapping(path = "/contactos/status/{id}")
	  @CrossOrigin(origins = "http://localhost:3000")
	    public ResponseEntity<Contacto> actualizarStatus( @PathVariable("id") Long id ,@RequestBody Contacto contacto) {
		try {
			ContactoService.deleteLogic(id, contacto);
		    return new ResponseEntity<>(contacto, HttpStatus.OK);
		    	
		} catch (Exception e) {
			response.status = e.getCause().toString();
            response.error = true;
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		
		}
	}
}

