---
layout: default
title: The Persistence of Color
author: Avery Schroeder
permalink: /persistencecolor/
---
{% assign colors = site.data.colors | sort: 'name'  %}
{% assign letters = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z' | split: ',' %}

<div class="glossary-button">
  <h1>The Persistence of Color</h1>
  <div><br>
      <p class="about">This color glossary provides English translations of French late eighteenth-century terms related to color. Words for color, like many aspects of a language, come in and out of fashion, and alter in meaning or use. In order to find the meanings of color words in use between 1797 and 1804, period dictionaries and textile handbooks or sample-books were consulted, as well as an English fashion magazine whose plate descriptions are bilingual, the <i>Miroir de la Mode</i>.</p><br>
  </div>

  <div>
    <p class="about">
      {% for letter in letters %}
        <a href="#{{ letter }}">{{ letter | upcase }}</a>{% unless forloop.last %}&nbsp;&nbsp;|&nbsp;&nbsp;{% endunless %}
      {% endfor %}
    </p>
  </div>

  <div class="cont-section"><br>
    {% for letter in letters %}
    <h2 class="letter" id="{{ letter }}">{{ letter | upcase }}</h2>
  	<table class="color-dic">
  		<tr>
  			<th class="row-1"></th>
  			<th class="row-2"></th>
  		</tr>
      {% for color in colors %}
        {% assign color_letter = color.name | slice: 0 | downcase %}
        {% if color_letter == letter %}
      		<tr>
      			<td class="colorimage"><img src="{{ site.baseurl }}/media/colorswatches/{{ color.file }}" alt="{{ color.name }}"></td>
      			<td class="colordesc"><b>{{ color.name }}</b><br>{{ color.description }}</td>
      		</tr>
        {% endif %}
      {% endfor %}
    </table>
    {% endfor %}
  </div>
</div>

<div style="display: none !important"><!--preload color info for search index-->
  Alzan(e) Amaranthe Argent Aureus Aurore Azuré Blanc Bleu Bleu Clair Bleu Céleste Bleu Turquin Bleu Violet Blond Doré Blond(e) Bronzer Brun/brunette Caerulus Carmin(e) Carnation Chamois Châtain Citrin(e) Coquelicot Cromoisy/Cramoisy Cumatilis Cyaneus Gris Gris Dauphin Gris de Lin Gros Bleu Incarnadin Jay/Jais blanc Jaûne-Doré Jonquille Lilas Lilas Clair Lilas Foncé Marmote Mordoré Murinus Nacarat Noir Or Ponceau Porcelaine Pourpre Pourpre Clair Rose/Rosé Rouge Ruby Clair Ruby Foncé Souci Tricolor Verd/vert Vermeille Vert Brun Vert Celadon Vert Gai Vert Pistache Vert Pomme Vert de Mer Vert d’Èmeraude Violet

  a sorrel or chestnut brown color deep bluish-red, a shade of red named after the amaranth plant silver or of silver color term used to describe gold color yellow color with light red tones a blue mineral; a blue color, commonly called (pendant le XVIII siecle) bleu céleste white blue; sky color light blue a saturated bright blue turquoise blue a violet which has strong blue undertones flaxen, light yellowish color fair or light honey color the color of cast copper or brass, sometime dark brown of a brown color cerulean blue, deep/sky/azure blue, green-ish blue a red color flesh color yellow of a chestnut color of a lemon color, or pale yellow bright red, with an orange tint Crimson or grain color water-colored blue cyan blue, a green-ish blue color the color which is more or less mixed with white and black light lilac grey a color that looks like flaxseed, linen gray is a soft hue deep, navy blue bright carnation yellow color jet white the color of an orange (the fruit) daffodil yellow pastel purple, like a lilac flower light pastel purple dark pastel purple a grape-colored purple; the color of marmote grapes orangey bronze an orange color/ but might be reddish light red, between cherry and rose of the color black metallurgic gold (Au); the color gold bright strong red or poppy red porcelain white, grey purple with crimson undertones (more red than modern “purple”; see violet); made from cochineal light purple with crimson undertones color of roses, pink, color of dry roses; a color which is red and vermilion a color similar to blood or fire, saturated and brilliant hue light ruby red dark ruby red yellow-orange an ensemble of colors, typically yellow, green and red green or green color a brilliant red or scarlet pigment; made from the powdered mineral, cinnabar brownish green, murky in hue celadon green cheerful green (similar to Kelly green), bright in hue pistachio green apple green sea green emerald green purple, of purple color (more blue,than pourpre)
</div>
