module.exports = {
  displayData: function(dataArray, section, sorted) {
    var stringArray = [];
    var numberArray = [];
    $('#' + section + ' > div > ul').empty();
    // Numbers and Strings sort differently,
    // so splitting them is a solution to make the // sorting method work.
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

    stringArray.forEach(function(element) {
      $('#' + section + ' > .strings > ul').append('<li>' + element + '</li>')
    })

    numberArray.forEach(function(element) {
      if (Number(element) === element && element % 1 !== 0) {
        $('#' + section + ' > .floats > ul').append('<li>' + element + '</li>')
      } else {
        $('#' + section + ' > .integers > ul').append('<li>' + element + '</li>')
      }
    })

    if (sorted) {
      return stringArray.concat(numberArray);
    } else {
      return workingArray
    }
  }
}
