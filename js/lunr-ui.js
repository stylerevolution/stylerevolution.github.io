---
layout: null
---

$(document).ready(function() {
  $('input#search').on('keyup', function() {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = index.search(query, { expand: true });
    resultdiv.empty();
    for (var item in result) {
      var ref = result[item].ref;
      var link = store[ref].link;
      var title = store[ref].title;
      var searchitem = '<div class="result"><b><a href="' + link + '" class="result-title">' + title + '</a></b><br></div>';
      resultdiv.append(searchitem);
    }
  });
});
