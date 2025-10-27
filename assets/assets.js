import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';

import linkedin from './linkedin-icon.png';
import docker from './docker.png';
import tailwindcss from './tailwindcss.png';
import github from './github-icon.png';
import postgresql from './postgreSQL-icon.png';
import linux from './linux.png';
import django from './django.png';
import nodeJs from './nodeJs.png';
import python from './pyython.png';
import react from './react.png';
import javascript from './javascript.png';
import c from './c.png';
import cpp from './c++.png';
import nextJs from './nextJs.png';
import soft_skill_icon from './soft_skill_icon.png';
import language_icon from './language_icon.png'
import css from './css3.png'
import html from './html5.png'



export const assets = {
    css,
    html,
    docker,
    github,
    linux,
    django,
    nodeJs,
    python,
    react,
    javascript,
    nextJs,
    c,
    cpp,
    postgresql,
    soft_skill_icon,
    language_icon,
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    vscode,
    tailwindcss,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    linkedin,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { 
    icon: assets.code_icon, 
    iconDark: assets.code_icon_dark, 
    title: 'Languages', 
    description: 'C, C++, JavaScript, React.js, Next.js, Python'
    },
    { 
        icon: assets.edu_icon, 
        iconDark: assets.edu_icon_dark, 
        title: 'Education', 
        description: 'Student at 1337 School (42 Network)'
    },
    { 
        icon: assets.project_icon, 
        iconDark: assets.project_icon_dark, 
        title: 'Projects', 
        description: 'Completed multiple C, C++, and Web Development projects'
    },
    { 
    icon: assets.soft_skill_icon, 
    iconDark: assets.soft_skill_icon_dark, 
    title: 'Soft Skills', 
    description: 'Teamwork, Problem-solving, Time management, Continuous learning'
  },
  { 
    icon: assets.language_icon, 
    iconDark: assets.language_icon_dark, 
    title: 'Languages', 
    description: 'English, French, Tamazight, Arabic, Chinese'
  }
];

export const toolsData = [
    assets.html, assets.css, assets.javascript, assets.python, assets.c, assets.cpp,
    assets.react, assets.nextJs, assets.tailwindcss, assets.django, assets.nodeJs,
    assets.git, assets.github, assets.docker, assets.linux, assets.postgresql,
    assets.figma
    ];


export const projectsData = [
    { 
        id: 1,
        bgImage: '/ft-transcendence.jpg',
        title: 'Ft_transcendence', 
        description: 'Real-Time Multiplayer Pong Game',
        techList: 'React.js, NestJS, TypeScript, WebSockets, PostgreSQL, Docker',
        content: 'A full-stack web application with user authentication, matchmaking, real-time Pong gameplay, chat system, and friend management features. Fully containerized using Docker.',
        url: 'https://github.com/kanhay/ft_transcendence'
    },
    { 
        id: 2,
        bgImage: '/minishell.jpg', 
        title: 'Minishell', 
        description: 'Unix Shell Implementation in C',
        techList: 'C, Unix system calls, process management',
        content: 'A mini shell built from scratch supporting command parsing, redirections, pipes, signals, environment variables, and built-in commands. Demonstrates strong understanding of low-level programming and OS concepts.',
        url: 'https://github.com/kanhay/minishell'
    },
    { 
        id: 3,
        bgImage: '/cub3d.jpg', 
        title: 'Cub3D', 
        description: '3D Raycasting Game Inspired by Wolfenstein 3D',
        techList: 'C, raycasting, MLX (MiniLibX), graphics programming',
        content: 'A 3D game engine using raycasting, with real-time rendering of a 2D map as a 3D world. Demonstrates graphics programming, game loop logic, and math for rendering.',
        url: 'https://github.com/kanhay/cub3D'
    },
    { 
        id: 4,
        bgImage: '/ft_irc.jpg', 
        title: 'ft_irc', 
        description: 'IRC Protocol Server Implementation',
        techList: 'C++, sockets, multithreading',
        content: 'A fully functional IRC server handling multiple clients, channels, and commands in accordance with RFC 1459. Demonstrates understanding of networking, concurrency, and protocol handling.',
        url: 'https://github.com/kanhay/ft_irc'
    },
    { 
        id: 5,
        bgImage: '/inception.jpg', 
        title: 'Inception', 
        description: 'Dockerized Web Infrastructure',
        techList: 'NGINX, WordPress, MariaDB, PHPMyAdmin, FTP, SSL',
        content: 'A fully containerized web infrastructure built with Docker, featuring services like WordPress, NGINX, and MariaDB. Each service runs in its own container, with custom Dockerfiles, secure TLS setup, and volume persistence.',
        url: 'https://github.com/kanhay/inception'
    },
    { 
        id: 6,
        bgImage: '/push-swap.jpg', 
        title: 'push_swap', 
        description: 'Stack-Based Sorting Algorithm Challenge',
        techList: 'C, custom algorithm design',
        content: 'A program that sorts a stack using a limited set of operations and another helper stack, with the goal of minimizing instructions. Shows algorithmic thinking and optimization.',
        url: 'https://github.com/kanhay/push_swap'
    },
];
