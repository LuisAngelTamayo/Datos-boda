firebase.initializeApp({
    apiKey: "",
    authDomain: "bm",
    databaseURL: "hom",
    projectId: "",
    storageBucket: "bm",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
});
var db = firebase.firestore();

//lectura

var tabla = document.getElementById('tabla');
db.collection("confirmados").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().Pase}`);
        var cont = cont++;
        tabla.innerHTML += `
        <tr>
            <th scope="row">${doc.id}</th>
            <td>${doc.data().Nombre}</td>
            <td>${doc.data().Telefono}</td>
            <td>${doc.data().Pase}</td>
          </tr>`
    });

    var consulta = db.collection("confirmados");
    var query = consulta.where("Pase","==","2");
    console.log(query);
    
});