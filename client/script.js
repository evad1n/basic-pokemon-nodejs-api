axios.get("http://localhost:3000/pokemon")
    .then(function(response){
        console.log(response.status);
    
        document.querySelector(".paper").classList.add("loaded");
    
        let pokedata = response.data.pokemon;
    
        var table = document.createElement("table");
        table.classList.add("table-hover");
        table.style.margin = "auto";
        table.style.width = "50%";
        var thead = document.createElement("thead");
        var toprow = document.createElement("tr");
        var col1 = document.createElement("th");
        var col1t = document.createTextNode("ID#");
        col1.appendChild(col1t);
        toprow.appendChild(col1);
        var col2 = document.createElement("th");
        var col2t = document.createTextNode("Name");
        col2.appendChild(col2t);
        toprow.appendChild(col2);
        var col3 = document.createElement("th");
        var col3t = document.createTextNode("Type");
        col3.appendChild(col3t);
        toprow.appendChild(col3);
        thead.appendChild(toprow);
        table.appendChild(thead);
        var tbody = document.createElement("tbody");
        table.appendChild(tbody);
        document.body.appendChild(table);

        function doop(element, index, array){
            console.log(element);
        }

        var rows = {};
        //for each pokemon
        for(var i = 0; i < pokedata.length; i++){
            console.log("pokemon: " + i);
            rows[pokedata[i]] = document.createElement("tr")
            var col1 = document.createElement("td");
            var col1t = document.createTextNode(pokedata[i].id);
            col1.appendChild(col1t);
            rows[pokedata[i]].appendChild(col1);
            var col2 = document.createElement("td");
            var col2t = document.createTextNode(pokedata[i].name);
            col2.appendChild(col2t);
            rows[pokedata[i]].appendChild(col2);
            var col3 = document.createElement("td");
            var col3t = document.createTextNode(pokedata[i].type);
            col3.appendChild(col3t);
            rows[pokedata[i]].appendChild(col3);
            tbody.appendChild(rows[pokedata[i]]);
            table.appendChild(thead);
        }

  })
    .catch(function (error) {
        // handle error
        console.log(error);
        document.querySelector(".paper").classList.add("errored");
        var error = document.createElement("h2");
        var e = document.createTextNode("No Data Found");
        error.appendChild(e);
        document.body.appendChild(error);
  }); 
