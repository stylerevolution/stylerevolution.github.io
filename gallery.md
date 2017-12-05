---
layout: default
title: Gallery
---

<body class="plates-button">
<ul class="gallery">

{% for item in site.plates %}

	<li class="thumbnail"><a href="{{site.baseurl}}{{item.url}}"><img src="{{site.baseurl}}/assets/thumbnails/{{item.plate}}.jpg" width="30%"><br>{{item.plate}}</a></li>


{% endfor %}

</ul>
</body>