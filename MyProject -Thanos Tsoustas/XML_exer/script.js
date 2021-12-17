document.getElementById("button1").addEventListener('click',loadCustomers)




function loadCustomers(event){

    const xhr = new XMLHttpRequest()

    xhr.open('get','https://api.github.com/users',true)


    xhr.onload = function(){
        if(this.status===200){
            console.log(this.responseText);
            
            const customers = JSON.parse(this.responseText)
            console.log(customers);
            let response = customers[Math.floor(Math.random()*customers.length)]
            
            
            document.getElementById('host').innerHTML = `<div class="card">
      <img src="./assests/2DhmtJ4.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src="${response['avatar_url']}" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">${response.login}</h3>
            <span class="card__status">${response.type} ID: ${response.id}</span>
          </div>          
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </div>
  `   
            // document.getElementById('host').
            
        }
    }
    xhr.send()
}