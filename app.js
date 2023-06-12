let tabStudents = [
    {prénom: "Fallou",nom: "Ndiaye",age: 20,Note: 14},

    {prénom: "Lamine", nom: "Diop", age: 18, Note: 16},

    {prénom: "Ahmed",nom: "Fall",age: 21,Note: 9},

    {prénom: "Fatou", nom: "Ba", age: 18, Note: 12},

    {prénom: "Mouhamed", nom: "barry", age: 17, Note: 10},

    {prénom: "Maguette", nom: "Diagne", age: 22, Note: 18.5},

    {prénom: "Seynabou", nom: "Ngom",age: 20,Note: 16.5},

    {prénom: "Talla", nom: "Fall", age: 19, Note: 14.5},

    {prénom: "Mame Diarra", nom: "Ndao", age: 22, Note: 19},

    {prénom: "Aly", nom: "Pouye", age: 23, Note: 16}
];


//Affichage du tableau
function listStudents(tabStudents){
    let contenu = '';
    tabStudents.forEach(element => {
        contenu+= `<div class="d-flex"/>
           <div class="col border-end border-top">${element.prénom}</div>
           <div class="col border-end border-top">${element.nom}</div>
           <div class="col border-end border-top">${element.age}</div>
           <div class="col  border-top">${element.Note}</div>
           </div>`
    });
    document.getElementById('students').innerHTML = contenu;
}
listStudents(tabStudents);


//Filtrage élément
document.getElementById('input_search').addEventListener('input', (e) => {
    const inputValue = e.target.value;
    const searchFilter = tabStudents.filter((student) => student.prénom.toLowerCase().includes(inputValue.toLowerCase()));
    listStudents(searchFilter);

    e.preventDefault();
})



//Détermination du Maximum et du Min
function maxMin(){
    const noteMax = Math.max(...tabStudents.map(o => o.Note));
    document.getElementById('noteMax').innerHTML = `La note maximale est : ${noteMax}`;

    const noteMin = Math.min(...tabStudents.map(o => o.Note));
    document.getElementById('noteMin').innerHTML = `La note minimale est : ${noteMin}`;

    const ageMax = Math.max(...tabStudents.map(o => o.age));
    document.getElementById('ageMax').innerHTML = `L'age maximal est : ${ageMax}`;

    const ageMin = Math.min(...tabStudents.map(o => o.age));
    document.getElementById('ageMin').innerHTML = `L'age minimal est : ${ageMin}`;
}
maxMin();

 




  


