const TRABAJOS = [
    {
        clases: [
            {
                name: "Clase 01",
                url: "https://docs.google.com/presentation/d/1hcpUtD1nbhYDeQLzV3FAJAmE02qHbToz/edit?usp=sharing&ouid=117090337066293210322&rtpof=true&sd=true",
                type: "ppt",
            },
        ],
        tareas: [],
    },
    {
        clases: [
            {
                name: "Clase 02",
                url: "https://docs.google.com/presentation/d/1ZI0jMaRLcOf_ZQJk0jIA-iCqwIN77Kx_/edit?usp=sharing&ouid=117090337066293210322&rtpof=true&sd=true",
                type: "ppt",
            },
        ],
        tareas: [
            {
                name: "Exposición Semana 1",
                url: "https://docs.google.com/presentation/d/1y3hz-yYX-hG6mJh9VAX3d0EGCo-aEhrh/edit?usp=sharing&ouid=117090337066293210322&rtpof=true&sd=true",
                type: "word",
            },
            {
                name: "Exposición Semana 2",
                url: "https://docs.google.com/presentation/d/1UuZ0u6FsmbgbNigH5W22zBKJs-JQGnQB/edit?usp=sharing&ouid=117090337066293210322&rtpof=true&sd=true",
                type: "word",
            },
        ],
    },
    {
        clases: [
            {
                name: "Clase 03",
                url: "https://docs.google.com/presentation/d/1zRQ-8DunK-_zKy98hx3zSXnv6Ki3ogYa/edit?usp=sharing&ouid=109038644599731078290&rtpof=true&sd=true",
                type: "ppt",
            },
        ],
        tareas: [
            {
                name: "Ejercicios Lisp",
                url: "https://docs.google.com/document/d/1bE8syQ5h76pS8mcfSOzSjJgLxeawfxaa/edit?usp=sharing&ouid=109038644599731078290&rtpof=true&sd=true",
                type: "word",
            },
        ],
    },
    {
        clases: [
            {
                name: "Clase 04",
                url: "https://docs.google.com/presentation/d/15Ics5O39-1FwK3qqzJrEVWXOqd2bYY6I/edit?usp=sharing&ouid=109038644599731078290&rtpof=true&sd=true",
                type: "ppt",
            },
        ],
        tareas: [
            {
                name: "Ejercicios Lisp 2",
                url: "https://docs.google.com/document/d/1gr3JoJgAY1i7E4EN2pgIa5VRXAUd8Lnj/edit?usp=sharing&ouid=109038644599731078290&rtpof=true&sd=true",
                type: "word",
            },
        ],
    },
    {
        clases: [
            {
                name: "Clase 05",
                url: "https://docs.google.com/presentation/d/1UHoKzLNLnHidLZcE9Q3CXosyjvL-jV6i/edit?usp=sharing&ouid=109038644599731078290&rtpof=true&sd=true",
                type: "ppt",
            },
        ],
        tareas: [
            {
                name: "Ejercicios Lisp 3",
                url: "https://docs.google.com/document/d/16M8bM2FzjvrM3jP-5F1tWRa_P1cI3kYq/edit?usp=sharing&ouid=109038644599731078290&rtpof=true&sd=true",
                type: "word",
            },
        ],
    },
    {
        clases: [
            {
                name: "Clase 06",
                url: "https://docs.google.com/presentation/d/13NsKzVmnkhcq0gUENFTNjbLHg45MowEg/edit?usp=sharing&ouid=109038644599731078290&rtpof=true&sd=true",
                type: "ppt",
            },
        ],
        tareas: [],
    },
    {
        clases: [
            {
                name: "Clase 07",
                url: "https://docs.google.com/presentation/d/1Zee9IbaHH6nGNvxPWXRTmt9P5YeEheMv/edit?usp=sharing&ouid=109038644599731078290&rtpof=true&sd=true",
                type: "ppt",
            },
        ],
        tareas: [
            {
                name: "List Comprehension",
                url: "https://docs.google.com/presentation/d/1tBQrLIWvNJ8hHJPOO-3UsROJatL9VySK/edit?usp=sharing&ouid=109038644599731078290&rtpof=true&sd=true",
                type: "word",
            }
        ],
    },
    {
        clases: [],
        tareas: [],
    },
];

const SILABO = [
    {
        tema: "Clasificación de Problemas Algorítmicos",
        subtemas: [
            "Presentación del curso",
            "Clasificación de Problemas algorítmicos",
            "Problemas P y NP",
            "Problemas de decisión, localización y optimización.",
            "Descripción de algunos problemas NP-difícil.",
        ],
    },
    {
        tema: "Fundamentos de la Inteligencia Artificial",
        subtemas: [
            "Definición de la Inteligencia Artificial.",
            "Máquina Inteligente",
            "Diferencia entre Sistemas operacionales y Sistemas inteligentes",
            "Aplicaciones en la industria y servicios (robótica, planificación, gestión de desperdicios",
            "Test de Turing",
        ],
    },
    {
        tema: "Representación de problemas de juego Humano - Máquina como búsqueda en un espacio de estado",
        subtemas: [
            "Definición de Problemas de la IA como problemas de búsqueda en un espacio de estado.",
            "Representación de problemas de juegos Humano - Máquina",
        ],
    },
    {
        tema: "Métodos de búsqueda ciegos e informados",
        subtemas: [
            "La función evaluadora",
            "Métodos de búsqueda ciega o no informados: amplitud, profundidad y no determinísticos",
        ],
    },
    {
        tema: "Métodos de búsqueda ciegos e informados",
        subtemas: [
            "Métodos que usan información adicional: Primero el mejor, Ascenso a la colina, A*, ramificación y acotación",
        ],
    },
    {
        tema: "Métodos de búsqueda para juegos Humano - Máquina",
        subtemas: [
            "Algoritmo de juego Humano - Máquina",
            "Estrategia de juego de máquina: no determinístico, primero el mejor, min-max y alfa-beta",
        ],
    },
    {
        tema: "Presentación de trabajos computacionales",
        subtemas: [
            "Los alumnos mostrarán sus habilidades en cuanto al desarrollo de Software de juegos inteligentes basados en técnicas de búsqueda",
            "Se deberá presentar un informe y un software, y deberán exponer sus trabajos.",
        ],
    },
    {
        tema: "Examen parcial",
        subtemas: [],
    },
];
