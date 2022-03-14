import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import BadgeIcon from '@mui/icons-material/Badge';
import PaymentsIcon from '@mui/icons-material/Payments';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import SettingsIcon from '@mui/icons-material/Settings';
import ForumIcon from '@mui/icons-material/Forum';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

export const SidebarData = [
    {
        title: "MojSalon",
        icon: <HomeIcon />,
        link: "/#"
    },
    {
        title: "Zakazivanje",
        icon: <CalendarMonthIcon />,
        link: "/#"
    },
    {
        title: "Klijenti",
        icon: <PeopleIcon />,
        link: "/#"
    },
    {
        title: "Zaposleni",
        icon: <BadgeIcon />,
        link: "/#"
    },
    {
        title: "Cenovnik usluga",
        icon: <PaymentsIcon />,
        link: "/#"
    },
    {
        title: "Izvestavanje",
        icon: <DonutSmallIcon />,
        link: "/#"
    },
    {
        title: "Podesavanja",
        icon: <SettingsIcon />,
        link: "/#"
    },
    {
        title: "Tiketi",
        icon: <ForumIcon />,
        link: "/#"
    },
    {
        title: "Evidencija dolazaka",
        icon: <EventAvailableIcon />,
        link: "/#"
    },
]
