// Replace this number with your Joy's Voyages WhatsApp number in international format.
// Example for India: 919876543210
const WHATSAPP_NUMBER = "919449721096";

function waLink(message) {
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}

function searchStay() {
  const destination = document.getElementById("destination").value || "my destination";
  const checkin = document.getElementById("checkin").value || "not specified";
  const checkout = document.getElementById("checkout").value || "not specified";
  const guests = document.getElementById("guests").value;
  const message = `Hi Joy's Voyages! I am looking for a stay in ${destination}. Check-in: ${checkin}. Check-out: ${checkout}. Guests: ${guests}. Please share the best options and price.`;
  window.open(waLink(message), "_blank");
}

function bookProperty(property) {
  const message = `Hi Joy's Voyages! I am interested in booking ${property}. Please share availability and your best price.`;
  window.open(waLink(message), "_blank");
}

function submitBooking(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const place = document.getElementById("place").value;
  const date = document.getElementById("date").value || "Not specified";
  const people = document.getElementById("people").value || "Not specified";
  const message = document.getElementById("message").value || "No additional details";
  const text = `Hi Joy's Voyages!%0A%0AName: ${name}%0APhone: ${phone}%0ADestination: ${place}%0ATravel date: ${date}%0AGuests: ${people}%0ARequirements: ${message}`;
  window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text), "_blank");
}
