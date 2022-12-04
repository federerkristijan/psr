// icons for home, about, events, team, media, partners, shop, about, contact, impressum, login
// credits to "https://www.flaticon.com/free-icons/event" Event icons created by Freepik - Flaticon and "https://iconscout.com/icons/impressum" WEBTECHOPS LLP
import HomeIcon from "../assets/icons/home_icon.png";
import ContactIcon from "../assets/icons/contact.png";
import EventIcon from "../assets/icons/event.png";
import MediaIcon from "../assets/icons/media.png";
import PartnersIcon from "../assets/icons/Partners.png";
import TeamIcon from "../assets/icons/team.png";
import ImpressumIcon from "../assets/icons/impressum.png";

const navData = [
  {
    id: 0,
    icon: <HomeIcon />,
    text: "Home",
    link: "/"
  },
  {
    id: 1,
    icon: <ContactIcon />,
    text: "Contact",
    link: "/contact"
  },
  {
    id: 2,
    icon: <EventIcon />,
    text: "Event",
    link: "/event"
  },
  {
    id: 3,
    icon: <MediaIcon />,
    text: "Media",
    link: "/media"
  },
  {
    id: 4,
    icon: <PartnersIcon />,
    text: "Partners",
    link: "/partners"
  },
  {
    id: 5,
    icon: <TeamIcon />,
    text: "Team",
    link: "/team"
  },
  {
    id: 6,
    icon: <ImpressumIcon />,
    text: "Impressum",
    link: "/impressum"
  },
]

export default navData
