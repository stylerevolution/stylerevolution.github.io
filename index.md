---
layout: page
---
<table border="1">
  <tr>
    <td><b>Plate</b></td>
    <td><b>Expects the File</b></td>
    <td><b>Image Found?</b></td>
  </tr>
  {% for plate in site.data.plates %}
  <tr>
    <td>
      <a href="{{ site.baseurl }}/plates/{{ plate.plate }}">{{ plate.plate }}<br></a>
    </td>
    <td>
      {{ plate.file_name }}
    </td>
    <td>
      <img src="{{ site.baseurl }}/images/{{ plate.file_name }}" width="50"/>
    </td>
  </tr>
  {% endfor %}
</table>
