console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on('click', addJoke)
    getJokes();

}
function addJoke() {
    console.log('Added joke');
    
    const sendJokes = {
        whoseJoke: $('#whoseJokeIn').val(),
        jokeQuestion: $('#questionIn').val(),
        punchLine: $('#punchlineIn').val()
    }
    console.log(sendJokes);
    
    $.ajax({
        method: 'POST',
        url: '/jokes',
        data: sendJokes
    })
    .then(function(response) {
        console.log(response);
        getJokes();
    })
}

function renderJokes(jokes) {
    // append to dom!
    $('#outputDiv').empty();
    //append each one...
    for(let joke of jokes) {
        $('#outputDiv').append(`
            <ul>${joke.whoseJoke}</ul>
            <ul>${joke.jokeQuestion}</ul>
            <ul>${joke.punchLine}</ul>
            `)
    }

function getJokes() {
    console.log(getJokes)
        $.ajax({
        method: 'GET',
        url: '/jokes'
        })
        .then(function(response) {
        //for sure server has responded,
        console.log(response);
        renderJokes(response);
        });
    }
}