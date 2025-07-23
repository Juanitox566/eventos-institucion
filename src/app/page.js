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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 p-6 space-y-6 font-sans">
      <h1 className="text-4xl font-extrabold text-center text-indigo-800 mb-4">Sistema de Gestión Educativa</h1>

      <div className="flex justify-center space-x-4 mb-6">
        <button onClick={() => setView("eventos")} className={`px-4 py-2 rounded-lg shadow-md transition-colors ${view === "eventos" ? "bg-blue-600 text-white" : "bg-blue-200 text-blue-900"}`}>Eventos</button>
        <button onClick={() => setView("ubicaciones")} className={`px-4 py-2 rounded-lg shadow-md transition-colors ${view === "ubicaciones" ? "bg-green-600 text-white" : "bg-green-200 text-green-900"}`}>Ubicaciones</button>
        <button onClick={() => setView("contactos")} className={`px-4 py-2 rounded-lg shadow-md transition-colors ${view === "contactos" ? "bg-purple-600 text-white" : "bg-purple-200 text-purple-900"}`}>Contactos</button>
      </div>

      {view === "eventos" && (
        <section className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Registrar Evento</h2>
          <form onSubmit={handleEventSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(eventForm).map((key) => (
              <input
                key={key}
                name={key}
                placeholder={key}
                value={eventForm[key]}
                onChange={handleChange(setEventForm)}
                className="border p-2 rounded shadow-sm"
              />
            ))}
            <button type="submit" className="col-span-full bg-blue-600 hover:bg-blue-700 text-white font-medium p-2 rounded">Registrar Evento</button>
          </form>

          <h2 className="text-xl font-semibold text-blue-800 mt-6">Eventos Registrados</h2>
          <div className="grid gap-4 mt-2">
            {events.map((event, i) => (
              <div key={i} className="border p-4 rounded-lg bg-blue-50 shadow">
                <strong className="text-lg text-blue-900">{event.titulo}</strong>
                <p>Invitados: {event.invitados}</p>
                <p>Fecha y hora: {event.fecha} {event.hora} ({event.zonaHoraria})</p>
                <p>Descripción: {event.descripcion}</p>
                <p>Repetición: {event.repeticion}</p>
                <p>Recordatorio: {event.recordatorio}</p>
                <p>Clasificación: {event.clasificacion}</p>
                <p>Lugar: {event.lugar}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {view === "ubicaciones" && (
        <section className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Registrar Ubicación</h2>
          <form onSubmit={handleLocationSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(locationForm).map((key) => (
              <input
                key={key}
                name={key}
                placeholder={key}
                value={locationForm[key]}
                onChange={handleChange(setLocationForm)}
                className="border p-2 rounded shadow-sm"
              />
            ))}
            <button type="submit" className="col-span-full bg-green-600 hover:bg-green-700 text-white font-medium p-2 rounded">Registrar Ubicación</button>
          </form>

          <h2 className="text-xl font-semibold text-green-800 mt-6">Ubicaciones Registradas</h2>
          <div className="grid gap-4 mt-2">
            {locations.map((loc, i) => (
              <div key={i} className="border p-4 rounded-lg bg-green-50 shadow">
                <strong className="text-lg text-green-900">{loc.titulo}</strong>
                <p>Dirección: {loc.direccion}</p>
                <p>Coordenadas: {loc.coordenadas}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {view === "contactos" && (
        <section className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">Registrar Contacto</h2>
          <form onSubmit={handleContactSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(contactForm).map((key) => (
              <input
                key={key}
                name={key}
                placeholder={key}
                value={contactForm[key]}
                onChange={handleChange(setContactForm)}
                className="border p-2 rounded shadow-sm"
              />
            ))}
            <button type="submit" className="col-span-full bg-purple-600 hover:bg-purple-700 text-white font-medium p-2 rounded">Registrar Contacto</button>
          </form>

          <h2 className="text-xl font-semibold text-purple-800 mt-6">Contactos Registrados</h2>
          <div className="grid gap-4 mt-2">
            {contacts.map((contact, i) => (
              <div key={i} className="border p-4 rounded-lg bg-purple-50 shadow">
                <strong className="text-lg text-purple-900">{contact.saludo} {contact.nombreCompleto}</strong>
                <p>ID: {contact.identificacion}</p>
                <p>Email: {contact.correo}</p>
                <p>Teléfono: {contact.telefono}</p>
                <p>Foto: {contact.fotografia}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
