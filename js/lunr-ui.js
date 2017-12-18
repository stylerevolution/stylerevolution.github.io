$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = index.search(query, {expand: true});
    resultdiv.empty();
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = '<div class="search-result"><b><a href="' + store[ref].link + '" class="result-title">' + store[ref].title + '</a></b></div><br>';
      resultdiv.append(searchitem);
    }
  });
});
