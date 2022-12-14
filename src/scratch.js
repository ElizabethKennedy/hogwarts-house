function fetchHouses() {
    fetch(HOUSES_URL)
     .then(resp => resp.json())
     .then(json => renderHouses(json));
  }
  
  function renderHouses(houses) {
   houses1 = houses.shift()
    houses.forEach(house => {
      let div = document.createElement('div')
     div.classList.add('card');
     div.style.backgroundImage= `url(${house.image})`
     div.style.borderColor = "black"
     let p = document.createElement('p')
     p.innerHTML = house.name
     p.setAttribute('house-id' , house.id); 
     let table = document.createElement('table')
     table.classList.add("table-hover")
  
     houseUser = house.users  
     let headersArray = ["User", "Points Scored For House"]
    createHeader(table, 2, headersArray)
     for (user of houseUser) {
        let tr = document.createElement('tr')
         let th = document.createElement('th')
         th.scope= ('col')
         th.innerHTML = user.username
         let th2 = document.createElement('th')
         th2.scope= ('col')
         th2.innerHTML = "points"
         tr.appendChild(th)
         tr.appendChild(th2)
         let th3 = document.createElement('th')
         th3.scope= ('col')
         tr.appendChild(th3)
  
        table.appendChild(tr)
     }    
  
  
    div.appendChild(p)
     div.appendChild(table)
    left.appendChild(div)
    })
  }
  
  function createHeader(table, columns, array){
    let tr = document.createElement('tr')
    for (var i = 0; i < columns; i++){
        let th = document.createElement('th')
        th.scope= ('col')
        th.innerHTML = array[i]
        tr.appendChild(th)}
    table.appendChild(tr)
  }