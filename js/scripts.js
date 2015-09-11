var wordReplacement = function(string, find, replace) {
  return string.replace(new RegExp(find, 'gi'), replace);
};

$(document).ready(function(){
  $('form#wordReplacement').submit(function(event){
    var string = $('input#string').val();
    var search = $('input#find').val();
    var replace = $('input#replace').val();

    var result = wordReplacement(string, find, replace);

    $('#result').text(result);
    event.preventDefault();
  });
