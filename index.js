console.log("hello");

const arr = [
  {
    team: "Cubs",
    city: "Chicago",
    sport: "Baseball",
  },
  {
    team: "Bulls",
    city: "Chicago",
    sport: "Basketball",
  },
  {
    team: "Bears",
    city: "Chicago",
    sport: "Football",
  },
  {
    team: "BlackHawks",
    city: "Chicago",
    sport: "Hockey",
  },
];

const table = document.createElement("table");
table.className = "table";
const thead = document.createElement("thead");
thead.className = "thead-dark";
const tr = document.createElement("tr");
const team = document.createElement("th");
team.innerHTML = "Team";
tr.appendChild(team);
const city = document.createElement("th");
city.innerHTML = "City";
tr.appendChild(city);
const sport = document.createElement("th");
sport.innerHTML = "Sport";
tr.appendChild(sport);
thead.appendChild(tr);
table.appendChild(thead);
document.getElementById("array").append(table);

const body = document.getElementsByTagName("body");
body[0].style.width = "80%";
body[0].style.margin = "0 auto";

const tbody = document.createElement("tbody");

const addToArray = (e) => {
  e.preventDefault();
  console.log("I am in add to array");
  const team = document.getElementById("team").value;
  const sport = document.getElementById("sport").value;
  const city = document.getElementById("city").value;
  const obj = {
    team,
    city,
    sport,
  };
  console.log(obj);
  arr.push(obj);
  for (var i = 1; i < table.rows.length; ) {
    table.deleteRow(i);
  }
  setArray();
};

const setArray = () => {
  arr.forEach((element) => {
    const trInfo = document.createElement("tr");
    const teamData = document.createElement("td");
    teamData.innerHTML = element.team;
    trInfo.appendChild(teamData);

    const cityData = document.createElement("td");
    cityData.innerHTML = element.city;
    trInfo.appendChild(cityData);

    const sportData = document.createElement("td");
    sportData.innerHTML = element.sport;
    trInfo.appendChild(sportData);

    tbody.appendChild(trInfo);
  });
};

setArray();
table.appendChild(tbody);

document.getElementById("button").addEventListener("click", addToArray);
