---
layout: none
---
$(document).ready(function() {

  window.index = new elasticlunr.Index;

  index.saveDocument(false);
  index.setRef('lunr_id');
  index.addField('pid');
  index.addField('title');
  index.addField('author');
  index.addField('content');
  index.addField('_date');
  index.addField('caption');
  index.addField('translation');
  index.addField('keywords');

  function constructCustomResult(item){
    var link = item.link;
    var label = '';
    var thumb = '';
    var author = '';
    var meta = [];

    if (item.content) {
      label = item.title;
      author = '<b>Exhibit by ' + item.author + '</b><br>';
      meta.push(item.content.slice(0, 200).replace(/<(?:.|\n)*?>/gm, '').replace(/#|\*|_/gi) + '...');
    }

    if (item.collection == 'plates') {
      label = 'Plate #' + item.pid;
      thumb = '<img class="sq-thumb-sm search-thumb" src="{{ site.baseurl }}/iiif/plates/images/' + item.pid + '-1/full/250,/0/default.jpg"/>';

      if (item._date) { meta.push('<b>Date: </b>' + item._date); }
      // if (item.caption) { meta.push('<b>Caption: </b>' + item.caption); }
      // if (item.translation) { meta.push('<b>Translation: </b>' + item.translation); }
      if (item.keywords) { meta.push('<b>Keywords: </b>' + item.keywords); }
    }

    return '<div class="result"><a href="' + link + '">' + thumb + '<div><span class="item-label">' + label + '</span><br>' + author + meta.join('&nbsp;&nbsp;') + '</div></a></div>';
  }


  $.getJSON("{{ site.baseurl }}/js/lunr-index.json", function(store) {

    // add docs from json store to index
    for (i in store) {
      index.addDoc(store[i]);
    }

    $('input#search').on('keyup', function() {
      var results_div = $('#results');
      var query = $(this).val().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      var results = index.search(query, {
        boolean: 'AND',
        expand: true
      });
      results_div.empty();
      results_div.prepend("<p><small>Displaying " + results.length + " results.</small></p>");
      for (var r in results) {
        var ref = results[r].ref;
        var result = constructCustomResult(store[ref]);
        results_div.append(result);
      }
    });
  });
});
