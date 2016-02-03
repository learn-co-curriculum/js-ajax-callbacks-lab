function replaceNouns() {
    // Make Ajax request to get the nouns
    $.get('noun.html', function (data){

      // Split the nouns by the newlines
      var nouns = data.trim().split("\n");

      $('.noun').each(function(){
        // Use the random index to get a noun from the nouns array
        var random_index = Math.floor(Math.random() * nouns.length);

        // Use the random index to get a noun from the nouns array
        var rand_noun = nouns[random_index];

        // Replace the html of the noun span
        $(this).html(rand_noun);
      });
    }).fail(function (error){
      // If the request fails, tell the user
      alert('The request failed: ' + error.statusText);
    });
};

function replaceVerbs() {
  // Make Ajax request to get the verbs
  $.get('verb.html', function (data){

    // Split the verbs by the newlines
    var verbs = data.trim().split("\n");
    $('.verb').each(function(){
      // Use the random index to get a verb from the verbs array
      var random_index = Math.floor(Math.random() * verbs.length);

      // Use the random index to get a verb from the verbs array
      var rand_verb = verbs[random_index];

      // Replace the html of the verb span
      $(this).html(rand_verb);
    });
  }).fail(function (error){
    // If the request fails, tell the user
    alert('The request failed: ' + error.statusText);
  });
};

$(document).ready(function (){
  // Code here

  // Bind to the click event of the random noun button
  $('#random_noun').click(replaceNouns);

  // Bind to the click event of the random noun button
  $('#random_verb').click(replaceVerbs);
});
