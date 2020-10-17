class Schedule {
    constructor(technique, repertoire, improv, fracTeqhnique, fracRep, fracImp, time) {

        //Each of technique, repertoire and improv are lists of songs/exercises/things you want to work on, but can't decide on what you want to do today!
        this.technique = technique[Math.floor(Math.random()*technique.length)];
        this.repertoire = repertoire[Math.floor(Math.random()*repertoire.length)];
        this.improv = improv[Math.floor(Math.random()*improv.length)];
        this.fracTeqhnique = fracTeqhnique;
        this.fracRep = fracRep;
        this.fracImp = fracImp;
        this.time = time;
    }

    trivialSchedule() {
        $('#schedule').append(`<h3>Technique</h3>
                        <ul>
                            <li>${this.technique[0]} for 20 minutes</li>
                        </ul>
                        <h3>Repertoire</h3>
                        <ul>
                            <li>${this.repertoire[0]} for 20 minutes</li>
                        </ul>                      
                        <h3>Improv</h3>
                        <ul>
                            <li>${this.improv[0]} for 20 minutes</li>
                        </ul>`);

    }
}

console.log('setting listener on button');

let tech = [];
let rep = [];
let improv = []



$('#generateSchedule').click(() => {
    console.log('generating schedule');
    $('#generationForm').css({'display': 'None'});
    $('#poolOfEverything').css({'display': 'None'});
    let mySchedule = new Schedule(tech, rep, improv, 30, 30, 40, 1);
    mySchedule.trivialSchedule();
});


$('#addTech').click(() => {
    tech.push($('#tech').val());
    if ($('#tech').val() !== '') {
        $('#techList').append(`<li>${$('#tech').val()}</li>`);
    }
    $('#tech').val('');
});

$('#addRep').click(() => {
    rep.push($('#rep').val());
    if ($('#rep').val() !== '') {
        $('#repList').append(`<li>${$('#rep').val()}</li>`);
    }
    $('#rep').val('');
});

$('#addImprov').click(() => {
    improv.push($('#improv').val());
    if ($('#improv').val() !== '') {
        $('#impList').append(`<li>${$('#improv').val()}</li>`);
    }
    $('#improv').val('');
});






