/**
 * script.js (ES module)
 * - imports data modules from /data/
 * - builds class and ship selects
 * - renders tiles for each variant (Base, Apex 5,10,15,20)
 */

import { battleshipData } from "./data/battleship.js";
import { carrierData } from "./data/carrier.js";
import { battlecruiserData } from "./data/battlecruiser.js";
import { auxiliaryData } from "./data/auxiliary.js";
import { cruiserData } from "./data/cruiser.js";
import { destroyerData } from "./data/destroyer.js";
import { frigateData } from "./data/frigate.js";
import { corvetteData } from "./data/corvette.js";
import { aircraftData } from "./data/aircraft.js";

// MASTER DATA
const MASTER_DATA = {
  "Battleship": battleshipData,
  "Carrier": carrierData,
  "Battlecruiser": battlecruiserData,
  "Auxiliary Ship": auxiliaryData,
  "Cruiser": cruiserData,
  "Destroyer": destroyerData,
  "Frigate": frigateData,
  "Corvette": corvetteData,
  "Aircraft": aircraftData
};

const classSelect = document.getElementById("classSelect");
const shipSelect = document.getElementById("shipSelect");
const tilesContainer = document.getElementById("tilesContainer");

function init(){
  populateClassSelect();
  classSelect.addEventListener("change", onClassChanged);
  shipSelect.addEventListener("change", onShipChanged);
}

function populateClassSelect(){
  // Clear then add
  classSelect.innerHTML = `<option value="">— Select class —</option>`;
  Object.keys(MASTER_DATA).forEach(cls => {
    const opt = document.createElement("option");
    opt.value = cls;
    opt.textContent = cls;
    classSelect.appendChild(opt);
  });
}

function onClassChanged(){
  const cls = classSelect.value;
  shipSelect.disabled = !cls;
  shipSelect.innerHTML = `<option value="">— Select ship —</option>`;
  tilesContainer.innerHTML = `<div class="placeholder">${cls ? "Select a ship from the list." : "Select a ship class and ship to view variants."}</div>`;
  if (!cls) return;

  const data = MASTER_DATA[cls] || {};
  const shipNames = Object.keys(data);
  if (shipNames.length === 0){
    shipSelect.innerHTML = `<option value="">(no ships in this class)</option>`;
    shipSelect.disabled = true;
    return;
  }
  shipNames.forEach(name=>{
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    shipSelect.appendChild(opt);
  });

  // if only one ship, auto-select it for convenience
  if (shipNames.length === 1){
    shipSelect.value = shipNames[0];
    shipSelect.dispatchEvent(new Event("change"));
  }
}

function onShipChanged(){
  const cls = classSelect.value;
  const ship = shipSelect.value;
  if (!cls || !ship){
    tilesContainer.innerHTML = `<div class="placeholder">Select a ship class and ship to view variants.</div>`;
    return;
  }
  const data = MASTER_DATA[cls] || {};
  const shipObj = data[ship];
  if (!shipObj || !shipObj.variants){
    tilesContainer.innerHTML = `<div class="placeholder">(No variant data available)</div>`;
    return;
  }
  renderVariants(ship, shipObj.variants);
}

function renderVariants(shipName, variants){
  tilesContainer.innerHTML = ""; // clear
  // variants is an object with keys = variant names
  Object.entries(variants).forEach(([variantName, levels])=>{
    const tile = document.createElement("div");
    tile.className = "tile";

    const header = document.createElement("div");
    header.className = "tile-header";
    const title = document.createElement("div");
    title.className = "tile-title";
    title.textContent = `${shipName} — ${variantName}`;
    header.appendChild(title);
    tile.appendChild(header);

    // build table / rows for Base, Apex5,10,15,20
    const table = document.createElement("table");
    table.className = "variant-list";
    const rows = ["Base Model","Apex 5","Apex 10","Apex 15","Apex 20"];
    rows.forEach(rowName=>{
      const tr = document.createElement("tr");
      const tdLabel = document.createElement("td");
      tdLabel.className = "variant-label";
      tdLabel.textContent = rowName;
      const tdData = document.createElement("td");
      const levelObj = levels[rowName] || { hp: 0, buffs: "" };
      const hpSpan = document.createElement("span");
      hpSpan.className = "hp";
      // if the value is absolute (base) or relative (+...), show as-is:
      hpSpan.textContent = (typeof levelObj.hp === "number" && rowName === "Base Model") ? `${levelObj.hp} hp` : (levelObj.hp ? `${levelObj.hp}` : "");
      const buffsSpan = document.createElement("span");
      buffsSpan.className = "buffs";
      buffsSpan.textContent = levelObj.buffs ? ` ${levelObj.buffs}` : "";
      tdData.appendChild(hpSpan);
      tdData.appendChild(buffsSpan);

      tr.appendChild(tdLabel);
      tr.appendChild(tdData);
      table.appendChild(tr);
    });

    tile.appendChild(table);
    tilesContainer.appendChild(tile);
  });
}

// initialize UI
init();
