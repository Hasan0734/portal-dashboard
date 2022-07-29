import { Server, Sunrise, Users, Clipboard, Calendar, Home, Settings } from 'react-feather';

export const sidebars = [
    {
        title: 'Team Manager',
        items: [
            { name: 'Dashboard', url: '/dashboard', icon: <Server  strokeWidth={2} size={18}/>},
            { name: 'Timbrature', url: '/timbrature', icon: <Sunrise  strokeWidth={2} size={18}/>},
            { name: 'Pianificazione turni', url: '/pianificazione-turni', icon: <Calendar  strokeWidth={2} size={18}/> },
            { name: 'Dipendenti', url: '/dependenti', icon: <Users  strokeWidth={2} size={18}/> },
            { name: 'Attivita', url: '/attvita', icon: <Clipboard  strokeWidth={2} size={18}/>},
        ]
    },
    {
        title: 'Sedi Operative',
        items: [
            { name: 'Sedi', url: '/sedi', icon: <Home strokeWidth={2} size={18}/> },

        ]
    },
    {
        title: 'Account',
        items: [
            { name: 'Impostazioni', url: '/impostazioni', icon: <Settings  strokeWidth={2} size={18}/> },

        ]
    },
]