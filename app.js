var main = function(){

  var cities = ["Glasgow", "Leeds", "London", "Leicester", "Edinburgh", "Mancheseter", "Blackburn", "Bolton", "Aberdeen", "Dundee",
                "Ayr", "Aaron", "Newcastle", "Liverpool", "Bradford", "Bedford", "Portsmouth", "Naeem"];

  $('#search-city').autocomplete({source: cities}, function(){
  });

  // $('.ui-autocomplete').css('background-color', '#fff');


};

$(document).ready(main);
