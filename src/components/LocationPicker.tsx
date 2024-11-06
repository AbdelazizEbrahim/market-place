// import { useEffect } from "react";
// import L from "leaflet"; // Import Leaflet

// export default function LocationPicker() {
//   useEffect(() => {
//     // Check if map is already initialized
//     if (!window.Map) {
//       // Create the map and set the initial view to Bahir Dar coordinates
//       const map = L.map("map").setView([11.5911, 37.3833], 13); // Bahir Dar coordinates

//       // Set up the OpenStreetMap tile layer
//       L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//       }).addTo(map);

//       // Add a marker at the default location (Bahir Dar)
//       L.marker([11.5911, 37.3833]).addTo(map).bindPopup("Bahir Dar").openPopup();

//       // Store map instance in global window object to check initialization
//       window.map = Map;
//     }
//   }, []);

//   return (
//     <div id="map" className="w-[200px] h-[200px]"></div>
//   );
// }
