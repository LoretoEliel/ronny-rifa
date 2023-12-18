let celebrationElement = document.querySelector("#celebracion");
let rowsElement = document.querySelector("#rows");
let counterElement = document.querySelector("#contador");
let winnerElement = document.querySelector("#winner");

let participants = [
    {
        "index": 1,
        "buyer": null
    },
    {
        "index": 2,
        "buyer": null
    },
    {
        "index": 3,
        "buyer": null
    },
    {
        "index": 4,
        "buyer": null
    },
    {
        "index": 5,
        "buyer": null
    },
    {
        "index": 6,
        "buyer": null
    },
    {
        "index": 7,
        "buyer": null
    },
    {
        "index": 8,
        "buyer": null
    },
    {
        "index": 9,
        "buyer": null
    },
    {
        "index": 10,
        "buyer": null
    },
    {
        "index": 11,
        "buyer": null
    },
    {
        "index": 12,
        "buyer": null
    },
    {
        "index": 13,
        "buyer": null
    },
    {
        "index": 14,
        "buyer": null
    },
    {
        "index": 15,
        "buyer": null
    },
    {
        "index": 16,
        "buyer": null
    },
    {
        "index": 17,
        "buyer": null
    },
    {
        "index": 18,
        "buyer": null
    },
    {
        "index": 19,
        "buyer": null
    },
    {
        "index": 20,
        "buyer": null
    },
    {
        "index": 21,
        "buyer": null
    },
    {
        "index": 22,
        "buyer": null
    },
    {
        "index": 23,
        "buyer": null
    },
    {
        "index": 24,
        "buyer": null
    },
    {
        "index": 25,
        "buyer": null
    },
    {
        "index": 26,
        "buyer": null
    },
    {
        "index": 27,
        "buyer": null
    },
    {
        "index": 28,
        "buyer": null
    },
    {
        "index": 29,
        "buyer": null
    },
    {
        "index": 30,
        "buyer": null
    },
    {
        "index": 31,
        "buyer": null
    },
    {
        "index": 32,
        "buyer": null
    },
    {
        "index": 33,
        "buyer": null
    },
    {
        "index": 34,
        "buyer": null
    },
    {
        "index": 35,
        "buyer": null
    },
    {
        "index": 36,
        "buyer": null
    },
    {
        "index": 37,
        "buyer": null
    },
    {
        "index": 38,
        "buyer": null
    },
    {
        "index": 39,
        "buyer": null
    },
    {
        "index": 40,
        "buyer": null
    },
    {
        "index": 41,
        "buyer": null
    },
    {
        "index": 42,
        "buyer": null
    },
    {
        "index": 43,
        "buyer": null
    },
    {
        "index": 44,
        "buyer": null
    },
    {
        "index": 45,
        "buyer": null
    },
    {
        "index": 46,
        "buyer": null
    },
    {
        "index": 47,
        "buyer": null
    },
    {
        "index": 48,
        "buyer": null
    },
    {
        "index": 49,
        "buyer": null
    },
    {
        "index": 50,
        "buyer": null
    },
    {
        "index": 51,
        "buyer": null
    },
    {
        "index": 52,
        "buyer": null
    },
    {
        "index": 53,
        "buyer": null
    },
    {
        "index": 54,
        "buyer": null
    },
    {
        "index": 55,
        "buyer": null
    },
    {
        "index": 56,
        "buyer": null
    },
    {
        "index": 57,
        "buyer": null
    },
    {
        "index": 58,
        "buyer": null
    },
    {
        "index": 59,
        "buyer": null
    },
    {
        "index": 60,
        "buyer": null
    },
    {
        "index": 61,
        "buyer": null
    },
    {
        "index": 62,
        "buyer": null
    },
    {
        "index": 63,
        "buyer": null
    },
    {
        "index": 64,
        "buyer": null
    },
    {
        "index": 65,
        "buyer": null
    },
    {
        "index": 66,
        "buyer": null
    },
    {
        "index": 67,
        "buyer": null
    },
    {
        "index": 68,
        "buyer": null
    },
    {
        "index": 69,
        "buyer": null
    },
    {
        "index": 70,
        "buyer": null
    },
    {
        "index": 71,
        "buyer": null
    },
    {
        "index": 72,
        "buyer": null
    },
    {
        "index": 73,
        "buyer": null
    },
    {
        "index": 74,
        "buyer": null
    },
    {
        "index": 75,
        "buyer": null
    },
    {
        "index": 76,
        "buyer": null
    },
    {
        "index": 77,
        "buyer": null
    },
    {
        "index": 78,
        "buyer": null
    },
    {
        "index": 79,
        "buyer": null
    },
    {
        "index": 80,
        "buyer": null
    },
    {
        "index": 81,
        "buyer": null
    },
    {
        "index": 82,
        "buyer": null
    },
    {
        "index": 83,
        "buyer": null
    },
    {
        "index": 84,
        "buyer": null
    },
    {
        "index": 85,
        "buyer": null
    },
    {
        "index": 86,
        "buyer": null
    },
    {
        "index": 87,
        "buyer": null
    },
    {
        "index": 88,
        "buyer": null
    },
    {
        "index": 89,
        "buyer": null
    },
    {
        "index": 90,
        "buyer": null
    },
    {
        "index": 91,
        "buyer": null
    },
    {
        "index": 92,
        "buyer": null
    },
    {
        "index": 93,
        "buyer": null
    },
    {
        "index": 94,
        "buyer": null
    },
    {
        "index": 95,
        "buyer": null
    },
    {
        "index": 96,
        "buyer": null
    },
    {
        "index": 97,
        "buyer": null
    },
    {
        "index": 98,
        "buyer": null
    },
    {
        "index": 99,
        "buyer": null
    },
    {
        "index": 100,
        "buyer": null
    }
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

        if (participant.manager && participant.buyer) {
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
