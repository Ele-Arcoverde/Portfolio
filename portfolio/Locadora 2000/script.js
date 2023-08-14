function validationForm( ) {
    let validationCod = document.forms ["register"] ["cod"].value;
    let validationTitle = document.forms ["register"] ["title"].value;
    let validationDirector = document.forms ["register"] ["director"].value;
    let validationActor = document.forms ["register"] ["actor"].value;
    let validationDate = document.forms ["register"] ["date"].value;
    let validationRadio = document.forms ["register"] ["radio"].value;
    let validationNotes = document.forms ["register"] ["notes"].value;

if(validationCod == "") { alert("O Código dever ser preenchido"); return false;
}
if(validationTitle == "") { alert("O Título dever ser preenchido"); return false;
}
if(validationDirector == "") { alert("O nome do Diretor dever ser preenchido"); return false;
}
if(validationActor == "") { alert("O nome do Ator/Atriz dever ser preenchido"); return false;
}
if(validationDate == "") { alert("A Data dever ser preenchida"); return false;
}
if(validationRadio == "") { alert("O Gênero dever ser preenchido"); return false;
}
if(validationNotes == "") { alert("A Nota dever ser preenchido"); return false;
}
alert ("A validação ocorreu de forma correta");
}


function insert () {
  let cod = document.forms["register"]["cod"].value;
  let title = document.forms["register"]["title"].value;
  let director = document.forms["register"]["director"].value;
  let actor = document.forms["register"]["actor"].value;
  let date = document.forms["register"]["date"].value;
  let radio = document.forms["register"]["radio"].value;
  let notes = document.forms["register"]["notes"].value;

  let insert = window.document.getElementById("insertRow");

  insert.innerHTML = `
  <th scope="row">${cod}</th>
  <td>${title}</td>
  <td>${director}</td>
  <td>${actor}</td>
  <td>${date}</td>
  <td>${radio}</td>
  <td>${notes}</td>   `;
}