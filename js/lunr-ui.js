---
layout: none
---
$.getJSON("{{ site.baseurl }}/js/lunr-index.json", function(index_json) {
    window.index = new elasticlunr.Index;
    window.store = index_json;
    index.saveDocument(false);
    index.setRef('lunr_id');
    index.addField('pid');
    index.addField('title');
    index.addField('student');
    index.addField('content');
    index.addField('_date');
    index.addField('caption');
    index.addField('translation');
    // add docs
    for (i in store) {
        index.addDoc(store[i]);
    }
    $('input#search').on('keyup', function() {
        var results_div = $('#results');
        var query = $(this).val().normalize('NFD').replace(/[\u0300-\u036f]/g, "");;
        var results = index.search(query, {
            boolean: 'AND',
            expand: true
        });
        results_div.empty();
        if (results.length > 10) {
            results_div.prepend("<p><small>Displaying 10 of " + results.length + " results.</small></p>");
        }
        for (var r in results.slice(0, 9)) {
            var ref = results[r].ref;
            var item = store[ref];
            var pid = item.pid;
            var title = item.title;
            var student = item.student;
            var content = item.content;
            var _date = item._date;
            var caption = item.caption;
            var translation = item.translation;
            var result = '<div class="result"><b><a href="' + item.link + '">' + title + '</a></b></p></div>';
            results_div.append(result);
        }
    });
});
