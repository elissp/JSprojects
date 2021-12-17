document.getElementById('findUser').addEventListener("click", loadGitUser)

function loadGitUser(e) {

    const xhr = new XMLHttpRequest()

    xhr.open("GET", "https://api.github.com/users", true)

    xhr.onload = function () {
        if (this.status === 200) {

            const users = JSON.parse(this.responseText)

            // users.forEach(user => {
            //     let elements = 
            //     `<div class="row text-center text-white mb-5" id="original">
            //         <div class="col-md-2">
            //             <img class="rounded-circle" src="${user.avatar_url}" alt="">
            //         </div>
            //         <div class="col-md-2 ">
            //             <p class="pt-5">${user.id}</p>
            //         </div>
            //         <div class="col-md-2 ">
            //             <p class="pt-5">${user.login}</p>
            //         </div>
            //         <div class="col-md-2">
            //             <p class="pt-5">${user.type}</p>
            //         </div>
            //     </div>`
            //     $(".card").append(elements)


            // });

            let random = Math.floor(Math.random() * users.length-1)
            let elements = 
                `<div class="row text-center text-white mb-5" id="original">
                    <div class="col-md-2">
                        <img class="rounded-circle" src="${users[random].avatar_url}" alt="">
                    </div>
                    <div class="col-md-2 ">
                        <p class="pt-5">${users[random].id}</p>
                    </div>
                    <div class="col-md-2 ">
                        <p class="pt-5">${users[random].login}</p>
                    </div>
                    <div class="col-md-2">
                        <p class="pt-5">${users[random].type}</p>
                    </div>
                </div>`
                $(".card").append(elements)
            

        }
    }
    xhr.send()
}

