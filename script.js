document.getElementById('myButton').onclick = function() {
    alert('Click.');
};

const films = [
    { name: "The Fast and the Furious", year: 2001, rating: 5 },
    { name: "Scream", year: 1996, rating: 4 },
    { name: "Tommy Boy", year: 1995, rating: 5 }
];

const tbody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

films.forEach(film => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${film.name}</td><td>${film.year}</td><td>${film.rating}</td>`;
    tbody.appendChild(row);
});
