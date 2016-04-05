// STATIC DATA ARRAY
var data = [4,6,'Hi',15.4432,'Noob',47,'Omaha',4.345,'Hike',12];

  // DATA DISPLAY FUNCTIONS
  // Display the sorted/unsorted array
  function appendStrings(section, stringArray) {
    stringArray.forEach(function(element) {
      $('#' + section + ' > .strings > ul').append('<li>' + element + '</li>')
    })
  }

  function appendNumbers(section, numberArray) {
    numberArray.forEach(function(element) {
      if (Number(element) === element && element % 1 !== 0) {
        $('#' + section + ' > .floats > ul').append('<li>' + element + '</li>')
      } else {
        $('#' + section + ' > .integers > ul').append('<li>' + element + '</li>')
      }
    })
  }

  function displayData(dataArray, section, sorted) {
    var stringArray = [];
    var numberArray = [];
    $('#' + section + ' > div > ul').empty();
    dataArray.forEach(function(element){
      if (isNaN(element)) {
        stringArray.push(element);
      } else {
        numberArray.push(element);
      }
    })
    if (sorted) {
      stringArray.sort();
      numberArray.sort(function(a,b) {
        return a - b;
      })
    }
    appendStrings(section, stringArray);
    appendNumbers(section, numberArray);
  }

  function displayArray(dataArray) {
    dataArray.forEach(function(element, index) {
      $('#data_set').append(element)
      if (index < dataArray.length-1) {
        $('#data_set').append(', ')
      }
    })
  }

$(document).ready(function() {
  displayArray(data)

  $('#unsortedButton').on('click', function(){
    displayData(data, 'unsort', false);
  })

  $('#sortedButton').on('click', function(){
    displayData(data, 'sort', true);
  })
})
