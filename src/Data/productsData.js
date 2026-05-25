/* ================= BLOWER IMAGES================= */
// ======== Blower-A ===============================
import Blower_A1_Main from "../assets/Blower Images/Blower-A/Blower-A2.jpg";
import Blower_A1 from "../assets/Blower Images/Blower-A/Blower-A1.jpg";
import Blower_A2 from "../assets/Blower Images/Blower-A/Blower-A3.jpg";
import Blower_A3 from "../assets/Blower Images/Blower-A/Blower-A4.jpg";

// ======== Blower-B ===============================
import Blower_B1_Main from "../assets/Blower Images/Blower-B/Blower-B1.png";
import Blower_B1 from "../assets/Blower Images/Blower-B/Blower-B2.png";
import Blower_B2 from "../assets/Blower Images/Blower-B/Blower-B3.png";
import Blower_B3 from "../assets/Blower Images/Blower-B/Blower-B4.png";
import Blower_B4 from "../assets/Blower Images/Blower-B/Blower-B5.png";

// ======== Blower-C ===============================
import Blower_C1_Main from "../assets/Blower Images/Blower-C/Blower-C1.jpg";
import Blower_C1 from "../assets/Blower Images/Blower-C/Blower-C2.jpg";
import Blower_C2 from "../assets/Blower Images/Blower-C/Blower-C3.jpg";
import Blower_C3 from "../assets/Blower Images/Blower-C/Blower-C4.jpg";

/* ================= HEAT GUN IMAGES================= */
// ======== Heat Gun-A ===============================
import HeatGun_A_Main from "../assets/Heat Gun Images/Heat Gun-A/HeatGun-A1.jpg";
// import HeatGun_A1 from "../assets/Heat Gun Images/Heat Gun-A/HeatGun-A2.jpg";
import HeatGun_A2 from "../assets/Heat Gun Images/Heat Gun-A/HeatGun-A3.jpg";
import HeatGun_A3 from "../assets/Heat Gun Images/Heat Gun-A/HeatGun-A4.jpg";
import HeatGun_A4 from "../assets/Heat Gun Images/Heat Gun-A/HeatGun-A5.jpg";
// import HeatGun_A5 from "../assets/Heat Gun Images/Heat Gun-A/HeatGun-A6.jpg";
// import HeatGun_A6 from "../assets/Heat Gun Images/Heat Gun-A/HeatGun-A7.jpg";
import HeatGun_A7 from "../assets/Heat Gun Images/Heat Gun-A/HeatGun-A8.jpg";
// import HeatGun_A8 from "../assets/Heat Gun Images/Heat Gun-A/HeatGun-A9.jpg";
// import HeatGun_A9 from "../assets/Heat Gun Images/Heat Gun-A/HeatGun-A10.jpg";
import HeatGun_A10 from "../assets/Heat Gun Images/Heat Gun-A/HeatGun-A11.jpg";
import HeatGun_A11 from "../assets/Heat Gun Images/Heat Gun-A/HeatGun-A12.jpg";

// ======== Heat Gun-B ===============================
import HeatGun_B_Main from "../assets/Heat Gun Images/Heat Gun-B/HeatGun-B1.jpg";
import HeatGun_B1 from "../assets/Heat Gun Images/Heat Gun-B/HeatGun-B2.jpg";
import HeatGun_B2 from "../assets/Heat Gun Images/Heat Gun-B/HeatGun-B3.jpg";
import HeatGun_B3 from "../assets/Heat Gun Images/Heat Gun-B/HeatGun-B4.jpg";
import HeatGun_B4 from "../assets/Heat Gun Images/Heat Gun-B/HeatGun-B5.jpg";

// ======== Paint Mixer-A ===============================
import PaintMixer_A_Main from "../assets/Paint Mixer Images/Paint Mixer-A/PaintMixer-A1.jpg";
import PaintMixer_A1 from "../assets/Paint Mixer Images/Paint Mixer-A/PaintMixer-A2.jpg";
import PaintMixer_A2 from "../assets/Paint Mixer Images/Paint Mixer-A/PaintMixer-A3.jpg";
import PaintMixer_A3 from "../assets/Paint Mixer Images/Paint Mixer-A/PaintMixer-A4.jpg";

