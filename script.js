// IMPORTANT: Replace this with Joy's Voyages' WhatsApp number.
 // Use country code + number, digits only. Example for India: 919876543210
const WHATSAPP_NUMBER = "91XXXXXXXXXX";

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.querySelectorAll("[data-stay]").forEach(card => {
  card.addEventListener("click", () => {
    const staySelect = document.querySelector('select[name="stay"]');
    if (staySelect) staySelect.value = card.dataset.stay;
  });
});

function openWhatsApp(message) {
  if (WHATSAPP_NUMBER.includes("X")) {
    alert("Please add your WhatsApp number in script.js first. Search for WHATSAPP_NUMBER and replace the sample value.");
    return;
  }
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

document.getElementById("enquiryForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const message = [
    "Hello Joy’s Voyages! I’m interested in planning a Coorg getaway.",
    `Name: ${form.get("name")}`,
    `Phone: ${form.get("phone")}`,
    `Check-in: ${form.get("checkin") || "Not decided"}`,
    `Guests: ${form.get("guests") || "Not specified"}`,
    `Preferred stay: ${form.get("stay")}`,
    `Message: ${form.get("message") || "None"}`
  ].join("\n");
  openWhatsApp(message);
});

document.getElementById("floatingWhatsApp").addEventListener("click", event => {
  event.preventDefault();
  openWhatsApp("Hello Joy’s Voyages! I’d like help planning a trip to Coorg.");
});

document.getElementById("year").textContent = new Date().getFullYear();
