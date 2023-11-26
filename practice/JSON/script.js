const fetchButton = document.getElementById("readJson");
const displayTable = document.getElementById("jsonTable");

const fetchData = () => {
    const data = fetch("info.json")
    data.then(res => res.json()).then(res => {
        res.forEach(element => {
            const row = document.createElement("tr");
            const colName = document.createElement("td");
            colName.textContent = element.name;
            const colSalaray = document.createElement("td");
            colSalaray.textContent = element.salary;
            row.appendChild(colName);
            row.appendChild(colSalaray);
            displayTable.appendChild(row);
        });
    })
    data.catch(err => console.log("Error Occured: ", err));
}

fetchButton.addEventListener("click", fetchData)