/* ================= ANGLE GRINDER – QAG850 ================= */
import AngleGrinder_A_Main from "../assets/Angle Grinder/grinder.jpg";
import AngleGrinder_Box from "../assets/Angle Grinder/grinder-box.jpg";

/* ================= DRILL MACHINE – QDM650 ================= */
import DrillMachine_A_Main from "../assets/Drill Machine/drill.jpg";
import DrillMachine_Box from "../assets/Drill Machine/drill-box.jpg";

/* ================= MARBLE CUTTER – QMC4SB ================= */
import MarbleCutter_A_Main from "../assets/Marble Cutter/marble-one.jpg";
import MarbleCutter_A2 from "../assets/Marble Cutter/marble-three.jpg";
import MarbleCutter_A3 from "../assets/Marble Cutter/marble-four.jpg";
import MarbleCutter_Box from "../assets/Marble Cutter/marble-five.jpg";

/* ================= PACKING IMAGES ================= */

// Blower QB 40
import QB40_Packing from "../assets/Packing Box And Carton/Blower-QB-40.jpg";

// Blower VB 40
import VB40_Packing from "../assets/Packing Box And Carton/Blower-VB-40.jpg";

// Blower QB 80
import QB80_Packing from "../assets/Packing Box And Carton/Blower-QB-80.jpg";

// Heat Gun QHG1800
import QHG1800_Packing from "../assets/Packing Box And Carton/HeatGun-1800.jpg";

// Heat Gun QVHG2000
import QVHG2000_Packing from "../assets/Packing Box And Carton/HeatGun-2000.jpg";

// Paint Mixer QPM800
import QPM800_Packing from "../assets/Packing Box And Carton/PaintMixer-QEM-800.jpg";

import blowerAnnotated from "../../public/crow.jpeg";

/* =====================================
  MASTER PRODUCTS ARRAY (FINAL)
===================================== */

