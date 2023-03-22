/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare 
i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, 
ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, 
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
            <img class="card-img-top" src="img/${teamMate.image}" alt=" ${student.nome} ${student.cognome}">
        </div>
        <div class="card-body">
            <div><span>nome:</span> ${teamMate.name}</div>
            <div><span>cognome:</span> ${teamMate.surname}</div>
            <div><span>età:</span> ${teamMate.rolevcvcvcvcxvdx}</div>
        </div>
    </div>
</div>
`
*/


// ciclo che mi stampa gli oggetti dentro l'array e le relative proprietà
for (let i = 0; i < team.length; i++){  
    console.log(team[i]);
    console.log('name:' + team[i].name);
    console.log('surname:' + team[i].surname);
    console.log('role:' + team[i].role);
};


