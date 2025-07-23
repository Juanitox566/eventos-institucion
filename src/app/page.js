"use client";

import { useState } from "react";

export default function EventManagerApp() {
  const [view, setView] = useState("eventos");

  // Estados para eventos, ubicaciones y contactos
  const [events, setEvents] = useState([]);
  const [locations, setLocations] = useState([]);
  const [contacts, setContacts] = useState([]);

  const [eventForm, setEventForm] = useState({
    titulo: "",
    invitados: "",
    fecha: "",
    hora: "",
    zonaHoraria: "",
    descripcion: "",
    repeticion: "",
    recordatorio: "",
    clasificacion: "",
    lugar: "",
  });

  const [locationForm, setLocationForm] = useState({
    titulo: "",
    direccion: "",
    coordenadas: "",
  });

  const [contactForm, setContactForm] = useState({
    saludo: "",
    nombreCompleto: "",
    identificacion: "",
    correo: "",
    telefono: "",
    fotografia: "",
  });

  const handleChange = (formSetter) => (e) => {
    formSetter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, eventForm]);
    setEventForm({
      titulo: "",
      invitados: "",
      fecha: "",
      hora: "",
      zonaHoraria: "",
      descripcion: "",
      repeticion: "",
      recordatorio: "",
      clasificacion: "",
      lugar: "",
    });
  };

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    setLocations([...locations, locationForm]);
    setLocationForm({
      titulo: "",
      direccion: "",
      coordenadas: "",
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContacts([...contacts, contactForm]);
    setContactForm({
      saludo: "",
      nombreCompleto: "",
      identificacion: "",
      correo: "",
      telefono: "",
      fotografia: "",
    });
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Sistema de Gestión Educativa</h1>

      <div className="space-x-2">
        <button onClick={() => setView("eventos")} className="px-4 py-2 bg-blue-500 text-white rounded">Eventos</button>
        <button onClick={() => setView("ubicaciones")} className="px-4 py-2 bg-green-500 text-white rounded">Ubicaciones</button>
        <button onClick={() => setView("contactos")} className="px-4 py-2 bg-purple-500 text-white rounded">Contactos</button>
      </div>

      {view === "eventos" && (
        <>
          <h2 className="text-xl font-semibold">Registrar Evento</h2>
          <form onSubmit={handleEventSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(eventForm).map((key) => (
              <input
                key={key}
                name={key}
                placeholder={key}
                value={eventForm[key]}
                onChange={handleChange(setEventForm)}
                className="border p-2 rounded"
              />
            ))}
            <button type="submit" className="col-span-full bg-blue-600 text-white p-2 rounded">Registrar Evento</button>
          </form>

          <h2 className="text-lg font-semibold mt-6">Eventos Registrados</h2>
          {events.map((event, i) => (
            <div key={i} className="border p-4 rounded">
              <strong>{event.titulo}</strong>
              <p>Invitados: {event.invitados}</p>
              <p>Fecha y hora: {event.fecha} {event.hora} ({event.zonaHoraria})</p>
              <p>Descripción: {event.descripcion}</p>
              <p>Repetición: {event.repeticion}</p>
              <p>Recordatorio: {event.recordatorio}</p>
              <p>Clasificación: {event.clasificacion}</p>
              <p>Lugar: {event.lugar}</p>
            </div>
          ))}
        </>
      )}

      {view === "ubicaciones" && (
        <>
          <h2 className="text-xl font-semibold">Registrar Ubicación</h2>
          <form onSubmit={handleLocationSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(locationForm).map((key) => (
              <input
                key={key}
                name={key}
                placeholder={key}
                value={locationForm[key]}
                onChange={handleChange(setLocationForm)}
                className="border p-2 rounded"
              />
            ))}
            <button type="submit" className="col-span-full bg-green-600 text-white p-2 rounded">Registrar Ubicación</button>
          </form>

          <h2 className="text-lg font-semibold mt-6">Ubicaciones Registradas</h2>
          {locations.map((loc, i) => (
            <div key={i} className="border p-4 rounded">
              <strong>{loc.titulo}</strong>
              <p>Dirección: {loc.direccion}</p>
              <p>Coordenadas: {loc.coordenadas}</p>
            </div>
          ))}
        </>
      )}

      {view === "contactos" && (
        <>
          <h2 className="text-xl font-semibold">Registrar Contacto</h2>
          <form onSubmit={handleContactSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(contactForm).map((key) => (
              <input
                key={key}
                name={key}
                placeholder={key}
                value={contactForm[key]}
                onChange={handleChange(setContactForm)}
                className="border p-2 rounded"
              />
            ))}
            <button type="submit" className="col-span-full bg-purple-600 text-white p-2 rounded">Registrar Contacto</button>
          </form>

          <h2 className="text-lg font-semibold mt-6">Contactos Registrados</h2>
          {contacts.map((contact, i) => (
            <div key={i} className="border p-4 rounded">
              <strong>{contact.saludo} {contact.nombreCompleto}</strong>
              <p>ID: {contact.identificacion}</p>
              <p>Email: {contact.correo}</p>
              <p>Teléfono: {contact.telefono}</p>
              <p>Foto: {contact.fotografia}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
