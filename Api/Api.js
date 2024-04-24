function getUsu() {
    fetch("https://66279b8eb625bf088c08fd8e.mockapi.io/api/reportes")
        .then(response => {
            if (!response.ok) {
                throw new Error('Error de API: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
}

getUsu();
