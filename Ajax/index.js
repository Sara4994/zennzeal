function handleClick(param, id) {
    console.log('log')
    const xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", `https://jsonplaceholder.typicode.com/users/${id}`, true );
    xhttp.send();
    xhttp.onload = function() {
        if(this.status === 200) {
            param.parentElement.remove()
        }
    }
    
    
}
function getData() {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhttp.onload = function(){
        if(this.status ===  200) {
            var list = document.getElementById('display');
            var data =  JSON.parse(this.responseText);
            var str = ""
                data.map((user, index) => {
                    str +=  `
                    <li class="list-group-item">
                                <h5 class="card-title">${user.name}</h5>
                                <p class="card-text">${user.phone}</p>
                                <p class="card-text">${user.email}</p>
                                <p class="card-text">${user.website}</p>
                                <a href="#" class="btn btn-primary" onclick="handleClick(this,'${user.id}')">Go somewhere</a>
                        </li>
                    `;
                })
                
            }
            list.innerHTML = `<ul class="list-group">
                        ${str}
                    </ul>`;
        }
    xhttp.send();
}