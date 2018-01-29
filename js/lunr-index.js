---
layout: null
---
  var index = new elasticlunr.Index;
index.setRef('lunr_id');
index.saveDocument(false);
index.pipeline.remove(elasticlunr.trimmer);
index.addField('title');
index.addField('student');
index.addField('_date');
index.addField('caption');
index.addField('translation');
index.addDoc({
  "lunr_id": 0,
  "link": "{{ site.baseurl }}/anticomania/",
  "title": "Anticomania",
  "student": "",
  "content": " Anticomania The love for all things antique or worldy The French revolution instituted an era characterized by a greater emphasis on individual rights. This focus on the individual ushered in an explosion of unique, new fashion styles for both men and women. Particularly fashionable, was ‘anticomania’- a reimagining of worldly and antique styles- particularly those of Greek, Roman, and far East origins. In this plate, we see the impact of both the turban style as well as a 'Lisbeth corset' so named after Mme. Saint-Aubin, an actress who played the part of Lisbeth in a Favières and Grétry comic opera. Minerva Bonnets "
});
index.addDoc({
  "lunr_id": 1,
  "link": "{{ site.baseurl }}/fashionvictims/",
  "title": "Fashion Victims",
  "student": "",
  "content": " Fashion Victims Victim's Belt Echos of the Terror manifested in fashion through the ceinture a la victime, or 'victim's belt.' A bright red sash was wrapped round the torso and shoulders- a macabre reminder of the violence and bloodshed which had so recently taken place. Coiffure à la Titus Contributing to this popularity of this unconventional hairstyle was the phenomenon of ‘guillotine romanticism.’ "
});
index.addDoc({
  "lunr_id": 2,
  "link": "{{ site.baseurl }}/glossary/",
  "title": "Glossary",
  "student": "",
  "content": " Glossary The Textile & Materials Glossary and The Persistence of Color Glossary provide English translations of French textile, material, and color terms from the captions and descriptions of Journal des dames et des mode plates. These glossaries are the first of their kind. They give public access to eighteenth and early nineteenth-century words whose meanings have often changed, or been forgotten. Together, they form a fashion vocabulary and rhetoric as historically specific verbally as the magazine’s plates are visually. Textiles &amp; MaterialsGlossary The Persistenceof Color "
});
index.addDoc({
  "lunr_id": 3,
  "link": "{{ site.baseurl }}/indianfabrics/",
  "title": "Indian Fabrics",
  "student": "",
  "content": " Indian Fabrics The fabrics for the most iconic women's clothes of this period came from India. Only in India, was there the technical ability to produce the finest cotton muslins, sometimes called 'mulls.' Cashmere shawls, came from Kashmir; where they were also the product of unrivaled textile techniques. "
});
index.addDoc({
  "lunr_id": 4,
  "link": "{{ site.baseurl }}/macroscope/",
  "title": "Macroscope of the *Journal des dames et des modes*",
  "student": "",
  "content": " # {{ page.title }} This study is based on 499 images of the *Journal des dames et des modes* provided by The Morgan Library and Museum. The images were cropped in Photoshop and resized by 702x1248 pixels. In the original plates you can notice that each figure is framed with a black rectangle and also has a brief text describing the scene. For this study, I decided to crop the frame and text because they do not add any relevant information when analyzing the visual aspect of the portrayed human figures or accessories. On the other hand, it is important to mention that the images of the original plates are photographs of different sizes and taken with different light quality. Some of the photographs are also a bit cropped and tilted. All of these factors influenced the visualizations created in ImageJ and ImagePlot. After croping and resizing all the images, a spreadsheet was created in Excel to add the metadata of each image. Subsequently, the edited images ready and the metadata were imported to ImageJ as an the image sequence. Using that software I created a Montage of 25 by 20 images of the *Journal des dames et des modes.* ![](/images/macroscope/image1.png) Image 1. Montage of 499 plates Even though the Montage seems quite uniform it is possible to distinguish some patterns of color, changes on space distribution. When all the *Journal des dames et des modes* plates from 1797 to 1804 can be seen together, overall patterns in their design became apparent: almost all plates represent single figures; women’s clothing far outnumbers men’s; hats, headpieces and hairstyles get special attention. The Montage starts with the first image of the collection of the year 1797 on the top left side of the screen and ends with the the plate 499 of the An 11 on the bottom right side. The images are arranged chronologically. The first images that appear on top, are from the year 1797 and share pastel colors with costumes with brighter accents. Many of the images from An 6 and some of the beginning of An 7 (rows 3 and 4 of the Montage) depict women in lighter garments. The rows 5 to 7 correspond to the plates of An 7 where we can observe the accent of accessories and textiles in red and purple. Also, during the An 7 we can appreciate the first plates that were published regarding fashion accessories (row 7). The presence of plates that are exclusively showing accessories continues through the years with 4 plates for the An 8, 7 plates for An 9, 4 plates for An 10 and 11 plates for An 11. In the last 5 rows of the Montage besides the high presence of accessory plates we can also notice the use of darker clothes such as green, gray and blue. To make the changes through time more evident an average density visualization for each years was created. ## Average Intensity of the Images Per Year Created in ImageJ ![](/images/macroscope/image2.png) Image 2. Average intensity plates of 1797 This visualization corresponds to the plates that form the first row of the Montage (Image 1). We can note that the plates of 1797 share a common use of the space and color. The action is centered in the upper middle part of the plate, but we can notice the trace of fans to both sides of the main figure. The following year the makers of the plates made greater use of the space (Image 3). We distinguish the contour of arms and bottom part of dresses and skirts that occupy the side parts of the plates. ![](/images/macroscope/image3.png) Image 3. Average intensity plates of 1798 In the following visualizations, Image 4 to Image 9, we observe that the figures appear more as a shadow with softer lines and colors. The use of the space follows a similar pattern as in the plates published during the years 1797 and 1798. However, the amount of plates created from An 6 to An 11 was much bigger. When superimposing the images, it translates in visualizations with subtle lines. Additionally, during that time period (An 7 to An 11), the *Journal des dames et des modes* started printing plates that exclusively featured accessories. Image 9 was created combining the plates of An 11. As mentioned before, that year was the one that counted with the most display of accessories. The change is also reflected in the use of the space that becomes a bit less centered. ![](/images/macroscope/image4.png) Image 4. Average intensity plates of An 6 ![](/images/macroscope/image5.png) Image 5. Average intensity plates of An 7 ![](/images/macroscope/image6.png) Image 6. Average intensity plates of An 8 ![](/images/macroscope/image7.png) Image 7. Average intensity plates of An 9 ![](/images/macroscope/image8.png) Image 8. Average intensity plates of An 10 ![](/images/macroscope/image9.png) Image 9. Average intensity plates of An 11 ## Visualization of the Collection of 499 Images Using ImagePlot Furthermore, to identify similarities and differences between the 499 plates on brightness and saturation dimensions I created a visualization using ImagePlot. In ImageJ, running the macro called ImageMeasure, I was able to obtain other information about the images such as median brightness, brightness stdev., saturation median, saturation stdev., hue median and hue stdev.. With that information an Excel document (.txt) was created and later used with ImagePlot macro. ![](/images/macroscope/image10.png) Image 10. ImagePlot visualization of 499 plates of the *Journal des dames et des modes* from 1797 to 1804 X-axis = brightness median. Y- axis= saturation median. The plates of the Journal des dames et des modes turn out to be quite consistent in their design, indicating a single, decisive editorial vision. This visualization (Image 10) creates a main rectangular cluster of images that have similar brightness and saturation. Most of the images are located in the lower right side of the space which means that they share a medium to high brightness value and a low to medium saturation. Many of the 499 images that are part of this representation share the same brightness and saturation values and appear to be superimposed over each other. The main cluster of images is not symmetrical and the bottom left side seem denser with a higher number of plates. From the 499 images used to create this visualization there is only one plate that is very different from the rest. It is a plate that was published during the An 8 and depicts a woman lying on a bed. The image has a low brightness median and a very high saturation. Moreover, it is possible to identify how different fashion styles or characters shared similar brightness and saturation values. To make this more evident the last two images of this project are a detailed view of the ImagePlot visualization of 499 plates of the *Journal des dames et des modes.* In Image 11, we can recognize how most of the the plates that represent male figures are closer in brightness and saturation values. Most of men are represented wearing darker clothes and stronger colors. Something similar happened with the plates of women accessories represented in Image 12. The group of images that depict accessories share a higher level of brightness than most of the plates. ![](/images/macroscope/image11.png) Image 11. Detail of image 10, plates that portrayed male figures. ![](/images/macroscope/image12.png) Image 12. Detail of image 10, plates that illustrate accessories. The result of the visualizations of the average intensity of the plates per year and the one analyzing the brightness and saturation show several similarities. Specifically, it is possible to talk about the existence of a distinctive style in the *Journal des dames et des modes.* The existence of one big group of images that have comparable brightness and saturation values and create one main cluster tell us that during the years of the publication there were aesthetic standards that were maintained. We can recognize that the Journal cultivated a distinguished signature approach that had similar characteristics, like the use of the space, and color palette through the years and through many different plates makers. --- ## Bibliography Manovich, Lev. [Style Space: How to compare image sets and follow their evolution.](http://lab.softwarestudies.com/2011/08/style-space-how-to-compare-image-sets.html) Software Studies 2011."
});
index.addDoc({
  "lunr_id": 5,
  "link": "{{ site.baseurl }}/map/",
  "title": "Map",
  "student": "",
  "content": " Mapping theJournal des dames et des modes Interactive Map of Paris Printing and Selling the Journal The first edition of the Journal des dames et des modes was released on March 20, 1797 by Jean-Baptiste Sellèque and Pierre de La Mésangère. Originally composed of 8 text pages plus 1 or 2 fashion engravings, a new issue of the Journal appeared about every 5 days. Parisian readers could subscribe for the cost of 30 francs per year, 16 francs per 6 months, and 9 francs per quarter in 1798. Because the Journal's production required the collaborative efforts of workers in many different trades, it was created in several places. This map visualizes where the Journal's offices were located, where it was printed, and where it was available to purchase. Fashionable Spots This map documents the fashion hotspots named in captions to Journal des dames et des modes plates. In the earliest and most radical years of the JDM, 1797-1798, these 38 plates cite 18 specific locations in Paris where the fashions illustrated were seen. Unlike any other fashion plates from the period, these depict women alone in urban streets and public spaces. The locations mentioned by the JDM are mainly theaters and parks—spaces of spectacle and display concentrated in the northwestern part of the city. While a few of these places survive, many have disappeared. The map allows us to see how close these places were to each other, and to the offices of the JDM, forming a network of fashionable sociability in revolutionary Paris. "
});
index.addDoc({
  "lunr_id": 6,
  "link": "{{ site.baseurl }}/parisvslondon/",
  "title": "Paris vs. London",
  "student": "",
  "content": " Paris vs. London Many of the fashions depicted in the Journal des dames et des modes from 1797-1804 are strikingly radical and uniquely Parisian. Comparing JDM plates to fashions from British journals printed in London reinforces these claims, but also shows commonalities between the two warring countries. The infographic below (click to enlarge) draws comparisons between JDM and two British journals: Gallery of Fashion: Published from 1794 to 1803 by Nicholas Heideloff. Two plates featuring 1-3 figures each appeared monthly with accompanying descriptions. The Fashions of London and Paris: Published monthly from 1798 to 1806 with 2-3 plates of London fashions. Almost every month also included a plate titled 'Parisian Fashions' that directly copied fashions from the JDM with minor changes. It is notable that fashion plates from these two British journals only depicted women's fashions during this period, never men, and the female figures rarely appeared alone. Even when The Fashions of London and Paris copied JDM plates, they arranged two or more figures on the page - it would be highly improper for a woman to be out and about on her own! All images of the Gallery of Fashion are from the collection of the Kunstbibliothek, Staatliche Museen zu Berlin. All images of the The Fashions of London and Paris: are the author's own taken at the Yale Center for British Art. "
});
index.addDoc({
  "lunr_id": 7,
  "link": "{{ site.baseurl }}/persistencecolor/",
  "title": "The Persistence of Color",
  "student": "",
  "content": " The Persistence of Color This color glossary provides English translations of French late eighteenth-century terms related to color. Words for color, like many aspects of a language, come in and out of fashion, and alter in meaning or use. In order to find the meanings of color words in use between 1797 and 1804, period dictionaries and textile handbooks or sample-books were consulted, as well as an English fashion magazine whose plate descriptions are bilingual, the Miroir de la Mode. {{ letter | upcase }} {{ letter | upcase }} {{ color.name }}{{ color.description }} Alzan(e) Amaranthe Argent Aureus Aurore Azuré Blanc Bleu Bleu Clair Bleu Céleste Bleu Turquin Bleu Violet Blond Doré Blond(e) Bronzer Brun/brunette Caerulus Carmin(e) Carnation Chamois Châtain Citrin(e) Coquelicot Cromoisy/Cramoisy Cumatilis Cyaneus Gris Gris Dauphin Gris de Lin Gros Bleu Incarnadin Jay/Jais blanc Jaûne-Doré Jonquille Lilas Lilas Clair Lilas Foncé Marmote Mordoré Murinus Nacarat Noir Or Ponceau Porcelaine Pourpre Pourpre Clair Rose/Rosé Rouge Ruby Clair Ruby Foncé Souci Tricolor Verd/vert Vermeille Vert Brun Vert Celadon Vert Gai Vert Pistache Vert Pomme Vert de Mer Vert d’Èmeraude Violet a sorrel or chestnut brown color deep bluish-red, a shade of red named after the amaranth plant silver or of silver color term used to describe gold color yellow color with light red tones a blue mineral; a blue color, commonly called (pendant le XVIII siecle) bleu céleste white blue; sky color light blue a saturated bright blue turquoise blue a violet which has strong blue undertones flaxen, light yellowish color fair or light honey color the color of cast copper or brass, sometime dark brown of a brown color cerulean blue, deep/sky/azure blue, green-ish blue a red color flesh color yellow of a chestnut color of a lemon color, or pale yellow bright red, with an orange tint Crimson or grain color water-colored blue cyan blue, a green-ish blue color the color which is more or less mixed with white and black light lilac grey a color that looks like flaxseed, linen gray is a soft hue deep, navy blue bright carnation yellow color jet white the color of an orange (the fruit) daffodil yellow pastel purple, like a lilac flower light pastel purple dark pastel purple a grape-colored purple; the color of marmote grapes orangey bronze an orange color/ but might be reddish light red, between cherry and rose of the color black metallurgic gold (Au); the color gold bright strong red or poppy red porcelain white, grey purple with crimson undertones (more red than modern “purple”; see violet); made from cochineal light purple with crimson undertones color of roses, pink, color of dry roses; a color which is red and vermilion a color similar to blood or fire, saturated and brilliant hue light ruby red dark ruby red yellow-orange an ensemble of colors, typically yellow, green and red green or green color a brilliant red or scarlet pigment; made from the powdered mineral, cinnabar brownish green, murky in hue celadon green cheerful green (similar to Kelly green), bright in hue pistachio green apple green sea green emerald green purple, of purple color (more blue,than pourpre) "
});
index.addDoc({
  "lunr_id": 8,
  "link": "{{ site.baseurl }}/politicsofmasculinefashion/",
  "title": "Fashion Success vs. Legal Failure",
  "student": "",
  "content": " Fashion Successvs. Legal Failure About the project... Details "
});
index.addDoc({
  "lunr_id": 9,
  "link": "{{ site.baseurl }}/revolutionarycosts/",
  "title": "Revolutionary Costs",
  "student": "",
  "content": " Revolutionary Costs Pricing of yardage and economics of fabric importing "
});
index.addDoc({
  "lunr_id": 10,
  "link": "{{ site.baseurl }}/textilegloss/",
  "title": "Textile and Materials Glossary",
  "student": "",
  "content": " Textile & Materials Glossary This textile glossary brings together a broad range of vocabulary relating to French Directory and Consulate fashion plates, especially those in the Journal des dames et des modes. While by no means an exhaustive list, the purpose of this glossary is to provide quick reference material for those interested in reading the plate captions and descriptions, as well as those who want to know what the types of clothes idealized in the plates were actually made of. Please note that many textile terms changed over time according to location, language or evolving use ,and thus can have inconsistent meanings. Discrepancies can be cross-referenced from the list of sources below or from ARTFL's dictionary database. A addatis: Muslin or very fine, bright cotton cloth of medium to fine quality. The best samples came from Bengal, India in the seventeenth and eighteenth centuries. agabance: Also called agabaiiee, aggebance, and agibanis. Cotton fabric embroidered with silk, made in Aleppo, Syria. agaric: Cotton fabric similar to terry cloth, made with fine warp loop pile formed on wires. Commonly used for dresses. aigrette: Headdress with a white egret's feather decorated with diamonds. ajamis: Calico from the Near East. alamodes: A thin, light glossy black silk, not quilled. à l'antique: Suggestive of a specific costume common to another location, race or ethnic group. Examples are à la chemise, à la militaire, à la turque, à la peruque, à la niobe, à la mandoline, à la greque, à l'espagnole, à la polonaise, à la Billington, and à la Wurtenburg. alapeen: Mixed cloth of wool and silk primarily used for men's clothing but also sold to upholsterers. alibanies: Also called allibannees and allibanis. Striped cotton cloth carried to Holland from India, commonly produced as a mixed silk-and-cotton fabric in the seventeenth and eighteenth centuries. allégeas: Also called allegais or laychés. Fabric from India produced in two types. 1.) cotton, and 2.) herbs weaved with hemp or linen. Originally a striped cloth of mixed cotton-and-silk, this fabric was commonly red, blue and white, sometimes flowered and embellished with gold and silver thread. In the seventeenth century, allégeas was imported from South India. alliballies: Also called allibatis, alliabally, and allibali. Very fine muslin or a type of East Indian plain, brocaded or embroidered cotton. Some had selvages made with gold thread. aman/amand: A plain weave, blue cotton fabric made in the Near East. Formerly imported in France for the manufacture of curtains. amadis: Long, full sleeves gathered at intervals by bands around the arm. amierties: Also called ambertees, amertes, amertis, or emerties. A superior grade of white cotton cloth from India used in the lining of quilts. Amierties was a general use fabric, often used for block printing in England. angleterre: A lightweight, plain weave silk, often checked or striped. The term may have been intended to suggest silks patterned in the English taste. angola: Late eighteenth-century cashmere shawl imitation fabric. Name derived from Angora goat fur. angola shirting: Khaki shirting made of a mixture of wool and cotton in twill weave. arains: See armoisin or taffeta. armoisin: See sarcenet. A taffeta made in India, but of weaker and lower quality than the silk armoisins. The color is often carmine and red. There are two kinds. 1.) arains, which are striped taffetas and 2.) damasks, which are flowered taffetas. Often used for scholastic gowns, hatbands, and scarves. astarte: A French silk dress fabric of fine quality, made in a twill weave and printed with bold designs in brilliant colors. atchiabanes: A plain white fabric of coarse quality for general domestic use. Atchiabanes was imported from Bengal in the eighteenth century. atlas: Silk satin made in India often done plain, striped, flowered in gold or solely in silk. As a warp-faced satin and weave fabric, it has silk warps and cotton wefts. Atlas varieties include cotonis, cancantas, calquiers, cotonis-bouilles, bouilles, charmay or quemkas. augujli: A coarse Syrian bagging made of cotton mixed with other fibers. Better grades are dyed blue or are white with another color. B bafta/baffetas: Also called baffoted, baft, baftah, bufta, and baffs. A generic term for plain calico from India, varying from a coarse to fine quality. Those sent to Europe were usually white but those for Asian markets were more commonly dyed red, blue or black. Used domestically in the seventeenth century, bafta was a cotton or cotton and silk fabric derived from Persian wool or yarn. bajota: A coarse, bleached cotton fabric formerly sold by the Holland East Indian Trading Co. bajutapaux: Also called bejutapaux and bayutapaux. A term used in the African trade to describe a coarse cotton cloth with blue and white or red and white stripes. balais: Silk ribbons. balantine: A woman's handbag, sometimes worn hanging from the belt; nicknamed reticule or ridicule and used during the Directory. balzorine: A light material of mixed cotton and worsted manufactured for women's dresses. bas: Stockings, most often made of silk (bas de soie) or wool (bas de laine). basin: A cotton cloth made in different qualities and fashions. All are white and without nap. Twilled and serge basin were used to make corsets, petticoats and curtains. batavia: A silk fabric with a twill weave named after the place by the same name, now Jakarta, Indonesia, a Dutch colony in the eighteenth century. Batavia was fashionable in France in the 1760s. It was also known as Levantine and was often imitated in cotton. batiste: See chambray/cambric. A very fine, tightly woven fabric, usually linen or cotton. bavolet: A cap worn by French peasant women. bengal: A cheap silk imported from India made of mixed cotton and silk. It was usually striped. Betain: Also called betaine or beteela. An obsolete term applied to Indian muslin used for neckties, saris, and head coverings. betilles: Muslin or white cotton cloth from Pondichéry. There are three varieties, one coarse, another very fine, and one bright. The fabric was sometimes dyed red, sometimes striped or flowered with embroidery, and was in demand in Europe for neckcloths. It was often used as the base cloth for fine embroidery. bezane: A French term for various bleached, striped, or dyed Bengal cottons and calicos in the eighteenth century. blonde: Lightweight, shiny bobbin lace of raw silk. boide: Also called boi or boy. A coarse, heavy flannel in a plain, loose weave with cotton warp and wool. Boide was used in linings. bolsas: Also called bolzas or coutil. Bolsas was made of cotton thread imported from India in the seventeenth and eighteenth centuries. It was either all white or striped in yellow. bombasin: A silk cloth or a cloth woven from cotton thread. bouille-cotonis/bouille-charmay: See atlas. bouracan: Also called barracan, barragan, or camelot. A coarse cloth used to make coats. bourdaloue: A high crowned hat named after a famous seventeenth century Jesuit preacher. Under Louis XIV, the hat was turned up on each side. The final iteration turned up in three places – front, back and on the left side – where there was a button and a loop. Bourdaloue gave his name to the band around the hat. The band color initially imitated the hat color but soon became several bands of gold twisted around the crown. boutida: A fabric with a plain weave whose name has not yet been traced in any contemporary literature on textiles bretagne: A linen fabric of plain weave made in Brittany during the eighteenth century. It was often used for shirts because of its high quality. bride: The flange of a button or the border of a shirt. brillanté: A silk in a plain weave with a brocaded pattern. brocade/brocart: Traditionally, a type of silk damask with patterns woven in gold or silver. The main centers of production were Lyon and Tours. brocatelle: A gold or silk brocade with very rich ornamentation, usually polychrome and of Italian origin. broché: Brocade. A pattern made by wefts that only run the width of the motif and are then turned back. buskin: Calf-length, thick-soled laced boot originating in ancient Greece. Cothurnes were a type of Buskin that covered half of the leg and were laced in front. C cadis: A worsted cloth. In England and America, cadis refers to cheap worsted tape or ribbon. Cadogan: a hairstyle, with a low queue behind, folded on itself and tied in the middle cadrillé: Checked; à carreaux in modern French. calamande: Also called calamandre or calamandre. A fabric with a fine gloss made in Flanders and Brabant. calico: Inexpensive, brightly printed cotton cloth woven with carded yarns in a plain weave. Originally a lightweight printed cotton cloth of Indian origin. Early calicos used elaborate animal designs while later calicos were of coarser fabric. The fabric was first woven, then painted, dyed or printed with wood blocks. calotte: A small bonnet or cap that covers only the top of the head. calquiers: See atlas or taffeta. cambaye: A strong, coarse East Indian cotton fabric resembling linen. cambrai/ chambray: See batiste or gingham. Derived from Cambrai in France, chambray encompassed a broad class of plain weave, yarn-dyed cotton fabrics with a colored warp and white weft. While often in plain color, it was also available in stripes, checks or other patterns. cambraisines: Fine cloth from Egypt. cambresine: Fine linen fabric, a French term for fine, plain, lightweight cotton, linen fabric. cambric: A closely woven linen or cotton fabric. See batiste. camlet/camblet: Of Arabic origin, referring to pile or nap and to mohair. The name also applied to a wide variety of high quality, smooth fabrics made of wool, silk, etc., in plain or satin weave. Another type of camlet is a lightweight fabric woven of hard spun wool and cotton or linen yarn. cancantas: See atlas. canezou: A woman's high waisted jacket, usually sleeveless. cannelé: Any ribbed fabric with parallel ribs in the weft, formed by warp floats. cannellé: A warp-patterned silk with the textured effect in the ground or a pattern made entirely by the warp. cannetillé: A weave with short ribs on the face of the fabric, giving the impression of small, monochrome checks. cape: Turned-down collar of a cloak that hangs loosely over the shoulders. capelet: A small cape or cape collar, attached to or separate from a coat or dress. capote: A stole, shawl, cloth or cape worn by women when going out in public that covers them from head to foot; a hood of taffeta; a type of women's hat often made of light fabric that is pleated and slipped; a type of women’s hat with a stiff brim and soft crown; a military greatcoat. capperees: Cheap blue and white checkered or striped cloth. caraco: See casaquin. A type of small jacket fitted at the waist and flared in the back, with long, straight sleeves. carnagnole: A men's jacket or short-skirted coat with wide, downturned collar, lapels, and rows of metal buttons; worn with trousers and red caps by the French Revolutionaries in 1792-93. casaquin: See caraco. A woman’s short gown, worn over a petticoat with pleats in the back. cashmere: Very fine hair from Kashmir goats, used either pure or mixed with wool. Indian cashmere was imitated in France, where it was made with fine wool. casimir: See kerseymere. A durable, twill-woven, fine wool fabric. casquette à la liberté: A soft red cap worn folded over; also called a bonnet rouge, or Phrygian cap. charmay: See altas. chemise dress: A woman’s day dress with a low neck gathered on a drawstring, usually worn with a sash. chauters/chowters: Plain white calico, usually of superior quality and used in shirting. chavonis: Sheer, East Indian cotton muslin. chenille: Thread formed by a fine, twisted, and fringed ribbon, used as trimming, as part of a woven fabric, or as military ornament. chemise: A thin undergarment made of cotton with tight, short sleeves and a low neckline. chemisette: A half-blouse worn to fill in a low neckline, fastened at the side. cherusque: A high fan-shaped collarette or ruff, similar to a Medici collar. Cherusques were made of cloth or lace. chiffre: Monogram chikan/chilan: Embroidered fine cotton muslin from India. chiné: Thread with various colors obtained by dying or printing; characterizing a fabric woven with chiné threads, either for the warp or the weft, or for both. It was pre-colored according to a certain motif, e.g. chiné velvet, chiné taffeta. chintes: Chintz in modern English, a painted or printed calico. Originally a glazed, plain weave cotton fabric, generally woven with a handspun fine warp and coarser, slack, twill filling, then decorated with brilliantly colored flower or striped patterns. First used in the eighteenth century for clothing, it was brilliantly colored and permanently dyed, while also lightweight and durable. chites: Also called chits, chittes, chite, and chitteie. A cotton fabric from India with a long-lasting dye that did not lose its luster. circassienne: A version of the robe à la polonaise in which the three tails or puffed swags are the same length and the sleeves are very short and funnel-shaped. It was worn at the time of the French Revolution. cockade: A rosette of ribbons, usually flat around a center button, attached to a hat or a lapel. cocarde: A knotted ribbon often adorning soldier's hats; later adapted to women's hats. collet: Collar. contailles: Low-grade French silk fabric. cordonnet: A tightly-twisted thick silk thread. It was often used as a brocading weft to give texture. cornette: cornett; a bonnet with a gathered crown that could be turned down. cotonis/cotonis-bouilles: See atlas. cothurnes: See buskin. coutil: See bolsas or twill. Also called coutis, coupis, or courtille. A type of fabric made from hemp that was very strong and close-knit. It was used for corsets. couture: Seam. cravate: cravat; a wide band of fabric worn as a necktie; ancestor of the tailored necktie crepe/crape: Fabric made with a twisted thread (fil de crêpe) or altered tension on alternate warp threads to achieve a puckered or crinkled effect. The best-known crepe is crêpe de Chine which was made of silk. crépine: A trim of very long, knotted fringes. cretonne: A heavy, white linen fabric used for upholstery. culottes: Knee breeches. D damask: a fine fabric of silk or linen, usually in a single color, elaborately patterned, and reversible. dauphine: a lightweight, plain weave wool upholstery fabric made in France in the eighteenth century; made of wool or a combination of wool and silk. de laine: a fine, woolen fabric first called mousseline de laine, or muslin of wool. demi-bateau: A silk top hat with a wide brim tilted in front and back. It was worn during the Directory period. dentelle: delicate lace made of linen, cotton, wool, silk or gold or silver thread. Formed with needles, books, bobbins, or machines in a variety of techniques. doliman: a cafetan; Turkish robe slit or open down the front, sometimes worn as a coat. dorures: A satin fabric ornamented in gold. douillette: See redingote. A type of coat, loose-fitting, and without back pleat. doussoutis; also called doussoutin: mull; muslin, a plain-weave white cotton fabric of medium, fine and superfine quality, imported from India in the eighteenth century. drap/drab: wool broadcloth; a thick plain-weave wool used for outerwear. droguet: A silk textile with a small repeating pattern in no more than five colors, often used for men’s suiting. Droguets were often categorized further as lisérés, satinés, lustrinés, peruviennes, or prusiennes. Also identified as a coarse wool fabric made with a cotton, silk or linen warp. ducape: A plain-weave stout silk fabric with a softer texture than the gros de Naples. duck: A plain-weave, heavy linen fabric with a glazed surface to shed water. duvetyn: A soft woolen fabric with spun silk or mercerized cotton back in a twill weave. It was used for coats, suits, dresses, and millinery trimmings. E écorce d'arbre: A baste fiber halfway between silk and linen. effilé: fringed. embroidery: ornamental designs made with a needle or hook and cotton, wool, linen, silk or metal thread on a cloth support. en camayeu: A cameo or monochrome effect created by two or more hues of the same color. en dorures: Decorative gold or other metal threads. en fraise/fraise: Decorative ruffs. epaulette: An ornamental shoulder piece, usually military in style. eschantillon: A showpiece of fabric used in sample books. etamine: A fine, lightweight worsted cloth, etamine was described in the late nineteenth century as transparent and meant to be worn over a contrasting color. estrousoyé: Silk fabric. F façonné: A fabric that has a woven pattern often created by brocading wefts. faille: A silk fabric with a ribbed effect. favoris: Sideburns/whiskers. fichu: A large, square kerchief worn by women to fill in the low neckline of a bodice. The fichu was often of linen fabric and was folded diagonally into a triangle then tied, pinned, or tucked into the front of the bodice; a scarf; it could also be worn on the head. fichu en marmotte: A headscarf knotted under the chin. fichu religieuse: A nun's handkerchief, made of embroidered muslin and worn around the neck. filé: See glace. A smooth metallic thread wound on a silk or linen core. florence: A silk with a satin weave. florentine: A lightweight silk taffeta originally made in Florence, then in Lyon. floss: Silk thread with no visible twist. foulard: A lightweight lustrous silk fabric from India. Taffeta foulards were silk neckcloths. fourreau: A woman's dress in which the back bodice and skirt were cut in one piece with no waist seam. frisé: A crimped or looped thread, frisé was known as frost in England. froissé: A creased item of clothing. fustian: A general term covering a large category of linen and cotton. Probably made partly of wool. G gabrielle: A frill or fluted ruff, sometimes worn as a standing collar. galon: Braid trimming. ganse/gance: Cord trim. gartering: A tape or braid tied around the calf to support stockings. gauze: Sheer, transparent cotton, silk or wool fabric in which the warp threads are twisted around the weft; used for trimmings and clothing items, the term can apply to any sheer or open fabric. gaz(e): A light and transparent eighteenth-century cloth made of cotton and silk. gilet: A vest or waistcoat. gillsayé/giselle: Sheer French fabric made of wool. gingham: A cloth of pure cotton woven with dyed yarns in stripes and checks. glace: Plain metal-wrapped silk thread; used to make a fabric of the same name. gland: Small tassel trim. glands à la mirza: Small tassels in Persian style. glissade: A cotton lining for silk and cotton fabrics. gorgoran: A type of gros de Tours fabric with a heavier warp and weft. During the Empire, the term was used to describe fabrics with vertical stripes produced by different kinds of weaves. grand habit: French court dress for ceremonial occasions. grisette: A small light fabric mixed of silk, cotton, etc. made in many colors and fashions. gros de Tours/gros de Naples/gros de Florence: A plain-woven silk with warp and wefts doubled to increase durability. The fabric had a corded effect and was the staple silk fabric. guinée, guinea: A white cotton fabric, the name was given in Marseille to cloth sent to Guinea; Cheap, brightly-colored Indian calicos, mostly striped or checkered; a slave trade French term used in the seventeenth and eighteenth century for cotton canvas in gray or dark blue. guzenis: An ordinary plain white calico similar to baftas and gurrahs. H Habit: tail-coat hairbine: A silk and worsted material with some amount of mohair, the fabric was used for men's clothing. herringbone: Any textile woven in a zigzag pattern resembling chevrons or the bones of a herring. hessian: Coarse, hempen cloth, the name is most likely indicative of its origin. hollandoise: At the end of the seventeenth century, this term was used for linen fabric printed with wax. hongreline: Riding coat worn by French coachmen and footmen. I imperial: A name given to several kinds of cloth e.g. imperial satin, imperial serge; another name for perpetuana, or lightweight twill of worsted and wool. imperial shirting: Bleached cotton shirting. imperial tape: Thick cotton tape. indienne: A painted or printed cotton fabric originally made in the Far East. It was first used to make informal clothing and later for upholstery. indispensable: A bag used in place of pockets. inkle: A tape or braid used for trimming dresses and bed curtains, for garters, stays and apron strings. italienne: A plain weave fabric with a second flushing warp. J jabot: shirt-front ruffle jaconas/jaconet: A thin, closely woven cotton textile, thicker than muslin, slighter than cambric, and thinner than mainsook; a fine, light cotton fabric, between muslin and percale, originally made in India. jour zephr: An obsolete French term for plain gauze. juive: Douillette that reached only to the calves. jupon: A petticoat skirt worn under the gown. K keeses: Also called kestes, quesos, or kesis. A thick cotton cloth with elaborate check in blue and white; a striped or solid colored fabric in brilliant colors from India; used for trousers. kermichi/ kermiss: A British term for cotton dress fabrics of inferior quality. Kerseymere: See casimir. A fine, twill wool used in men’s vests, coats and breeches and women’s redingotes. korathes: Also called korottes, korolz, korattes, and korotes. A coarse cotton fabric from India used to make big neckties. L lace tucker: A piece of lace or linen worn around the top of a low-cut bodice to increase modesty. lamé: A fabric woven with strips of metal, often gold or silver. lampas: A patterned silk fabric in which the pattern is in a different weave structure from the ground; often used in upholstery. lappets: Decorative flaps, or hangings on headdresses or garments used in a religious setting. lawn: A linen fabric with a fine, transparent plain weave which can be finished to have a shiny, silk-like appearance. leghorns: A braided straw used to make hats. leneau: A gauze-weave in which warp yarns arranged in pairs cross and re-cross one another between picks of weft; a structure in which rows or areas of gauze weave are separated by, or combined with, areas of plain weave. lévite: A men's long frockcoat or women's long dress with deep cape collar; resembled a garment worn by Levite priests. limace: Also called limances, limaconne, limande or limanée. A striped cotton cloth of fine quality used domestic in the eighteenth century. linen: A cloth of many grades and weaves made from flax fibers; a very light and fine fabric Variations of linen include calicoes, cambricks, canvas, damasck, diaper, lawns, drilling and pack duck, etc. liséré: See droguet. The main weft thread, which, besides creating the pattern, also gives a texture to the fabric ground lodier/loudrier: A coarse blanket of wool. lohi: A coarse, heavy handwoven dress fabric of wool from Kashmir. longhee: Also called longyi, lungi, or loonghie. A plain weave Indian cotton fabric with a silk or gold border; a natural bleached or dyed cotton fabric used for loincloths. louisine: A lightweight, silk fabric woven with twice as many warp ends than fillings to the square inch; a very thin, plain silk material suitable for children's wear and for slight summer costume. luquoises: A silk cloth from Lusques imitated in France with gold and silver thread. lustrine: See droguet. A light, crisp plain silk in many colors with a high luster. M mallemoles: Also called malmal, mollmol, and mulmull. A muslin or white cotton cloth from India; a plain white muslin; in the seventeenth and eighteenth centuries, a fine muslin often embroidered with floral motifs. mameluke sleeves: Sleeves that extended to cover the hand. mamondis: Also called mahmud, mamoudi, and mamoudie. A hand woven Indian muslin and a general term for Indian calicos. mantelet: A light shawl-like clothing accessory, typically made out of silk, worn around the shoulders when going out in public. marbre: A cloth made to resemble the veining of marble. marceline: A soft silk fabric; a type of light taffeta ordinarily used for dresses. mauris: See percale; also called mouris or moris; a white cotton cloth; an eighteenth century French term for percale imported from India. melin: Also called melis or meslins. A French hemp sailcloth. merino: Cloth woven from the wool of the Merino sheep. mohere: Also called mouaire or moire; cloth made from the wool of the angora goat imported from Turkey. Mohere was often mixed with silk. moire: The term used to designate French ribbed silks. moiré: Fabric finished with a wavelike, watered effect caused by a special finishing technique. montassies/mentasses: A cloth with gold threading. montichours: A cloth of silk and cotton. moquette: Also called mocade or moucade; raincoats made of linen, cotton or wool. mouchoirs: Handkerchiefs usually of cotton cloth. mousseline: See muslin. A light cotton fabric of a loose tabby weave, usually plain but occasionally decorated with embroidery. It was first made in India. mull: A plain weave, cotton fabric; muslin. muslin: A plain weave, cotton fabric; mull. N nankeen: A type of durable yellow cotton tabby cloth originally hand-loomed in China and used to make pants and vests. Nilla: A fabric made of a mixture of silk and baste fiber in East India. Noyalls: Strong, unbleached canvas made of hemp in various places in Brittany. Nué: See nuances. O organdie: Also called organdy or organdis; a kind of mousseline or a fine, sheer, very lightweight cotton fabric made of fine count, combed singles in open, plain weave, with a characteristic stiff, crisp, clear finish. orleans: A dress material made of plain weave. The warp is of thin cotton while the weft is worsted. orris: Heavy ribbon or gimp trimming, sometimes woven with gold and silver. P paduasoy: Also called peau de soie. A heavy silk with a thick weft woven into a plain weave, sometimes with a pattern. Paduasoy was the heaviest of the dress silks. palatine: Furs or other woven fabrics worn on the neck in the winter. panne: See plush. A silk fabric with pile, often a little longer than that of velvet and used principally in upholstery. In the eighteenth-century, silk panne from Lyon was highly desirable. passements: A silk fabric with narrow wares or trimmings including laces, galloons, gimps, fringes, and braids. peau de poule: A plain weave silk with a grainy, chicken skin-like surface. peau de soie: See paduasoy or taffeta. A taffeta weave of a particularly fine texture. pelache: Also called peluche or pluche; a coarse, velvety, cotton, wool or silk fabric. pelisse: A highly popular empire-waist coat or cape often lined with fur, extending to the knee or lower; a lightweight broadcloth used for women's clothes, especially capes fashionable in the second half of the eighteenth century. percale: A plain, smooth, lightweight cotton fabric used for morning dresses. Printed percales were used for shirting. perruque: Wig. perse: Lightweight silk fabric associated with India. Persian: A thin, plain silk principally used for linings in coats, petticoats, and gowns in the eighteenth century. peruvienne: See droguet. A fabric of the droguet family, with a small textural pattern. piqué: A double-woven fabric, usually of cotton, with crosswise corded ribs or elaborate weaves. platille: A very white linen cloth. plissure: A crease or pleat. plush: See panne. A warp pile fabric less closely woven than velvet with the pile cut longer, usually of wool. poplin: A medium-weight, durable plain weave fabric with fine crosswise ribs; made of cotton, silk, or wool. populées: A cheap, checkered calico. poulangis/poulangy: Wool fabric. prussienne: See droguet. A fabric of the droguet family originating in Berlin in the 1750s, prusienne had a taffeta ground with a warp thread of two colors. Q quemkas: See atlas. R ramoneur: A small, peaked hat similar to those worn by chimneysweeps; a blackish color. ras: A cloth made of mixed combing and carding wool. ras de st. cyr: French silk dress goods with cross ribs, usually in black. rasta/raftas: A French term for trousers. ratteen/ratiné: A nubbly ply yarn made by twisting thick and thin yarn under tension. rayé: Striped. redingote: See douillette. A long overcoat with overlapping front skirts and a wide collar. rep: See taffeta. A fabric with fine, closely-spaced horizontal ribs made of various fibers. Silk was most popular during the eighteenth century; used mainly for upholstery. reticule/ridicule: See balantine. riband: Ribbon. robe foncée: A gathered dress, especially one gathered at the sleeves. rosconnes: Linen cloth. S santal: See taffeta. sarcenet: See armoisin. A fine, soft silk fabric used for dresses and ribbons. satin: A basic silk weave with long warp or weft floats to give a shiny, smooth surface appearance. satiné: See droguet. sattinette: A very thin type of satin used for summer nightgowns. sautoir: A small piece of cloth worn by women draped from the neck and tied around the chest sayette: Woolen or silk cloth. saxone: A mixed fabric of silk and linen. schall: A shawl worn around the shoulders. seerhaudconnaes: A cotton cloth of ordinary quality; a term for various Indian cotton muslin. semple: The system for selecting which warp threads to lift in order to weave the pattern on a drawloom. serge: A cheap, strong calico made either plain or striped. Serge was used in making napkins, flags, linings, and sailcloth. sergé: A basic, durable twill weave of a diagonal pattern, or, by reversing direction, a herringbone or chevron pattern. serpilliere: A cheap, coarse cloth. shag: A fabric with a long nap on one side. Shag was usually made of silk and was occasionally worsted. siamoise: A large group of linen and cotton goods, some with additions of wool or silk. Siamoise was made in imitation of the magnificent garments worn by ambassadors of the King of Siam in 1684. It was a popular product of Lyon. silesie: A thin, twilled linen cloth, the term refers to many grades and patterns of linens, unbleached or dyed in colors and later imitated in cotton. The fabric was used for household purposes, lining clothing and window roller-blinds. silk: Cloth woven from the shiny, smooth filaments reeled from cocoons of the silkworm Bombyx mori. silveret: A half-silk mixed with cotton or wool used for men's clothing. sorbec: Metal-wrapped silk thread with a colored core. Yellow or white cores used gold and silver wrapped threads. souci: Also called sousee, sousaes, and soutis: A silk muslin striped in different colors, souci was sometimes called mousseline even though it was not made of cotton; a striped or checkered fabric of silk or a cotton-and-silk combination with big European demand; yellow-orange. soosie/soosey: A kind of silk, striped cloth also mixed with cotton. soulier: A shoe that covers the whole foot, typically made of leather. soutache: Braided trim. spincer/spencer: Dating from the 1790s, in men’s clothing the spencer was a waist-length double-breasted coat or jacket without tails; in women’s clothing the spencer is a fitted cardigan or jacket that reaches either waist-length or bust-length. stinquerkes: Cotton handkerchiefs. stuff: A general term for worsted cloths. T tabby: A simple, basic weave also known as plain cloth or cloth weave. It was stronger and thicker than taffeta. tabis: Coarse taffeta. tabouret: Shaded and striped worsteds found in several late-eighteenth-century Norwich merchants' sample books. taffeta: A fine, tightly woven silk fabric. Variations include crape, faille, florence, gros de Naples, gros de Tours, grosgain, marceline, muslin, peau de soie, and rep. taffeta: Also called arains or armoisins. A lustrous silk cloth from India made plain, striped in gold, silver, checked, or flowered. The term derived from taftah, the Persian term which translates to 'very fine.' In the eighteenth century, the term covered a wide range of silk and silk/cotton goods, many striped or checked. taffetas changeant: A taffeta with warp and weft of different colors, creating an iridescent effect. taffeta foulards: Silk neckcloths. taffetas peint: Painted taffeta. tarnetannes: Also called tarlatanne or tarlatan. A muslin or white cotton cloth. tayelles/tayottes: A belt made of cotton or wool. tiffany: A thin, transparent silk or gauze. tippet: A long fur boa worn around the neck. tollanette: A fabric made of silk and cotton warp with woolen filling. The fabric could be plain, figured or printed and was similar to casimere. toque: A soft, draped, brimless, close-fitting cloth women’s hat; a muslin or white cotton cloth from India. toquet: A peasant-style bonnet. torade: A cotton muslin from India. transparent: A type of garment, often a dress, of finest brocade, lace or velvet. treillis: A French term for handmade lace. tricote: A plain, warp-knit silk fabric with fine vertical lines on the face and cross ribs on the back. trippe: A kind of moquette or velvet stuff of woolen pile and goat's hair. tulle: Thin, transparent net made of fine cotton or silk thread. The fabric was first introduced to France at the end of the eighteenth century. twill: See coutil. A plain, durable fabric of very tight weave, characterized by diagonal ribs or patterning. U V vandykes: A pointed pieces of trim used to decorate. They were named for Sir Anthony Van Dyck, the Flemish painter. vane: Padded French quilt made of piqué or calico. velour: Also called velvet, the weave is characterized by a pile raised in loops above the ground weave. The loops may be left alone or cut, creating 'uncut' or 'cut' velvet. vestal veil: full-length veil. W warp: The threads which are secured to the loom and run the length of the fabric. Some fabrics have more than one warp. weft: The threads that are woven into the warp by the weaver using a shuttle. X Y Z "
});
index.addDoc({
  "lunr_id": 11,
  "link": "{{ site.baseurl }}/timeline/",
  "title": "Timeline",
  "student": "",
  "content": " Revolution Timeline: Politics & Fashion 1789 A RevolutionDeclaration of the Rights of Man and of the Citizen.Beginnings of a constitutional monarchy. 1790 Liberalization of the press, which frees editors to found magazines and determine their content. 1791 Declaration of the Rights of Woman and the Female Citizen. 1792 Fall of the French monarchy, start of the first French Republic. 1793 Abolition of the guilds that had controlled the fashion trades for centuries, freeing them from traditional style, technique, and production rules. 1793-94 Reign of Terror, the most extreme phase of the Revolution. 1794 Abolition of slavery in France and on French territoriesCoup d’état of Thermidor: end of the reign of Terror.Among others freed from prison, Teresa Cabarrus, soon to become Madame Tallien, is released and begins to wear her prison underwear as outerwear in public. 1795-99 Directoire phase of the French Republic, led by Barras.Abrupt rise to wealth of a new class, often based economically on currency or military supply speculation, and culturally on informal gatherings of both old regime aristocrats and the newly wealthy, notably in the Salons of Juliette Récamier and Teresa Tallien. 1795 Meeting of General Napoléon Bonaparte, a rising young star in the French Republic’s army, with Rose de Beauharnais, soon to be called Joséphine, style leader of the Directoire. 1797 First issue of the Journal des dames et des modes, founded by Jean-Batiste Sellèque. 1799 Sellèque dies, L’abbé Pierre La Mésangère becomes sole editor in January 1800 1799-1804 Consulat phase of the French Republic. Simultaneous return toward authoritarian government and consolidation of many revolutionary republican changes. Individualist consumer culture thrives. 1802 Reinstatement of slavery in French territories. 1804 Napoleon crowns himself Emperor of the French.Through Josephine, Napoleon begins to reverse the style revolution in women’s fashion, with costumes designed by Isabey. 1814 Fall of Napoleon and restoration of the monarchy 1839 Last issue of the Journal des dames et des modes. Who's who? Joséphine Bonaparte Fashion Leader Joséphine Bonaparte(1763-1814)Born on the Caribbean island of Martinique, then a French colony, to a wealthy white Creole family, she first married Alexandre de Beauharnais who was guillotined during the Reign of Terror. Her second mariage, with Napoleon Bonaparte, made her Empress of the French in 1804. Thérésa Tallien Fashion Leader Thérésa Tallien(1773-1835) Juliette Récamier Fashion Leader Juliette Récamier(1777-1849) Napoléon Bonaparte Politician Napoléon Bonaparte(1769-1821) Paul Barras Politician Paul Barras(1755-1829) Jean-Baptiste Isabey Fashion Designer Jean-Baptiste Isabey (1767-1855) "
});
index.addDoc({
  "lunr_id": 12,
  "link": "{{ site.baseurl }}/underpinnings/",
  "title": "Underpinnings or the lack thereof",
  "student": "",
  "content": " Supporting a Revolution: Underpinnings or the lack thereof No More Underwear! Women’s clothing before the Directoire phase of the French Revolution, that is before around 1795, relied on a complex architecture of petticoats, panniers, pads, and stays. These underpinnings were typically rigid and inflexible because they were constructed using stiffening tools such as whalebone (baleen), reed, and metal – hence the English word “stays”. As the Journal des dames et des modes dramatically reveals, however, in a scant two years, by 1797, fashionable French women had staged an underwear revolution of their own. They both abandonned traditional undergarments, and adopted sheer, if not transparent, fabrics for clothes which were a fraction as full as they had been. Until 1804, when women’s fashion began a twenty-year return to earlier norms, the female form was publicly visible. New Look The popularity of new silhouettes changed everything. As skirts rose to right under the bust, there was no longer a need for stays to winnow away the waist. New styles strove to achieve a “natural” silhouette, which required underpinnings which would not deform women's natural shape. This called for new materials and advances in construction. One such technology is the advent of 'metal elastique,' a rigid, yet expandable material made from tightly coiled metal wires. This clever application of mechanical materials to undergarments can be attributed to the 1763 patent of the coiled spring, and can also be seen used in jewelry depicted in the Journal. Corset styles Inspiration changed quickly and was taken from whatever novelty was trending at the moment. Whether it was political, historical, or theatrical- nothing was off limits to influence women's dress. In this plate, we see the 'Lisbeth corset' so named after Mme. Saint-Aubin, an actress who played the part of Lisbeth in a Favières and Grétry comic opera. These styles, though dubbed as 'corsets' by the Journal, were terms used somewhat interchangeably with 'bodice' and served more decorative purposes, rather than as support garments. Soon, women's underpinnings began to migrate from underclothing to outer clothing. The Sexuality of Underwear For most observers, though not all, women’s Directoire and Consulat rebellion against traditional underwear signalled a radical revolution in morality. No one had expected women would cease wearing petticoats or stays, and many people were shocked by the sexuality of this choice. The effect was very much reinforced by how narrow and light women’s clothing became. Yet the Journal des dames et des modes did not hesitate to depict what it noticed in Paris: women whose bodies were revealed, not reshaped or concealed, by their clothing. All of Europe paid attention. With the advent of the First Empire in France, however, the underwear pendulum began to swing back, and the Journal des dames et des modes with it, until by the 1820s, all European women were once again wearing underpinnings as restrictive as they had before 1795. Image of 1750's stays courtesy of Museum of Fine Arts Boston. Image of metal 'elastic' corset courtesy of The Metropolitan Museum of Art. "
});
index.addDoc({
  "lunr_id": 13,
  "link": "{{ site.baseurl }}/plates/1/",
  "title": "Plate 1",
  "_date": "1797",
  "caption": "Perruque grecque. Collier montant ganses sur le corsage petit fichu. Robe froussée jusu'au mollet.",
  "translation": "Greek wig. Necklace on collar braided into straps on the bodice a small kercheif. Frilly dress up to the calf.",
  "student": "Meghan Collins"
});
index.addDoc({
  "lunr_id": 14,
  "link": "{{ site.baseurl }}/plates/10/",
  "title": "Plate 10",
  "_date": "1797",
  "caption": "Plumet de Héron sur un Fichu en Marmote, Collet de Chemise d'homme, Clef d'or servant d'Epingle, Spencer.",
  "translation": "Heron feather plume on a grape-shade purple headscarf knotted under the chin, collared men’s shirt or collared dress, golden key serving as a pin, Spencer jacket",
  "student": "Avery Schroeder"
});
index.addDoc({
  "lunr_id": 15,
  "link": "{{ site.baseurl }}/plates/100/",
  "title": "Plate 100",
  "_date": "20 March 1798",
  "caption": "Cheveux à la Titus, habit dégagé, pantalon à la Hussarde",
  "translation": "Hair like Titus, casual clothing, Hussar pants",
  "student": "Brontë Hebdon"
});
index.addDoc({
  "lunr_id": 16,
  "link": "{{ site.baseurl }}/plates/108/",
  "title": "Plate 108",
  "_date": "",
  "caption": "Négligé à fond de Couleur. Tablier de Soubrette.",
  "translation": "An Unusual color. Maid's Apron.",
  "student": "Jodi Mikesell"
});
index.addDoc({
  "lunr_id": 17,
  "link": "{{ site.baseurl }}/plates/109/",
  "title": "Plate 109",
  "_date": "29 mai 1799",
  "caption": "Turban à la Caravane.",
  "translation": "Caravan turban (?)",
  "student": "Emily Cormack"
});
index.addDoc({
  "lunr_id": 18,
  "link": "{{ site.baseurl }}/plates/11/",
  "title": "Plate 11",
  "_date": "1797",
  "caption": "Cocarde en feuilles sur un Chapeau à l'Anglaise, Schall uni, Robe froncée à la Coblentz",
  "translation": "Knoted ribbons in the shape of leaves on an English-style hat, unornamented shawl, creased dress at/in Coblentz (a German city, now spelled Koblenz)",
  "student": "Avery Schroeder"
});
index.addDoc({
  "lunr_id": 19,
  "link": "{{ site.baseurl }}/plates/116/",
  "title": "Plate 116",
  "_date": "1799",
  "caption": "Cheveux courts. Cravate haute. Pantalon de Nankin.",
  "translation": "Short hair. High tie. Nankin pants.",
  "student": "Barthélemy Glama"
});
index.addDoc({
  "lunr_id": 20,
  "link": "{{ site.baseurl }}/plates/12/",
  "title": "Plate 12",
  "_date": "1797",
  "caption": "Bonnet à la jardinière orné de Rubans et d'une branche de Lilas. Ceinture à la victime étroit falbalas.",
  "translation": "Garden bonnet decorated with Ribbons and a branch of Lilac. Narrow victim's belt.",
  "student": "Meghan Collins"
});
index.addDoc({
  "lunr_id": 21,
  "link": "{{ site.baseurl }}/plates/13/",
  "title": "Plate 13",
  "_date": "1797",
  "caption": "Bonnet rond à très-petit fond fixé avec un velours noir. Robe de peckini rayé fichu- schall.",
  "translation": "Round bonnet with very small back, set with black velvet. Peckini (?) striped dress, small kerchief (or fichu).",
  "student": "Meghan Collins"
});
index.addDoc({
  "lunr_id": 22,
  "link": "{{ site.baseurl }}/plates/14/",
  "title": "Plate 14",
  "_date": "1797",
  "caption": "Fichu rose sur le fond d'un Bonnet à la folle, perruque Blonde, négligée, Schall uni, Epingle en étoile",
  "translation": "Pink headscarf with pointed lace (translation of fond) on a feminine Bonnet/ pink headscarf in the background (translation of fond) of a feminine Bonnet, blonde wig, odorned, undecorated shawl, star-shaped pin",
  "student": "Avery Schroeder"
});
index.addDoc({
  "lunr_id": 23,
  "link": "{{ site.baseurl }}/plates/141/",
  "title": "Plate 141",
  "_date": "",
  "caption": "Chapeau à Côtes.\n",
  "translation": "Hat with Stripes.",
  "student": "Jodi Mikesell"
});
index.addDoc({
  "lunr_id": 24,
  "link": "{{ site.baseurl }}/plates/142/",
  "title": "Plate 142",
  "_date": "",
  "caption": "Cornette à la Paysane, garnie en Gaze.\n",
  "translation": "Peasant Cornette, garnished with Gauze.",
  "student": "Jodi Mikesell"
});
index.addDoc({
  "lunr_id": 25,
  "link": "{{ site.baseurl }}/plates/144/",
  "title": "Plate 144",
  "_date": "1799",
  "caption": "Ample redingote. Large pantalon.",
  "translation": "Large redingote. Large pants.",
  "student": "Barthélemy Glama"
});
index.addDoc({
  "lunr_id": 26,
  "link": "{{ site.baseurl }}/plates/15/",
  "title": "Plate 15",
  "_date": "1797",
  "caption": "Chapeau-casque  en paille garni d'une Bourdaloue en Velours perruque à crochets, long mantelet sur une Robe à taille courte boucles en Paillettes. ",
  "translation": "Straw Bourdaloue (a little high crowned hat. Named after portable chamber pots, and a famous 17th century jesuit preacher. Under Louis XIV, the hat was turned up behind and before, or on each side) hat with velvet wig. Long mantelet (a light shawl-like clothing accessory, typically made out of silk, that women wear around their shoulders especially when going out in public), shoes with sequined buckles. ",
  "student": "Meghan Collins"
});
index.addDoc({
  "lunr_id": 27,
  "link": "{{ site.baseurl }}/plates/154/",
  "title": "Plate 154",
  "_date": "",
  "caption": "Chapeau-Capote, orné de Fleurs et d'Epis.",
  "translation": "Capote hat, ornamented with pine needles and cones. (?)",
  "student": "Jodi Mikesell"
});
index.addDoc({
  "lunr_id": 28,
  "link": "{{ site.baseurl }}/plates/155/",
  "title": "Plate 155",
  "_date": "1799",
  "caption": "Bokay.",
  "translation": "Bokay.",
  "student": "Barthélemy Glama"
});
index.addDoc({
  "lunr_id": 29,
  "link": "{{ site.baseurl }}/plates/16/",
  "title": "Plate 16",
  "_date": "1797",
  "caption": "Faces natées. Gilet à larges Rayures, Boutons d'acier en Lasange. culotte à l'Anglaise. Boucles d'Argent.",
  "translation": "Braided sides, vest with wide stripes, diamond-shaped steel buttons, English breeches, silver buckles",
  "student": "Brontë Hebdon"
});
index.addDoc({
  "lunr_id": 30,
  "link": "{{ site.baseurl }}/plates/163/",
  "title": "Plate 163",
  "_date": "",
  "caption": "Intérieur d'Appartement.",
  "translation": "Apartment Interior.",
  "student": "Jodi Mikesell"
});
index.addDoc({
  "lunr_id": 31,
  "link": "{{ site.baseurl }}/plates/166/",
  "title": "Plate 166",
  "_date": "",
  "caption": "Vue de Frascati.",
  "translation": "View of Frascati.",
  "student": "Anne Higonnet"
});
index.addDoc({
  "lunr_id": 32,
  "link": "{{ site.baseurl }}/plates/17/",
  "title": "Plate 17",
  "_date": "1798",
  "caption": "Chapeau en Bateau. Cheveux à demi Rasés. Redingotte à Taille longue, boutons octogones, jarretière en cuir facée aux Bottines.",
  "translation": "Bourdaloue hat, half-shaved hair, oversized coat, octagonal buttons, leather garters holding up boots.",
  "student": "Brontë Hebdon"
});
index.addDoc({
  "lunr_id": 33,
  "link": "{{ site.baseurl }}/plates/18/",
  "title": "Plate 18",
  "_date": "1797",
  "caption": "Bonnet négligeé à Tuyaux. Redingotte en soie bordée d'une très-large Bande de velours.",
  "translation": "Informal bonnet adorned with piping. Redingotte (oversized coat) in silk with a very broad velvet trim.",
  "student": "Meghan Collins"
});
index.addDoc({
  "lunr_id": 34,
  "link": "{{ site.baseurl }}/plates/183/",
  "title": "Plate 183",
  "_date": "1799",
  "caption": "Mise d'un jeune homme",
  "translation": "Appearance of a young man",
  "student": "Brontë Hebdon"
});
index.addDoc({
  "lunr_id": 35,
  "link": "{{ site.baseurl }}/plates/188/",
  "title": "Plate 188",
  "_date": "January 1800",
  "caption": "Mise d'une Elégante",
  "translation": "Outfit of a fashionable woman.",
  "student": "Zoë Dostal"
});
index.addDoc({
  "lunr_id": 36,
  "link": "{{ site.baseurl }}/plates/189/",
  "title": "Plate 189",
  "_date": "1800",
  "caption": "Mise d'un Elégant.",
  "translation": "Outfit of a fashionable man.",
  "student": "Barthélemy Glama"
});
index.addDoc({
  "lunr_id": 37,
  "link": "{{ site.baseurl }}/plates/19/",
  "title": "Plate 19",
  "_date": "1798",
  "caption": "Chapeau de Velours bordé en Jais blanc. Robe ouverte, garnie d'une Gance en Chenille entrelacée.",
  "translation": "Velvet Hat bordered in Jet white. Open dress, adorned with intertwined, braided chenille.",
  "student": "Zoë Dostal"
});
index.addDoc({
  "lunr_id": 38,
  "link": "{{ site.baseurl }}/plates/194/",
  "title": "Plate 194",
  "_date": "1800",
  "caption": "Mises Bourgeoises.",
  "translation": "Bourgeois outfits.",
  "student": "Barthélemy Glama"
});
index.addDoc({
  "lunr_id": 39,
  "link": "{{ site.baseurl }}/plates/198/",
  "title": "Plate 198",
  "_date": "1800",
  "caption": "Costume de Bal.",
  "translation": "Ball costume",
  "student": "Barthélemy Glama"
});
index.addDoc({
  "lunr_id": 40,
  "link": "{{ site.baseurl }}/plates/2/",
  "title": "Plate 2",
  "_date": "1797",
  "caption": "Toquet en gaxe Bouillonnée. Spencer par dessus la robe. Schall long.",
  "translation": "Toquet (Peasant style bonnet) in gauze Bouillonneée (?). Spencer (fitted cardigan or jacket that hits either waist or bust level) over the dress. Long shawl.",
  "student": "Meghan Collins"
});
index.addDoc({
  "lunr_id": 41,
  "link": "{{ site.baseurl }}/plates/20/",
  "title": "Plate 20",
  "_date": "1798",
  "caption": "Fichu de gaze sur un fond de Velours Cerise Chemise à la Prêtesse Manches en Tricot de Soie.",
  "translation": "Gauze fichu on a red Velours (A Fabric wth pile produced by a warp that is raised in loops above the ground weave during weaving and then cut) of a priestess, sleeves in silk knit. ",
  "student": "Meghan Collins"
});
index.addDoc({
  "lunr_id": 42,
  "link": "{{ site.baseurl }}/plates/206/",
  "title": "Plate 206",
  "_date": "10 avril 1800",
  "caption": "Group d’Enfans.",
  "translation": "Group of children.",
  "student": "Emily Cormack"
});
index.addDoc({
  "lunr_id": 43,
  "link": "{{ site.baseurl }}/plates/208/",
  "title": "Plate 208",
  "_date": "1800",
  "caption": "Mise d'un Jeune Homme.",
  "translation": "Outfit of a young man.",
  "student": "Barthélemy Glama"
});
index.addDoc({
  "lunr_id": 44,
  "link": "{{ site.baseurl }}/plates/21/",
  "title": "Plate 21",
  "_date": "4 février 1798",
  "caption": "Capote en satin, ornée de Trèfles et de deux Plumes. Guirlande découpée sur le coté. Velours croisé, formant Ceinture.",
  "translation": "Satin cap, decorated with clovers and two feathers. Cut garland on the edge. Criss-crossed velvet shape the waist (belt?).",
  "student": "Emily Cormack"
});
index.addDoc({
  "lunr_id": 45,
  "link": "{{ site.baseurl }}/plates/22/",
  "title": "Plate 22",
  "_date": "1798",
  "caption": "Turban à la Gulnare. Corset et jupon à la Lisbeth.",
  "translation": "Gulnare style turban. Corset and petticoat in the style of Lisbeth.",
  "student": "Meghan Collins"
});
index.addDoc({
  "lunr_id": 46,
  "link": "{{ site.baseurl }}/plates/225/",
  "title": "Plate 225",
  "_date": "1799",
  "caption": "Habit dégagé, à grand collet. Pantalon à la Batelière",
  "translation": "Casual outfit with a large collar. Boatman pants",
  "student": "Brontë Hebdon"
});
index.addDoc({
  "lunr_id": 47,
  "link": "{{ site.baseurl }}/plates/228/",
  "title": "Plate 228",
  "_date": "",
  "caption": "Fichu-Turban. Chapeau de Paille, à bord retroussé.",
  "translation": "Scarf Turban. Straw hat with a rolled edge.",
  "student": "Jodi Mikesell"
});
index.addDoc({
  "lunr_id": 48,
  "link": "{{ site.baseurl }}/plates/23/",
  "title": "Plate 23",
  "_date": "1798",
  "caption": "Capote de satin bordée en tule. Schall noué par derrière corsage lacé agrémens en Soie et en Perles au bas de la Robe.",
  "translation": "Satin Capote (women's hat, made often of light fabric, that is pleated and slipped) with tulle lining. Shawl knotted from behind with silk and pearl embellishments at the bottom of the dress.   ",
  "student": "Meghan Collins"
});
index.addDoc({
  "lunr_id": 49,
  "link": "{{ site.baseurl }}/plates/237/",
  "title": "Plate 237",
  "_date": "1800",
  "caption": "Collet haut. Pantalon large.",
  "translation": "High collar. Large pants.",
  "student": "Barthélemy Glama"
});
index.addDoc({
  "lunr_id": 50,
  "link": "{{ site.baseurl }}/plates/24/",
  "title": "Plate 24",
  "_date": "25 février 1798",
  "caption": "Chignon en poire, double Bandeau de Jais blanc. Schall de Laine, à Franges.",
  "translation": "Pear-shaped bun, double headband of white jet. Woolen shawl with fringes.",
  "student": "Emily Cormack"
});
index.addDoc({
  "lunr_id": 51,
  "link": "{{ site.baseurl }}/plates/248/",
  "title": "Plate 248",
  "_date": "2 octobre 1800",
  "caption": "Coeffure ordinaire en Cheveux. Manches Tailladées.",
  "translation": "Ordinary hairstyle in hair. Tailored sleeves.",
  "student": "Emily Cormack"
});
index.addDoc({
  "lunr_id": 52,
  "link": "{{ site.baseurl }}/plates/25/",
  "title": "Plate 25",
  "_date": "1798",
  "caption": "Chevelure en porc-epic. Schall à Mouches. Rubans en Cothurnes. Des d'ap ilat sur le Boulevart des Capucines.",
  "translation": "Porcupine hair style. Lightweight shawl. Ribbon cothurnes (types of Greek-style, laced shoes). Apprentices on Boulevart des Capucines. ",
  "student": "Meghan Collins"
});
index.addDoc({
  "lunr_id": 53,
  "link": "{{ site.baseurl }}/plates/277/",
  "title": "Plate 277",
  "_date": "1801",
  "caption": "Costume Paré.",
  "translation": "Dressy costume.",
  "student": "Barthélemy Glama"
});
index.addDoc({
  "lunr_id": 54,
  "link": "{{ site.baseurl }}/plates/287/",
  "title": "Plate 287",
  "_date": "",
  "caption": "Costume de Bal",
  "translation": "Ball Costume",
  "student": "Jodi Mikesell"
});
index.addDoc({
  "lunr_id": 55,
  "link": "{{ site.baseurl }}/plates/294/",
  "title": "Plate 294",
  "_date": "",
  "caption": "Coeffure Grecque. Longchamp.",
  "translation": "Greek hairstyle. Longchamp.",
  "student": "Anne Higonnet"
});
index.addDoc({
  "lunr_id": 56,
  "link": "{{ site.baseurl }}/plates/297/",
  "title": "Plate 297",
  "_date": "30 avril 1801",
  "caption": "Toquet Brodé, à Pointes.",
  "translation": "Cap with embroidered edges.",
  "student": "Emily Cormack"
});
index.addDoc({
  "lunr_id": 57,
  "link": "{{ site.baseurl }}/plates/298/",
  "title": "Plate 298",
  "_date": "May 1800",
  "caption": "Costume d'un jeune homme",
  "translation": "A young man's outfit",
  "student": "Brontë Hebdon"
});
index.addDoc({
  "lunr_id": 58,
  "link": "{{ site.baseurl }}/plates/299/",
  "title": "Plate 299",
  "_date": "10 mai 1801",
  "caption": "Coeffure négligée en Cheveux.",
  "translation": "Undressed hairstyle in hair.",
  "student": "Emily Cormack"
});
index.addDoc({
  "lunr_id": 59,
  "link": "{{ site.baseurl }}/plates/3/",
  "title": "Plate 3",
  "_date": "1797",
  "caption": "Chapeau-Spencer, Robe de Linon, Schall Long, Rubans croisés, en forme de Cothurne",
  "translation": "Spencer hat, Linen dress, long shawl, Cothurne (type of boot worn by actors in Greek tragedies) tied with crossing ribbons",
  "student": "Avery Schroeder"
});
index.addDoc({
  "lunr_id": 60,
  "link": "{{ site.baseurl }}/plates/301/",
  "title": "Plate 301",
  "_date": "20 or 25 mai 1801?",
  "caption": "Collier en serpent. Voile à la Religieuse.",
  "translation": "Serpent necklace. Veil like a nun.",
  "student": "Emily Cormack"
});
index.addDoc({
  "lunr_id": 61,
  "link": "{{ site.baseurl }}/plates/316/",
  "title": "Plate 316",
  "_date": "1801",
  "caption": "Costume d'un Jeune Homme.",
  "translation": "Costume of a young man.",
  "student": "Barthélemy Glama"
});
index.addDoc({
  "lunr_id": 62,
  "link": "{{ site.baseurl }}/plates/321/",
  "title": "Plate 321",
  "_date": "1801",
  "caption": "Chapeau parfaitement rond. Habit boutonné.",
  "translation": "Perfectly round hat. Buttoned suit.",
  "student": "Barthélemy Glama"
});
index.addDoc({
  "lunr_id": 63,
  "link": "{{ site.baseurl }}/plates/322/",
  "title": "Plate 322",
  "_date": "18 or 23 août 1801?",
  "caption": "Chapeau de Crêpe. Robe de Mousseline.",
  "translation": "Crêpe hat. Muslin dress.",
  "student": "Emily Cormack"
});
index.addDoc({
  "lunr_id": 64,
  "link": "{{ site.baseurl }}/plates/329/",
  "title": "Plate 329",
  "_date": "12 septembre 1801",
  "caption": "Mise d'un Jeune Homme",
  "translation": "Outfit of a Young Man",
  "student": "Zoë Dostal"
});
index.addDoc({
  "lunr_id": 65,
  "link": "{{ site.baseurl }}/plates/332/",
  "title": "Plate 332",
  "_date": "02 octobre 1801",
  "caption": "Triple Aigrette de Diamans. Schall de Cachemire",
  "translation": "Triple Crest of Diamonds. Cashmere Shawl.",
  "student": "Zoë Dostal"
});
index.addDoc({
  "lunr_id": 66,
  "link": "{{ site.baseurl }}/plates/333/",
  "title": "Plate 333",
  "_date": "07 octobre 1801",
  "caption": "Corsage garni en Tulle. Manches à l'Anglaise.",
  "translation": "Corset decorated in Tulle. English Sleeves.",
  "student": "Zoë Dostal"
});
index.addDoc({
  "lunr_id": 67,
  "link": "{{ site.baseurl }}/plates/334/",
  "title": "Plate 334",
  "_date": "07 octobre 1801",
  "caption": "1. Bonnets d'Enfans. 2. Chapeau d'éffilé nuancé. 3. Paysanes. 4. Toquets de Dent.le en Tulle. 5. Cornette en Diadême. 6. Coeffures allongées, en Mousseline.",
  "translation": "1. Children's bonnet 2. Finely fringed hat 3. Peasant style 4. Peasant-styel bonnet in lace and tulle 5. Diadem Cornette 6. Extended style in mousseline",
  "student": "Zoë Dostal"
});
index.addDoc({
  "lunr_id": 68,
  "link": "{{ site.baseurl }}/plates/346/",
  "title": "Plate 346",
  "_date": "11 décembre 1803",
  "caption": "Turban posé sur un Bandeau.",
  "translation": "Turban fit under a headwrap.",
  "student": "Emily Cormack"
});
index.addDoc({
  "lunr_id": 69,
  "link": "{{ site.baseurl }}/plates/349/",
  "title": "Plate 349",
  "_date": "11 décembre 1801",
  "caption": "Coiffure en Cheveux, ornée d'un Bandeau de Perles",
  "translation": "Hair Headdress, ornamented with a Pearl Headband",
  "student": "Zoë Dostal"
});
index.addDoc({
  "lunr_id": 70,
  "link": "{{ site.baseurl }}/plates/352/",
  "title": "Plate 352",
  "_date": "05 Janvier 1802",
  "caption": "Schall de Drap. Bonnet du Matin.",
  "translation": "Sheet shawl. Morning Bonnet.",
  "student": "Zoë Dostal"
});
index.addDoc({
  "lunr_id": 71,
  "link": "{{ site.baseurl }}/plates/353/",
  "title": "Plate 353",
  "_date": "31 décembre 1801 (?)",
  "caption": "Coeffure Asiatique. Tunique de grande Parure.",
  "translation": "Asian headdress. Grandly adorned tunic.",
  "student": "Jodi Mikesell"
});
index.addDoc({
  "lunr_id": 72,
  "link": "{{ site.baseurl }}/plates/359/",
  "title": "Plate 359",
  "_date": "1801",
  "caption": "Chapeau à la Basile. Anglaise à trois collets",
  "translation": "Hat from Basel, English jacket with three collars",
  "student": "Brontë Hebdon"
});
index.addDoc({
  "lunr_id": 73,
  "link": "{{ site.baseurl }}/plates/363/",
  "title": "Plate 363",
  "_date": "1802",
  "caption": "Mise d'un Jeune Homme.",
  "translation": "Outfit of a young man.",
  "student": "Barthélemy Glama"
});
index.addDoc({
  "lunr_id": 74,
  "link": "{{ site.baseurl }}/plates/368/",
  "title": "Plate 368",
  "_date": "1802",
  "caption": "Chapeau à la Russe. Bottes sans couture.",
  "translation": "Russian-style hat. Seamless boots.",
  "student": "Barthélemy Glama"
});
index.addDoc({
  "lunr_id": 75,
  "link": "{{ site.baseurl }}/plates/378/",
  "title": "Plate 378",
  "_date": "15 avril 1801",
  "caption": "Bonnet du Matin.",
  "translation": "Morning Bonnet.",
  "student": "Zoë Dostal"
});
index.addDoc({
  "lunr_id": 76,
  "link": "{{ site.baseurl }}/plates/38/",
  "title": "Plate 38",
  "_date": "25 mai 1798",
  "caption": "Cheveux à la Titus, petit fichu quadrille mantelet gaze, garni en dentelle. Dessiné sur le Blvd de la Magdeleine.",
  "translation": "Hairstyle à la Titus small, short cape with a quadrille pattern, gaze mantle embellished with lace. Drawn on the Blvd Madeleine.",
  "student": "Sarah Bigler"
});
index.addDoc({
  "lunr_id": 77,
  "link": "{{ site.baseurl }}/plates/39/",
  "title": "Plate 39",
  "_date": "25 mai 1798",
  "caption": "Chignon relevé avec un Réseau, rosettes sur le dos de la robe. Dessiné au Jardin d’Idalie.",
  "translation": "Bun held up with a netted bonnet. Bows on the back of the dress. Drawn in the Jardin d’Idalie.",
  "student": "Sarah Bigler"
});
index.addDoc({
  "lunr_id": 78,
  "link": "{{ site.baseurl }}/plates/390/",
  "title": "Plate 390",
  "_date": "9 or 14 juin 1802?",
  "caption": "Bonnet du Matin, garni en Tulle.",
  "translation": "Morning bonnet, decorated in tulle.",
  "student": "Emily Cormack"
});
index.addDoc({
  "lunr_id": 79,
  "link": "{{ site.baseurl }}/plates/4/",
  "title": "Plate 4",
  "_date": "1797",
  "caption": "Toquet froncé à coulisses. Redingotte croiseée. Schall long chaine d'or portant un couer en cristal.",
  "translation": "Gathered toquet (peasant style bonnet) with wings. Crossed over-sized coat. Long shawl, gold chain with a crystal spout. ",
  "student": "Meghan Collins"
});
index.addDoc({
  "lunr_id": 80,
  "link": "{{ site.baseurl }}/plates/40/",
  "title": "Plate 40",
  "_date": "2 juin 1798",
  "caption": "Jeune élégante Revenant de la Promenade en Négligé du Matin (Dessiné Rue Vivienne)",
  "translation": "Young stylish woman returning from a walk in morning dress. (Drawn Rue Vivienne)",
  "student": "Emily Cormack"
});
index.addDoc({
  "lunr_id": 81,
  "link": "{{ site.baseurl }}/plates/41/",
  "title": "Plate 41",
  "_date": "2 juin 1798",
  "caption": "Cornette à la paysanne, ornée de fleurs, Robe lacée. Tivoli.",
  "translation": "Bonnet with a gathered crown, ornamented with flowers, laced dress.",
  "student": "Sarah Bigler"
});
index.addDoc({
  "lunr_id": 82,
  "link": "{{ site.baseurl }}/plates/416/",
  "title": "Plate 416",
  "_date": "2 octobre 1802",
  "caption": "Chevelure à demi Découverte.",
  "translation": "Half-covered hairstyle. (?)",
  "student": "Emily Cormack"
});
index.addDoc({
  "lunr_id": 83,
  "link": "{{ site.baseurl }}/plates/42/",
  "title": "Plate 42",
  "_date": "8 juin 1798",
  "caption": "Chapeau de paille blanc garni de son fichu et lassé sur le côté, Schall de soie en tulle. Dessiné aux Champs-Élysée",
  "translation": "White straw hat decorated with her scarf and tied on the side. Shawl made of silk and tulle. Drawn on the Champs-Élysée",
  "student": "Sarah Bigler"
});
index.addDoc({
  "lunr_id": 84,
  "link": "{{ site.baseurl }}/plates/422/",
  "title": "Plate 422",
  "_date": "27 octobre 1802",
  "caption": "Turban à la Mameluck. Boucles d'Oreilles de Corail.",
  "translation": "Mameluke Turban. Coral Earrings.",
  "student": "Zoë Dostal"
});
index.addDoc({
  "lunr_id": 85,
  "link": "{{ site.baseurl }}/plates/424/",
  "title": "Plate 424",
  "_date": "6 novembre 1802",
  "caption": "Coiffure ornée d'une Flèche et d'un Peigne renversé.",
  "translation": "Headdress ornamented with an arrow and a reversed comb",
  "student": "Zoë Dostal"
});
index.addDoc({
  "lunr_id": 86,
  "link": "{{ site.baseurl }}/plates/425/",
  "title": "Plate 425",
  "_date": "6 novembre 1802",
  "caption": "Voile et Tunique à la Vestale.",
  "translation": "Vestal Virgin Veil and Tunic",
  "student": "Zoë Dostal"
});
index.addDoc({
  "lunr_id": 87,
  "link": "{{ site.baseurl }}/plates/43/",
  "title": "Plate 43",
  "_date": "14 juin 1798",
  "caption": "Chapeau plissé et lassé. Médaillon en ecusson, garniture di robe en comète. Dessiné au Jardin d'Idalie/Italie",
  "translation": "Hat pleated and tied. Medallion with badge/insignia,....Drawn in the Jardin d'Idalie/Italie",
  "student": "Sarah Bigler"
});
index.addDoc({
  "lunr_id": 88,
  "link": "{{ site.baseurl }}/plates/432/",
  "title": "Plate 432",
  "_date": "1 décembre 1803",
  "caption": "Fichu noué en Cravate. Robe de Florence.",
  "translation": "Headscarf tied as Cravat (?). Dress in a Florentine style.",
  "student": "Jodi Mikesell"
});
index.addDoc({
  "lunr_id": 89,
  "link": "{{ site.baseurl }}/plates/44/",
  "title": "Plate 44",
  "_date": "18 juin 1798",
  "caption": "Fichu bore à pointes saillantes, pose de côté, sur un chapeau de paille blanche. Manches longue sans doublure. Dessiné sur le Boulevard Montmartre. ",
  "translation": "Scarf with pointed ends, tied on one side of a white straw hat. Long sleeves without lining. Drawn on the Boulevard Montmartre. ",
  "student": "Sarah Bigler"
});
index.addDoc({
  "lunr_id": 90,
  "link": "{{ site.baseurl }}/plates/445/",
  "title": "Plate 445",
  "_date": "30 janvier 1803",
  "caption": "Turban de grande Parure. Robe du Matin.",
  "translation": "Grand Parure Turban. Morning Dress.",
  "student": "Zoë Dostal"
});
index.addDoc({
  "lunr_id": 91,
  "link": "{{ site.baseurl }}/plates/45/",
  "title": "Plate 45",
  "_date": "23 juin 1798",
  "caption": "Chapeau à la minevre, robe zébrée. Tivoli 24 Prairial",
  "translation": "Chapeau à la minevre, stripped dress. Tivoli 24 Prairial. ",
  "student": "Sarah Bigler"
});
index.addDoc({
  "lunr_id": 92,
  "link": "{{ site.baseurl }}/plates/450/",
  "title": "Plate 450",
  "_date": "1803",
  "caption": "Costume d'Etiquette.",
  "translation": "Court costume.",
  "student": "Barthélemy Glama"
});
index.addDoc({
  "lunr_id": 93,
  "link": "{{ site.baseurl }}/plates/456/",
  "title": "Plate 456",
  "_date": "1803",
  "caption": "Grande parure. Le Dessin n'ayant pas été gravé au Miror, l'Epée se trouve à droite.",
  "translation": "Formal court costume.",
  "student": "Barthélemy Glama"
});
index.addDoc({
  "lunr_id": 94,
  "link": "{{ site.baseurl }}/plates/46/",
  "title": "Plate 46",
  "_date": "28 juin 1798",
  "caption": "Manches courtes relevée avec des glans sur les manches de satin, rosette sur le devant de la robe. Sac à ouvrage. Tivoli 30 Prairial",
  "translation": "short sleeves held up with ? on the satin sleeves, bow on the front of the dress. work bag. Tivoli 30 Prairial",
  "student": "Sarah Bigler"
});
index.addDoc({
  "lunr_id": 95,
  "link": "{{ site.baseurl }}/plates/467/",
  "title": "Plate 467",
  "_date": "05 mai 1803",
  "caption": "Bonnet du Matin, Corset Elastique.",
  "translation": "Morning Bonnet, Elastic Corset.",
  "student": "Jodi Mikesell"
});
index.addDoc({
  "lunr_id": 96,
  "link": "{{ site.baseurl }}/plates/47/",
  "title": "Plate 47",
  "_date": "3 Julliet 1798",
  "caption": "Voile à l'Iphigenie, mantelet blanc. sac à devise. Champs-Élysée",
  "translation": "Iphigenia veil, white mantle, money bag – Champs-Élysées",
  "student": "Sarah Bigler"
});
index.addDoc({
  "lunr_id": 97,
  "link": "{{ site.baseurl }}/plates/48/",
  "title": "Plate 48",
  "_date": "11 or 14 Julliet 1798",
  "caption": "Chapeau coquet, manche couleur sous une robe blanche. fateuil en acajou, imité du l'antique",
  "translation": "Fashionable/trendy hat. colored sleeves under a white dress. Mahogany chair imitating an antique style.",
  "student": "Sarah Bigler"
});
index.addDoc({
  "lunr_id": 98,
  "link": "{{ site.baseurl }}/plates/481/",
  "title": "Plate 481",
  "_date": "4 juillet 1803",
  "caption": "Cornette sous un Voile. Garnitures en Fraises.",
  "translation": "Cornette under a veil. Ruffled ribbons.",
  "student": "Zoë Dostal"
});
index.addDoc({
  "lunr_id": 99,
  "link": "{{ site.baseurl }}/plates/483/",
  "title": "Plate 483",
  "_date": "juillet 1803?",
  "caption": "Capote d’Organdie, piquée.",
  "translation": "Stitched organdy coat.",
  "student": "Emily Cormack"
});
index.addDoc({
  "lunr_id": 100,
  "link": "{{ site.baseurl }}/plates/49/",
  "title": "Plate 49",
  "_date": "13 Juillet",
  "caption": "Chapeau a fond ouvert et boutonné. Lassures croisées, cheveux naissons, schall en travers. Tivoli",
  "translation": "Hat lace up back, hair ? shawl drapped across. Tivoli",
  "student": "Sarah Bigler"
});
index.addDoc({
  "lunr_id": 101,
  "link": "{{ site.baseurl }}/plates/5/",
  "title": "Plate 5",
  "_date": "1797",
  "caption": " Toquet d'enfant, garni en dentelle, Bride noire Spencer, Robe Blanche, sure un Transparent",
  "translation": "Peasant-style children's bonnet, trimmed with lace, Spencer with black flange, White dress with a transparent layered on top of it",
  "student": "Avery Schroeder"
});
index.addDoc({
  "lunr_id": 102,
  "link": "{{ site.baseurl }}/plates/50/",
  "title": "Plate 50",
  "_date": "18 Julliet 1798",
  "caption": "Clotilde dans le Ballet de Paris (Théâtre de l'Opéra)",
  "translation": "Clotilde at the Parisian Ballet. Théâtre de l'Opéra",
  "student": "Sarah Bigler"
});
index.addDoc({
  "lunr_id": 103,
  "link": "{{ site.baseurl }}/plates/51/",
  "title": "Plate 51",
  "_date": "23 Juillet 1798",
  "caption": "Capote en crêpe noir, garni de trois nattes, doliman de couleur. Parc Mousseaux.",
  "translation": "Hat with stiff brim and soft crown made of black crepe, trimmed with three braided ribbons, Colorful Turkish costume. Parc Mousseaux.",
  "student": "Sarah Bigler"
});
index.addDoc({
  "lunr_id": 104,
  "link": "{{ site.baseurl }}/plates/52/",
  "title": "Plate 52",
  "_date": "28 Juillet 1798",
  "caption": "Capote en crêpe jaune garnie en noir. Sac à falbalasse. Champs-Élyseée.",
  "translation": "Yellow Hat with stiff brim and soft crown, embellished with black. Embroidered bag. Champs-Élyseée",
  "student": "Sarah Bigler"
});
index.addDoc({
  "lunr_id": 105,
  "link": "{{ site.baseurl }}/plates/53/",
  "title": "Plate 53",
  "_date": "2 aout 1798",
  "caption": "Chapeau garni de deux fichu. Rosettes symétriques.",
  "translation": "Hat adorned with two scarves, tied in two symmetrical bows.",
  "student": "Sarah Bigler"
});
index.addDoc({
  "lunr_id": 106,
  "link": "{{ site.baseurl }}/plates/54/",
  "title": "Plate 54",
  "_date": "7 aout 1798",
  "caption": "Chapeau orné d'une Guirlande en coques. Voile blanc. Collier-en-Cheveux. Chemise noir. Tivoli.",
  "translation": "Hat ornamented with a garland of shells. White veil, hair necklace, black dress. Tivoli.",
  "student": "Sarah Bigler"
});
index.addDoc({
  "lunr_id": 107,
  "link": "{{ site.baseurl }}/plates/55/",
  "title": "Plate 55",
  "_date": "",
  "caption": "Belmont dans Belle et Bonne (Théâtre du Vaudeville)",
  "translation": "Mme. Belmont in Belle et Bonne (The Two Sisters) at Théâtre du Vaudeville on 25 November 1797.",
  "student": "Sarah Bigler"
});
index.addDoc({
  "lunr_id": 108,
  "link": "{{ site.baseurl }}/plates/56/",
  "title": "Plate 56",
  "_date": "1797",
  "caption": "Cheveux à la Caracalla, Sac à ouvrage, appellé Balantine, Sandales",
  "translation": "Hair in the Caracalla style, work/utility pocket, called Balantine (balantine also means pocket with tassels and chords), sandals",
  "student": "Avery Schroeder"
});
index.addDoc({
  "lunr_id": 109,
  "link": "{{ site.baseurl }}/plates/57/",
  "title": "Plate 57",
  "_date": "22 aout 1798",
  "caption": "Cheveux à la Titus, echarpe agrafée sur l'épaule. Manteau sur le bras, gants froncés. Tivoli.",
  "translation": "Hair à la Titus, scarf fastened at the shoulder, Mantle draped over arm, gathered gloves. Tivoli.",
  "student": "Sarah Bigler"
});
index.addDoc({
  "lunr_id": 110,
  "link": "{{ site.baseurl }}/plates/58/",
  "title": "Plate 58",
  "_date": "",
  "caption": "Capote Mattée, garnie dun Papillon. Manches lacées. Schall en Echarpe.",
  "translation": "Mattée Cape, decorated with a buterfly.Sleeves lacées. Schall en Echarpe.",
  "student": "Ana Karen Aguero"
});
index.addDoc({
  "lunr_id": 111,
  "link": "{{ site.baseurl }}/plates/59/",
  "title": "Plate 59",
  "_date": "",
  "caption": "Négligé garni de deux Nattes. Fichu à pointe peu Saillante.",
  "translation": "Scruffy hair decorated with two plaits. Headscarf in a little prominent point.",
  "student": "Ana Karen Aguero"
});
index.addDoc({
  "lunr_id": 112,
  "link": "{{ site.baseurl }}/plates/6/",
  "title": "Plate 6",
  "_date": "1797",
  "caption": "Turban à Calotte plate, orné de Perles et d'un Plumet, Robe froncée, Schall en Sautoir",
  "translation": "Turban attached to a flat ‘Calotte’ bonnet, ornamented with beads and a plume, a gathered dress, a shawl draped from the neck to below the chest\n",
  "student": "Avery Schroeder"
});
index.addDoc({
  "lunr_id": 113,
  "link": "{{ site.baseurl }}/plates/60/",
  "title": "Plate 60",
  "_date": "",
  "caption": "Coeffure en Fichu. Tour de Cheveux postiche. Falblas Sous la Robe.",
  "translation": "Plaits in the scarf. Tour the fake hair. Ruffle dress under the dress.",
  "student": "Ana Karen Aguero"
});
index.addDoc({
  "lunr_id": 114,
  "link": "{{ site.baseurl }}/plates/61/",
  "title": "Plate 61",
  "_date": "",
  "caption": "Négligé à fond de Couleur. Bride en dessus. Rose sur le côté. Chemise sans Manches. Schall à franges. Lunette à deux Branches.",
  "translation": "Undergarmit of color. Support on the top. Pink on the side. Blouse without sleeves.",
  "student": "Ana Karen Aguero"
});
index.addDoc({
  "lunr_id": 115,
  "link": "{{ site.baseurl }}/plates/62/",
  "title": "Plate 62",
  "_date": "",
  "caption": "Cheveux à la Titus. Tunique Courte, garnie d´Agrèmens en Chenille.",
  "translation": "Hair like Titus. Short tunic, decorated with d´agémens in Caterpillar.",
  "student": "Ana Karen Aguero"
});
index.addDoc({
  "lunr_id": 116,
  "link": "{{ site.baseurl }}/plates/63/",
  "title": "Plate 63",
  "_date": "",
  "caption": "Capote en Crêpe, garnie d´une Bande Plissée, de Couleur Franchante, Fuirlande à plis crevés. Schall presque quarré.",
  "translation": "Cape in Crêpe, decorated with one wrinkle stripe, in the colour tranchante, Decorated in crevés folds. Schall almost squared.",
  "student": "Ana Karen Aguero"
});
index.addDoc({
  "lunr_id": 117,
  "link": "{{ site.baseurl }}/plates/64/",
  "title": "Plate 64",
  "_date": "",
  "caption": "Chapeau rond, à forme haute et plissée. Robe lacée en Losange, sur le orsage, sur les deux Manches, sur le bord infeérieur et sur les côtés.",
  "translation": "Round hat, in a big shape and wrinkles. Dress laced up in dimond shape, in the orsage, over two sleeves, on the lower border and on the sides.",
  "student": "Ana Karen Aguero"
});
index.addDoc({
  "lunr_id": 118,
  "link": "{{ site.baseurl }}/plates/65/",
  "title": "Plate 65",
  "_date": "",
  "caption": "Capote à haute forme, Taillée en pointes sur les côtés. Chaine d´or à large Mailles, formant Ceínture.",
  "translation": "Cape with a high shape, Craved in points on the side. Golden chain with big links, creating a belt.",
  "student": "Ana Karen Aguero"
});
index.addDoc({
  "lunr_id": 119,
  "link": "{{ site.baseurl }}/plates/66/",
  "title": "Plate 66",
  "_date": "",
  "caption": "Turban de forme Ovale, divisé par Bandes et orné d´un esprit. Fichu de Crêpe Noir.",
  "translation": "Turban with an oval shape, divided by strpes and decorated with a esprit. Scarf of crêpe black.",
  "student": "Ana Karen Aguero"
});
index.addDoc({
  "lunr_id": 120,
  "link": "{{ site.baseurl }}/plates/67/",
  "title": "Plate 67",
  "_date": "",
  "caption": "Cheveux Courts sous un Chignon tressé. Tunique plissée.Doliman à la Sauvage.",
  "translation": "Short hair under a braid bun. Wrinkled tunic. Wild looking Doliman.",
  "student": "Ana Karen Aguero"
});
index.addDoc({
  "lunr_id": 121,
  "link": "{{ site.baseurl }}/plates/68/",
  "title": "Plate 68",
  "_date": "",
  "caption": "Cornette en forme de Casque, garnie de Rubans Nuancés. Broderies etrusques. ",
  "translation": "Cornette in the shape of a helmet, decorated with shade ribbons. Etruscan embroderies.",
  "student": "Ana Karen Aguero"
});
index.addDoc({
  "lunr_id": 122,
  "link": "{{ site.baseurl }}/plates/69/",
  "title": "Plate 69",
  "_date": "",
  "caption": "Bonnet négligé, garni d´une Dentelle três-haute. Meubles en Acajou.",
  "translation": "Bonnet trimmed with a very high Lace. Mahogany furniture (?).",
  "student": "Ana Karen Aguero"
});
index.addDoc({
  "lunr_id": 123,
  "link": "{{ site.baseurl }}/plates/7/",
  "title": "Plate 7",
  "_date": "1797",
  "caption": "Chignon à la grecque, Relevé sur un Bonnet Rond,  Chemise à la Prêtresse, Mantelet de gaze, glands sur les souliers.",
  "translation": "Greek bun, raised or pulled up in a round bonnet, Priestess-style dress, Gauze/lace shawl, Shoes with tassels.",
  "student": "Avery Schroeder"
});
index.addDoc({
  "lunr_id": 124,
  "link": "{{ site.baseurl }}/plates/70/",
  "title": "Plate 70",
  "_date": "",
  "caption": "Turban à longue pointe. Lisieres de Mousseline en fil d´or, formant Garnitures.",
  "translation": "Elongated turban. Chiffon borders in thread of gold  forming decorations.",
  "student": "Ana Karen Aguero"
});
index.addDoc({
  "lunr_id": 125,
  "link": "{{ site.baseurl }}/plates/71/",
  "title": "Plate 71",
  "_date": "",
  "caption": "Turban et Spencer à L´ algérienne. Sac appellé RIDICULE, en forme de Corbille.",
  "translation": "Turban  and Spencer like an algerian. Ridiculous bag,in the shape of a basket.",
  "student": "Ana Karen Aguero"
});
index.addDoc({
  "lunr_id": 126,
  "link": "{{ site.baseurl }}/plates/72/",
  "title": "Plate 72",
  "_date": "",
  "caption": "Chapeau de Courrier. Schall Quarré.",
  "translation": "Post Hat. Schall Quarré",
  "student": "Ana Karen Aguero"
});
index.addDoc({
  "lunr_id": 127,
  "link": "{{ site.baseurl }}/plates/73/",
  "title": "Plate 73",
  "_date": "",
  "caption": "Toilette du Matin.",
  "translation": "Toilette in the Morning",
  "student": "Ana Karen Aguero"
});
index.addDoc({
  "lunr_id": 128,
  "link": "{{ site.baseurl }}/plates/74/",
  "title": "Plate 74",
  "_date": "",
  "caption": "Turban au Ballon. Ceinture croisée, Ridicule à Chiffre. Théâtre Faydeau.",
  "translation": "Turban with a Ball.Crossed belt, Handbag with Monogram.Faydeau Theater.",
  "student": "Anne Higonnet"
});
index.addDoc({
  "lunr_id": 129,
  "link": "{{ site.baseurl }}/plates/75/",
  "title": "Plate 75",
  "_date": "",
  "caption": "Chapeau Jockei, garni en Velours Coquelicot, Ceinture Croisée.Théâtre Italien.",
  "translation": "Jockey Hat, decorated with Poppy Velvet, Crossed Belt. Italien Theater.",
  "student": "Anne Higonnet"
});
index.addDoc({
  "lunr_id": 130,
  "link": "{{ site.baseurl }}/plates/76/",
  "title": "Plate 76",
  "_date": "",
  "caption": "Chapeau de Velours, orné de deux Plumes, Collier en esclavage. Théâtre Italien.",
  "translation": "Velvet Hat, decorated with two Feathers, Slave Necklace. Italien Theater",
  "student": "Anne Higonnet"
});
index.addDoc({
  "lunr_id": 131,
  "link": "{{ site.baseurl }}/plates/78/",
  "title": "Plate 78",
  "_date": "",
  "caption": "Variation du Chapeau de Courrier. Ceinture Croisée. Robe Ouverte sur le Côté. Théâtre Italien.",
  "translation": "Variation on the Courier Hat. Crossed Belt. Dress Open on the Side. Italien Theater",
  "student": "Anne Higonnet"
});
index.addDoc({
  "lunr_id": 132,
  "link": "{{ site.baseurl }}/plates/79/",
  "title": "Plate 79",
  "_date": "",
  "caption": "Amazone en Robe de Linon, Spencer de drap, Chapeau Jockei.",
  "translation": "Amazon in linen dress, wool spencer, jockey hat.",
  "student": "Meredith Levin"
});
index.addDoc({
  "lunr_id": 133,
  "link": "{{ site.baseurl }}/plates/8/",
  "title": "Plate 8",
  "_date": "1797",
  "caption": "Capote Anglaise, garnie en Crêpe, Bandeau de Velours, Guilloché en Or, Petit fichu croisé, Rubans en Cothurnes",
  "translation": "An English capote, decorated with crêpte material/fabric, velvet headband, embossed in gold, a little crossed scarf, ribboned Cothurne shoes",
  "student": "Avery Schroeder"
});
index.addDoc({
  "lunr_id": 134,
  "link": "{{ site.baseurl }}/plates/80/",
  "title": "Plate 80",
  "_date": "",
  "caption": "Bonnet négligé garni en Comètes. Schall de Casimir. Tuileries.",
  "translation": "Casual Bonnet decorated with Comets. Fine wool shawl. Tuileries",
  "student": "Anne Higonnet"
});
index.addDoc({
  "lunr_id": 135,
  "link": "{{ site.baseurl }}/plates/81/",
  "title": "Plate 81",
  "_date": "",
  "caption": "Demi-Capote posée de côté. Fichu. Tablier. Ridicule. Opéra.",
  "translation": "Kerchief. Apron. Handbag. Opera.",
  "student": "Anne Higonnet"
});
index.addDoc({
  "lunr_id": 136,
  "link": "{{ site.baseurl }}/plates/82/",
  "title": "Plate 82",
  "_date": "",
  "caption": "Capote Taillée en point sur le côté. Schall Ponceau. Tuileries.",
  "translation": "Soft-crowned, Stiff-brimmed Hat cut in a point on the side. Bright red shawl. Tuileries.",
  "student": "Anne Higonnet"
});
index.addDoc({
  "lunr_id": 137,
  "link": "{{ site.baseurl }}/plates/83/",
  "title": "Plate 83",
  "_date": "",
  "caption": "Chapeau à la Minerve. Robe Rayée Blanc sur Blanc. Théât. de la Rép.",
  "translation": "Minerva Hat. Striped White on White Dress. Theater de la République.",
  "student": "Anne Higonnet"
});
index.addDoc({
  "lunr_id": 138,
  "link": "{{ site.baseurl }}/plates/84/",
  "title": "Plate 84",
  "_date": "",
  "caption": "Chapeau de Velours Souci, orné de gances d’argent. Schall Ponceau à Bordures Noires. Magasin de Modes.",
  "translation": "Yellow-Orange Velvet Hat, trimmed with silver cord. Bright Red Shawl with Black Edges. Magasin de Modes.",
  "student": "Anne Higonnet"
});
index.addDoc({
  "lunr_id": 139,
  "link": "{{ site.baseurl }}/plates/85/",
  "title": "Plate 85",
  "_date": "",
  "caption": "Chapeau de Velours à fond plissé. Fichu – Schall à Bordure Effilée. Magasin de Modes.",
  "translation": "Velvet Hat with pleated crown. Kerchief – Shawl with Fringed Border. Magasin de Modes.",
  "student": "Anne Higonnet"
});
index.addDoc({
  "lunr_id": 140,
  "link": "{{ site.baseurl }}/plates/86/",
  "title": "Plate 86",
  "_date": "",
  "caption": "Toque de Velours, Bordée d’une Dentelle d’or, demi corset De Velours Ponceau. Opéra, 27 Nivose.",
  "translation": "Soft Velvet Hat, Edged with gold Lace, half corset In Bright Red Velvet. Opera, 27 Nivose.",
  "student": "Anne Higonnet"
});
index.addDoc({
  "lunr_id": 141,
  "link": "{{ site.baseurl }}/plates/88/",
  "title": "Plate 88",
  "_date": "15 January 1798",
  "caption": "Tournure d'un jeune homme.",
  "translation": "Young man's outfit",
  "student": "Brontë Hebdon"
});
index.addDoc({
  "lunr_id": 142,
  "link": "{{ site.baseurl }}/plates/9/",
  "title": "Plate 9",
  "_date": "1797",
  "caption": "Chignon à la Grecque, entrelacé avec un Fichu de couleur, Bandeau en Cheveaux, Collier de Perles, Ceinlure à la Victime",
  "translation": "Greek bun, interlaced with a colored hankerchief, headband in the hair, beaded necklace, victims belt",
  "student": "Avery Schroeder"
});
index.addDoc({
  "lunr_id": 143,
  "link": "{{ site.baseurl }}/plates/93/",
  "title": "Plate 93",
  "_date": "15 February 1798",
  "caption": "Cheveux courts, gilets bordés, pantalon et Bottines.",
  "translation": "Short hair, bordered vest, pants and boots",
  "student": "Brontë Hebdon"
});
index.addDoc({
  "lunr_id": 144,
  "link": "{{ site.baseurl }}/plates/94/",
  "title": "Plate 94",
  "_date": "20 February 1798",
  "caption": "Chapeau de paille blanche, ample voile. spencer de drap. ",
  "translation": "Straw Hat, large veil, draped spencer",
  "student": "Brontë Hebdon"
});
index.addDoc({
  "lunr_id": 145,
  "link": "{{ site.baseurl }}/plates/98/",
  "title": "Plate 98",
  "_date": "",
  "caption": "Bonnet - Turban en Crêpe. fichu - Ceinturen",
  "translation": "Turban bonnet made of crepe fabric. Scarf-belt.",
  "student": "Jodi Mikesell"
});
index.addDoc({
  "lunr_id": 146,
  "link": "{{ site.baseurl }}/plates/an11/",
  "title": "An 11 Morgan Modes et Caricat no 15",
  "_date": "1802/1803",
  "caption": "Modes et Caricat no. 15",
  "translation": "Fashion and caricatures, number 15.",
  "student": "Emily Cormack"
});
var store = [{
    "lunr_id": 0,
    "link": "{{ site.baseurl }}/anticomania/",
    "title": "Anticomania",
    "student": "",
    "content": " Anticomania The love for all things antique or worldy The French revolution instituted an era characterized by a greater emphasis on individual rights. This focus on the individual ushered in an explosion of unique, new fashion styles for both men and women. Particularly fashionable, was ‘anticomania’- a reimagining of worldly and antique styles- particularly those of Greek, Roman, and far East origins. In this plate, we see the impact of both the turban style as well as a 'Lisbeth corset' so named after Mme. Saint-Aubin, an actress who played the part of Lisbeth in a Favières and Grétry comic opera. Minerva Bonnets "
  },
  {
    "lunr_id": 1,
    "link": "{{ site.baseurl }}/fashionvictims/",
    "title": "Fashion Victims",
    "student": "",
    "content": " Fashion Victims Victim's Belt Echos of the Terror manifested in fashion through the ceinture a la victime, or 'victim's belt.' A bright red sash was wrapped round the torso and shoulders- a macabre reminder of the violence and bloodshed which had so recently taken place. Coiffure à la Titus Contributing to this popularity of this unconventional hairstyle was the phenomenon of ‘guillotine romanticism.’ "
  },
  {
    "lunr_id": 2,
    "link": "{{ site.baseurl }}/glossary/",
    "title": "Glossary",
    "student": "",
    "content": " Glossary The Textile & Materials Glossary and The Persistence of Color Glossary provide English translations of French textile, material, and color terms from the captions and descriptions of Journal des dames et des mode plates. These glossaries are the first of their kind. They give public access to eighteenth and early nineteenth-century words whose meanings have often changed, or been forgotten. Together, they form a fashion vocabulary and rhetoric as historically specific verbally as the magazine’s plates are visually. Textiles &amp; MaterialsGlossary The Persistenceof Color "
  },
  {
    "lunr_id": 3,
    "link": "{{ site.baseurl }}/indianfabrics/",
    "title": "Indian Fabrics",
    "student": "",
    "content": " Indian Fabrics The fabrics for the most iconic women's clothes of this period came from India. Only in India, was there the technical ability to produce the finest cotton muslins, sometimes called 'mulls.' Cashmere shawls, came from Kashmir; where they were also the product of unrivaled textile techniques. "
  },
  {
    "lunr_id": 4,
    "link": "{{ site.baseurl }}/macroscope/",
    "title": "Macroscope of the *Journal des dames et des modes*",
    "student": "",
    "content": " # {{ page.title }} This study is based on 499 images of the *Journal des dames et des modes* provided by The Morgan Library and Museum. The images were cropped in Photoshop and resized by 702x1248 pixels. In the original plates you can notice that each figure is framed with a black rectangle and also has a brief text describing the scene. For this study, I decided to crop the frame and text because they do not add any relevant information when analyzing the visual aspect of the portrayed human figures or accessories. On the other hand, it is important to mention that the images of the original plates are photographs of different sizes and taken with different light quality. Some of the photographs are also a bit cropped and tilted. All of these factors influenced the visualizations created in ImageJ and ImagePlot. After croping and resizing all the images, a spreadsheet was created in Excel to add the metadata of each image. Subsequently, the edited images ready and the metadata were imported to ImageJ as an the image sequence. Using that software I created a Montage of 25 by 20 images of the *Journal des dames et des modes.* ![](/images/macroscope/image1.png) Image 1. Montage of 499 plates Even though the Montage seems quite uniform it is possible to distinguish some patterns of color, changes on space distribution. When all the *Journal des dames et des modes* plates from 1797 to 1804 can be seen together, overall patterns in their design became apparent: almost all plates represent single figures; women’s clothing far outnumbers men’s; hats, headpieces and hairstyles get special attention. The Montage starts with the first image of the collection of the year 1797 on the top left side of the screen and ends with the the plate 499 of the An 11 on the bottom right side. The images are arranged chronologically. The first images that appear on top, are from the year 1797 and share pastel colors with costumes with brighter accents. Many of the images from An 6 and some of the beginning of An 7 (rows 3 and 4 of the Montage) depict women in lighter garments. The rows 5 to 7 correspond to the plates of An 7 where we can observe the accent of accessories and textiles in red and purple. Also, during the An 7 we can appreciate the first plates that were published regarding fashion accessories (row 7). The presence of plates that are exclusively showing accessories continues through the years with 4 plates for the An 8, 7 plates for An 9, 4 plates for An 10 and 11 plates for An 11. In the last 5 rows of the Montage besides the high presence of accessory plates we can also notice the use of darker clothes such as green, gray and blue. To make the changes through time more evident an average density visualization for each years was created. ## Average Intensity of the Images Per Year Created in ImageJ ![](/images/macroscope/image2.png) Image 2. Average intensity plates of 1797 This visualization corresponds to the plates that form the first row of the Montage (Image 1). We can note that the plates of 1797 share a common use of the space and color. The action is centered in the upper middle part of the plate, but we can notice the trace of fans to both sides of the main figure. The following year the makers of the plates made greater use of the space (Image 3). We distinguish the contour of arms and bottom part of dresses and skirts that occupy the side parts of the plates. ![](/images/macroscope/image3.png) Image 3. Average intensity plates of 1798 In the following visualizations, Image 4 to Image 9, we observe that the figures appear more as a shadow with softer lines and colors. The use of the space follows a similar pattern as in the plates published during the years 1797 and 1798. However, the amount of plates created from An 6 to An 11 was much bigger. When superimposing the images, it translates in visualizations with subtle lines. Additionally, during that time period (An 7 to An 11), the *Journal des dames et des modes* started printing plates that exclusively featured accessories. Image 9 was created combining the plates of An 11. As mentioned before, that year was the one that counted with the most display of accessories. The change is also reflected in the use of the space that becomes a bit less centered. ![](/images/macroscope/image4.png) Image 4. Average intensity plates of An 6 ![](/images/macroscope/image5.png) Image 5. Average intensity plates of An 7 ![](/images/macroscope/image6.png) Image 6. Average intensity plates of An 8 ![](/images/macroscope/image7.png) Image 7. Average intensity plates of An 9 ![](/images/macroscope/image8.png) Image 8. Average intensity plates of An 10 ![](/images/macroscope/image9.png) Image 9. Average intensity plates of An 11 ## Visualization of the Collection of 499 Images Using ImagePlot Furthermore, to identify similarities and differences between the 499 plates on brightness and saturation dimensions I created a visualization using ImagePlot. In ImageJ, running the macro called ImageMeasure, I was able to obtain other information about the images such as median brightness, brightness stdev., saturation median, saturation stdev., hue median and hue stdev.. With that information an Excel document (.txt) was created and later used with ImagePlot macro. ![](/images/macroscope/image10.png) Image 10. ImagePlot visualization of 499 plates of the *Journal des dames et des modes* from 1797 to 1804 X-axis = brightness median. Y- axis= saturation median. The plates of the Journal des dames et des modes turn out to be quite consistent in their design, indicating a single, decisive editorial vision. This visualization (Image 10) creates a main rectangular cluster of images that have similar brightness and saturation. Most of the images are located in the lower right side of the space which means that they share a medium to high brightness value and a low to medium saturation. Many of the 499 images that are part of this representation share the same brightness and saturation values and appear to be superimposed over each other. The main cluster of images is not symmetrical and the bottom left side seem denser with a higher number of plates. From the 499 images used to create this visualization there is only one plate that is very different from the rest. It is a plate that was published during the An 8 and depicts a woman lying on a bed. The image has a low brightness median and a very high saturation. Moreover, it is possible to identify how different fashion styles or characters shared similar brightness and saturation values. To make this more evident the last two images of this project are a detailed view of the ImagePlot visualization of 499 plates of the *Journal des dames et des modes.* In Image 11, we can recognize how most of the the plates that represent male figures are closer in brightness and saturation values. Most of men are represented wearing darker clothes and stronger colors. Something similar happened with the plates of women accessories represented in Image 12. The group of images that depict accessories share a higher level of brightness than most of the plates. ![](/images/macroscope/image11.png) Image 11. Detail of image 10, plates that portrayed male figures. ![](/images/macroscope/image12.png) Image 12. Detail of image 10, plates that illustrate accessories. The result of the visualizations of the average intensity of the plates per year and the one analyzing the brightness and saturation show several similarities. Specifically, it is possible to talk about the existence of a distinctive style in the *Journal des dames et des modes.* The existence of one big group of images that have comparable brightness and saturation values and create one main cluster tell us that during the years of the publication there were aesthetic standards that were maintained. We can recognize that the Journal cultivated a distinguished signature approach that had similar characteristics, like the use of the space, and color palette through the years and through many different plates makers. --- ## Bibliography Manovich, Lev. [Style Space: How to compare image sets and follow their evolution.](http://lab.softwarestudies.com/2011/08/style-space-how-to-compare-image-sets.html) Software Studies 2011."
  },
  {
    "lunr_id": 5,
    "link": "{{ site.baseurl }}/map/",
    "title": "Map",
    "student": "",
    "content": " Mapping theJournal des dames et des modes Interactive Map of Paris Printing and Selling the Journal The first edition of the Journal des dames et des modes was released on March 20, 1797 by Jean-Baptiste Sellèque and Pierre de La Mésangère. Originally composed of 8 text pages plus 1 or 2 fashion engravings, a new issue of the Journal appeared about every 5 days. Parisian readers could subscribe for the cost of 30 francs per year, 16 francs per 6 months, and 9 francs per quarter in 1798. Because the Journal's production required the collaborative efforts of workers in many different trades, it was created in several places. This map visualizes where the Journal's offices were located, where it was printed, and where it was available to purchase. Fashionable Spots This map documents the fashion hotspots named in captions to Journal des dames et des modes plates. In the earliest and most radical years of the JDM, 1797-1798, these 38 plates cite 18 specific locations in Paris where the fashions illustrated were seen. Unlike any other fashion plates from the period, these depict women alone in urban streets and public spaces. The locations mentioned by the JDM are mainly theaters and parks—spaces of spectacle and display concentrated in the northwestern part of the city. While a few of these places survive, many have disappeared. The map allows us to see how close these places were to each other, and to the offices of the JDM, forming a network of fashionable sociability in revolutionary Paris. "
  },
  {
    "lunr_id": 6,
    "link": "{{ site.baseurl }}/parisvslondon/",
    "title": "Paris vs. London",
    "student": "",
    "content": " Paris vs. London Many of the fashions depicted in the Journal des dames et des modes from 1797-1804 are strikingly radical and uniquely Parisian. Comparing JDM plates to fashions from British journals printed in London reinforces these claims, but also shows commonalities between the two warring countries. The infographic below (click to enlarge) draws comparisons between JDM and two British journals: Gallery of Fashion: Published from 1794 to 1803 by Nicholas Heideloff. Two plates featuring 1-3 figures each appeared monthly with accompanying descriptions. The Fashions of London and Paris: Published monthly from 1798 to 1806 with 2-3 plates of London fashions. Almost every month also included a plate titled 'Parisian Fashions' that directly copied fashions from the JDM with minor changes. It is notable that fashion plates from these two British journals only depicted women's fashions during this period, never men, and the female figures rarely appeared alone. Even when The Fashions of London and Paris copied JDM plates, they arranged two or more figures on the page - it would be highly improper for a woman to be out and about on her own! All images of the Gallery of Fashion are from the collection of the Kunstbibliothek, Staatliche Museen zu Berlin. All images of the The Fashions of London and Paris: are the author's own taken at the Yale Center for British Art. "
  },
  {
    "lunr_id": 7,
    "link": "{{ site.baseurl }}/persistencecolor/",
    "title": "The Persistence of Color",
    "student": "",
    "content": " The Persistence of Color This color glossary provides English translations of French late eighteenth-century terms related to color. Words for color, like many aspects of a language, come in and out of fashion, and alter in meaning or use. In order to find the meanings of color words in use between 1797 and 1804, period dictionaries and textile handbooks or sample-books were consulted, as well as an English fashion magazine whose plate descriptions are bilingual, the Miroir de la Mode. {{ letter | upcase }} {{ letter | upcase }} {{ color.name }}{{ color.description }} Alzan(e) Amaranthe Argent Aureus Aurore Azuré Blanc Bleu Bleu Clair Bleu Céleste Bleu Turquin Bleu Violet Blond Doré Blond(e) Bronzer Brun/brunette Caerulus Carmin(e) Carnation Chamois Châtain Citrin(e) Coquelicot Cromoisy/Cramoisy Cumatilis Cyaneus Gris Gris Dauphin Gris de Lin Gros Bleu Incarnadin Jay/Jais blanc Jaûne-Doré Jonquille Lilas Lilas Clair Lilas Foncé Marmote Mordoré Murinus Nacarat Noir Or Ponceau Porcelaine Pourpre Pourpre Clair Rose/Rosé Rouge Ruby Clair Ruby Foncé Souci Tricolor Verd/vert Vermeille Vert Brun Vert Celadon Vert Gai Vert Pistache Vert Pomme Vert de Mer Vert d’Èmeraude Violet a sorrel or chestnut brown color deep bluish-red, a shade of red named after the amaranth plant silver or of silver color term used to describe gold color yellow color with light red tones a blue mineral; a blue color, commonly called (pendant le XVIII siecle) bleu céleste white blue; sky color light blue a saturated bright blue turquoise blue a violet which has strong blue undertones flaxen, light yellowish color fair or light honey color the color of cast copper or brass, sometime dark brown of a brown color cerulean blue, deep/sky/azure blue, green-ish blue a red color flesh color yellow of a chestnut color of a lemon color, or pale yellow bright red, with an orange tint Crimson or grain color water-colored blue cyan blue, a green-ish blue color the color which is more or less mixed with white and black light lilac grey a color that looks like flaxseed, linen gray is a soft hue deep, navy blue bright carnation yellow color jet white the color of an orange (the fruit) daffodil yellow pastel purple, like a lilac flower light pastel purple dark pastel purple a grape-colored purple; the color of marmote grapes orangey bronze an orange color/ but might be reddish light red, between cherry and rose of the color black metallurgic gold (Au); the color gold bright strong red or poppy red porcelain white, grey purple with crimson undertones (more red than modern “purple”; see violet); made from cochineal light purple with crimson undertones color of roses, pink, color of dry roses; a color which is red and vermilion a color similar to blood or fire, saturated and brilliant hue light ruby red dark ruby red yellow-orange an ensemble of colors, typically yellow, green and red green or green color a brilliant red or scarlet pigment; made from the powdered mineral, cinnabar brownish green, murky in hue celadon green cheerful green (similar to Kelly green), bright in hue pistachio green apple green sea green emerald green purple, of purple color (more blue,than pourpre) "
  },
  {
    "lunr_id": 8,
    "link": "{{ site.baseurl }}/politicsofmasculinefashion/",
    "title": "Fashion Success vs. Legal Failure",
    "student": "",
    "content": " Fashion Successvs. Legal Failure About the project... Details "
  },
  {
    "lunr_id": 9,
    "link": "{{ site.baseurl }}/revolutionarycosts/",
    "title": "Revolutionary Costs",
    "student": "",
    "content": " Revolutionary Costs Pricing of yardage and economics of fabric importing "
  },
  {
    "lunr_id": 10,
    "link": "{{ site.baseurl }}/textilegloss/",
    "title": "Textile and Materials Glossary",
    "student": "",
    "content": " Textile & Materials Glossary This textile glossary brings together a broad range of vocabulary relating to French Directory and Consulate fashion plates, especially those in the Journal des dames et des modes. While by no means an exhaustive list, the purpose of this glossary is to provide quick reference material for those interested in reading the plate captions and descriptions, as well as those who want to know what the types of clothes idealized in the plates were actually made of. Please note that many textile terms changed over time according to location, language or evolving use ,and thus can have inconsistent meanings. Discrepancies can be cross-referenced from the list of sources below or from ARTFL's dictionary database. A addatis: Muslin or very fine, bright cotton cloth of medium to fine quality. The best samples came from Bengal, India in the seventeenth and eighteenth centuries. agabance: Also called agabaiiee, aggebance, and agibanis. Cotton fabric embroidered with silk, made in Aleppo, Syria. agaric: Cotton fabric similar to terry cloth, made with fine warp loop pile formed on wires. Commonly used for dresses. aigrette: Headdress with a white egret's feather decorated with diamonds. ajamis: Calico from the Near East. alamodes: A thin, light glossy black silk, not quilled. à l'antique: Suggestive of a specific costume common to another location, race or ethnic group. Examples are à la chemise, à la militaire, à la turque, à la peruque, à la niobe, à la mandoline, à la greque, à l'espagnole, à la polonaise, à la Billington, and à la Wurtenburg. alapeen: Mixed cloth of wool and silk primarily used for men's clothing but also sold to upholsterers. alibanies: Also called allibannees and allibanis. Striped cotton cloth carried to Holland from India, commonly produced as a mixed silk-and-cotton fabric in the seventeenth and eighteenth centuries. allégeas: Also called allegais or laychés. Fabric from India produced in two types. 1.) cotton, and 2.) herbs weaved with hemp or linen. Originally a striped cloth of mixed cotton-and-silk, this fabric was commonly red, blue and white, sometimes flowered and embellished with gold and silver thread. In the seventeenth century, allégeas was imported from South India. alliballies: Also called allibatis, alliabally, and allibali. Very fine muslin or a type of East Indian plain, brocaded or embroidered cotton. Some had selvages made with gold thread. aman/amand: A plain weave, blue cotton fabric made in the Near East. Formerly imported in France for the manufacture of curtains. amadis: Long, full sleeves gathered at intervals by bands around the arm. amierties: Also called ambertees, amertes, amertis, or emerties. A superior grade of white cotton cloth from India used in the lining of quilts. Amierties was a general use fabric, often used for block printing in England. angleterre: A lightweight, plain weave silk, often checked or striped. The term may have been intended to suggest silks patterned in the English taste. angola: Late eighteenth-century cashmere shawl imitation fabric. Name derived from Angora goat fur. angola shirting: Khaki shirting made of a mixture of wool and cotton in twill weave. arains: See armoisin or taffeta. armoisin: See sarcenet. A taffeta made in India, but of weaker and lower quality than the silk armoisins. The color is often carmine and red. There are two kinds. 1.) arains, which are striped taffetas and 2.) damasks, which are flowered taffetas. Often used for scholastic gowns, hatbands, and scarves. astarte: A French silk dress fabric of fine quality, made in a twill weave and printed with bold designs in brilliant colors. atchiabanes: A plain white fabric of coarse quality for general domestic use. Atchiabanes was imported from Bengal in the eighteenth century. atlas: Silk satin made in India often done plain, striped, flowered in gold or solely in silk. As a warp-faced satin and weave fabric, it has silk warps and cotton wefts. Atlas varieties include cotonis, cancantas, calquiers, cotonis-bouilles, bouilles, charmay or quemkas. augujli: A coarse Syrian bagging made of cotton mixed with other fibers. Better grades are dyed blue or are white with another color. B bafta/baffetas: Also called baffoted, baft, baftah, bufta, and baffs. A generic term for plain calico from India, varying from a coarse to fine quality. Those sent to Europe were usually white but those for Asian markets were more commonly dyed red, blue or black. Used domestically in the seventeenth century, bafta was a cotton or cotton and silk fabric derived from Persian wool or yarn. bajota: A coarse, bleached cotton fabric formerly sold by the Holland East Indian Trading Co. bajutapaux: Also called bejutapaux and bayutapaux. A term used in the African trade to describe a coarse cotton cloth with blue and white or red and white stripes. balais: Silk ribbons. balantine: A woman's handbag, sometimes worn hanging from the belt; nicknamed reticule or ridicule and used during the Directory. balzorine: A light material of mixed cotton and worsted manufactured for women's dresses. bas: Stockings, most often made of silk (bas de soie) or wool (bas de laine). basin: A cotton cloth made in different qualities and fashions. All are white and without nap. Twilled and serge basin were used to make corsets, petticoats and curtains. batavia: A silk fabric with a twill weave named after the place by the same name, now Jakarta, Indonesia, a Dutch colony in the eighteenth century. Batavia was fashionable in France in the 1760s. It was also known as Levantine and was often imitated in cotton. batiste: See chambray/cambric. A very fine, tightly woven fabric, usually linen or cotton. bavolet: A cap worn by French peasant women. bengal: A cheap silk imported from India made of mixed cotton and silk. It was usually striped. Betain: Also called betaine or beteela. An obsolete term applied to Indian muslin used for neckties, saris, and head coverings. betilles: Muslin or white cotton cloth from Pondichéry. There are three varieties, one coarse, another very fine, and one bright. The fabric was sometimes dyed red, sometimes striped or flowered with embroidery, and was in demand in Europe for neckcloths. It was often used as the base cloth for fine embroidery. bezane: A French term for various bleached, striped, or dyed Bengal cottons and calicos in the eighteenth century. blonde: Lightweight, shiny bobbin lace of raw silk. boide: Also called boi or boy. A coarse, heavy flannel in a plain, loose weave with cotton warp and wool. Boide was used in linings. bolsas: Also called bolzas or coutil. Bolsas was made of cotton thread imported from India in the seventeenth and eighteenth centuries. It was either all white or striped in yellow. bombasin: A silk cloth or a cloth woven from cotton thread. bouille-cotonis/bouille-charmay: See atlas. bouracan: Also called barracan, barragan, or camelot. A coarse cloth used to make coats. bourdaloue: A high crowned hat named after a famous seventeenth century Jesuit preacher. Under Louis XIV, the hat was turned up on each side. The final iteration turned up in three places – front, back and on the left side – where there was a button and a loop. Bourdaloue gave his name to the band around the hat. The band color initially imitated the hat color but soon became several bands of gold twisted around the crown. boutida: A fabric with a plain weave whose name has not yet been traced in any contemporary literature on textiles bretagne: A linen fabric of plain weave made in Brittany during the eighteenth century. It was often used for shirts because of its high quality. bride: The flange of a button or the border of a shirt. brillanté: A silk in a plain weave with a brocaded pattern. brocade/brocart: Traditionally, a type of silk damask with patterns woven in gold or silver. The main centers of production were Lyon and Tours. brocatelle: A gold or silk brocade with very rich ornamentation, usually polychrome and of Italian origin. broché: Brocade. A pattern made by wefts that only run the width of the motif and are then turned back. buskin: Calf-length, thick-soled laced boot originating in ancient Greece. Cothurnes were a type of Buskin that covered half of the leg and were laced in front. C cadis: A worsted cloth. In England and America, cadis refers to cheap worsted tape or ribbon. Cadogan: a hairstyle, with a low queue behind, folded on itself and tied in the middle cadrillé: Checked; à carreaux in modern French. calamande: Also called calamandre or calamandre. A fabric with a fine gloss made in Flanders and Brabant. calico: Inexpensive, brightly printed cotton cloth woven with carded yarns in a plain weave. Originally a lightweight printed cotton cloth of Indian origin. Early calicos used elaborate animal designs while later calicos were of coarser fabric. The fabric was first woven, then painted, dyed or printed with wood blocks. calotte: A small bonnet or cap that covers only the top of the head. calquiers: See atlas or taffeta. cambaye: A strong, coarse East Indian cotton fabric resembling linen. cambrai/ chambray: See batiste or gingham. Derived from Cambrai in France, chambray encompassed a broad class of plain weave, yarn-dyed cotton fabrics with a colored warp and white weft. While often in plain color, it was also available in stripes, checks or other patterns. cambraisines: Fine cloth from Egypt. cambresine: Fine linen fabric, a French term for fine, plain, lightweight cotton, linen fabric. cambric: A closely woven linen or cotton fabric. See batiste. camlet/camblet: Of Arabic origin, referring to pile or nap and to mohair. The name also applied to a wide variety of high quality, smooth fabrics made of wool, silk, etc., in plain or satin weave. Another type of camlet is a lightweight fabric woven of hard spun wool and cotton or linen yarn. cancantas: See atlas. canezou: A woman's high waisted jacket, usually sleeveless. cannelé: Any ribbed fabric with parallel ribs in the weft, formed by warp floats. cannellé: A warp-patterned silk with the textured effect in the ground or a pattern made entirely by the warp. cannetillé: A weave with short ribs on the face of the fabric, giving the impression of small, monochrome checks. cape: Turned-down collar of a cloak that hangs loosely over the shoulders. capelet: A small cape or cape collar, attached to or separate from a coat or dress. capote: A stole, shawl, cloth or cape worn by women when going out in public that covers them from head to foot; a hood of taffeta; a type of women's hat often made of light fabric that is pleated and slipped; a type of women’s hat with a stiff brim and soft crown; a military greatcoat. capperees: Cheap blue and white checkered or striped cloth. caraco: See casaquin. A type of small jacket fitted at the waist and flared in the back, with long, straight sleeves. carnagnole: A men's jacket or short-skirted coat with wide, downturned collar, lapels, and rows of metal buttons; worn with trousers and red caps by the French Revolutionaries in 1792-93. casaquin: See caraco. A woman’s short gown, worn over a petticoat with pleats in the back. cashmere: Very fine hair from Kashmir goats, used either pure or mixed with wool. Indian cashmere was imitated in France, where it was made with fine wool. casimir: See kerseymere. A durable, twill-woven, fine wool fabric. casquette à la liberté: A soft red cap worn folded over; also called a bonnet rouge, or Phrygian cap. charmay: See altas. chemise dress: A woman’s day dress with a low neck gathered on a drawstring, usually worn with a sash. chauters/chowters: Plain white calico, usually of superior quality and used in shirting. chavonis: Sheer, East Indian cotton muslin. chenille: Thread formed by a fine, twisted, and fringed ribbon, used as trimming, as part of a woven fabric, or as military ornament. chemise: A thin undergarment made of cotton with tight, short sleeves and a low neckline. chemisette: A half-blouse worn to fill in a low neckline, fastened at the side. cherusque: A high fan-shaped collarette or ruff, similar to a Medici collar. Cherusques were made of cloth or lace. chiffre: Monogram chikan/chilan: Embroidered fine cotton muslin from India. chiné: Thread with various colors obtained by dying or printing; characterizing a fabric woven with chiné threads, either for the warp or the weft, or for both. It was pre-colored according to a certain motif, e.g. chiné velvet, chiné taffeta. chintes: Chintz in modern English, a painted or printed calico. Originally a glazed, plain weave cotton fabric, generally woven with a handspun fine warp and coarser, slack, twill filling, then decorated with brilliantly colored flower or striped patterns. First used in the eighteenth century for clothing, it was brilliantly colored and permanently dyed, while also lightweight and durable. chites: Also called chits, chittes, chite, and chitteie. A cotton fabric from India with a long-lasting dye that did not lose its luster. circassienne: A version of the robe à la polonaise in which the three tails or puffed swags are the same length and the sleeves are very short and funnel-shaped. It was worn at the time of the French Revolution. cockade: A rosette of ribbons, usually flat around a center button, attached to a hat or a lapel. cocarde: A knotted ribbon often adorning soldier's hats; later adapted to women's hats. collet: Collar. contailles: Low-grade French silk fabric. cordonnet: A tightly-twisted thick silk thread. It was often used as a brocading weft to give texture. cornette: cornett; a bonnet with a gathered crown that could be turned down. cotonis/cotonis-bouilles: See atlas. cothurnes: See buskin. coutil: See bolsas or twill. Also called coutis, coupis, or courtille. A type of fabric made from hemp that was very strong and close-knit. It was used for corsets. couture: Seam. cravate: cravat; a wide band of fabric worn as a necktie; ancestor of the tailored necktie crepe/crape: Fabric made with a twisted thread (fil de crêpe) or altered tension on alternate warp threads to achieve a puckered or crinkled effect. The best-known crepe is crêpe de Chine which was made of silk. crépine: A trim of very long, knotted fringes. cretonne: A heavy, white linen fabric used for upholstery. culottes: Knee breeches. D damask: a fine fabric of silk or linen, usually in a single color, elaborately patterned, and reversible. dauphine: a lightweight, plain weave wool upholstery fabric made in France in the eighteenth century; made of wool or a combination of wool and silk. de laine: a fine, woolen fabric first called mousseline de laine, or muslin of wool. demi-bateau: A silk top hat with a wide brim tilted in front and back. It was worn during the Directory period. dentelle: delicate lace made of linen, cotton, wool, silk or gold or silver thread. Formed with needles, books, bobbins, or machines in a variety of techniques. doliman: a cafetan; Turkish robe slit or open down the front, sometimes worn as a coat. dorures: A satin fabric ornamented in gold. douillette: See redingote. A type of coat, loose-fitting, and without back pleat. doussoutis; also called doussoutin: mull; muslin, a plain-weave white cotton fabric of medium, fine and superfine quality, imported from India in the eighteenth century. drap/drab: wool broadcloth; a thick plain-weave wool used for outerwear. droguet: A silk textile with a small repeating pattern in no more than five colors, often used for men’s suiting. Droguets were often categorized further as lisérés, satinés, lustrinés, peruviennes, or prusiennes. Also identified as a coarse wool fabric made with a cotton, silk or linen warp. ducape: A plain-weave stout silk fabric with a softer texture than the gros de Naples. duck: A plain-weave, heavy linen fabric with a glazed surface to shed water. duvetyn: A soft woolen fabric with spun silk or mercerized cotton back in a twill weave. It was used for coats, suits, dresses, and millinery trimmings. E écorce d'arbre: A baste fiber halfway between silk and linen. effilé: fringed. embroidery: ornamental designs made with a needle or hook and cotton, wool, linen, silk or metal thread on a cloth support. en camayeu: A cameo or monochrome effect created by two or more hues of the same color. en dorures: Decorative gold or other metal threads. en fraise/fraise: Decorative ruffs. epaulette: An ornamental shoulder piece, usually military in style. eschantillon: A showpiece of fabric used in sample books. etamine: A fine, lightweight worsted cloth, etamine was described in the late nineteenth century as transparent and meant to be worn over a contrasting color. estrousoyé: Silk fabric. F façonné: A fabric that has a woven pattern often created by brocading wefts. faille: A silk fabric with a ribbed effect. favoris: Sideburns/whiskers. fichu: A large, square kerchief worn by women to fill in the low neckline of a bodice. The fichu was often of linen fabric and was folded diagonally into a triangle then tied, pinned, or tucked into the front of the bodice; a scarf; it could also be worn on the head. fichu en marmotte: A headscarf knotted under the chin. fichu religieuse: A nun's handkerchief, made of embroidered muslin and worn around the neck. filé: See glace. A smooth metallic thread wound on a silk or linen core. florence: A silk with a satin weave. florentine: A lightweight silk taffeta originally made in Florence, then in Lyon. floss: Silk thread with no visible twist. foulard: A lightweight lustrous silk fabric from India. Taffeta foulards were silk neckcloths. fourreau: A woman's dress in which the back bodice and skirt were cut in one piece with no waist seam. frisé: A crimped or looped thread, frisé was known as frost in England. froissé: A creased item of clothing. fustian: A general term covering a large category of linen and cotton. Probably made partly of wool. G gabrielle: A frill or fluted ruff, sometimes worn as a standing collar. galon: Braid trimming. ganse/gance: Cord trim. gartering: A tape or braid tied around the calf to support stockings. gauze: Sheer, transparent cotton, silk or wool fabric in which the warp threads are twisted around the weft; used for trimmings and clothing items, the term can apply to any sheer or open fabric. gaz(e): A light and transparent eighteenth-century cloth made of cotton and silk. gilet: A vest or waistcoat. gillsayé/giselle: Sheer French fabric made of wool. gingham: A cloth of pure cotton woven with dyed yarns in stripes and checks. glace: Plain metal-wrapped silk thread; used to make a fabric of the same name. gland: Small tassel trim. glands à la mirza: Small tassels in Persian style. glissade: A cotton lining for silk and cotton fabrics. gorgoran: A type of gros de Tours fabric with a heavier warp and weft. During the Empire, the term was used to describe fabrics with vertical stripes produced by different kinds of weaves. grand habit: French court dress for ceremonial occasions. grisette: A small light fabric mixed of silk, cotton, etc. made in many colors and fashions. gros de Tours/gros de Naples/gros de Florence: A plain-woven silk with warp and wefts doubled to increase durability. The fabric had a corded effect and was the staple silk fabric. guinée, guinea: A white cotton fabric, the name was given in Marseille to cloth sent to Guinea; Cheap, brightly-colored Indian calicos, mostly striped or checkered; a slave trade French term used in the seventeenth and eighteenth century for cotton canvas in gray or dark blue. guzenis: An ordinary plain white calico similar to baftas and gurrahs. H Habit: tail-coat hairbine: A silk and worsted material with some amount of mohair, the fabric was used for men's clothing. herringbone: Any textile woven in a zigzag pattern resembling chevrons or the bones of a herring. hessian: Coarse, hempen cloth, the name is most likely indicative of its origin. hollandoise: At the end of the seventeenth century, this term was used for linen fabric printed with wax. hongreline: Riding coat worn by French coachmen and footmen. I imperial: A name given to several kinds of cloth e.g. imperial satin, imperial serge; another name for perpetuana, or lightweight twill of worsted and wool. imperial shirting: Bleached cotton shirting. imperial tape: Thick cotton tape. indienne: A painted or printed cotton fabric originally made in the Far East. It was first used to make informal clothing and later for upholstery. indispensable: A bag used in place of pockets. inkle: A tape or braid used for trimming dresses and bed curtains, for garters, stays and apron strings. italienne: A plain weave fabric with a second flushing warp. J jabot: shirt-front ruffle jaconas/jaconet: A thin, closely woven cotton textile, thicker than muslin, slighter than cambric, and thinner than mainsook; a fine, light cotton fabric, between muslin and percale, originally made in India. jour zephr: An obsolete French term for plain gauze. juive: Douillette that reached only to the calves. jupon: A petticoat skirt worn under the gown. K keeses: Also called kestes, quesos, or kesis. A thick cotton cloth with elaborate check in blue and white; a striped or solid colored fabric in brilliant colors from India; used for trousers. kermichi/ kermiss: A British term for cotton dress fabrics of inferior quality. Kerseymere: See casimir. A fine, twill wool used in men’s vests, coats and breeches and women’s redingotes. korathes: Also called korottes, korolz, korattes, and korotes. A coarse cotton fabric from India used to make big neckties. L lace tucker: A piece of lace or linen worn around the top of a low-cut bodice to increase modesty. lamé: A fabric woven with strips of metal, often gold or silver. lampas: A patterned silk fabric in which the pattern is in a different weave structure from the ground; often used in upholstery. lappets: Decorative flaps, or hangings on headdresses or garments used in a religious setting. lawn: A linen fabric with a fine, transparent plain weave which can be finished to have a shiny, silk-like appearance. leghorns: A braided straw used to make hats. leneau: A gauze-weave in which warp yarns arranged in pairs cross and re-cross one another between picks of weft; a structure in which rows or areas of gauze weave are separated by, or combined with, areas of plain weave. lévite: A men's long frockcoat or women's long dress with deep cape collar; resembled a garment worn by Levite priests. limace: Also called limances, limaconne, limande or limanée. A striped cotton cloth of fine quality used domestic in the eighteenth century. linen: A cloth of many grades and weaves made from flax fibers; a very light and fine fabric Variations of linen include calicoes, cambricks, canvas, damasck, diaper, lawns, drilling and pack duck, etc. liséré: See droguet. The main weft thread, which, besides creating the pattern, also gives a texture to the fabric ground lodier/loudrier: A coarse blanket of wool. lohi: A coarse, heavy handwoven dress fabric of wool from Kashmir. longhee: Also called longyi, lungi, or loonghie. A plain weave Indian cotton fabric with a silk or gold border; a natural bleached or dyed cotton fabric used for loincloths. louisine: A lightweight, silk fabric woven with twice as many warp ends than fillings to the square inch; a very thin, plain silk material suitable for children's wear and for slight summer costume. luquoises: A silk cloth from Lusques imitated in France with gold and silver thread. lustrine: See droguet. A light, crisp plain silk in many colors with a high luster. M mallemoles: Also called malmal, mollmol, and mulmull. A muslin or white cotton cloth from India; a plain white muslin; in the seventeenth and eighteenth centuries, a fine muslin often embroidered with floral motifs. mameluke sleeves: Sleeves that extended to cover the hand. mamondis: Also called mahmud, mamoudi, and mamoudie. A hand woven Indian muslin and a general term for Indian calicos. mantelet: A light shawl-like clothing accessory, typically made out of silk, worn around the shoulders when going out in public. marbre: A cloth made to resemble the veining of marble. marceline: A soft silk fabric; a type of light taffeta ordinarily used for dresses. mauris: See percale; also called mouris or moris; a white cotton cloth; an eighteenth century French term for percale imported from India. melin: Also called melis or meslins. A French hemp sailcloth. merino: Cloth woven from the wool of the Merino sheep. mohere: Also called mouaire or moire; cloth made from the wool of the angora goat imported from Turkey. Mohere was often mixed with silk. moire: The term used to designate French ribbed silks. moiré: Fabric finished with a wavelike, watered effect caused by a special finishing technique. montassies/mentasses: A cloth with gold threading. montichours: A cloth of silk and cotton. moquette: Also called mocade or moucade; raincoats made of linen, cotton or wool. mouchoirs: Handkerchiefs usually of cotton cloth. mousseline: See muslin. A light cotton fabric of a loose tabby weave, usually plain but occasionally decorated with embroidery. It was first made in India. mull: A plain weave, cotton fabric; muslin. muslin: A plain weave, cotton fabric; mull. N nankeen: A type of durable yellow cotton tabby cloth originally hand-loomed in China and used to make pants and vests. Nilla: A fabric made of a mixture of silk and baste fiber in East India. Noyalls: Strong, unbleached canvas made of hemp in various places in Brittany. Nué: See nuances. O organdie: Also called organdy or organdis; a kind of mousseline or a fine, sheer, very lightweight cotton fabric made of fine count, combed singles in open, plain weave, with a characteristic stiff, crisp, clear finish. orleans: A dress material made of plain weave. The warp is of thin cotton while the weft is worsted. orris: Heavy ribbon or gimp trimming, sometimes woven with gold and silver. P paduasoy: Also called peau de soie. A heavy silk with a thick weft woven into a plain weave, sometimes with a pattern. Paduasoy was the heaviest of the dress silks. palatine: Furs or other woven fabrics worn on the neck in the winter. panne: See plush. A silk fabric with pile, often a little longer than that of velvet and used principally in upholstery. In the eighteenth-century, silk panne from Lyon was highly desirable. passements: A silk fabric with narrow wares or trimmings including laces, galloons, gimps, fringes, and braids. peau de poule: A plain weave silk with a grainy, chicken skin-like surface. peau de soie: See paduasoy or taffeta. A taffeta weave of a particularly fine texture. pelache: Also called peluche or pluche; a coarse, velvety, cotton, wool or silk fabric. pelisse: A highly popular empire-waist coat or cape often lined with fur, extending to the knee or lower; a lightweight broadcloth used for women's clothes, especially capes fashionable in the second half of the eighteenth century. percale: A plain, smooth, lightweight cotton fabric used for morning dresses. Printed percales were used for shirting. perruque: Wig. perse: Lightweight silk fabric associated with India. Persian: A thin, plain silk principally used for linings in coats, petticoats, and gowns in the eighteenth century. peruvienne: See droguet. A fabric of the droguet family, with a small textural pattern. piqué: A double-woven fabric, usually of cotton, with crosswise corded ribs or elaborate weaves. platille: A very white linen cloth. plissure: A crease or pleat. plush: See panne. A warp pile fabric less closely woven than velvet with the pile cut longer, usually of wool. poplin: A medium-weight, durable plain weave fabric with fine crosswise ribs; made of cotton, silk, or wool. populées: A cheap, checkered calico. poulangis/poulangy: Wool fabric. prussienne: See droguet. A fabric of the droguet family originating in Berlin in the 1750s, prusienne had a taffeta ground with a warp thread of two colors. Q quemkas: See atlas. R ramoneur: A small, peaked hat similar to those worn by chimneysweeps; a blackish color. ras: A cloth made of mixed combing and carding wool. ras de st. cyr: French silk dress goods with cross ribs, usually in black. rasta/raftas: A French term for trousers. ratteen/ratiné: A nubbly ply yarn made by twisting thick and thin yarn under tension. rayé: Striped. redingote: See douillette. A long overcoat with overlapping front skirts and a wide collar. rep: See taffeta. A fabric with fine, closely-spaced horizontal ribs made of various fibers. Silk was most popular during the eighteenth century; used mainly for upholstery. reticule/ridicule: See balantine. riband: Ribbon. robe foncée: A gathered dress, especially one gathered at the sleeves. rosconnes: Linen cloth. S santal: See taffeta. sarcenet: See armoisin. A fine, soft silk fabric used for dresses and ribbons. satin: A basic silk weave with long warp or weft floats to give a shiny, smooth surface appearance. satiné: See droguet. sattinette: A very thin type of satin used for summer nightgowns. sautoir: A small piece of cloth worn by women draped from the neck and tied around the chest sayette: Woolen or silk cloth. saxone: A mixed fabric of silk and linen. schall: A shawl worn around the shoulders. seerhaudconnaes: A cotton cloth of ordinary quality; a term for various Indian cotton muslin. semple: The system for selecting which warp threads to lift in order to weave the pattern on a drawloom. serge: A cheap, strong calico made either plain or striped. Serge was used in making napkins, flags, linings, and sailcloth. sergé: A basic, durable twill weave of a diagonal pattern, or, by reversing direction, a herringbone or chevron pattern. serpilliere: A cheap, coarse cloth. shag: A fabric with a long nap on one side. Shag was usually made of silk and was occasionally worsted. siamoise: A large group of linen and cotton goods, some with additions of wool or silk. Siamoise was made in imitation of the magnificent garments worn by ambassadors of the King of Siam in 1684. It was a popular product of Lyon. silesie: A thin, twilled linen cloth, the term refers to many grades and patterns of linens, unbleached or dyed in colors and later imitated in cotton. The fabric was used for household purposes, lining clothing and window roller-blinds. silk: Cloth woven from the shiny, smooth filaments reeled from cocoons of the silkworm Bombyx mori. silveret: A half-silk mixed with cotton or wool used for men's clothing. sorbec: Metal-wrapped silk thread with a colored core. Yellow or white cores used gold and silver wrapped threads. souci: Also called sousee, sousaes, and soutis: A silk muslin striped in different colors, souci was sometimes called mousseline even though it was not made of cotton; a striped or checkered fabric of silk or a cotton-and-silk combination with big European demand; yellow-orange. soosie/soosey: A kind of silk, striped cloth also mixed with cotton. soulier: A shoe that covers the whole foot, typically made of leather. soutache: Braided trim. spincer/spencer: Dating from the 1790s, in men’s clothing the spencer was a waist-length double-breasted coat or jacket without tails; in women’s clothing the spencer is a fitted cardigan or jacket that reaches either waist-length or bust-length. stinquerkes: Cotton handkerchiefs. stuff: A general term for worsted cloths. T tabby: A simple, basic weave also known as plain cloth or cloth weave. It was stronger and thicker than taffeta. tabis: Coarse taffeta. tabouret: Shaded and striped worsteds found in several late-eighteenth-century Norwich merchants' sample books. taffeta: A fine, tightly woven silk fabric. Variations include crape, faille, florence, gros de Naples, gros de Tours, grosgain, marceline, muslin, peau de soie, and rep. taffeta: Also called arains or armoisins. A lustrous silk cloth from India made plain, striped in gold, silver, checked, or flowered. The term derived from taftah, the Persian term which translates to 'very fine.' In the eighteenth century, the term covered a wide range of silk and silk/cotton goods, many striped or checked. taffetas changeant: A taffeta with warp and weft of different colors, creating an iridescent effect. taffeta foulards: Silk neckcloths. taffetas peint: Painted taffeta. tarnetannes: Also called tarlatanne or tarlatan. A muslin or white cotton cloth. tayelles/tayottes: A belt made of cotton or wool. tiffany: A thin, transparent silk or gauze. tippet: A long fur boa worn around the neck. tollanette: A fabric made of silk and cotton warp with woolen filling. The fabric could be plain, figured or printed and was similar to casimere. toque: A soft, draped, brimless, close-fitting cloth women’s hat; a muslin or white cotton cloth from India. toquet: A peasant-style bonnet. torade: A cotton muslin from India. transparent: A type of garment, often a dress, of finest brocade, lace or velvet. treillis: A French term for handmade lace. tricote: A plain, warp-knit silk fabric with fine vertical lines on the face and cross ribs on the back. trippe: A kind of moquette or velvet stuff of woolen pile and goat's hair. tulle: Thin, transparent net made of fine cotton or silk thread. The fabric was first introduced to France at the end of the eighteenth century. twill: See coutil. A plain, durable fabric of very tight weave, characterized by diagonal ribs or patterning. U V vandykes: A pointed pieces of trim used to decorate. They were named for Sir Anthony Van Dyck, the Flemish painter. vane: Padded French quilt made of piqué or calico. velour: Also called velvet, the weave is characterized by a pile raised in loops above the ground weave. The loops may be left alone or cut, creating 'uncut' or 'cut' velvet. vestal veil: full-length veil. W warp: The threads which are secured to the loom and run the length of the fabric. Some fabrics have more than one warp. weft: The threads that are woven into the warp by the weaver using a shuttle. X Y Z "
  },
  {
    "lunr_id": 11,
    "link": "{{ site.baseurl }}/timeline/",
    "title": "Timeline",
    "student": "",
    "content": " Revolution Timeline: Politics & Fashion 1789 A RevolutionDeclaration of the Rights of Man and of the Citizen.Beginnings of a constitutional monarchy. 1790 Liberalization of the press, which frees editors to found magazines and determine their content. 1791 Declaration of the Rights of Woman and the Female Citizen. 1792 Fall of the French monarchy, start of the first French Republic. 1793 Abolition of the guilds that had controlled the fashion trades for centuries, freeing them from traditional style, technique, and production rules. 1793-94 Reign of Terror, the most extreme phase of the Revolution. 1794 Abolition of slavery in France and on French territoriesCoup d’état of Thermidor: end of the reign of Terror.Among others freed from prison, Teresa Cabarrus, soon to become Madame Tallien, is released and begins to wear her prison underwear as outerwear in public. 1795-99 Directoire phase of the French Republic, led by Barras.Abrupt rise to wealth of a new class, often based economically on currency or military supply speculation, and culturally on informal gatherings of both old regime aristocrats and the newly wealthy, notably in the Salons of Juliette Récamier and Teresa Tallien. 1795 Meeting of General Napoléon Bonaparte, a rising young star in the French Republic’s army, with Rose de Beauharnais, soon to be called Joséphine, style leader of the Directoire. 1797 First issue of the Journal des dames et des modes, founded by Jean-Batiste Sellèque. 1799 Sellèque dies, L’abbé Pierre La Mésangère becomes sole editor in January 1800 1799-1804 Consulat phase of the French Republic. Simultaneous return toward authoritarian government and consolidation of many revolutionary republican changes. Individualist consumer culture thrives. 1802 Reinstatement of slavery in French territories. 1804 Napoleon crowns himself Emperor of the French.Through Josephine, Napoleon begins to reverse the style revolution in women’s fashion, with costumes designed by Isabey. 1814 Fall of Napoleon and restoration of the monarchy 1839 Last issue of the Journal des dames et des modes. Who's who? Joséphine Bonaparte Fashion Leader Joséphine Bonaparte(1763-1814)Born on the Caribbean island of Martinique, then a French colony, to a wealthy white Creole family, she first married Alexandre de Beauharnais who was guillotined during the Reign of Terror. Her second mariage, with Napoleon Bonaparte, made her Empress of the French in 1804. Thérésa Tallien Fashion Leader Thérésa Tallien(1773-1835) Juliette Récamier Fashion Leader Juliette Récamier(1777-1849) Napoléon Bonaparte Politician Napoléon Bonaparte(1769-1821) Paul Barras Politician Paul Barras(1755-1829) Jean-Baptiste Isabey Fashion Designer Jean-Baptiste Isabey(1767-1855) "
  },
  {
    "lunr_id": 12,
    "link": "{{ site.baseurl }}/underpinnings/",
    "title": "Underpinnings or the lack thereof",
    "student": "",
    "content": " Supporting a Revolution: Underpinnings or the lack thereof No More Underwear! Women’s clothing before the Directoire phase of the French Revolution, that is before around 1795, relied on a complex architecture of petticoats, panniers, pads, and stays. These underpinnings were typically rigid and inflexible because they were constructed using stiffening tools such as whalebone (baleen), reed, and metal – hence the English word “stays”. As the Journal des dames et des modes dramatically reveals, however, in a scant two years, by 1797, fashionable French women had staged an underwear revolution of their own. They both abandonned traditional undergarments, and adopted sheer, if not transparent, fabrics for clothes which were a fraction as full as they had been. Until 1804, when women’s fashion began a twenty-year return to earlier norms, the female form was publicly visible. New Look The popularity of new silhouettes changed everything. As skirts rose to right under the bust, there was no longer a need for stays to winnow away the waist. New styles strove to achieve a “natural” silhouette, which required underpinnings which would not deform women's natural shape. This called for new materials and advances in construction. One such technology is the advent of 'metal elastique,' a rigid, yet expandable material made from tightly coiled metal wires. This clever application of mechanical materials to undergarments can be attributed to the 1763 patent of the coiled spring, and can also be seen used in jewelry depicted in the Journal. Corset styles Inspiration changed quickly and was taken from whatever novelty was trending at the moment. Whether it was political, historical, or theatrical- nothing was off limits to influence women's dress. In this plate, we see the 'Lisbeth corset' so named after Mme. Saint-Aubin, an actress who played the part of Lisbeth in a Favières and Grétry comic opera. These styles, though dubbed as 'corsets' by the Journal, were terms used somewhat interchangeably with 'bodice' and served more decorative purposes, rather than as support garments. Soon, women's underpinnings began to migrate from underclothing to outer clothing. The Sexuality of Underwear For most observers, though not all, women’s Directoire and Consulat rebellion against traditional underwear signalled a radical revolution in morality. No one had expected women would cease wearing petticoats or stays, and many people were shocked by the sexuality of this choice. The effect was very much reinforced by how narrow and light women’s clothing became. Yet the Journal des dames et des modes did not hesitate to depict what it noticed in Paris: women whose bodies were revealed, not reshaped or concealed, by their clothing. All of Europe paid attention. With the advent of the First Empire in France, however, the underwear pendulum began to swing back, and the Journal des dames et des modes with it, until by the 1820s, all European women were once again wearing underpinnings as restrictive as they had before 1795. Image of 1750's stays courtesy of Museum of Fine Arts Boston. Image of metal 'elastic' corset courtesy of The Metropolitan Museum of Art. "
  },
  {
    "lunr_id": 13,
    "link": "{{ site.baseurl }}/plates/1/",
    "title": "Plate 1",
    "_date": "1797",
    "caption": "Perruque grecque. Collier montant ganses sur le corsage petit fichu. Robe froussée jusu'au mollet.",
    "translation": "Greek wig. Necklace on collar braided into straps on the bodice a small kercheif. Frilly dress up to the calf.",
    "student": "Meghan Collins"
  },
  {
    "lunr_id": 14,
    "link": "{{ site.baseurl }}/plates/10/",
    "title": "Plate 10",
    "_date": "1797",
    "caption": "Plumet de Héron sur un Fichu en Marmote, Collet de Chemise d'homme, Clef d'or servant d'Epingle, Spencer.",
    "translation": "Heron feather plume on a grape-shade purple headscarf knotted under the chin, collared men’s shirt or collared dress, golden key serving as a pin, Spencer jacket",
    "student": "Avery Schroeder"
  },
  {
    "lunr_id": 15,
    "link": "{{ site.baseurl }}/plates/100/",
    "title": "Plate 100",
    "_date": "20 March 1798",
    "caption": "Cheveux à la Titus, habit dégagé, pantalon à la Hussarde",
    "translation": "Hair like Titus, casual clothing, Hussar pants",
    "student": "Brontë Hebdon"
  },
  {
    "lunr_id": 16,
    "link": "{{ site.baseurl }}/plates/108/",
    "title": "Plate 108",
    "_date": "",
    "caption": "Négligé à fond de Couleur. Tablier de Soubrette.",
    "translation": "An Unusual color. Maid's Apron.",
    "student": "Jodi Mikesell"
  },
  {
    "lunr_id": 17,
    "link": "{{ site.baseurl }}/plates/109/",
    "title": "Plate 109",
    "_date": "29 mai 1799",
    "caption": "Turban à la Caravane.",
    "translation": "Caravan turban (?)",
    "student": "Emily Cormack"
  },
  {
    "lunr_id": 18,
    "link": "{{ site.baseurl }}/plates/11/",
    "title": "Plate 11",
    "_date": "1797",
    "caption": "Cocarde en feuilles sur un Chapeau à l'Anglaise, Schall uni, Robe froncée à la Coblentz",
    "translation": "Knoted ribbons in the shape of leaves on an English-style hat, unornamented shawl, creased dress at/in Coblentz (a German city, now spelled Koblenz)",
    "student": "Avery Schroeder"
  },
  {
    "lunr_id": 19,
    "link": "{{ site.baseurl }}/plates/116/",
    "title": "Plate 116",
    "_date": "1799",
    "caption": "Cheveux courts. Cravate haute. Pantalon de Nankin.",
    "translation": "Short hair. High tie. Nankin pants.",
    "student": "Barthélemy Glama"
  },
  {
    "lunr_id": 20,
    "link": "{{ site.baseurl }}/plates/12/",
    "title": "Plate 12",
    "_date": "1797",
    "caption": "Bonnet à la jardinière orné de Rubans et d'une branche de Lilas. Ceinture à la victime étroit falbalas.",
    "translation": "Garden bonnet decorated with Ribbons and a branch of Lilac. Narrow victim's belt.",
    "student": "Meghan Collins"
  },
  {
    "lunr_id": 21,
    "link": "{{ site.baseurl }}/plates/13/",
    "title": "Plate 13",
    "_date": "1797",
    "caption": "Bonnet rond à très-petit fond fixé avec un velours noir. Robe de peckini rayé fichu- schall.",
    "translation": "Round bonnet with very small back, set with black velvet. Peckini (?) striped dress, small kerchief (or fichu).",
    "student": "Meghan Collins"
  },
  {
    "lunr_id": 22,
    "link": "{{ site.baseurl }}/plates/14/",
    "title": "Plate 14",
    "_date": "1797",
    "caption": "Fichu rose sur le fond d'un Bonnet à la folle, perruque Blonde, négligée, Schall uni, Epingle en étoile",
    "translation": "Pink headscarf with pointed lace (translation of fond) on a feminine Bonnet/ pink headscarf in the background (translation of fond) of a feminine Bonnet, blonde wig, odorned, undecorated shawl, star-shaped pin",
    "student": "Avery Schroeder"
  },
  {
    "lunr_id": 23,
    "link": "{{ site.baseurl }}/plates/141/",
    "title": "Plate 141",
    "_date": "",
    "caption": "Chapeau à Côtes.\n",
    "translation": "Hat with Stripes.",
    "student": "Jodi Mikesell"
  },
  {
    "lunr_id": 24,
    "link": "{{ site.baseurl }}/plates/142/",
    "title": "Plate 142",
    "_date": "",
    "caption": "Cornette à la Paysane, garnie en Gaze.\n",
    "translation": "Peasant Cornette, garnished with Gauze.",
    "student": "Jodi Mikesell"
  },
  {
    "lunr_id": 25,
    "link": "{{ site.baseurl }}/plates/144/",
    "title": "Plate 144",
    "_date": "1799",
    "caption": "Ample redingote. Large pantalon.",
    "translation": "Large redingote. Large pants.",
    "student": "Barthélemy Glama"
  },
  {
    "lunr_id": 26,
    "link": "{{ site.baseurl }}/plates/15/",
    "title": "Plate 15",
    "_date": "1797",
    "caption": "Chapeau-casque  en paille garni d'une Bourdaloue en Velours perruque à crochets, long mantelet sur une Robe à taille courte boucles en Paillettes. ",
    "translation": "Straw Bourdaloue (a little high crowned hat. Named after portable chamber pots, and a famous 17th century jesuit preacher. Under Louis XIV, the hat was turned up behind and before, or on each side) hat with velvet wig. Long mantelet (a light shawl-like clothing accessory, typically made out of silk, that women wear around their shoulders especially when going out in public), shoes with sequined buckles. ",
    "student": "Meghan Collins"
  },
  {
    "lunr_id": 27,
    "link": "{{ site.baseurl }}/plates/154/",
    "title": "Plate 154",
    "_date": "",
    "caption": "Chapeau-Capote, orné de Fleurs et d'Epis.",
    "translation": "Capote hat, ornamented with pine needles and cones. (?)",
    "student": "Jodi Mikesell"
  },
  {
    "lunr_id": 28,
    "link": "{{ site.baseurl }}/plates/155/",
    "title": "Plate 155",
    "_date": "1799",
    "caption": "Bokay.",
    "translation": "Bokay.",
    "student": "Barthélemy Glama"
  },
  {
    "lunr_id": 29,
    "link": "{{ site.baseurl }}/plates/16/",
    "title": "Plate 16",
    "_date": "1797",
    "caption": "Faces natées. Gilet à larges Rayures, Boutons d'acier en Lasange. culotte à l'Anglaise. Boucles d'Argent.",
    "translation": "Braided sides, vest with wide stripes, diamond-shaped steel buttons, English breeches, silver buckles",
    "student": "Brontë Hebdon"
  },
  {
    "lunr_id": 30,
    "link": "{{ site.baseurl }}/plates/163/",
    "title": "Plate 163",
    "_date": "",
    "caption": "Intérieur d'Appartement.",
    "translation": "Apartment Interior.",
    "student": "Jodi Mikesell"
  },
  {
    "lunr_id": 31,
    "link": "{{ site.baseurl }}/plates/166/",
    "title": "Plate 166",
    "_date": "",
    "caption": "Vue de Frascati.",
    "translation": "View of Frascati.",
    "student": "Anne Higonnet"
  },
  {
    "lunr_id": 32,
    "link": "{{ site.baseurl }}/plates/17/",
    "title": "Plate 17",
    "_date": "1798",
    "caption": "Chapeau en Bateau. Cheveux à demi Rasés. Redingotte à Taille longue, boutons octogones, jarretière en cuir facée aux Bottines.",
    "translation": "Bourdaloue hat, half-shaved hair, oversized coat, octagonal buttons, leather garters holding up boots.",
    "student": "Brontë Hebdon"
  },
  {
    "lunr_id": 33,
    "link": "{{ site.baseurl }}/plates/18/",
    "title": "Plate 18",
    "_date": "1797",
    "caption": "Bonnet négligeé à Tuyaux. Redingotte en soie bordée d'une très-large Bande de velours.",
    "translation": "Informal bonnet adorned with piping. Redingotte (oversized coat) in silk with a very broad velvet trim.",
    "student": "Meghan Collins"
  },
  {
    "lunr_id": 34,
    "link": "{{ site.baseurl }}/plates/183/",
    "title": "Plate 183",
    "_date": "1799",
    "caption": "Mise d'un jeune homme",
    "translation": "Appearance of a young man",
    "student": "Brontë Hebdon"
  },
  {
    "lunr_id": 35,
    "link": "{{ site.baseurl }}/plates/188/",
    "title": "Plate 188",
    "_date": "January 1800",
    "caption": "Mise d'une Elégante",
    "translation": "Outfit of a fashionable woman.",
    "student": "Zoë Dostal"
  },
  {
    "lunr_id": 36,
    "link": "{{ site.baseurl }}/plates/189/",
    "title": "Plate 189",
    "_date": "1800",
    "caption": "Mise d'un Elégant.",
    "translation": "Outfit of a fashionable man.",
    "student": "Barthélemy Glama"
  },
  {
    "lunr_id": 37,
    "link": "{{ site.baseurl }}/plates/19/",
    "title": "Plate 19",
    "_date": "1798",
    "caption": "Chapeau de Velours bordé en Jais blanc. Robe ouverte, garnie d'une Gance en Chenille entrelacée.",
    "translation": "Velvet Hat bordered in Jet white. Open dress, adorned with intertwined, braided chenille.",
    "student": "Zoë Dostal"
  },
  {
    "lunr_id": 38,
    "link": "{{ site.baseurl }}/plates/194/",
    "title": "Plate 194",
    "_date": "1800",
    "caption": "Mises Bourgeoises.",
    "translation": "Bourgeois outfits.",
    "student": "Barthélemy Glama"
  },
  {
    "lunr_id": 39,
    "link": "{{ site.baseurl }}/plates/198/",
    "title": "Plate 198",
    "_date": "1800",
    "caption": "Costume de Bal.",
    "translation": "Ball costume",
    "student": "Barthélemy Glama"
  },
  {
    "lunr_id": 40,
    "link": "{{ site.baseurl }}/plates/2/",
    "title": "Plate 2",
    "_date": "1797",
    "caption": "Toquet en gaxe Bouillonnée. Spencer par dessus la robe. Schall long.",
    "translation": "Toquet (Peasant style bonnet) in gauze Bouillonneée (?). Spencer (fitted cardigan or jacket that hits either waist or bust level) over the dress. Long shawl.",
    "student": "Meghan Collins"
  },
  {
    "lunr_id": 41,
    "link": "{{ site.baseurl }}/plates/20/",
    "title": "Plate 20",
    "_date": "1798",
    "caption": "Fichu de gaze sur un fond de Velours Cerise Chemise à la Prêtesse Manches en Tricot de Soie.",
    "translation": "Gauze fichu on a red Velours (A Fabric wth pile produced by a warp that is raised in loops above the ground weave during weaving and then cut) of a priestess, sleeves in silk knit. ",
    "student": "Meghan Collins"
  },
  {
    "lunr_id": 42,
    "link": "{{ site.baseurl }}/plates/206/",
    "title": "Plate 206",
    "_date": "10 avril 1800",
    "caption": "Group d’Enfans.",
    "translation": "Group of children.",
    "student": "Emily Cormack"
  },
  {
    "lunr_id": 43,
    "link": "{{ site.baseurl }}/plates/208/",
    "title": "Plate 208",
    "_date": "1800",
    "caption": "Mise d'un Jeune Homme.",
    "translation": "Outfit of a young man.",
    "student": "Barthélemy Glama"
  },
  {
    "lunr_id": 44,
    "link": "{{ site.baseurl }}/plates/21/",
    "title": "Plate 21",
    "_date": "4 février 1798",
    "caption": "Capote en satin, ornée de Trèfles et de deux Plumes. Guirlande découpée sur le coté. Velours croisé, formant Ceinture.",
    "translation": "Satin cap, decorated with clovers and two feathers. Cut garland on the edge. Criss-crossed velvet shape the waist (belt?).",
    "student": "Emily Cormack"
  },
  {
    "lunr_id": 45,
    "link": "{{ site.baseurl }}/plates/22/",
    "title": "Plate 22",
    "_date": "1798",
    "caption": "Turban à la Gulnare. Corset et jupon à la Lisbeth.",
    "translation": "Gulnare style turban. Corset and petticoat in the style of Lisbeth.",
    "student": "Meghan Collins"
  },
  {
    "lunr_id": 46,
    "link": "{{ site.baseurl }}/plates/225/",
    "title": "Plate 225",
    "_date": "1799",
    "caption": "Habit dégagé, à grand collet. Pantalon à la Batelière",
    "translation": "Casual outfit with a large collar. Boatman pants",
    "student": "Brontë Hebdon"
  },
  {
    "lunr_id": 47,
    "link": "{{ site.baseurl }}/plates/228/",
    "title": "Plate 228",
    "_date": "",
    "caption": "Fichu-Turban. Chapeau de Paille, à bord retroussé.",
    "translation": "Scarf Turban. Straw hat with a rolled edge.",
    "student": "Jodi Mikesell"
  },
  {
    "lunr_id": 48,
    "link": "{{ site.baseurl }}/plates/23/",
    "title": "Plate 23",
    "_date": "1798",
    "caption": "Capote de satin bordée en tule. Schall noué par derrière corsage lacé agrémens en Soie et en Perles au bas de la Robe.",
    "translation": "Satin Capote (women's hat, made often of light fabric, that is pleated and slipped) with tulle lining. Shawl knotted from behind with silk and pearl embellishments at the bottom of the dress.   ",
    "student": "Meghan Collins"
  },
  {
    "lunr_id": 49,
    "link": "{{ site.baseurl }}/plates/237/",
    "title": "Plate 237",
    "_date": "1800",
    "caption": "Collet haut. Pantalon large.",
    "translation": "High collar. Large pants.",
    "student": "Barthélemy Glama"
  },
  {
    "lunr_id": 50,
    "link": "{{ site.baseurl }}/plates/24/",
    "title": "Plate 24",
    "_date": "25 février 1798",
    "caption": "Chignon en poire, double Bandeau de Jais blanc. Schall de Laine, à Franges.",
    "translation": "Pear-shaped bun, double headband of white jet. Woolen shawl with fringes.",
    "student": "Emily Cormack"
  },
  {
    "lunr_id": 51,
    "link": "{{ site.baseurl }}/plates/248/",
    "title": "Plate 248",
    "_date": "2 octobre 1800",
    "caption": "Coeffure ordinaire en Cheveux. Manches Tailladées.",
    "translation": "Ordinary hairstyle in hair. Tailored sleeves.",
    "student": "Emily Cormack"
  },
  {
    "lunr_id": 52,
    "link": "{{ site.baseurl }}/plates/25/",
    "title": "Plate 25",
    "_date": "1798",
    "caption": "Chevelure en porc-epic. Schall à Mouches. Rubans en Cothurnes. Des d'ap ilat sur le Boulevart des Capucines.",
    "translation": "Porcupine hair style. Lightweight shawl. Ribbon cothurnes (types of Greek-style, laced shoes). Apprentices on Boulevart des Capucines. ",
    "student": "Meghan Collins"
  },
  {
    "lunr_id": 53,
    "link": "{{ site.baseurl }}/plates/277/",
    "title": "Plate 277",
    "_date": "1801",
    "caption": "Costume Paré.",
    "translation": "Dressy costume.",
    "student": "Barthélemy Glama"
  },
  {
    "lunr_id": 54,
    "link": "{{ site.baseurl }}/plates/287/",
    "title": "Plate 287",
    "_date": "",
    "caption": "Costume de Bal",
    "translation": "Ball Costume",
    "student": "Jodi Mikesell"
  },
  {
    "lunr_id": 55,
    "link": "{{ site.baseurl }}/plates/294/",
    "title": "Plate 294",
    "_date": "",
    "caption": "Coeffure Grecque. Longchamp.",
    "translation": "Greek hairstyle. Longchamp.",
    "student": "Anne Higonnet"
  },
  {
    "lunr_id": 56,
    "link": "{{ site.baseurl }}/plates/297/",
    "title": "Plate 297",
    "_date": "30 avril 1801",
    "caption": "Toquet Brodé, à Pointes.",
    "translation": "Cap with embroidered edges.",
    "student": "Emily Cormack"
  },
  {
    "lunr_id": 57,
    "link": "{{ site.baseurl }}/plates/298/",
    "title": "Plate 298",
    "_date": "May 1800",
    "caption": "Costume d'un jeune homme",
    "translation": "A young man's outfit",
    "student": "Brontë Hebdon"
  },
  {
    "lunr_id": 58,
    "link": "{{ site.baseurl }}/plates/299/",
    "title": "Plate 299",
    "_date": "10 mai 1801",
    "caption": "Coeffure négligée en Cheveux.",
    "translation": "Undressed hairstyle in hair.",
    "student": "Emily Cormack"
  },
  {
    "lunr_id": 59,
    "link": "{{ site.baseurl }}/plates/3/",
    "title": "Plate 3",
    "_date": "1797",
    "caption": "Chapeau-Spencer, Robe de Linon, Schall Long, Rubans croisés, en forme de Cothurne",
    "translation": "Spencer hat, Linen dress, long shawl, Cothurne (type of boot worn by actors in Greek tragedies) tied with crossing ribbons",
    "student": "Avery Schroeder"
  },
  {
    "lunr_id": 60,
    "link": "{{ site.baseurl }}/plates/301/",
    "title": "Plate 301",
    "_date": "20 or 25 mai 1801?",
    "caption": "Collier en serpent. Voile à la Religieuse.",
    "translation": "Serpent necklace. Veil like a nun.",
    "student": "Emily Cormack"
  },
  {
    "lunr_id": 61,
    "link": "{{ site.baseurl }}/plates/316/",
    "title": "Plate 316",
    "_date": "1801",
    "caption": "Costume d'un Jeune Homme.",
    "translation": "Costume of a young man.",
    "student": "Barthélemy Glama"
  },
  {
    "lunr_id": 62,
    "link": "{{ site.baseurl }}/plates/321/",
    "title": "Plate 321",
    "_date": "1801",
    "caption": "Chapeau parfaitement rond. Habit boutonné.",
    "translation": "Perfectly round hat. Buttoned suit.",
    "student": "Barthélemy Glama"
  },
  {
    "lunr_id": 63,
    "link": "{{ site.baseurl }}/plates/322/",
    "title": "Plate 322",
    "_date": "18 or 23 août 1801?",
    "caption": "Chapeau de Crêpe. Robe de Mousseline.",
    "translation": "Crêpe hat. Muslin dress.",
    "student": "Emily Cormack"
  },
  {
    "lunr_id": 64,
    "link": "{{ site.baseurl }}/plates/329/",
    "title": "Plate 329",
    "_date": "12 septembre 1801",
    "caption": "Mise d'un Jeune Homme",
    "translation": "Outfit of a Young Man",
    "student": "Zoë Dostal"
  },
  {
    "lunr_id": 65,
    "link": "{{ site.baseurl }}/plates/332/",
    "title": "Plate 332",
    "_date": "02 octobre 1801",
    "caption": "Triple Aigrette de Diamans. Schall de Cachemire",
    "translation": "Triple Crest of Diamonds. Cashmere Shawl.",
    "student": "Zoë Dostal"
  },
  {
    "lunr_id": 66,
    "link": "{{ site.baseurl }}/plates/333/",
    "title": "Plate 333",
    "_date": "07 octobre 1801",
    "caption": "Corsage garni en Tulle. Manches à l'Anglaise.",
    "translation": "Corset decorated in Tulle. English Sleeves.",
    "student": "Zoë Dostal"
  },
  {
    "lunr_id": 67,
    "link": "{{ site.baseurl }}/plates/334/",
    "title": "Plate 334",
    "_date": "07 octobre 1801",
    "caption": "1. Bonnets d'Enfans. 2. Chapeau d'éffilé nuancé. 3. Paysanes. 4. Toquets de Dent.le en Tulle. 5. Cornette en Diadême. 6. Coeffures allongées, en Mousseline.",
    "translation": "1. Children's bonnet 2. Finely fringed hat 3. Peasant style 4. Peasant-styel bonnet in lace and tulle 5. Diadem Cornette 6. Extended style in mousseline",
    "student": "Zoë Dostal"
  },
  {
    "lunr_id": 68,
    "link": "{{ site.baseurl }}/plates/346/",
    "title": "Plate 346",
    "_date": "11 décembre 1803",
    "caption": "Turban posé sur un Bandeau.",
    "translation": "Turban fit under a headwrap.",
    "student": "Emily Cormack"
  },
  {
    "lunr_id": 69,
    "link": "{{ site.baseurl }}/plates/349/",
    "title": "Plate 349",
    "_date": "11 décembre 1801",
    "caption": "Coiffure en Cheveux, ornée d'un Bandeau de Perles",
    "translation": "Hair Headdress, ornamented with a Pearl Headband",
    "student": "Zoë Dostal"
  },
  {
    "lunr_id": 70,
    "link": "{{ site.baseurl }}/plates/352/",
    "title": "Plate 352",
    "_date": "05 Janvier 1802",
    "caption": "Schall de Drap. Bonnet du Matin.",
    "translation": "Sheet shawl. Morning Bonnet.",
    "student": "Zoë Dostal"
  },
  {
    "lunr_id": 71,
    "link": "{{ site.baseurl }}/plates/353/",
    "title": "Plate 353",
    "_date": "31 décembre 1801 (?)",
    "caption": "Coeffure Asiatique. Tunique de grande Parure.",
    "translation": "Asian headdress. Grandly adorned tunic.",
    "student": "Jodi Mikesell"
  },
  {
    "lunr_id": 72,
    "link": "{{ site.baseurl }}/plates/359/",
    "title": "Plate 359",
    "_date": "1801",
    "caption": "Chapeau à la Basile. Anglaise à trois collets",
    "translation": "Hat from Basel, English jacket with three collars",
    "student": "Brontë Hebdon"
  },
  {
    "lunr_id": 73,
    "link": "{{ site.baseurl }}/plates/363/",
    "title": "Plate 363",
    "_date": "1802",
    "caption": "Mise d'un Jeune Homme.",
    "translation": "Outfit of a young man.",
    "student": "Barthélemy Glama"
  },
  {
    "lunr_id": 74,
    "link": "{{ site.baseurl }}/plates/368/",
    "title": "Plate 368",
    "_date": "1802",
    "caption": "Chapeau à la Russe. Bottes sans couture.",
    "translation": "Russian-style hat. Seamless boots.",
    "student": "Barthélemy Glama"
  },
  {
    "lunr_id": 75,
    "link": "{{ site.baseurl }}/plates/378/",
    "title": "Plate 378",
    "_date": "15 avril 1801",
    "caption": "Bonnet du Matin.",
    "translation": "Morning Bonnet.",
    "student": "Zoë Dostal"
  },
  {
    "lunr_id": 76,
    "link": "{{ site.baseurl }}/plates/38/",
    "title": "Plate 38",
    "_date": "25 mai 1798",
    "caption": "Cheveux à la Titus, petit fichu quadrille mantelet gaze, garni en dentelle. Dessiné sur le Blvd de la Magdeleine.",
    "translation": "Hairstyle à la Titus small, short cape with a quadrille pattern, gaze mantle embellished with lace. Drawn on the Blvd Madeleine.",
    "student": "Sarah Bigler"
  },
  {
    "lunr_id": 77,
    "link": "{{ site.baseurl }}/plates/39/",
    "title": "Plate 39",
    "_date": "25 mai 1798",
    "caption": "Chignon relevé avec un Réseau, rosettes sur le dos de la robe. Dessiné au Jardin d’Idalie.",
    "translation": "Bun held up with a netted bonnet. Bows on the back of the dress. Drawn in the Jardin d’Idalie.",
    "student": "Sarah Bigler"
  },
  {
    "lunr_id": 78,
    "link": "{{ site.baseurl }}/plates/390/",
    "title": "Plate 390",
    "_date": "9 or 14 juin 1802?",
    "caption": "Bonnet du Matin, garni en Tulle.",
    "translation": "Morning bonnet, decorated in tulle.",
    "student": "Emily Cormack"
  },
  {
    "lunr_id": 79,
    "link": "{{ site.baseurl }}/plates/4/",
    "title": "Plate 4",
    "_date": "1797",
    "caption": "Toquet froncé à coulisses. Redingotte croiseée. Schall long chaine d'or portant un couer en cristal.",
    "translation": "Gathered toquet (peasant style bonnet) with wings. Crossed over-sized coat. Long shawl, gold chain with a crystal spout. ",
    "student": "Meghan Collins"
  },
  {
    "lunr_id": 80,
    "link": "{{ site.baseurl }}/plates/40/",
    "title": "Plate 40",
    "_date": "2 juin 1798",
    "caption": "Jeune élégante Revenant de la Promenade en Négligé du Matin (Dessiné Rue Vivienne)",
    "translation": "Young stylish woman returning from a walk in morning dress. (Drawn Rue Vivienne)",
    "student": "Emily Cormack"
  },
  {
    "lunr_id": 81,
    "link": "{{ site.baseurl }}/plates/41/",
    "title": "Plate 41",
    "_date": "2 juin 1798",
    "caption": "Cornette à la paysanne, ornée de fleurs, Robe lacée. Tivoli.",
    "translation": "Bonnet with a gathered crown, ornamented with flowers, laced dress.",
    "student": "Sarah Bigler"
  },
  {
    "lunr_id": 82,
    "link": "{{ site.baseurl }}/plates/416/",
    "title": "Plate 416",
    "_date": "2 octobre 1802",
    "caption": "Chevelure à demi Découverte.",
    "translation": "Half-covered hairstyle. (?)",
    "student": "Emily Cormack"
  },
  {
    "lunr_id": 83,
    "link": "{{ site.baseurl }}/plates/42/",
    "title": "Plate 42",
    "_date": "8 juin 1798",
    "caption": "Chapeau de paille blanc garni de son fichu et lassé sur le côté, Schall de soie en tulle. Dessiné aux Champs-Élysée",
    "translation": "White straw hat decorated with her scarf and tied on the side. Shawl made of silk and tulle. Drawn on the Champs-Élysée",
    "student": "Sarah Bigler"
  },
  {
    "lunr_id": 84,
    "link": "{{ site.baseurl }}/plates/422/",
    "title": "Plate 422",
    "_date": "27 octobre 1802",
    "caption": "Turban à la Mameluck. Boucles d'Oreilles de Corail.",
    "translation": "Mameluke Turban. Coral Earrings.",
    "student": "Zoë Dostal"
  },
  {
    "lunr_id": 85,
    "link": "{{ site.baseurl }}/plates/424/",
    "title": "Plate 424",
    "_date": "6 novembre 1802",
    "caption": "Coiffure ornée d'une Flèche et d'un Peigne renversé.",
    "translation": "Headdress ornamented with an arrow and a reversed comb",
    "student": "Zoë Dostal"
  },
  {
    "lunr_id": 86,
    "link": "{{ site.baseurl }}/plates/425/",
    "title": "Plate 425",
    "_date": "6 novembre 1802",
    "caption": "Voile et Tunique à la Vestale.",
    "translation": "Vestal Virgin Veil and Tunic",
    "student": "Zoë Dostal"
  },
  {
    "lunr_id": 87,
    "link": "{{ site.baseurl }}/plates/43/",
    "title": "Plate 43",
    "_date": "14 juin 1798",
    "caption": "Chapeau plissé et lassé. Médaillon en ecusson, garniture di robe en comète. Dessiné au Jardin d'Idalie/Italie",
    "translation": "Hat pleated and tied. Medallion with badge/insignia,....Drawn in the Jardin d'Idalie/Italie",
    "student": "Sarah Bigler"
  },
  {
    "lunr_id": 88,
    "link": "{{ site.baseurl }}/plates/432/",
    "title": "Plate 432",
    "_date": "1 décembre 1803",
    "caption": "Fichu noué en Cravate. Robe de Florence.",
    "translation": "Headscarf tied as Cravat (?). Dress in a Florentine style.",
    "student": "Jodi Mikesell"
  },
  {
    "lunr_id": 89,
    "link": "{{ site.baseurl }}/plates/44/",
    "title": "Plate 44",
    "_date": "18 juin 1798",
    "caption": "Fichu bore à pointes saillantes, pose de côté, sur un chapeau de paille blanche. Manches longue sans doublure. Dessiné sur le Boulevard Montmartre. ",
    "translation": "Scarf with pointed ends, tied on one side of a white straw hat. Long sleeves without lining. Drawn on the Boulevard Montmartre. ",
    "student": "Sarah Bigler"
  },
  {
    "lunr_id": 90,
    "link": "{{ site.baseurl }}/plates/445/",
    "title": "Plate 445",
    "_date": "30 janvier 1803",
    "caption": "Turban de grande Parure. Robe du Matin.",
    "translation": "Grand Parure Turban. Morning Dress.",
    "student": "Zoë Dostal"
  },
  {
    "lunr_id": 91,
    "link": "{{ site.baseurl }}/plates/45/",
    "title": "Plate 45",
    "_date": "23 juin 1798",
    "caption": "Chapeau à la minevre, robe zébrée. Tivoli 24 Prairial",
    "translation": "Chapeau à la minevre, stripped dress. Tivoli 24 Prairial. ",
    "student": "Sarah Bigler"
  },
  {
    "lunr_id": 92,
    "link": "{{ site.baseurl }}/plates/450/",
    "title": "Plate 450",
    "_date": "1803",
    "caption": "Costume d'Etiquette.",
    "translation": "Court costume.",
    "student": "Barthélemy Glama"
  },
  {
    "lunr_id": 93,
    "link": "{{ site.baseurl }}/plates/456/",
    "title": "Plate 456",
    "_date": "1803",
    "caption": "Grande parure. Le Dessin n'ayant pas été gravé au Miror, l'Epée se trouve à droite.",
    "translation": "Formal court costume.",
    "student": "Barthélemy Glama"
  },
  {
    "lunr_id": 94,
    "link": "{{ site.baseurl }}/plates/46/",
    "title": "Plate 46",
    "_date": "28 juin 1798",
    "caption": "Manches courtes relevée avec des glans sur les manches de satin, rosette sur le devant de la robe. Sac à ouvrage. Tivoli 30 Prairial",
    "translation": "short sleeves held up with ? on the satin sleeves, bow on the front of the dress. work bag. Tivoli 30 Prairial",
    "student": "Sarah Bigler"
  },
  {
    "lunr_id": 95,
    "link": "{{ site.baseurl }}/plates/467/",
    "title": "Plate 467",
    "_date": "05 mai 1803",
    "caption": "Bonnet du Matin, Corset Elastique.",
    "translation": "Morning Bonnet, Elastic Corset.",
    "student": "Jodi Mikesell"
  },
  {
    "lunr_id": 96,
    "link": "{{ site.baseurl }}/plates/47/",
    "title": "Plate 47",
    "_date": "3 Julliet 1798",
    "caption": "Voile à l'Iphigenie, mantelet blanc. sac à devise. Champs-Élysée",
    "translation": "Iphigenia veil, white mantle, money bag – Champs-Élysées",
    "student": "Sarah Bigler"
  },
  {
    "lunr_id": 97,
    "link": "{{ site.baseurl }}/plates/48/",
    "title": "Plate 48",
    "_date": "11 or 14 Julliet 1798",
    "caption": "Chapeau coquet, manche couleur sous une robe blanche. fateuil en acajou, imité du l'antique",
    "translation": "Fashionable/trendy hat. colored sleeves under a white dress. Mahogany chair imitating an antique style.",
    "student": "Sarah Bigler"
  },
  {
    "lunr_id": 98,
    "link": "{{ site.baseurl }}/plates/481/",
    "title": "Plate 481",
    "_date": "4 juillet 1803",
    "caption": "Cornette sous un Voile. Garnitures en Fraises.",
    "translation": "Cornette under a veil. Ruffled ribbons.",
    "student": "Zoë Dostal"
  },
  {
    "lunr_id": 99,
    "link": "{{ site.baseurl }}/plates/483/",
    "title": "Plate 483",
    "_date": "juillet 1803?",
    "caption": "Capote d’Organdie, piquée.",
    "translation": "Stitched organdy coat.",
    "student": "Emily Cormack"
  },
  {
    "lunr_id": 100,
    "link": "{{ site.baseurl }}/plates/49/",
    "title": "Plate 49",
    "_date": "13 Juillet",
    "caption": "Chapeau a fond ouvert et boutonné. Lassures croisées, cheveux naissons, schall en travers. Tivoli",
    "translation": "Hat lace up back, hair ? shawl drapped across. Tivoli",
    "student": "Sarah Bigler"
  },
  {
    "lunr_id": 101,
    "link": "{{ site.baseurl }}/plates/5/",
    "title": "Plate 5",
    "_date": "1797",
    "caption": " Toquet d'enfant, garni en dentelle, Bride noire Spencer, Robe Blanche, sure un Transparent",
    "translation": "Peasant-style children's bonnet, trimmed with lace, Spencer with black flange, White dress with a transparent layered on top of it",
    "student": "Avery Schroeder"
  },
  {
    "lunr_id": 102,
    "link": "{{ site.baseurl }}/plates/50/",
    "title": "Plate 50",
    "_date": "18 Julliet 1798",
    "caption": "Clotilde dans le Ballet de Paris (Théâtre de l'Opéra)",
    "translation": "Clotilde at the Parisian Ballet. Théâtre de l'Opéra",
    "student": "Sarah Bigler"
  },
  {
    "lunr_id": 103,
    "link": "{{ site.baseurl }}/plates/51/",
    "title": "Plate 51",
    "_date": "23 Juillet 1798",
    "caption": "Capote en crêpe noir, garni de trois nattes, doliman de couleur. Parc Mousseaux.",
    "translation": "Hat with stiff brim and soft crown made of black crepe, trimmed with three braided ribbons, Colorful Turkish costume. Parc Mousseaux.",
    "student": "Sarah Bigler"
  },
  {
    "lunr_id": 104,
    "link": "{{ site.baseurl }}/plates/52/",
    "title": "Plate 52",
    "_date": "28 Juillet 1798",
    "caption": "Capote en crêpe jaune garnie en noir. Sac à falbalasse. Champs-Élyseée.",
    "translation": "Yellow Hat with stiff brim and soft crown, embellished with black. Embroidered bag. Champs-Élyseée",
    "student": "Sarah Bigler"
  },
  {
    "lunr_id": 105,
    "link": "{{ site.baseurl }}/plates/53/",
    "title": "Plate 53",
    "_date": "2 aout 1798",
    "caption": "Chapeau garni de deux fichu. Rosettes symétriques.",
    "translation": "Hat adorned with two scarves, tied in two symmetrical bows.",
    "student": "Sarah Bigler"
  },
  {
    "lunr_id": 106,
    "link": "{{ site.baseurl }}/plates/54/",
    "title": "Plate 54",
    "_date": "7 aout 1798",
    "caption": "Chapeau orné d'une Guirlande en coques. Voile blanc. Collier-en-Cheveux. Chemise noir. Tivoli.",
    "translation": "Hat ornamented with a garland of shells. White veil, hair necklace, black dress. Tivoli.",
    "student": "Sarah Bigler"
  },
  {
    "lunr_id": 107,
    "link": "{{ site.baseurl }}/plates/55/",
    "title": "Plate 55",
    "_date": "",
    "caption": "Belmont dans Belle et Bonne (Théâtre du Vaudeville)",
    "translation": "Mme. Belmont in Belle et Bonne (The Two Sisters) at Théâtre du Vaudeville on 25 November 1797.",
    "student": "Sarah Bigler"
  },
  {
    "lunr_id": 108,
    "link": "{{ site.baseurl }}/plates/56/",
    "title": "Plate 56",
    "_date": "1797",
    "caption": "Cheveux à la Caracalla, Sac à ouvrage, appellé Balantine, Sandales",
    "translation": "Hair in the Caracalla style, work/utility pocket, called Balantine (balantine also means pocket with tassels and chords), sandals",
    "student": "Avery Schroeder"
  },
  {
    "lunr_id": 109,
    "link": "{{ site.baseurl }}/plates/57/",
    "title": "Plate 57",
    "_date": "22 aout 1798",
    "caption": "Cheveux à la Titus, echarpe agrafée sur l'épaule. Manteau sur le bras, gants froncés. Tivoli.",
    "translation": "Hair à la Titus, scarf fastened at the shoulder, Mantle draped over arm, gathered gloves. Tivoli.",
    "student": "Sarah Bigler"
  },
  {
    "lunr_id": 110,
    "link": "{{ site.baseurl }}/plates/58/",
    "title": "Plate 58",
    "_date": "",
    "caption": "Capote Mattée, garnie dun Papillon. Manches lacées. Schall en Echarpe.",
    "translation": "Mattée Cape, decorated with a buterfly.Sleeves lacées. Schall en Echarpe.",
    "student": "Ana Karen Aguero"
  },
  {
    "lunr_id": 111,
    "link": "{{ site.baseurl }}/plates/59/",
    "title": "Plate 59",
    "_date": "",
    "caption": "Négligé garni de deux Nattes. Fichu à pointe peu Saillante.",
    "translation": "Scruffy hair decorated with two plaits. Headscarf in a little prominent point.",
    "student": "Ana Karen Aguero"
  },
  {
    "lunr_id": 112,
    "link": "{{ site.baseurl }}/plates/6/",
    "title": "Plate 6",
    "_date": "1797",
    "caption": "Turban à Calotte plate, orné de Perles et d'un Plumet, Robe froncée, Schall en Sautoir",
    "translation": "Turban attached to a flat ‘Calotte’ bonnet, ornamented with beads and a plume, a gathered dress, a shawl draped from the neck to below the chest\n",
    "student": "Avery Schroeder"
  },
  {
    "lunr_id": 113,
    "link": "{{ site.baseurl }}/plates/60/",
    "title": "Plate 60",
    "_date": "",
    "caption": "Coeffure en Fichu. Tour de Cheveux postiche. Falblas Sous la Robe.",
    "translation": "Plaits in the scarf. Tour the fake hair. Ruffle dress under the dress.",
    "student": "Ana Karen Aguero"
  },
  {
    "lunr_id": 114,
    "link": "{{ site.baseurl }}/plates/61/",
    "title": "Plate 61",
    "_date": "",
    "caption": "Négligé à fond de Couleur. Bride en dessus. Rose sur le côté. Chemise sans Manches. Schall à franges. Lunette à deux Branches.",
    "translation": "Undergarmit of color. Support on the top. Pink on the side. Blouse without sleeves.",
    "student": "Ana Karen Aguero"
  },
  {
    "lunr_id": 115,
    "link": "{{ site.baseurl }}/plates/62/",
    "title": "Plate 62",
    "_date": "",
    "caption": "Cheveux à la Titus. Tunique Courte, garnie d´Agrèmens en Chenille.",
    "translation": "Hair like Titus. Short tunic, decorated with d´agémens in Caterpillar.",
    "student": "Ana Karen Aguero"
  },
  {
    "lunr_id": 116,
    "link": "{{ site.baseurl }}/plates/63/",
    "title": "Plate 63",
    "_date": "",
    "caption": "Capote en Crêpe, garnie d´une Bande Plissée, de Couleur Franchante, Fuirlande à plis crevés. Schall presque quarré.",
    "translation": "Cape in Crêpe, decorated with one wrinkle stripe, in the colour tranchante, Decorated in crevés folds. Schall almost squared.",
    "student": "Ana Karen Aguero"
  },
  {
    "lunr_id": 117,
    "link": "{{ site.baseurl }}/plates/64/",
    "title": "Plate 64",
    "_date": "",
    "caption": "Chapeau rond, à forme haute et plissée. Robe lacée en Losange, sur le orsage, sur les deux Manches, sur le bord infeérieur et sur les côtés.",
    "translation": "Round hat, in a big shape and wrinkles. Dress laced up in dimond shape, in the orsage, over two sleeves, on the lower border and on the sides.",
    "student": "Ana Karen Aguero"
  },
  {
    "lunr_id": 118,
    "link": "{{ site.baseurl }}/plates/65/",
    "title": "Plate 65",
    "_date": "",
    "caption": "Capote à haute forme, Taillée en pointes sur les côtés. Chaine d´or à large Mailles, formant Ceínture.",
    "translation": "Cape with a high shape, Craved in points on the side. Golden chain with big links, creating a belt.",
    "student": "Ana Karen Aguero"
  },
  {
    "lunr_id": 119,
    "link": "{{ site.baseurl }}/plates/66/",
    "title": "Plate 66",
    "_date": "",
    "caption": "Turban de forme Ovale, divisé par Bandes et orné d´un esprit. Fichu de Crêpe Noir.",
    "translation": "Turban with an oval shape, divided by strpes and decorated with a esprit. Scarf of crêpe black.",
    "student": "Ana Karen Aguero"
  },
  {
    "lunr_id": 120,
    "link": "{{ site.baseurl }}/plates/67/",
    "title": "Plate 67",
    "_date": "",
    "caption": "Cheveux Courts sous un Chignon tressé. Tunique plissée.Doliman à la Sauvage.",
    "translation": "Short hair under a braid bun. Wrinkled tunic. Wild looking Doliman.",
    "student": "Ana Karen Aguero"
  },
  {
    "lunr_id": 121,
    "link": "{{ site.baseurl }}/plates/68/",
    "title": "Plate 68",
    "_date": "",
    "caption": "Cornette en forme de Casque, garnie de Rubans Nuancés. Broderies etrusques. ",
    "translation": "Cornette in the shape of a helmet, decorated with shade ribbons. Etruscan embroderies.",
    "student": "Ana Karen Aguero"
  },
  {
    "lunr_id": 122,
    "link": "{{ site.baseurl }}/plates/69/",
    "title": "Plate 69",
    "_date": "",
    "caption": "Bonnet négligé, garni d´une Dentelle três-haute. Meubles en Acajou.",
    "translation": "Bonnet trimmed with a very high Lace. Mahogany furniture (?).",
    "student": "Ana Karen Aguero"
  },
  {
    "lunr_id": 123,
    "link": "{{ site.baseurl }}/plates/7/",
    "title": "Plate 7",
    "_date": "1797",
    "caption": "Chignon à la grecque, Relevé sur un Bonnet Rond,  Chemise à la Prêtresse, Mantelet de gaze, glands sur les souliers.",
    "translation": "Greek bun, raised or pulled up in a round bonnet, Priestess-style dress, Gauze/lace shawl, Shoes with tassels.",
    "student": "Avery Schroeder"
  },
  {
    "lunr_id": 124,
    "link": "{{ site.baseurl }}/plates/70/",
    "title": "Plate 70",
    "_date": "",
    "caption": "Turban à longue pointe. Lisieres de Mousseline en fil d´or, formant Garnitures.",
    "translation": "Elongated turban. Chiffon borders in thread of gold  forming decorations.",
    "student": "Ana Karen Aguero"
  },
  {
    "lunr_id": 125,
    "link": "{{ site.baseurl }}/plates/71/",
    "title": "Plate 71",
    "_date": "",
    "caption": "Turban et Spencer à L´ algérienne. Sac appellé RIDICULE, en forme de Corbille.",
    "translation": "Turban  and Spencer like an algerian. Ridiculous bag,in the shape of a basket.",
    "student": "Ana Karen Aguero"
  },
  {
    "lunr_id": 126,
    "link": "{{ site.baseurl }}/plates/72/",
    "title": "Plate 72",
    "_date": "",
    "caption": "Chapeau de Courrier. Schall Quarré.",
    "translation": "Post Hat. Schall Quarré",
    "student": "Ana Karen Aguero"
  },
  {
    "lunr_id": 127,
    "link": "{{ site.baseurl }}/plates/73/",
    "title": "Plate 73",
    "_date": "",
    "caption": "Toilette du Matin.",
    "translation": "Toilette in the Morning",
    "student": "Ana Karen Aguero"
  },
  {
    "lunr_id": 128,
    "link": "{{ site.baseurl }}/plates/74/",
    "title": "Plate 74",
    "_date": "",
    "caption": "Turban au Ballon. Ceinture croisée, Ridicule à Chiffre. Théâtre Faydeau.",
    "translation": "Turban with a Ball.Crossed belt, Handbag with Monogram.Faydeau Theater.",
    "student": "Anne Higonnet"
  },
  {
    "lunr_id": 129,
    "link": "{{ site.baseurl }}/plates/75/",
    "title": "Plate 75",
    "_date": "",
    "caption": "Chapeau Jockei, garni en Velours Coquelicot, Ceinture Croisée.Théâtre Italien.",
    "translation": "Jockey Hat, decorated with Poppy Velvet, Crossed Belt. Italien Theater.",
    "student": "Anne Higonnet"
  },
  {
    "lunr_id": 130,
    "link": "{{ site.baseurl }}/plates/76/",
    "title": "Plate 76",
    "_date": "",
    "caption": "Chapeau de Velours, orné de deux Plumes, Collier en esclavage. Théâtre Italien.",
    "translation": "Velvet Hat, decorated with two Feathers, Slave Necklace. Italien Theater",
    "student": "Anne Higonnet"
  },
  {
    "lunr_id": 131,
    "link": "{{ site.baseurl }}/plates/78/",
    "title": "Plate 78",
    "_date": "",
    "caption": "Variation du Chapeau de Courrier. Ceinture Croisée. Robe Ouverte sur le Côté. Théâtre Italien.",
    "translation": "Variation on the Courier Hat. Crossed Belt. Dress Open on the Side. Italien Theater",
    "student": "Anne Higonnet"
  },
  {
    "lunr_id": 132,
    "link": "{{ site.baseurl }}/plates/79/",
    "title": "Plate 79",
    "_date": "",
    "caption": "Amazone en Robe de Linon, Spencer de drap, Chapeau Jockei.",
    "translation": "Amazon in linen dress, wool spencer, jockey hat.",
    "student": "Meredith Levin"
  },
  {
    "lunr_id": 133,
    "link": "{{ site.baseurl }}/plates/8/",
    "title": "Plate 8",
    "_date": "1797",
    "caption": "Capote Anglaise, garnie en Crêpe, Bandeau de Velours, Guilloché en Or, Petit fichu croisé, Rubans en Cothurnes",
    "translation": "An English capote, decorated with crêpte material/fabric, velvet headband, embossed in gold, a little crossed scarf, ribboned Cothurne shoes",
    "student": "Avery Schroeder"
  },
  {
    "lunr_id": 134,
    "link": "{{ site.baseurl }}/plates/80/",
    "title": "Plate 80",
    "_date": "",
    "caption": "Bonnet négligé garni en Comètes. Schall de Casimir. Tuileries.",
    "translation": "Casual Bonnet decorated with Comets. Fine wool shawl. Tuileries",
    "student": "Anne Higonnet"
  },
  {
    "lunr_id": 135,
    "link": "{{ site.baseurl }}/plates/81/",
    "title": "Plate 81",
    "_date": "",
    "caption": "Demi-Capote posée de côté. Fichu. Tablier. Ridicule. Opéra.",
    "translation": "Kerchief. Apron. Handbag. Opera.",
    "student": "Anne Higonnet"
  },
  {
    "lunr_id": 136,
    "link": "{{ site.baseurl }}/plates/82/",
    "title": "Plate 82",
    "_date": "",
    "caption": "Capote Taillée en point sur le côté. Schall Ponceau. Tuileries.",
    "translation": "Soft-crowned, Stiff-brimmed Hat cut in a point on the side. Bright red shawl. Tuileries.",
    "student": "Anne Higonnet"
  },
  {
    "lunr_id": 137,
    "link": "{{ site.baseurl }}/plates/83/",
    "title": "Plate 83",
    "_date": "",
    "caption": "Chapeau à la Minerve. Robe Rayée Blanc sur Blanc. Théât. de la Rép.",
    "translation": "Minerva Hat. Striped White on White Dress. Theater de la République.",
    "student": "Anne Higonnet"
  },
  {
    "lunr_id": 138,
    "link": "{{ site.baseurl }}/plates/84/",
    "title": "Plate 84",
    "_date": "",
    "caption": "Chapeau de Velours Souci, orné de gances d’argent. Schall Ponceau à Bordures Noires. Magasin de Modes.",
    "translation": "Yellow-Orange Velvet Hat, trimmed with silver cord. Bright Red Shawl with Black Edges. Magasin de Modes.",
    "student": "Anne Higonnet"
  },
  {
    "lunr_id": 139,
    "link": "{{ site.baseurl }}/plates/85/",
    "title": "Plate 85",
    "_date": "",
    "caption": "Chapeau de Velours à fond plissé. Fichu – Schall à Bordure Effilée. Magasin de Modes.",
    "translation": "Velvet Hat with pleated crown. Kerchief – Shawl with Fringed Border. Magasin de Modes.",
    "student": "Anne Higonnet"
  },
  {
    "lunr_id": 140,
    "link": "{{ site.baseurl }}/plates/86/",
    "title": "Plate 86",
    "_date": "",
    "caption": "Toque de Velours, Bordée d’une Dentelle d’or, demi corset De Velours Ponceau. Opéra, 27 Nivose.",
    "translation": "Soft Velvet Hat, Edged with gold Lace, half corset In Bright Red Velvet. Opera, 27 Nivose.",
    "student": "Anne Higonnet"
  },
  {
    "lunr_id": 141,
    "link": "{{ site.baseurl }}/plates/88/",
    "title": "Plate 88",
    "_date": "15 January 1798",
    "caption": "Tournure d'un jeune homme.",
    "translation": "Young man's outfit",
    "student": "Brontë Hebdon"
  },
  {
    "lunr_id": 142,
    "link": "{{ site.baseurl }}/plates/9/",
    "title": "Plate 9",
    "_date": "1797",
    "caption": "Chignon à la Grecque, entrelacé avec un Fichu de couleur, Bandeau en Cheveaux, Collier de Perles, Ceinlure à la Victime",
    "translation": "Greek bun, interlaced with a colored hankerchief, headband in the hair, beaded necklace, victims belt",
    "student": "Avery Schroeder"
  },
  {
    "lunr_id": 143,
    "link": "{{ site.baseurl }}/plates/93/",
    "title": "Plate 93",
    "_date": "15 February 1798",
    "caption": "Cheveux courts, gilets bordés, pantalon et Bottines.",
    "translation": "Short hair, bordered vest, pants and boots",
    "student": "Brontë Hebdon"
  },
  {
    "lunr_id": 144,
    "link": "{{ site.baseurl }}/plates/94/",
    "title": "Plate 94",
    "_date": "20 February 1798",
    "caption": "Chapeau de paille blanche, ample voile. spencer de drap. ",
    "translation": "Straw Hat, large veil, draped spencer",
    "student": "Brontë Hebdon"
  },
  {
    "lunr_id": 145,
    "link": "{{ site.baseurl }}/plates/98/",
    "title": "Plate 98",
    "_date": "",
    "caption": "Bonnet - Turban en Crêpe. fichu - Ceinturen",
    "translation": "Turban bonnet made of crepe fabric. Scarf-belt.",
    "student": "Jodi Mikesell"
  },
  {
    "lunr_id": 146,
    "link": "{{ site.baseurl }}/plates/an11/",
    "title": "An 11 Morgan Modes et Caricat no 15",
    "_date": "1802/1803",
    "caption": "Modes et Caricat no. 15",
    "translation": "Fashion and caricatures, number 15.",
    "student": "Emily Cormack"
  }
];
