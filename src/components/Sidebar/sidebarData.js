
import { activity, calendar, dashboard, home, settings, stamping, users } from './../../assets/svg/svg';

export const sidebars = [
    {
        title: 'Team Manager',
        items: [
            { name: 'Dashboard', url: '/dashboard', icon: dashboard},
            { name: 'Timbrature', url: '/timbrature', icon: stamping},
            { name: 'Pianificazione turni', url: '/pianificazione-turni', icon: calendar },
            { name: 'Dipendenti', url: '/dependenti', icon: users },
            { name: 'Attivita', url: '/attvita', icon: activity},
        ]
    },
    {
        title: 'Sedi Operative',
        items: [
            { name: 'Sedi', url: '/sedi', icon: home},

        ]
    },
    {
        title: 'Account',
        items: [
            { name: 'Impostazioni', url: '/impostazioni', icon: settings},

        ]
    },
]