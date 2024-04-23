function getUsu() {
    response = fetch("https://66279b8eb625bf088c08fd8e.mockapi.io/api/usuarios")
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log("error");
        });
}

getUsu();