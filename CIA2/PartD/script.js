const displayTable = document.getElementById("jsonTable");

const fetchData = () => {
    const data = fetch("dogs.json")
    data.then(res => res.json()).then(res => {
        res.forEach(element => {
            const row = document.createElement("tr");
            const colinfo= document.createElement("td");
            colinfo.innerHTML = `<b>Breed</b>: ${element.breed} <br> <b>Color</b>: ${element.color} <br> <b>Country</b>: ${element.country} <br> `;
            row.appendChild(colinfo);
            displayTable.appendChild(row);
        });
    })
    data.catch(err => console.log("Error Occured: ", err));
}

fetchData()