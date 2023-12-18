let celebrationElement = document.querySelector("#celebracion");
let rowsElement = document.querySelector("#rows");
let counterElement = document.querySelector("#contador");
let winnerElement = document.querySelector("#winner");

let participants = [
    {
        "index": 1,
        "buyer": "Yarisma"
    },
    {
        "index": 2,
        "buyer": "Yendy"
    },
    {
        "index": 3,
        "buyer": "Yuliana"
    },
    {
        "index": 4,
        "buyer": "Yuliana"
    },
    {
        "index": 5,
        "buyer": "Yuliana"
    },
    {
        "index": 6,
        "buyer": "Yendy"
    },
    {
        "index": 7,
        "buyer": "Licda. Jenifer"
    },
    {
        "index": 8,
        "buyer": "Tibisai Malenche"
    },
    {
        "index": 9,
        "buyer": "Iliana"
    },
    {
        "index": 10,
        "buyer": "Carmen"
    },
    {
        "index": 11,
        "buyer": "Yerelis"
    },
    {
        "index": 12,
        "buyer": "Yendy"
    },
    {
        "index": 13,
        "buyer": "Yendy"
    },
    {
        "index": 14,
        "buyer": "Oscairin"
    },
    {
        "index": 15,
        "buyer": "Rosmary"
    },
    {
        "index": 16,
        "buyer": "Ivis"
    },
    {
        "index": 17,
        "buyer": "Luz Marina"
    },
    {
        "index": 18,
        "buyer": "Yuliana"
    },
    {
        "index": 19,
        "buyer": "Yendy"
    },
    {
        "index": 20,
        "buyer": "Genny Coutinho"
    },
    {
        "index": 21,
        "buyer": "Migdalys"
    },
    {
        "index": 22,
        "buyer": "Aranza"
    },
    {
        "index": 23,
        "buyer": "Diana Sangrona"
    },
    {
        "index": 24,
        "buyer": "Rosmary"
    },
    {
        "index": 25,
        "buyer": "Andry"
    },
    {
        "index": 26,
        "buyer": "Luisaura"
    },
    {
        "index": 27,
        "buyer": "Marlene"
    },
    {
        "index": 28,
        "buyer": "Alvismary"
    },
    {
        "index": 29,
        "buyer": "Yarisma"
    },
    {
        "index": 30,
        "buyer": "Genny Coutinho"
    },
    {
        "index": 31,
        "buyer": "Ida"
    },
    {
        "index": 32,
        "buyer": "Elianyelis"
    },
    {
        "index": 33,
        "buyer": "Iliana"
    },
    {
        "index": 34,
        "buyer": "Tibisai"
    },
    {
        "index": 35,
        "buyer": "Milagros"
    },
    {
        "index": 36,
        "buyer": "Alvismary"
    },
    {
        "index": 37,
        "buyer": "Jackeline"
    },
    {
        "index": 38,
        "buyer": "Yuliana"
    },
    {
        "index": 39,
        "buyer": "Genny Coutinho"
    },
    {
        "index": 40,
        "buyer": "Genny Coutinho"
    },
    {
        "index": 41,
        "buyer": "Yarelis"
    },
    {
        "index": 42,
        "buyer": "Genny Coutinho"
    },
    {
        "index": 43,
        "buyer": "Yenire"
    },
    {
        "index": 44,
        "buyer": "Eliel"
    },
    {
        "index": 45,
        "buyer": "Moraima"
    },
    {
        "index": 46,
        "buyer": "Eliel"
    },
    {
        "index": 47,
        "buyer": "Cuchi"
    },
    {
        "index": 48,
        "buyer": "Yenire"
    },
    {
        "index": 49,
        "buyer": "Jenifer"
    },
    {
        "index": 50,
        "buyer": "Eliel"
    },
];

document.addEventListener("DOMContentLoaded", () => {
    counterElement.innerHTML = "0";

    let html = `
        <tr>
            <th scope="row">{{index}}</th>
            <td>{{buyer}}</td>
        </tr>
    `;

    let count = 0;
    for (let participant of participants) {
        rowsElement.innerHTML += html.replace("{{index}}", participant.index).replace("{{buyer}}", participant.buyer ?? '---');

        if (participant.buyer) {
            count++;
        }
    }

    counterElement.innerHTML = count;
});

const runRulet = () => {
    if (celebrationElement) {
        celebrationElement.classList.remove("no-display");
        celebrationElement.classList.remove("confeti");
    }

    let count = 0;
    let r = 0;

    let id = setInterval(() => {
        let newArray = participants.filter((item) => item.buyer != null);
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
    winnerElement.innerHTML = `${array[r - 1].index}<br><span style="color: #444; font-weight: 400; font-size: 2rem; text-align: center; line-height: .85;">${array[r - 1].buyer}<span>`;

    if (celebrationElement) {
        celebrationElement.classList.add("confeti");
    }
}
