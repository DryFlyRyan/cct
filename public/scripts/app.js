// STATIC DATA ARRAY
var data = [4,6,'Hi',15.4432,'Noob',47,'Omaha',4.345,'Hike',12];

// DATA DISPLAY FUNCTIONS

// Display the sorted/unsorted array
function displayData(dataArray, section, sorted) {
  var workingArray = dataArray;
  $('#' + section + ' > div > ul').empty();
  if (sorted) {
    workingArray = dataArray.sort()
  }
  workingArray.forEach(function(element) {
    if (isNaN(element)) {
      $('#' + section + ' > .strings > ul').append('<li>' + element + '</li>')
    } else if (Number(element) === element && element % 1 !== 0) {
      $('#' + section + ' > .floats > ul').append('<li>' + element + '</li>')
    } else {
      $('#' + section + ' > .integers > ul').append('<li>' + element + '</li>')
    }
  })
  workingArray = [];
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
