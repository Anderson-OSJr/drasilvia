"use client";

export default function GoogleMap() {
  return (
    <div className="w-full h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d970.3585140780225!2d-48.172027704347805!3d-21.764046882929375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8f1be6eee3497%3A0xc1986865575fe58c!2sHumaniza%20Espa%C3%A7o%20Terap%C3%AAutico!5e1!3m2!1spt-BR!2sbr!4v1764621255566!5m2!1spt-BR!2sbr"
        className="w-full h-56 rounded-xl border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
