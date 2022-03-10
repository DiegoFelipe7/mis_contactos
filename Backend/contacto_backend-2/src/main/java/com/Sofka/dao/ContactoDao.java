package com.Sofka.dao;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.Sofka.domain.Contacto;

public interface ContactoDao extends CrudRepository<Contacto, Long> {
	@Modifying
    @Query("update Contacto con set con.nombre = :nombre where con.id = :id")
    public void updateNombre(
            @Param(value = "id") Long id,
            @Param(value = "nombre") String nombre
    );
	@Modifying
    @Query("update Contacto con set con.telefono = :telefono where con.id = :id")
	public void updateTelefono(
            @Param(value = "id") Long id,
            @Param(value = "telefono") String telefono
    );
	@Modifying
    @Query("update Contacto con set con.correo_electronico = :correo_electronico where con.id = :id")
	public void updateCorreo(
            @Param(value = "id") Long id,
            @Param(value = "correo_electronico") String correo_electronico
    );
	@Modifying
    @Query("update Contacto con set con.fecha_de_nacimiento = :fecha_de_nacimiento where con.id = :id")
	public void UpdateFecha(
            @Param(value = "id") Long id,
            @Param(value = "fecha_de_nacimiento") String fecha_de_nacimiento
    );
	@Modifying
    @Query("update Contacto con set con.Status = :Status where con.id = :id")
	public void deleteLogic(
            @Param(value = "id") Long id,
            @Param(value = "Status") String Status
    );
	
	
}
