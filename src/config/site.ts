/**
 * Edit everything about the landing page here.
 * Images live in src/assets — team-photo.jpg and logo.png.
 */
import teamPhoto from "../assets/team-photo.jpg";
import logo from "../assets/logo.png";

export const siteConfig = {
  PROJECT_NAME: "SubZero Sparks",
  PROJECT_TAGLINE: "Engineering Innovation for Extreme High-Altitude Environments",
  INTRO:
    "Our team develops innovative, adaptive solutions to enhance the reliability, safety, efficiency, and lifespan of electrical and electronic systems in extreme high-altitude environments. Our work integrates advanced thermal management, sustainable insulation, battery protection, radiation resilience, thermal-stress mitigation, and robust Sub-GHz communication technologies for the challenging conditions of Ladakh.",
  TEAM_PHOTO: teamPhoto,
  TEAM_PHOTO_ALT: "The SubZero Sparks team standing together outside the Dr. A. P. J. Abdul Kalam Block",
  LOGO: logo,
  TEAM_NAME: "SubZero Sparks",
  INSTITUTION_NAME: "Smart India Hackathon 2026",
  CONTACT_EMAIL: "ankitamandal.10h.2@gmail.com",
  subtopics: [
    {
      title: "Altitude-Adaptive Cooling System",
      description:
        "The Altitude-Adaptive Cooling System addresses the reduced cooling efficiency of electrical and electronic equipment operating in high- and super-high-altitude environments, where low air density, low pressure, and extreme temperatures limit conventional thermal management.\n\nThe proposed approach combines altitude-aware thermal management, optimized airflow, auxiliary hotspot cooling, and thermal energy recovery with intelligent control. The system dynamically adapts cooling operation to changing environmental and equipment conditions, aiming to maintain safe operating temperatures while improving energy efficiency, reliability, and equipment lifespan in harsh high-altitude environments.",
      url: "https://anandpiyushdwivedi2006-del.github.io/Alitute-coolingSubzeroSparks/",
    },
    {
      title: "Sustainable & High-Altitude Smart Material Engineering",
      description:
        "Sustainable and High-Altitude Smart Material Engineering addresses insulation failure, electrical arcing, extreme cold, and radiation exposure in electrical systems operating at high altitudes.\n\nIt proposes a sustainable, multilayer protection approach combining sheep-wool/textile insulation, self-healing arcing protection, radiation shielding, and fault-tolerant design to improve the reliability, efficiency and lifespan of high-altitude electronics.",
      url: "https://sub-zero-sparks-insulation-and-arci.vercel.app/",
    },
    {
      title: "Sub-GHz Self-Healing Auto-Routing Tactical Mesh Network",
      description:
        "The Sub-GHz Self-Healing Auto-Routing Tactical Mesh Network addresses the communication challenges of high-altitude Ladakh, where mountains, deep valleys, harsh weather, and infrastructure limitations can disrupt conventional wireless networks.\n\nThe proposed approach uses a Sub-GHz self-healing mesh network designed for non-line-of-sight communication. It combines long-range RF propagation, asymmetric communication channels, FPGA-based signal processing, and deterministic routing to maintain reliable links across difficult terrain. If a relay node fails or becomes unreachable, the network can automatically reroute data through an alternate node, allowing communication to continue without rebuilding the entire network.",
      url: "https://anandpiyushdwivedi2006-del.github.io/SUB-G-HZ-TACTICAL-MESH/",
    },
  ],
} as const;
