package com.Sofka.service;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Sofka.dao.ContactoDao;
import com.Sofka.domain.Contacto;
/**
 * servicio de contactos que implementa los metodos de una interface
 *
 * @version 1.0.0
 * @author Diego Felipe Muñoz
 * @since 1.0.0
 */
@Service
public class ContactoService implements IcontactoService {
	@Autowired //para inyectar usuario dao
	private ContactoDao ContactoDao;
	
	
	/**
     * Get all contacts
     * @return List of contacts
     */
	@Override
    @Transactional
	public List<Contacto> ListContacto() {
		List<Contacto> contacto = null;
		try {
			contacto =(List<Contacto>) ContactoDao.findAll(); 
		} catch (Exception ex) {
			throw ex;
		}
		return contacto;
	}
	/**
     * Save  contacts
     * @param Object contacto
     * @return List of contacts
     */
	@Override
	@Transactional
	public Contacto save(Contacto contacto) {
		try {
			return ContactoDao.save(contacto);
		} catch (Exception ex) {
			throw ex;
		}
		
	}
	/**
     * update  contacts
     * @param Object contacto
     * @return contacto
     */
	@Override
	@Transactional
	public Contacto update(Contacto contacto, Long Id) {
		try {
			contacto.setId(Id);
			return ContactoDao.save(contacto);
		} catch (Exception ex) {
			throw ex;
		}
	}
	/**
     * delete  contacts
     * @param Object contacto
     */
	@Override
	@Transactional
	public void delete(Contacto contacto) {
		try {
			ContactoDao.delete(contacto);
		} catch (Exception ex) {
			throw ex;
		}
	}
	
	 /**
	   * update nombre
	   * @param Object contacto , Long id
	   */
  @Transactional
    public void updateConnombre(Long id, Contacto contacto) {
	  try {
		  ContactoDao.updateNombre(id, contacto.getNombre());
		   
	  } catch (Exception ex) {
		  throw ex;
	}
	 }
  /**
   * update telefono
   * @param Object contacto , Long id
   */
@Transactional
public void updateTelefono(Long id, Contacto contacto) {
  try {
	  ContactoDao.updateTelefono(id, contacto.getNombre());
	   
  } catch (Exception ex) {
	  throw ex;
}
 }
/**
 * update correo
 * @param Object contacto , Long id
 */
@Transactional
public void updateCorreo(Long id, Contacto contacto) {
try {
	  ContactoDao.updateCorreo(id, contacto.getNombre());
	   
} catch (Exception ex) {
	  throw ex;
}
}
/**
 * update fecha
 * @param Object contacto , Long id
 */
@Transactional
public void updateFecha(Long id, Contacto contacto) {
try {
	  ContactoDao.UpdateFecha(id, contacto.getNombre());
	   
} catch (Exception ex) {
	  throw ex;
}
}
	
  /**
   * delete logic
   * @param Object Contacto , Long id
   */
  @Transactional
  public void deleteLogic(Long id, Contacto contacto) {
	  try {
		  ContactoDao.deleteLogic(id, contacto.getStatus());
	} catch (Exception ex) {
		  throw ex;
	}
  }

}
