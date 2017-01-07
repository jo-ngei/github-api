var apiKey = "3c210d694d991afa5da1a887aca9b7f19d034e97";

function Repos(){

};

// Repos.prototype.getRepos = function(){
  $.get('https://api.github.com/users/jo-ngei?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
// };
// // exports.githubModule = information;

// var information = require('./../js/script.js').scriptModule;

// $(document).ready(function() {
//     $('#signup').submit(function(event) {
//      event.preventDefault();
//     var username = $('#username').val();
//     $('#username').val("");
//     var output = Repos()
//     // $('#displayInfo').text("The information you want is this " + response + ".");
//     });

//   });
