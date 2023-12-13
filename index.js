const app = document.getElementById("app");
app.style.width = "80%";
app.style.margin = "0 auto";

const form = document.getElementsByTagName("form");
form[0].style.width = "80%";
form[0].style.margin = "0 auto";

const arrSports = [
  {
    team: "Cubs",
    city: "Chicago",
    sport: "Baseball",
  },
  {
    team: "Bears",
    city: "Chicago",
    sport: "Football",
  },
  {
    team: "Bulls",
    city: "Chicago",
    sport: "Basketball",
  },
  {
    team: "Blackhawks",
    city: "Chicago",
    sport: "Hockey",
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
thName.innerHTML = "Team Name";
tr.appendChild(thName);

const thCity = document.createElement("th");
thCity.innerHTML = "City";
tr.appendChild(thCity);

const thSport = document.createElement("th");
thSport.innerHTML = "Sport";
tr.appendChild(thSport);

const tbody = document.createElement("tbody");
table.appendChild(tbody);

const addToSportsArray = (e) => {
  e.preventDefault();
  const team = document.getElementById("team").value;
  const city = document.getElementById("city").value;
  const sport = document.getElementById("sport").value;

  obj = {
    team,
    city,
    sport,
  };
  arrSports.push(obj);
  for (var i = 1; i < table.rows.length; ) {
    table.deleteRow(i);
  }
  display();
};

const button = document.getElementById("submitButton");
button.addEventListener("click", addToSportsArray);

const display = () => {
  arrSports.forEach((element) => {
    const trBody = document.createElement("tr");
    tbody.appendChild(trBody);

    const tdName = document.createElement("td");
    tdName.innerHTML = element.team;
    trBody.appendChild(tdName);

    const tdCity = document.createElement("td");
    tdCity.innerHTML = element.city;
    trBody.appendChild(tdCity);

    const tdSport = document.createElement("td");
    tdSport.innerHTML = element.sport;
    trBody.appendChild(tdSport);
  });
};

display();
