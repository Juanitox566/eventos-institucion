"use client";

import { useState } from "react";

const translations = {
  es: {
    title: "Sistema de Gestión Educativa",
    eventos: "Eventos",
    ubicaciones: "Ubicaciones",
    contactos: "Contactos",
    registrarEvento: "Registrar Evento",
    registrarUbicacion: "Registrar Ubicación",
    registrarContacto: "Registrar Contacto",
    eventosRegistrados: "Eventos Registrados",
    ubicacionesRegistradas: "Ubicaciones Registradas",
    contactosRegistrados: "Contactos Registrados",
    placeholder: {
      titulo: "Título",
      invitados: "Invitados",
      fecha: "Fecha",
      hora: "Hora",
      zonaHoraria: "Zona Horaria",
      descripcion: "Descripción",
      repeticion: "Repetición",
      recordatorio: "Recordatorio",
      clasificacion: "Clasificación",
      lugar: "Lugar",
      direccion: "Dirección",
      coordenadas: "Coordenadas",
      saludo: "Saludo",
      nombreCompleto: "Nombre Completo",
      identificacion: "Identificación",
      correo: "Correo",
      telefono: "Teléfono",
      fotografia: "Fotografía"
    },
    btnRegistrarEvento: "Registrar Evento",
    btnRegistrarUbicacion: "Registrar Ubicación",
    btnRegistrarContacto: "Registrar Contacto",
  },
  en: {
    title: "Educational Management System",
    eventos: "Events",
    ubicaciones: "Locations",
    contactos: "Contacts",
    registrarEvento: "Register Event",
    registrarUbicacion: "Register Location",
    registrarContacto: "Register Contact",
    eventosRegistrados: "Registered Events",
    ubicacionesRegistradas: "Registered Locations",
    contactosRegistrados: "Registered Contacts",
    placeholder: {
      titulo: "Title",
      invitados: "Guests",
      fecha: "Date",
      hora: "Time",
      zonaHoraria: "Time Zone",
      descripcion: "Description",
      repeticion: "Repetition",
      recordatorio: "Reminder",
      clasificacion: "Classification",
      lugar: "Place",
      direccion: "Address",
      coordenadas: "Coordinates",
      saludo: "Salutation",
      nombreCompleto: "Full Name",
      identificacion: "ID",
      correo: "Email",
      telefono: "Phone",
      fotografia: "Photo"
    },
    btnRegistrarEvento: "Register Event",
    btnRegistrarUbicacion: "Register Location",
    btnRegistrarContacto: "Register Contact",
  },
};

export default function EventManagerApp() {
  const [view, setView] = useState("eventos");
  const [lang, setLang] = useState("es");
  const t = translations[lang];

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
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{t.title}</h1>
        <select value={lang} onChange={(e) => setLang(e.target.value)} className="border p-1 rounded">
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>

      <div className="space-x-2">
        <button onClick={() => setView("eventos")} className="px-4 py-2 bg-blue-500 text-white rounded">{t.eventos}</button>
        <button onClick={() => setView("ubicaciones")} className="px-4 py-2 bg-green-500 text-white rounded">{t.ubicaciones}</button>
        <button onClick={() => setView("contactos")} className="px-4 py-2 bg-purple-500 text-white rounded">{t.contactos}</button>
      </div>

      {view === "eventos" && (
        <>
          <h2 className="text-xl font-semibold">{t.registrarEvento}</h2>
          <form onSubmit={handleEventSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(eventForm).map((key) => (
              <input
                key={key}
                name={key}
                placeholder={t.placeholder[key] || key}
                value={eventForm[key]}
                onChange={handleChange(setEventForm)}
                className="border p-2 rounded bg-gray-100 text-gray-800 placeholder-gray-600"
              />
            ))}
            <button type="submit" className="col-span-full bg-blue-600 text-white p-2 rounded">{t.btnRegistrarEvento}</button>
          </form>

          <h2 className="text-lg font-semibold mt-6">{t.eventosRegistrados}</h2>
          {events.map((event, i) => (
            <div key={i} className="border p-4 rounded">
              <strong>{event.titulo}</strong>
              <p>{t.placeholder.invitados}: {event.invitados}</p>
              <p>{t.placeholder.fecha} y {t.placeholder.hora}: {event.fecha} {event.hora} ({event.zonaHoraria})</p>
              <p>{t.placeholder.descripcion}: {event.descripcion}</p>
              <p>{t.placeholder.repeticion}: {event.repeticion}</p>
              <p>{t.placeholder.recordatorio}: {event.recordatorio}</p>
              <p>{t.placeholder.clasificacion}: {event.clasificacion}</p>
              <p>{t.placeholder.lugar}: {event.lugar}</p>
            </div>
          ))}
        </>
      )}

      {view === "ubicaciones" && (
        <>
          <h2 className="text-xl font-semibold">{t.registrarUbicacion}</h2>
          <form onSubmit={handleLocationSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(locationForm).map((key) => (
              <input
                key={key}
                name={key}
                placeholder={t.placeholder[key] || key}
                value={locationForm[key]}
                onChange={handleChange(setLocationForm)}
                className="border p-2 rounded bg-gray-100 text-gray-800 placeholder-gray-600"
              />
            ))}
            <button type="submit" className="col-span-full bg-green-600 text-white p-2 rounded">{t.btnRegistrarUbicacion}</button>
          </form>

          <h2 className="text-lg font-semibold mt-6">{t.ubicacionesRegistradas}</h2>
          {locations.map((loc, i) => (
            <div key={i} className="border p-4 rounded">
              <strong>{loc.titulo}</strong>
              <p>{t.placeholder.direccion}: {loc.direccion}</p>
              <p>{t.placeholder.coordenadas}: {loc.coordenadas}</p>
            </div>
          ))}
        </>
      )}

      {view === "contactos" && (
        <>
          <h2 className="text-xl font-semibold">{t.registrarContacto}</h2>
          <form onSubmit={handleContactSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(contactForm).map((key) => (
              <input
                key={key}
                name={key}
                placeholder={t.placeholder[key] || key}
                value={contactForm[key]}
                onChange={handleChange(setContactForm)}
                className="border p-2 rounded bg-gray-100 text-gray-800 placeholder-gray-600"
              />
            ))}
            <button type="submit" className="col-span-full bg-purple-600 text-white p-2 rounded">{t.btnRegistrarContacto}</button>
          </form>

          <h2 className="text-lg font-semibold mt-6">{t.contactosRegistrados}</h2>
          {contacts.map((contact, i) => (
            <div key={i} className="border p-4 rounded">
              <strong>{contact.saludo} {contact.nombreCompleto}</strong>
              <p>{t.placeholder.identificacion}: {contact.identificacion}</p>
              <p>{t.placeholder.correo}: {contact.correo}</p>
              <p>{t.placeholder.telefono}: {contact.telefono}</p>
              <p>{t.placeholder.fotografia}: {contact.fotografia}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
