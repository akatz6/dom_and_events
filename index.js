const app = document.getElementById("app");
app.style.width = "80%";
app.style.margin = "0 auto";

const form = document.getElementsByTagName("form")[0];
form.style.width = "80%";
form.style.margin = "0 auto";

const arrSport = [
  {
    name: "Cubs",
    city: "Chicago",
    sport: "Baseball",
  },
  {
    name: "Bears",
    city: "Chicago",
    sport: "Football",
  },
  {
    name: "Bulls",
    city: "Chicago",
    sport: "Basketball",
  },
  {
    name: "Blackhawks",
    city: "Chicago",
    sport: "hockey",
  },
];

const table = document.createElement("table");
table.className = "table";
app.appendChild(table);

const thead = document.createElement("thead");
table.appendChild(thead);

const tr = document.createElement("tr");
thead.appendChild(tr);

const thName = document.createElement("th");
thName.innerHTML = "Name";
tr.appendChild(thName);

const thCity = document.createElement("th");
thCity.innerHTML = "City";
tr.appendChild(thCity);

const thSport = document.createElement("th");
thSport.innerHTML = "Sport";
tr.appendChild(thSport);

const tbody = document.createElement("tbody");
table.appendChild(tbody);

const display = () => {
  arrSport.forEach((element) => {
    const trBody = document.createElement("tr");
    tbody.appendChild(trBody);

    const tdName = document.createElement("td");
    tdName.innerHTML = element.name;
    trBody.appendChild(tdName);

    const tdCity = document.createElement("td");
    tdCity.innerHTML = element.city;
    trBody.appendChild(tdCity);

    const tdSport = document.createElement("td");
    tdSport.innerHTML = element.sport;
    trBody.appendChild(tdSport);
  });
};

const addToArray = (e) => {
  e.preventDefault();

  const sport = document.getElementById("sport").value;
  const city = document.getElementById("city").value;
  const team = document.getElementById("team").value;

  const obj = {
    name: team,
    city,
    sport,
  };
  arrSport.push(obj);
  for (let i = 1; i < table.rows.length; ) {
    table.deleteRow(i);
  }
  display();
};

const button = document.getElementById("button");
button.addEventListener("click", addToArray);
display();
