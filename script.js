document.getElementById('myButton').onclick = function() {
    alert('Click.');
};

const films = [
    { name: "The Fast and the Furious", director: "Rob Cohen", year: 2001, rating: 5 },
    { name: "Scream", director: "Wes Craven", year: 1996, rating: 4 },
    { name: "Tommy Boy", director: "Peter Segal", year: 1995, rating: 5 }
];

// fetch('https://localhost:8080/movies').then(response => films.concat(response.json()));

const tbody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

films.forEach(film => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${film.name}</td><td>${film.year}</td><td>${film.rating}</td>`;
    tbody.appendChild(row);
});
