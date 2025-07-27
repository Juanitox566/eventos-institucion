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
    escuchar: "Escuchar información",
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
    escuchar: "Listen to information",
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
    Titulo: "",
    Invitados: "",
    Fecha: "",
    Hora: "",
    ZonaHoraria: "",
    Descripcion: "",
    Repeticion: "",
    Recordatorio: "",
    Clasificacion: "",
    Lugar: "",
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

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === "es" ? "es-ES" : "en-US";
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 p-6 space-y-6 font-sans">
        <h1 className="text-4xl font-extrabold text-center text-indigo-800 mb-4">Sistema de Gestión Educativa</h1>
        <div className="space-x-2">
        <div className="p-6 space-y-6 bg-gradient-to-br from-gray-100 to-blue-100 min-h-screen">
        <h1 className="text-3xl font-bold text-center text-blue-800">Sistema de Gestión Educativa</h1>
          
            <div className="flex justify-center space-x-4 mb-6">
            <select value={lang} onChange={(e) => setLang(e.target.value)} className="border p-1 rounded">
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
          <button onClick={() => speakText(t.title)} className="px-2 py-1 bg-gray-300 rounded">🔊 {t.escuchar}</button>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mb-6">
        <button onClick={() => setView("eventos")} className={`px-4 py-2 rounded-lg shadow-md transition-colors ${view === "eventos" ? "bg-blue-600 text-white" : "bg-blue-200 text-blue-900"}`}>Eventos</button>
        <button onClick={() => setView("ubicaciones")} className={`px-4 py-2 rounded-lg shadow-md transition-colors ${view === "ubicaciones" ? "bg-green-600 text-white" : "bg-green-200 text-green-900"}`}>Ubicaciones</button>
        <button onClick={() => setView("contactos")} className={`px-4 py-2 rounded-lg shadow-md transition-colors ${view === "contactos" ? "bg-purple-600 text-white" : "bg-purple-200 text-purple-900"}`}>Contactos</button>
     
      <div className="flex justify-center space-x-4">
        <button onClick={() => setView("eventos")} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded shadow">Eventos</button>
        <button onClick={() => setView("ubicaciones")} className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded shadow">Ubicaciones</button>
        <button onClick={() => setView("contactos")} className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded shadow">Contactos</button>
      </div>

      {view === "ayuda" && (
  <div>
    <h2 className="text-xl font-semibold mb-4">{lang === "es" ? "Video de Ayuda" : "Help Video"}</h2>
    <p className="mb-4">
      {lang === "es"
        ? "Este video te mostrará cómo utilizar la aplicación paso a paso."
        : "This video will show you step-by-step how to use the application."}
    </p>
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src="https://www.youtube.com/watch?v=yRTQ-tcO4gc"
        title="Video tutorial"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-96 rounded shadow-lg"
      ></iframe>
    </div>
  </div>
)}

             {view === "eventos" && (
        <div>
          <h2 className="text-xl font-semibold">{t.registrarEvento}</h2>
          <form onSubmit={handleEventSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(eventForm).map((key) => (
              <input
                key={key}
                name={key}
                placeholder={t.placeholder[key]}
                value={eventForm[key]}
                onChange={handleChange(setEventForm)}
                className="p-2 border border-gray-400 rounded bg-white text-black"
              />
            ))}
            <button type="submit" className="col-span-full bg-blue-500 text-white py-2 rounded">{t.btnRegistrarEvento}</button>
          </form>

          <h3 className="mt-6 text-lg font-semibold">{t.eventosRegistrados}</h3>
          <ul className="space-y-2">
            {events.map((ev, i) => (
              <li key={i} className="p-4 border rounded bg-blue-50">
                <strong>{t.placeholder.titulo}:</strong> {ev.titulo} <br />
                <strong>{t.placeholder.descripcion}:</strong> {ev.descripcion}
              </li>
            ))}
          </ul>
        </div>
      )}

      {view === "ubicaciones" && (
        <div>
          <h2 className="text-xl font-semibold">{t.registrarUbicacion}</h2>
          <form onSubmit={handleLocationSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(locationForm).map((key) => (
              <input
                key={key}
                name={key}
                placeholder={t.placeholder[key]}
                value={locationForm[key]}
                onChange={handleChange(setLocationForm)}
                className="p-2 border border-gray-400 rounded bg-white text-black"
              />
            ))}
            <button type="submit" className="col-span-full bg-green-500 text-white py-2 rounded">{t.btnRegistrarUbicacion}</button>
          </form>

          <h3 className="mt-6 text-lg font-semibold">{t.ubicacionesRegistradas}</h3>
          <ul className="space-y-2">
            {locations.map((loc, i) => (
              <li key={i} className="p-4 border rounded bg-green-50">
                <strong>{t.placeholder.titulo}:</strong> {loc.titulo} <br />
                <strong>{t.placeholder.direccion}:</strong> {loc.direccion}
              </li>
            ))}
          </ul>
        </div>
      )}

      {view === "contactos" && (
        <div>
          <h2 className="text-xl font-semibold">{t.registrarContacto}</h2>
          <form onSubmit={handleContactSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(contactForm).map((key) => (
              <input
                key={key}
                name={key}
                placeholder={t.placeholder[key]}
                value={contactForm[key]}
                onChange={handleChange(setContactForm)}
                className="p-2 border border-gray-400 rounded bg-white text-black"
              />
            ))}
            <button type="submit" className="col-span-full bg-purple-500 text-white py-2 rounded">{t.btnRegistrarContacto}</button>
          </form>

          <h3 className="mt-6 text-lg font-semibold">{t.contactosRegistrados}</h3>
          <ul className="space-y-2">
            {contacts.map((con, i) => (
              <li key={i} className="p-4 border rounded bg-purple-50">
                <strong>{t.placeholder.nombreCompleto}:</strong> {con.nombreCompleto} <br />
                <strong>{t.placeholder.correo}:</strong> {con.correo}
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}