export const PRODUCTS = [
  /* ================= BLOWER – QB 40 ================= */
  {
    id: 101,
    category: "blower",
    slug: "electric-blower-qb-40",

    name: "ELECTRIC BLOWER QB 40",
    brand: "QUALITEX",
    price: 2199,

    shortDescription: "Single speed portable electric blower for dust removal",
    longDescription:
      "The QUALITEX QB 40 Electric Blower is designed for efficient household and professional cleaning. With strong airflow, compact size, and continuous-duty motor, it ensures reliable performance for everyday dust removal.",

    images: {
      main: Blower_A1_Main,
      gallery: [Blower_A1_Main, Blower_A1, Blower_A2, Blower_A3],
      annotated: blowerAnnotated,
    },

    specifications: {
      Voltage: "AC 220–240V",
      Frequency: "50 / 60 Hz",
      Power: "500 W",
      Speed: "15000 RPM",
      Air_Velocity: "33 m/s",
      Weight: "1.80 Kg",
    },

    performance: {
      motor_Type: "Heavy duty copper motor",
      duty_Type: "Intermittent operation",
    },

    airflowSystem: {
      fan_Type: "Turbo fan",
      inlet_Design: "Wide air inlet",
    },

    speedControl: {
      type: "Single speed",
      regulator: "Yes / 15000 RPM",
    },

    coolingAndSafety: {
      cooling_Method: "Internal airflow cooling",
    },

    usageApplications: [
      "Household cleaning",
      "AC & keyboard cleaning",
      "Dry leaf cleaning",
      "Car cleaning",
    ],

    aboutThisItem: [
      "Strong airflow performance",
      "Compact and lightweight design",
      "Ergonomic grip",
      "Double insulated body",
    ],

    packageContents: [
      "1 × Electric Blower",
      "1 × Rubber Nozzle",
      "1 × Aluminium Mesh",
      "1 × User Manual",
    ],

    packingInformation: {
      image: QB40_Packing,

      singlePieceBox: {
        quantity: "1 Unit",
        weight: "1.8 Kg",
      },
      masterCarton: {
        quantity: "12 Pcs",
        weight: "23 Kg",
      },
    },

    features: [{ label: "Trigger Switch", x: 62, y: 42 }],
  },

  /* ================= BLOWER – VB 40 ================= */
  {
    id: 102,
    category: "blower",
    slug: "electric-blower-vb-40",

    name: "ELECTRIC BLOWER VB 40",
    brand: "QUALITEX",
    price: 2199,

    shortDescription: "Variable speed electric blower with regulator control",
    longDescription:
      "The QUALITEX VB 40 Variable Speed Blower offers adjustable airflow control for precision cleaning. Built with a powerful motor and regulator system, it adapts to multiple cleaning tasks efficiently.",

    images: {
      main: Blower_B1_Main,
      gallery: [Blower_B1_Main, Blower_B1, Blower_B2, Blower_B3, Blower_B4],
      annotated: blowerAnnotated,
    },

    specifications: {
      Voltage: "AC 220–240V",
      Frequency: "50/60 Hz",
      Power: "550 W",
      Speed: "1700–15500 RPM",
      Air_Velocity: "17–35 m/s",
      Weight: "1.9 Kg",
    },

    performance: {
      motor_Type: "High power copper winding motor",
      duty_Type: "Continuous operation",
    },

    airflowSystem: {
      fan_Type: "Turbo fan blades",
      inlet_Design: "High airflow inlet",
    },

    speedControl: {
      type: "Variable speed",
      regulator: "Yes / 1700 - 15500 RPM",
    },

    coolingAndSafety: {
      cooling_Method: "Heat dissipation vents",
    },

    usageApplications: [
      "Precision dust cleaning",
      "Electronic equipment cleaning",
      "Workshop use",
    ],

    aboutThisItem: [
      "Built-in speed regulator",
      "Powerful airflow control",
      "Ergonomic grip",
      "Lightweight design",
    ],

    packageContents: [
      "1 × Variable Blower",
      "1 × Rubber Nozzle",
      "1 × User Manual",
    ],

    packingInformation: {
      image: VB40_Packing,

      singlePieceBox: {
        quantity: "1 Unit",
        weight: "1.95 Kg",
      },
      masterCarton: {
        quantity: "12 Pcs",
        weight: "24.85 Kg",
      },
    },

    features: [{ label: "Speed Regulator", x: 50, y: 22 }],
  },

  /* ================= BLOWER – QB 80 ================= */
  {
    id: 103,
    category: "blower",
    slug: "electric-thunder-blower-qb-80",

    name: "ELECTRIC THUNDER BLOWER QB 80",
    brand: "QUALITEX",
    price: 2199,

    shortDescription: "High power thunder blower for heavy-duty cleaning",
    longDescription:
      "The QUALITEX QB 80 Thunder Blower delivers extreme airflow and power for demanding cleaning applications. Designed for professional and industrial use with enhanced motor strength.",

    images: {
      main: Blower_C1_Main,
      gallery: [Blower_C1_Main, Blower_C1, Blower_C2, Blower_C3],
      annotated: blowerAnnotated,
    },

    specifications: {
      Voltage: "AC 220–240V",
      Frequency: "50/60 Hz",
      Power: "650 W",
      Speed: "1700–16500 RPM",
      Air_Velocity: "17–40 m/s",
      Weight: "2.2 Kg",
    },

    performance: {
      motor_Type: "Heavy-duty copper motor",
      duty_Type: "Industrial continuous duty",
    },

    airflowSystem: {
      fan_Type: "High pressure turbo fan",
    },

    speedControl: {
      type: "Variable Speed",
      regulator: "Yes / 1700 - 16500 RPM",
    },

    coolingAndSafety: {
      cooling_Method: "Advanced ventilation system",
    },

    usageApplications: [
      "Industrial cleaning",
      "Workshop debris removal",
      "Heavy dust blowing",
    ],

    aboutThisItem: [
      "Heavy duty motor",
      "Built-in stand",
      "Ergonomic industrial design",
    ],

    packageContents: [
      "1 × Thunder Blower",
      "1 × Rubber Nozzle",
      "1 × User Manual",
    ],

    packingInformation: {
      image: QB80_Packing,

      singlePieceBox: {
        quantity: "1 Unit",
        weight: "2.2 Kg",
      },
      masterCarton: {
        quantity: "10 Pcs",
        weight: "23 Kg",
      },
    },

    features: [],
  },

  /* ================= HEAT GUN – QHG1800 ================= */
  {
    id: 301,
    category: "heat-gun",
    slug: "qhg1800-hot-air-gun",

    name: "QHG1800 HOT AIR GUN",
    brand: "QUALITEX",
    price: 2899,

    shortDescription: "Dual temperature hot air gun with rapid heating",
    longDescription:
      "The QUALITEX QHG1800 Hot Air Gun provides rapid heating and controlled airflow for paint stripping, shrink wrapping, and plastic shaping.",

    images: {
      main: HeatGun_A_Main,
      gallery: [
        HeatGun_A_Main,
        // HeatGun_A1,
        HeatGun_A2,
        HeatGun_A3,
        HeatGun_A4,
        // HeatGun_A5,
        // HeatGun_A6,
        HeatGun_A7,
        // HeatGun_A8,
        // HeatGun_A9,
        HeatGun_A10,
        HeatGun_A11,
      ],
      annotated: null,
    },

    specifications: {
      Voltage: "AC 220–240V",
      Frequency: "50/60 Hz",
      Power: "1800 W",
      Temperature: "400°C / 550°C",
      Air_flow: "300 / 550 L/min",
    },

    performance: {
      heating_Element: "Nickel chromium heating wire",
      warm_Up: "Rapid heating",
    },

    heatingSystem: {
      nozzle_Type: "Stainless steel vortex outlet",
      resistance: "High temperature resistant",
    },

    temperatureControl: {
      type: "Two speed switch",
    },

    coolingAndSafety: {
      insulation: "High temperature protection shell",
      protection: "Thermal protection shut-off",
    },

    usageApplications: [
      "Paint removal",
      "Shrink wrapping",
      "Loosening rusted bolts",
      "Plastic bending",
    ],

    aboutThisItem: [
      "Rapid heating performance",
      "Two-step temperature adjustment",
      "Heat resistant housing",
    ],

    packageContents: ["1 × Hot Air Gun", "1 × User Manual"],

    packingInformation: {
      image: QHG1800_Packing,

      singlePieceBox: {
        quantity: "1 Unit",
        weight: "850 g",
      },
      masterCarton: {
        quantity: "10 Pcs",
        weight: "9.5 Kg",
      },
    },

    features: [],
  },

  /* ================= HEAT GUN – QVHG2000 ================= */
  {
    id: 302,
    category: "heat-gun",
    slug: "qvhg2000-hot-air-gun",

    name: "QVHG2000 HOT AIR GUN",
    brand: "QUALITEX",
    price: 2899,

    shortDescription: "Variable temperature hot air gun for professional use",
    longDescription:
      "The QUALITEX QVHG2000 Hot Air Gun offers adjustable temperature control and high airflow output, suitable for a wide range of industrial applications.",

    images: {
      main: HeatGun_B_Main,
      gallery: [HeatGun_B_Main, HeatGun_B1, HeatGun_B2, HeatGun_B3, HeatGun_B4],
      annotated: null,
    },

    specifications: {
      Voltage: "AC 220–240V",
      Frequency: "50/60 Hz",
      Power: "2000 W",
      Temperature: "50°C – 600°C",
      Air_flow: "300 / 550 L/min",
    },

    performance: {
      heating_Element: "High efficiency heating coil",
    },

    heatingSystem: {
      nozzle_Type: "Vortex stainless steel outlet",
      resistance: "High temperature resistant",
    },

    temperatureControl: {
      type: "Variable temperature control dial",
    },

    coolingAndSafety: {
      insulation: "Heat resistant shell",
      protection: "Overheat protection",
    },

    usageApplications: [
      "Paint stripping",
      "Plastic molding",
      "Shrink wrapping",
      "Loosening rusted bolts and nuts",
    ],

    aboutThisItem: [
      "Variable temperature range",
      "Ergonomic design",
      "High durability",
    ],

    packageContents: [
      "1 × Hot Air Gun",
      "1 × Concentrator Nozzle",
      "1 × User Manual",
    ],

    packingInformation: {
      image: QVHG2000_Packing,

      singlePieceBox: {
        quantity: "1 Unit",
        weight: "850 g",
      },
      masterCarton: {
        quantity: "10 Pcs",
        weight: "9.5 Kg",
      },
    },

    features: [],
  },

  /* ================= PAINT MIXER – QPM800 ================= */
  {
    id: 201,
    category: "paint-mixer",
    slug: "electric-mixer-qpm800",

    name: "ELECTRIC MIXER QPM800",
    brand: "QUALITEX",
    price: 7499,

    shortDescription: "Heavy-duty electric mixer for paint and cement mixing",
    longDescription:
      "The QUALITEX QPM800 Electric Mixer is designed for oil paint, cement, and mud mixing. Featuring a threaded connector, interchangeable rods, six-speed regulation, and rapid heat dissipation for continuous operation.",

    images: {
      main: PaintMixer_A_Main,
      gallery: [PaintMixer_A_Main, PaintMixer_A1, PaintMixer_A2, PaintMixer_A3],
      annotated: null,
    },

    specifications: {
      Voltage: "110V / 220V",
      Frequency: "50/60 Hz",
      Power: "800 W",
      Speed: "680 RPM",
      Spindle: "M12",
      Weight: "2.4 Kg",
    },

    performance: {
      motor_Type: "Full copper wire motor",
      efficiency: "High power efficiency",
    },

    speedControl: {
      type: "Regulator",
      regulator: true,
    },

    mixingSystem: {
      connector_Type: "Threaded connector",
      inter_changeable: true,
    },

    coolingAndSafety: {
      cooling_Method: "Rapid heat dissipation channels",
      continuous_Operation: true,
    },

    usageApplications: [
      "Oil paint mixing",
      "Cement mixing",
      "Mud mixing",
      "POP mixing",
      "Chemical mixing for tiles",
    ],

    aboutThisItem: [
      "Stable threaded connector",
      "Interchangeable mixing head",
      "Powerful copper motor",
      "Six speed control",
    ],

    packageContents: [
      "1 × Electric Mixer",
      "1 × Auxiliary Handle",
      "1 × User Manual",
    ],

    packingInformation: {
      image: QPM800_Packing,
      singlePieceBox: {
        quantity: "1 Unit",
        weight: "2.4 Kg",
      },
      masterCarton: {
        quantity: "6 Pcs",
        weight: "17 Kg",
      },
    },

    features: [],
  },

  /* ================= ANGLE GRINDER – QAG800 ================= */
  {
    id: 202,
    category: "angle-grinder",
    slug: "angle-grinder-qag800",

    name: "ANGLE GRINDER QAG800",
    brand: "QUALITEX",
    price: 3299,

    shortDescription:
      "High-speed 800W angle grinder with 100mm disc capacity for cutting, grinding, and polishing applications",

    longDescription:
      "The QUALITEX QAG800 Angle Grinder is engineered for efficient cutting, grinding, and polishing applications across industrial, workshop, and maintenance environments. Powered by a robust 800W motor with 11000 RPM high-speed performance, this grinder delivers smooth material removal, precision grinding, and reliable cutting efficiency. Equipped with a 100mm disc capacity, spindle lock mechanism, and ergonomic body design, the QAG800 ensures comfortable handling, quick disc replacement, and stable operation during continuous use. Its compact lightweight structure and durable metal gear housing make it ideal for professional fabrication, polishing, and surface finishing tasks.",

    images: {
      main: AngleGrinder_A_Main,
      gallery: [
        AngleGrinder_A_Main,
        AngleGrinder_Box,
        // AngleGrinder_A1,
        // AngleGrinder_A2,
        // AngleGrinder_A3,
      ],
      annotated: null,
    },

    specifications: {
      Voltage: "110V / 220V",
      Frequency: "50/60 Hz",
      Power: "800 W",
      Speed: "11000 RPM",
      Disc_Capacity: "100 mm (4 inch)",
    },

    performance: {
      motor_Type: "Powerful 800W motor",
      efficiency: "Efficient grinding performance",
    },

    speedControl: {
      type: "Single speed",
      regulator: false,
    },

    grindingSystem: {
      disc_Capacity: "100mm",
      spindle_Lock: true,
    },

    coolingAndSafety: {
      cooling_Method: "Air ventilation cooling system",
      continuous_Operation: true,
    },

    usageApplications: [
      "Metal cutting",
      "Grinding applications",
      "Surface polishing",
      "Fabrication work",
      "Workshop maintenance",
    ],

    aboutThisItem: [
      "Powerful 800W motor",
      "100mm disc capacity",
      "Easy spindle lock mechanism",
      "Comfortable ergonomic design",
    ],

    packageContents: [
      "1 × Angle Grinder",
      "1 × Wheel Guard",
      "1 × Side Handle",
      "1 × Spanner",
      "1 × User Manual",
    ],

    packingInformation: {
      image: AngleGrinder_Box,

      singlePieceBox: {
        quantity: "1 Unit",
      },

      masterCarton: {
        quantity: "10 Pcs",
      },
    },

    features: [
      "800W high-performance motor",
      "11000 RPM operating speed",
      "100mm (4 inch) disc capacity",
      "Spindle lock for easy disc replacement",
      "Ergonomic body design",
      "Made in India",
    ],
  },

  /* ================= DRILL MACHINE – QED10 ================= */
  {
    id: 203,
    category: "drill-machine",
    slug: "drill-machine-qed10",

    name: "DRILL MACHINE QED10",
    brand: "QUALITEX",
    price: 2899,

    shortDescription:
      "Compact 500W electric drill machine with 10mm keyed chuck for wood, metal, and plastic drilling applications",

    longDescription:
      "The QUALITEX QED10 Drill Machine is engineered for reliable drilling performance in wood, metal, and plastic materials. Equipped with a powerful 500W motor and durable 10mm keyed chuck, this machine delivers stable operation, strong bit grip, and efficient drilling performance for workshop, fabrication, maintenance, and household applications. Its ergonomic body design ensures comfortable handling and better control during extended operation, while the compact lightweight structure improves usability for precision drilling tasks.",

    images: {
      main: DrillMachine_A_Main,
      gallery: [
        DrillMachine_A_Main,
        DrillMachine_Box,
        // DrillMachine_A1,
        // DrillMachine_A2,
        // DrillMachine_A3,
      ],
      annotated: null,
    },

    specifications: {
      Voltage: "110V / 220V",
      Frequency: "50/60 Hz",
      Power: "500 W",
      Speed: "2600 RPM",
      Chuck_Size: "10 mm",
      Chuck_Type: "Keyed Chuck",
    },

    performance: {
      motor_Type: "Powerful copper motor",
      efficiency: "Stable drilling performance",
    },

    speedControl: {
      type: "Single speed",
      regulator: false,
    },

    drillingSystem: {
      chuck_Type: "10mm keyed chuck",
      secure_Bit_Grip: true,
    },

    coolingAndSafety: {
      cooling_Method: "Air ventilation cooling system",
      continuous_Operation: true,
    },

    usageApplications: [
      "Wood drilling",
      "Metal drilling",
      "Plastic drilling",
      "Workshop applications",
      "Household maintenance work",
    ],

    aboutThisItem: [
      "Powerful 500W motor",
      "10mm keyed chuck for secure grip",
      "Ergonomic body design",
      "Compact lightweight structure",
    ],

    packageContents: [
      "1 × Drill Machine",
      "1 × Side Handle",
      "1 × Chuck Key",
      "1 × User Manual",
    ],

    packingInformation: {
      image: DrillMachine_Box,

      singlePieceBox: {
        quantity: "1 Unit",
      },

      masterCarton: {
        quantity: "10 Pcs",
      },
    },

    features: [
      "500W high-performance motor",
      "2600 RPM operating speed",
      "10mm keyed chuck system",
      "Comfortable ergonomic handling",
      "Suitable for wood, metal, and plastic",
      "Made in India",
    ],
  },

  /* ================= MARBLE CUTTER – QMC4SB ================= */
  {
    id: 204,
    category: "marble-cutter",
    slug: "marble-cutter-qmc4sb",

    name: "MARBLE CUTTER QMC4SB",
    brand: "QUALITEX",
    price: 5499,

    shortDescription:
      "Heavy-duty 1400W marble cutter with 110mm blade capacity for tile, granite, marble, and stone cutting applications",

    longDescription:
      "The QUALITEX QMC4SB Marble Cutter is engineered for powerful and precise cutting applications across marble, granite, tile, and stone surfaces. Equipped with a robust 1400W motor and high-speed 13000 RPM performance, this cutter delivers smooth operation and efficient heavy-duty cutting performance for professional construction and fabrication work. Its 110mm blade capacity and 30mm cutting depth ensure accurate cutting results, while the ergonomic handle design provides comfortable grip, improved control, and reduced operator fatigue during continuous operation. Built with a durable metal guard and stable base plate structure, the QMC4SB is ideal for industrial cutting environments requiring precision, durability, and reliability.",

    images: {
      main: MarbleCutter_A_Main,
      gallery: [
        MarbleCutter_A_Main,
        MarbleCutter_A2,
        MarbleCutter_A3,
        MarbleCutter_Box,
      ],
      annotated: null,
    },

    specifications: {
      Voltage: "110V / 220V",
      Frequency: "50/60 Hz",
      Power: "1400 W",
      Speed: "13000 RPM",
      Blade_Size: "110 mm",
      Cutting_Depth: "30 mm",
    },

    performance: {
      motor_Type: "Powerful 1400W motor",
      efficiency: "Heavy-duty cutting performance",
    },

    speedControl: {
      type: "Single speed",
      regulator: false,
    },

    cuttingSystem: {
      blade_Capacity: "110mm",
      cutting_Depth: "30mm",
    },

    coolingAndSafety: {
      cooling_Method: "Air ventilation cooling system",
      continuous_Operation: true,
    },

    usageApplications: [
      "Marble cutting",
      "Tile cutting",
      "Granite cutting",
      "Stone cutting",
      "Construction fabrication work",
    ],

    aboutThisItem: [
      "Powerful 1400W motor",
      "110mm blade cutting capacity",
      "High-speed 13000 RPM performance",
      "Comfortable ergonomic handle design",
    ],

    packageContents: [
      "1 × Marble Cutter",
      "1 × Cutting Blade",
      "1 × Wrench",
      "1 × User Manual",
    ],

    packingInformation: {
      image: MarbleCutter_Box,

      singlePieceBox: {
        quantity: "1 Unit",
      },

      masterCarton: {
        quantity: "4 Pcs",
      },
    },

    features: [
      "1400W heavy-duty motor",
      "13000 RPM high-speed operation",
      "110mm blade capacity",
      "30mm cutting depth",
      "Ergonomic comfortable grip",
      "Suitable for marble, tile, granite, and stone",
      "Made in India",
    ],
  },
];

export const PRODUCTS_BY_CATEGORY = {
  blower: PRODUCTS.filter((p) => p.category === "blower"),
  "paint-mixer": PRODUCTS.filter((p) => p.category === "paint-mixer"),
  "heat-gun": PRODUCTS.filter((p) => p.category === "heat-gun"),
  "angle-grinder": PRODUCTS.filter((p) => p.category === "angle-grinder"),
  "drill-machine": PRODUCTS.filter((p) => p.category === "drill-machine"),
  "marble-cutter": PRODUCTS.filter((p) => p.category === "marble-cutter"),
};
