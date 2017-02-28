// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var $ = require('jquery');
var edlib = require('node-edlib');

$('#align-form').submit(function (event) {
  var query = $('#query').val();
  var target = $('#target').val();

  var result = edlib.align(query, target, { mode: 'NW' });

  $('#ed-value').text(result.editDistance);
  $('#loc-value').text(result.locations.map(function (location) {
    return "(" + location.start + ", " + location.end + ")";
  }).join(", "));
  var similarity = 1 - result.editDistance / Math.max(query.length, target.length);
  $('#similarity-value').text(Math.round(similarity * 100) + "%");
  return false;
});
