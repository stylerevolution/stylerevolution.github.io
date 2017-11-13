---
layout: page
iiif_image: cp_332_an_10_morgan
---


<style>
  td{padding-left:5px;}
  table{width:100% !important;border-collapse:collapse;}
  tr:nth-child(even){background-color: #f2f2f2}
</style>

<h1>Missing Images Table</h1>


{% include iiif_image.html %}
<br><br>
<table>
  <tr>
    <td><b>Plate</b></td>
    <td><b>Expects the File</b></td>
    <td><b>Image found?</b></td>
    <td><b>Student</b></td>
  </tr>
  {% for plate in site.data.plates %}
  <tr>
    <td>
      <a href="{{ site.baseurl }}/plates/{{ plate.plate }}">{{ plate.plate }}<br></a>
    </td>
    <td>
      {{ plate.iiif_image }}.jpg
    </td>
    <td>
      <a href="{{ site.baseurl }}/plates/{{ plate.plate }}">
        <img src="{{ site.baseurl }}/tiles/images/{{ plate.iiif_image }}-1/full/full/0/default.jpg" width="20"/>
      </a>
    </td>
    <td>
      {{ plate.student }}
    </td>
  </tr>
  {% endfor %}
</table>
