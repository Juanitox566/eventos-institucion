"use client";

import { useState, useEffect } from "react";

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
    leerPantalla: "Leer pantalla",
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
    leerPantalla: "Read screen",
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

  const handleSpeak = () => {
    const textToRead = document.body.innerText;
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = lang === "es" ? "es-ES" : "en-US";
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{t.title}</h1>
        <div className="space-x-2">
          <select value={lang} onChange={(e) => setLang(e.target.value)} className="border p-1 rounded">
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
          <button onClick={handleSpeak} className="bg-gray-300 px-3 py-1 rounded">
            {t.leerPantalla}
          </button>
        </div>
      </div>

      <div className="space-x-2">
        <button onClick={() => setView("eventos")} className="px-4 py-2 bg-blue-500 text-white rounded">{t.eventos}</button>
        <button onClick={() => setView("ubicaciones")} className="px-4 py-2 bg-green-500 text-white rounded">{t.ubicaciones}</button>
        <button onClick={() => setView("contactos")} className="px-4 py-2 bg-purple-500 text-white rounded">{t.contactos}</button>
      </div>

      {/* Resto de la interfaz (formularios y listas) continúa igual... */}
    </div>
  );
}
