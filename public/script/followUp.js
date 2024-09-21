function generateMessage() {
  const name = document.getElementById('name').value;
  const vehicleSelect = document.getElementById('vehicle');
  const vehicleKey = vehicleSelect.options[vehicleSelect.selectedIndex].value;
  const price = parseFloat(document.getElementById('price').value).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  const vehicles = {
    "trolley_midnight_36": {
      vehicleName: "Trolley Midnight (36 Passengers)",
      imageUrl: "https://wtglimo.com/img/lightbox/large/vehicle-main/trolleyMidnight-main.png",
      vehicleLink: "https://wtglimo.com/Naperville-trolley-bus-rental.php"
    },
    "trolley_fusion_30": {
      vehicleName: "Trolley Fusion (30 Passengers)",
      imageUrl: "https://wtglimo.com/img/lightbox/large/vehicle-main/trolleyFusion-main.png",
      vehicleLink: "https://wtglimo.com/Chicago-trolley-bus-rental.php"
    },
    "trolley_bliss_30": {
      vehicleName: "Trolley Bliss (30 Passengers)",
      imageUrl: "https://wtglimo.com/img/lightbox/large/vehicle-main/trolleyBliss-main.png",
      vehicleLink: "https://wtglimo.com/white-wedding-trolleys-Chicago.php"
    },
    "trolley_classic_30": {
      vehicleName: "Trolley Classic (30 Passengers)",
      imageUrl: "https://wtglimo.com/img/lightbox/large/vehicle-main/trolleyClassic-main.png",
      vehicleLink: "https://wtglimo.com/Chicago-wedding-trolley-bus-rental.php"
    },
    "trolley_festive_24": {
      vehicleName: "Trolley Festive (24 Passengers)",
      imageUrl: "https://wtglimo.com/img/lightbox/large/vehicle-main/trolleyFestive-main.png",
      vehicleLink: "https://wtglimo.com/Chicago-trolley-rental.php"
    },
    "partybus_dove_40": {
      vehicleName: "Party Bus Dove (40 Passengers)",
      imageUrl: "https://wtglimo.com/img/lightbox/large/vehicle-main/partyBus-Dove-main.jpg",
      vehicleLink: "https://wtglimo.com/chicago-party-bus-rental.php"
    },
    "partybus_nightrider_30": {
      vehicleName: "Party Bus Night Rider (30 Passengers)",
      imageUrl: "https://wtglimo.com/img/lightbox/large/vehicle-main/nightRider-main.png",
      vehicleLink: "https://wtglimo.com/libertyville-party-bus-rental.php"
    },
    "partybus_eagle_25": {
      vehicleName: "Party Bus Eagle (25 Passengers)",
      imageUrl: "https://wtglimo.com/img/lightbox/large/vehicle-main/eagle-main.png",
      vehicleLink: "https://wtglimo.com/Palatine-party-bus-rental.php"
    },
    "partybus_whitehawk_20": {
      vehicleName: "Party Bus White Hawk (20 Passengers)",
      imageUrl: "https://wtglimo.com/img/lightbox/large/vehicle-main/whiteHawk-main.png",
      vehicleLink: "https://wtglimo.com/Arlington-Heights-Party-Bus-Rental.php"
    },
    "pink_hummer_h2": {
      vehicleName: "Pink Hummer H2 (18 Passengers)",
      imageUrl: "https://wtglimo.com/img/lightbox/large/vehicle-main/pinkHummer-main.png",
      vehicleLink: "https://wtglimo.com/hummer_pink_panther.php"
    },
    "pink_chrysler_300": {
      vehicleName: "Pink Chrysler 300 (10 Passengers)",
      imageUrl: "https://wtglimo.com/img/lightbox/large/vehicle-main/pinkChrysler-main.png",
      vehicleLink: "https://wtglimo.com/pink-limo-rental-Chicago.php"
    },
    "christmas_trolley": {
      vehicleName: "Christmas Trolley",
      imageUrl: "https://wtglimo.com/img/lightbox/large/vehicle-main/christmasTrolleyMain.png",
      vehicleLink: "https://wtglimo.com/Christmas-trolley-tours-Chicago.php"
    },
    "ford_transit_limo": {
      vehicleName: "Ford Transit Limo (15 Passengers)",
      imageUrl: "https://wtglimo.com/img/lightbox/large/vehicle-main/tranitBlack-main.png",
      vehicleLink: "https://wtglimo.com/15-Passenger-Van-Rental-Chicago-Ford-Transit-Black.php"
    },
    "sprinter_shuttle_van": {
      vehicleName: "Sprinter Shuttle Van (14 Passengers)",
      imageUrl: "https://wtglimo.com/img/lightbox/large/vehicle-main/sprinter-main.png",
      vehicleLink: "https://wtglimo.com/sprinter_shuttle_van.php"
    },
    "hummer_h2_stretch_limo": {
      vehicleName: "Hummer H2 Stretch Limo (20 Passengers)",
      imageUrl: "https://wtglimo.com/img/lightbox/large/vehicle-main/hummerWhite-main.png",
      vehicleLink: "https://wtglimo.com/suv_stretch_limousine_hummer_galaxy.php"
    },
    "chrysler_300_limo": {
      vehicleName: "Chrysler 300 Limo (10 Passengers)",
      imageUrl: "https://wtglimo.com/img/lightbox/large/vehicle-main/chrysler300-main.png",
      vehicleLink: "https://wtglimo.com/sedan_stretch_limo_chrysler_300_limo.php"
    },
    "lincoln_mkt_limo": {
      vehicleName: "Lincoln MKT Limo (10 Passengers)",
      imageUrl: "https://wtglimo.com/img/lightbox/large/vehicle-main/lincolnMKT-main.png",
      vehicleLink: "https://wtglimo.com/sedan_stretch_limo_lincoln_MKT_limo.php"
    },
    "lincoln_navigator": {
      vehicleName: "Lincoln Navigator (6 Passengers)",
      imageUrl: "https://wtglimo.com/img/lightbox/large/vehicle-main/navigator-main.png",
      vehicleLink: "https://wtglimo.com/lincoln-navigator-limo.php"
    },
    "cadillac_escalade": {
      vehicleName: "Cadillac Escalade (6 Passengers)",
      imageUrl: "https://wtglimo.com/img/lightbox/large/vehicle-main/cadillac-main.png",
      vehicleLink: "https://wtglimo.com/cadillac-escalade-limo.php"
    },
    "chevrolet_suburban": {
      vehicleName: "Chevrolet Suburban (6 Passengers)",
      imageUrl: "https://wtglimo.com/img/lightbox/large/vehicle-main/suburban-main.png",
      vehicleLink: "https://wtglimo.com/suv-limo-rental.php"
    },
    "lincoln_mkz": {
      vehicleName: "Lincoln MKZ (3 Passengers)",
      imageUrl: "https://wtglimo.com/img/lightbox/large/vehicle-main/lincolnMKZ-main.png",
      vehicleLink: "https://wtglimo.com/limo-car-service.php"
    },
    "coach_bus_super": {
      vehicleName: "Coach Bus - Super (50 Passengers)",
      imageUrl: "https://wtglimo.com/img/lightbox/large/vehicle-main/superCoach-main.png",
      vehicleLink: "https://wtglimo.com/chicago-Super-Coach-Bus.php"
    },
    "coach_bus_rentals": {
      vehicleName: "Charter Bus - Everywhere (56 Passengers)",
      imageUrl: "https://wtglimo.com/img/lightbox/large/vehicle-main/coachBusEverywhere-main.png",
      vehicleLink: "https://wtglimo.com/chicago_coach_bus.php"
    },
    "coach_bus_corporate": {
      vehicleName: "Coach Bus - Corporate (42 Passengers)",
      imageUrl: "https://wtglimo.com/img/lightbox/large/vehicle-main/exrcutiveBus-main.png",
      vehicleLink: "https://wtglimo.com/executive_shuttle_bus.php"
    },
    "coach_bus_crystal": {
      vehicleName: "Coach Bus Crystal (25 Passengers)",
      imageUrl: "https://wtglimo.com/img/lightbox/large/vehicle-main/partyBusCrystal-main.png",
      vehicleLink: "https://wtglimo.com/executive_bus_crystal.php"
    }
  };

  const reserveLink = "https://wtglimo.com/reservation-limo.php";
  const vehicleInfo = vehicles[vehicleKey] || { vehicleName: "Unknown Vehicle", imageUrl: "https://example.com/default.jpg", vehicleLink: "#" };

  const message = `
    <p>Hi ${name},</p><br>
    <p class="btm-mrg">The quote of <span class="highlight">$${price}</span> is <strong>expiring soon.</strong> Therefore, I'm reaching out to see if you're still interested in the <a href="${vehicleInfo.vehicleLink}" class="highlight vehicleName" target="_blank">${vehicleInfo.vehicleName}</a> or have any questions.</p>
    <p><img src="${vehicleInfo.imageUrl}" alt="${vehicleKey}" style="max-width: 100%; max-height: 200px; border-radius: 8px; box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1); width: 100%; height: auto; object-fit: cover;"></p>
    <p><a href="${vehicleInfo.vehicleLink}" class="highlight btm-mrg-xl" target="_blank">View More</a></p>
    <p class="btm-mrg-xxl">A 20% deposit is required to hold the vehicle. The availability is limited. </p>
    <p class="btm-mrg-xl">Secure your vehicle now!.</p>
    <p><a href="${reserveLink}" class="book-now" target="_blank">RESERVE NOW</a></p>
    <hr>
  `;

  document.getElementById('output').innerHTML = message;
}

function copyMessage() {
  const outputDiv = document.getElementById('output');
  const range = document.createRange();
  range.selectNodeContents(outputDiv);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
  selection.removeAllRanges();
}





