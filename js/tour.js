
const tabla = document.getElementById('idToures')

async function obtenerTour() {
    
     let data = await fetch('data/tour.json').then(resp => {
        return resp.json();
    }).then(data => {
        data.forEach(tour => {
            const row = document.createElement('tr')
            row.innerHTML +=  `<td>${tour.fecha}</td> <td>${tour.ciudad}</td>`;
            tabla.appendChild(row);
        })
    })

}

obtenerTour();