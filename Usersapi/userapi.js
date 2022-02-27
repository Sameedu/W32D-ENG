


fetch("https://621a1ba781d4074e85b99c12.mockapi.io/users")
    .then((data) => data.json())
    .then((userdata) => {
        userdata.forEach((user) => createuser(user))
            });

function createuser(user) {
    const pageelemnt = document.createElement("div");
    pageelemnt.setAttribute("class","outer");
    const{name, createdAt, avatar, id} = user;

    pageelemnt.innerHTML = `<img class="userpic" src=${avatar}"/>
        <div class="userdata"> 
            <p><span>Name:</span> ${name} </p>
            <p><span>Create Time:</span> ${createdAt} </p>
            <p><span>Id:</span> ${id} </p>
        </div>`
        document.body.append(pageelemnt);
}




