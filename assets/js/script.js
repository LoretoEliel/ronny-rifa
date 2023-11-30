let celebrationElement = document.querySelector("#celebracion");
let rowsElement = document.querySelector("#rows");
let counterElement = document.querySelector("#contador");
let winnerElement = document.querySelector("#winner");

let participants = [
    {
        "index": 1,
        "manager": null,
        "buyer": null
    },
    {
        "index": 2,
        "manager": "Maria Linares",
        "buyer": "Francis"
    },
    {
        "index": 3,
        "manager": "Ronald Duran",
        "buyer": "Karen"
    },
    {
        "index": 4,
        "manager": "Eliel",
        "buyer": "Genny Coutinho"
    },
    {
        "index": 5,
        "manager": "Mario",
        "buyer": "Mario"
    },
    {
        "index": 6,
        "manager": "Maria Linares",
        "buyer": "Abril"
    },
    {
        "index": 7,
        "manager": "Ronald Duran",
        "buyer": "Karen"
    },
    {
        "index": 8,
        "manager": "Eliel",
        "buyer": "Yendy"
    },
    {
        "index": 9,
        "manager": "Ronny",
        "buyer": "Oriana"
    },
    {
        "index": 10,
        "manager": "Ronny",
        "buyer": "Gulli"
    },
    {
        "index": 11,
        "manager": "Maria Linares",
        "buyer": "Yeli"
    },
    {
        "index": 12,
        "manager": "Ronny",
        "buyer": "Karina"
    },
    {
        "index": 13,
        "manager": "Eliel",
        "buyer": "José Hernandez"
    },
    {
        "index": 14,
        "manager": null,
        "buyer": null
    },
    {
        "index": 15,
        "manager": "Eliel",
        "buyer": "Jahdiel Loreto"
    },
    {
        "index": 16,
        "manager": "Maria Linares",
        "buyer": "Emily"
    },
    {
        "index": 17,
        "manager": "Rosene",
        "buyer": "Maria Romandini"
    },
    {
        "index": 18,
        "manager": "Eliel",
        "buyer": "Genny Coutinho"
    },
    {
        "index": 19,
        "manager": "Maria Linares",
        "buyer": "Emily"
    },
    {
        "index": 20,
        "manager": "Ronny",
        "buyer": "Gulli"
    },
    {
        "index": 21,
        "manager": "Cesar",
        "buyer": "Gladys"
    },
    {
        "index": 22,
        "manager": "Ronny",
        "buyer": "Karina"
    },
    {
        "index": 23,
        "manager": "Eliel",
        "buyer": "Yendy"
    },
    {
        "index": 24,
        "manager": "Mario",
        "buyer": "Mario"
    },
    {
        "index": 25,
        "manager": "Eliel",
        "buyer": "Daniela"
    },
    {
        "index": 26,
        "manager": "Cesar",
        "buyer": "Santiago"
    },
    {
        "index": 27,
        "manager": "Cesar",
        "buyer": "Gladys"
    },
    {
        "index": 28,
        "manager": "Rosene",
        "buyer": "Andres Cadiño"
    },
    {
        "index": 29,
        "manager": "Ronny",
        "buyer": "Tia"
    },
    {
        "index": 30,
        "manager": "Ronny",
        "buyer": "Gulli"
    },
    {
        "index": 31,
        "manager": "Ronny",
        "buyer": "Tia"
    },
    {
        "index": 32,
        "manager": null,
        "buyer": null
    },
    {
        "index": 33,
        "manager": "Ronny",
        "buyer": "Martina"
    },
    {
        "index": 34,
        "manager": null,
        "buyer": null
    },
    {
        "index": 35,
        "manager": "Eliel",
        "buyer": "Javier Blanco"
    },
    {
        "index": 36,
        "manager": "Cesar",
        "buyer": "Gladys"
    },
    {
        "index": 37,
        "manager": "Maria Linares",
        "buyer": "Maria Linares"
    },
    {
        "index": 38,
        "manager": "Maria Linares",
        "buyer": "Maria Linares"
    },
    {
        "index": 39,
        "manager": "Eliel",
        "buyer": "Manuel Mejias"
    },
    {
        "index": 40,
        "manager": "Ronny",
        "buyer": "Gulli"
    },
    {
        "index": 41,
        "manager": null,
        "buyer": null
    },
    {
        "index": 42,
        "manager": "Ronny",
        "buyer": "Lilibeth Mendoza"
    },
    {
        "index": 43,
        "manager": null,
        "buyer": null
    },
    {
        "index": 44,
        "manager": null,
        "buyer": null
    },
    {
        "index": 45,
        "manager": "Ronny",
        "buyer": "David"
    },
    {
        "index": 46,
        "manager": "Maria Linares",
        "buyer": "Maigualida"
    },
    {
        "index": 47,
        "manager": "Victoria",
        "buyer": "Norelys Torres"
    },
    {
        "index": 48,
        "manager": "Rosene",
        "buyer": "Hilda campos"
    },
    {
        "index": 49,
        "manager": null,
        "buyer": null
    },
    {
        "index": 50,
        "manager": "Ronny",
        "buyer": "Gulli"
    },
    {
        "index": 51,
        "manager": "Victoria",
        "buyer": "Ema Hernández"
    },
    {
        "index": 52,
        "manager": "Ronny",
        "buyer": "Karina"
    },
    {
        "index": 53,
        "manager": "Maria Linares",
        "buyer": "Yulitza"
    },
    {
        "index": 54,
        "manager": null,
        "buyer": null
    },
    {
        "index": 55,
        "manager": "Maria Linares",
        "buyer": "Yeli"
    },
    {
        "index": 56,
        "manager": "Rosene",
        "buyer": "Sandra"
    },
    {
        "index": 57,
        "manager": null,
        "buyer": null
    },
    {
        "index": 58,
        "manager": "Rosene",
        "buyer": "Dilcia Alejo"
    },
    {
        "index": 59,
        "manager": "Maria Linares",
        "buyer": "Yule"
    },
    {
        "index": 60,
        "manager": "Maria Linares",
        "buyer": "Francisbel"
    },
    {
        "index": 61,
        "manager": "Maria Linares",
        "buyer": "Emily"
    },
    {
        "index": 62,
        "manager": "Maria Linares",
        "buyer": "Emily"
    },
    {
        "index": 63,
        "manager": null,
        "buyer": null
    },
    {
        "index": 64,
        "manager": "Dr. Darianny",
        "buyer": "Dr. Darianny"
    },
    {
        "index": 65,
        "manager": null,
        "buyer": null
    },
    {
        "index": 66,
        "manager": "Cesar",
        "buyer": "Cesar"
    },
    {
        "index": 67,
        "manager": null,
        "buyer": null
    },
    {
        "index": 68,
        "manager": null,
        "buyer": null
    },
    {
        "index": 69,
        "manager": "Eliel",
        "buyer": "Frainzuanklin"
    },
    {
        "index": 70,
        "manager": "Ronny",
        "buyer": "Martina"
    },
    {
        "index": 71,
        "manager": "Ronny",
        "buyer": "Andres Zoto"
    },
    {
        "index": 72,
        "manager": "Ronny",
        "buyer": "Andres Zoto"
    },
    {
        "index": 73,
        "manager": "Ronny",
        "buyer": "Andres Zoto"
    },
    {
        "index": 74,
        "manager": "Ronny",
        "buyer": "Andres Zoto"
    },
    {
        "index": 75,
        "manager": "Ronny",
        "buyer": "Andres Zoto"
    },
    {
        "index": 76,
        "manager": null,
        "buyer": null
    },
    {
        "index": 77,
        "manager": "Maria Linares",
        "buyer": "Francisbel"
    },
    {
        "index": 78,
        "manager": "Ronny",
        "buyer": "Lilibeth Mendoza"
    },
    {
        "index": 79,
        "manager": "Maria Linares",
        "buyer": "Mirla"
    },
    {
        "index": 80,
        "manager": "Ronny",
        "buyer": "Dionisia"
    },
    {
        "index": 81,
        "manager": null,
        "buyer": null
    },
    {
        "index": 82,
        "manager": null,
        "buyer": null
    },
    {
        "index": 83,
        "manager": null,
        "buyer": null
    },
    {
        "index": 84,
        "manager": "Ronny",
        "buyer": "Karina"
    },
    {
        "index": 85,
        "manager": null,
        "buyer": null
    },
    {
        "index": 86,
        "manager": null,
        "buyer": null
    },
    {
        "index": 87,
        "manager": null,
        "buyer": null
    },
    {
        "index": 88,
        "manager": "Eliel",
        "buyer": "Javier Blanco"
    },
    {
        "index": 89,
        "manager": "Maholys",
        "buyer": "Maholys"
    },
    {
        "index": 90,
        "manager": "Ronny",
        "buyer": "Oriana"
    },
    {
        "index": 91,
        "manager": null,
        "buyer": null
    },
    {
        "index": 92,
        "manager": null,
        "buyer": null
    },
    {
        "index": 93,
        "manager": null,
        "buyer": null
    },
    {
        "index": 94,
        "manager": null,
        "buyer": null
    },
    {
        "index": 95,
        "manager": "Ronny",
        "buyer": "Lilibeth Mendoza"
    },
    {
        "index": 96,
        "manager": "Ronny",
        "buyer": "David"
    },
    {
        "index": 97,
        "manager": null,
        "buyer": null
    },
    {
        "index": 98,
        "manager": "Eliel",
        "buyer": "José Hernandez"
    },
    {
        "index": 99,
        "manager": "Cesar",
        "buyer": "Cesar"
    },
    {
        "index": 100,
        "manager": "Ronny",
        "buyer": "Karina"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    counterElement.innerHTML = "0";

    let html = `
        <tr>
            <th scope="row">{{index}}</th>
            <td>{{manager}}</td>
            <td>{{buyer}}</td>
        </tr>
    `;

    let count = 0;
    for (let participant of participants) {
        rowsElement.innerHTML += html.replace("{{index}}", participant.index).replace("{{manager}}", participant.manager ?? '---').replace("{{buyer}}", participant.buyer ?? '---');

        if (participant.manager && participant.buyer) {
            count++;
        }
    }

    counterElement.innerHTML = count;
});

const runRulet = () => {
    if (celebrationElement) {
        celebrationElement.classList.remove("no-display");
    }

    let count = 0;
    let r = 0;

    let id = setInterval(() => {
        let newArray = participants.filter((item) => item.manager != null && item.buyer != null);
        r = Math.floor(Math.random() * newArray.length);
        r = r === 0 ? newArray.length : r;
        winnerElement.innerHTML = ``;
        winnerElement.innerHTML = `${newArray[r - 1].index}`;

        count++;
        if (count === 100) {
            clearInterval(id);
            next = true;
            winner(newArray);
        }
    }, 100);
};

const winner = (array) => {
    let r = Math.floor(Math.random() * array.length);
    r = r === 0 ? array.length : r;
    winnerElement.innerHTML = ``;
    winnerElement.innerHTML = `${array[r - 1].index}<br><span style="color: #444; font-weight: 400; font-size: 2rem; text-align: center; line-height: .85;">${array[r - 1].manager} - ${array[r - 1].buyer}<span>`;
    celebrationElement.classList.add("confeti");
}