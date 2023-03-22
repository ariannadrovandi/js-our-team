/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare 
i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: name, 
ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di name, 
ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede
*/

const team = [ // array con dentro degli oggetti
    {
        name: 'Wayne',
        surname: 'Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela',
        surname: 'Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter',
        surname: 'Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela',
        surname: 'Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott',
        surname: 'Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara',
        surname: 'Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }

];
//console.log(team);

/*
`  
<div class="col">
    <div class="card">
        <div>
            <img class="card-img-top" src="img/${teamMate.image}" alt=" ${teamMate.name} ${teamMate.surname}">
        </div>
        <div class="card-body">
            <div><span>name:</span> ${teamMate.name}</div>
            <div><span>surname:</span> ${teamMate.surname}</div>
            <div><span>role:</span> ${teamMate.role}</div>
        </div>
    </div>
</div>
`
*/


// ciclo che mi stampa gli oggetti dentro l'array e le relative proprirole
for (let i = 0; i < team.length; i++){  
    console.log(team[i]);
    console.log('name:' + team[i].name);
    console.log('surname:' + team[i].surname);
    console.log('role:' + team[i].role);
};

// ciclo che mi stampa gli oggetti dentro la row
const row = document.querySelector('.row');
let rowHtml = '';
for (let i = 0; i < team.length; i++){  
   const teamMate = team[i];
   const tpl = `  
   <div class="col">
       <div class="card card-font ad-card my-2 mx-2 border-0 rounded-0">
           <div>
               <img class="card-img-top border-0 rounded-0" src="img/${teamMate.image}" alt=" ${teamMate.name} ${teamMate.surname} ${teamMate.role}">
           </div>
           <div class="card-body">
               <p class="text-center my-0 fs-5">${teamMate.name} ${teamMate.surname}</p>
               <p class="text-center my-0 fs-6">${teamMate.role}</p>
           </div>
       </div>
   </div>
   `;
   rowHtml += tpl;
};

console.log(rowHtml);
row.innerHTML = rowHtml;

