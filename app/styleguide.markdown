---
layout: page
title: "Styleguide"
description: "Der Styleguide dieser Seite"
permalink: "/styleguide/"
---

Dieses Dokument ist der Styleguide für diese Website.

## Überschriften

Die Hauptüberschrift dieses Styleguides[^1] in eine `h1`. Jede Überschrift kann auch Links enthalten.

Die 2. Überschrift oben ist eine `h2`, die benutzt werden kann um Hauptsektionen auf Seitenebene zu markieren. Davon kann mehr als eine Überschrift pro Seite verwendet werden.

{% highlight html %}
## Überschrift der zweiten Ordnung
{% endhighlight %}


### Überschrift der dritten Ordnung

Die Überschrift oben ist eine `h3`, die benutzt werden kann für jede Überschrift die in der Hierarchie unter der `h2` ist.

{% highlight html %}
### Überschrift der dritten Ordnung
{% endhighlight %}


#### Überschrift der vierten Ordnung

Die Überschrift oben ist eine `h4`, die benutzt werden kann für jede Überschrift die in der Hierarchie unter der `h3` ist.

{% highlight html %}
#### Überschrift der vierten Ordnung
{% endhighlight %}


##### Überschrift der fünften Ordnung

Die Überschrift oben ist eine `h5`, die benutzt werden kann für jede Überschrift die in der Hierarchie unter der `h4` ist.

{% highlight html %}
##### Überschrift der fünften Ordnung
{% endhighlight %}


###### Überschrift der sechsten Ordnung

Die Überschrift oben ist eine `h6`, die benutzt werden kann für jede Überschrift die in der Hierarchie unter der `h5` ist.

{% highlight html %}
###### Überschrift der sechsten Ordnung
{% endhighlight %}


## Absätze

Alle Absätze werden in `p` gewrappt. Zusätzlich können `p` auch in `blockquote` gewrappt werden.

Absätze sind in der Textgestaltung einen aus einem oder mehreren Sätzen bestehenden Abschnitt eines fortlaufenden Textes. Ein Absatz ist ein Sinnzusammenhang oder ein eigenes kleines Thema. Ist dieser Gedanke ausgeführt, folgt ein neuer Absatz.

{% highlight html %}
Dies ist ein Absatz.

Dies ist ein zweiter Absatz.
{% endhighlight %}


### Optimale Zeilenlänge

Die Zeilen des Textes sollten immer eine opt<span class="line-length-debug">imale Länge haben. S<span class="line-length-perfect-debug">i</span>e dürfen</span> nicht zu kurz sein, weil das für die Augen anstrengend ist so oft die Zeile zu wechseln. Aber sie dürfen auch nicht zu lang sein, da man sonst Probleme hat mit dem Auge in die nächste Zeile zu springen. Im Web werden ca. 45 bis 75 Zeichen als Ideal betrachtet, wobei es auch auf Schriftart, Schriftfarbe, Zeilenabstand und viele andere Aspekte ankommt. Aber die gut zu merkende Zahl 66 als optimale Zeilenlänge ist nicht ganz falsch. Dieser Absatz ist zwischen den Zeilen 45 und 75 markiert und der Umbruch sollte immer innerhalb der farbigen Markierung liegen. Der "perfekte" Zeilenabstand ist rot markiert.


## Sektionen-Trenner

Das `hr` kennzeichnet einen thematischen Bruch auf Absatzebene, z. B. einen Szenenwechel in einer Geschichte oder einen Übergang zu einem anderen Thema. Der folgende Auszug aus <cite>Pandora’s Star</cite> von Peter F. Hamilton zeight zwei Absätze, die einen Szenenwechel zeigen:

Dudley was ninety-two, in his second life, and fast approaching time for another rejuvenation. Despite his body having the physical age of a standard fifty-year-old, the prospect of a long degrading campaign within academia was one he regarded with dread. For a supposedly advanced civilization, the Intersolar Commonwearth could be appallingly backward at times, not to mention cruel.

<i>Maybe it won’t be that bad</i>, he told himself. The lie was comforting enough to get him through the rest of the night’s shift.

---------------------------------------

The Carlton AllLander drove Dudley home just after dawn. Like the astronomer, the vehicle was old and worn, but perfectly capable of doing its job. It had a cheap diesel engine, common enough on a semi-frontier world like Gralmond, although its drive array was a thoroughly modern photoneural processor. With its high suspension and deep-tread tyres it could plough along the dirt track to the observatory in all weather and seasons, including the metre-deep snow of Gralmond’s winters.

{% highlight html %}
Dudley was ninety-two, in his second life …

---------------------------------------

The Carlton AllLander drove Dudley home just after dawn. …
{% endhighlight %}


## Preformatierter Text

Das `pre` wird verwendet, um preformatierten Text anzuzeigen, also Text, der genau so angezeigt werden soll, wie er geschrieben war, also inklusive eventueller mehrfacher Leerzeichen, Einrückungen oder ASCII-Zeichen[^2].

<pre>
Dies    soll genau  S O  aussehen.
</pre>

{% highlight html %}
<pre>
Dies    soll genau  S O  aussehen.
</pre>
{% endhighlight %}


## Zitate

### Blockzitat

Die `blockquote` repräsentiert einen Abschnitt, der aus einer anderen Quelle zitiert.

Zusätzlich dazu kann auch das Element `cite` verwendet werden, um ein Werk zu marieren aus dem zitiert wurde.

#### Einfaches Blockzitat

{% blockquote %}
Dies ist ein Zitat.
{% endblockquote %}

{% highlight html %}
{% raw %}{% blockquote %}
Dies ist ein Zitat.
{% endblockquote %}{% endraw %}
{% endhighlight %}


#### Zitat aus einem gedruckten Werk

{% blockquote J.R.R. Tolkien, Der Herr der Ringe %}
Drei Ringe den Elben, hoch im Licht. Sieben den Zwergen in ihren Hallen aus Stein. Den Sterblichen, ewig dem Tode verfalln: Neun. Ein Ring sie zu knechten, sie alle zu finden, ins Dunkel zu treiben und ewig zu binden. Im Lande Mordor, wo die Schatten drohn.
{% endblockquote %}

{% blockquote Douglas Adams, The Hichhikers Guide to the Galaxy %}
Flying is learning how to throw yourself at the ground and miss.
{% endblockquote %}

{% highlight html %}
{% raw %}{% blockquote Douglas Adams, The Hichhikers Guide to the Galaxy %}
…
{% endblockquote %}{% endraw %}
{% endhighlight %}


#### Zitat von Twitter

{% blockquote @allanbranch https://twitter.com/allanbranch/status/90766146063712256 %}
Over the past 24 hours I've been reflecting on my life & I've realized only one thing. I need a medieval battle axe.
{% endblockquote %}

{% highlight html %}
{% raw %}{% blockquote @allanbranch https://twitter.com/allanbranch/status/90766146063712256 %}
…
{% endblockquote %}{% endraw %}
{% endhighlight %}


#### Zitat aus einem Artikel im Internet

{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}

{% blockquote Winston Churchill http://hansard.millbanksystems.com/commons/1947/nov/11/parliament-bill#column_206a Speech to the House of Commons %}
Many forms of Government have been tried, and will be tried in this world of sin and woe. No one pretends that democracy is perfect or all-wise. Indeed, it has been said that democracy is the worst form of government except all those other forms that have been tried from time to time.
{% endblockquote %}

{% highlight html %}
{% raw %}{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
…
{% endblockquote %}{% endraw %}
{% endhighlight %}


### Pullquote

#### Pullquote (rechts)

{% pullquote %}
Wenn man sehr lange Absätze schreibt, ist es hilfreich ein herausgeschobenen Zitatblock zu verwenden, der einen wichtigen Teil des Abschnitts markiert. Einige benutzen vielleicht lieber viele Überschriften, was auch meistens gut funktioniert, aber weniger gut für lange Prosa geeignet ist. {" Wichtig anzumerken ist, dass die Pullquotes nur visuelle Präsentation sind und nicht zweimal im Code erscheinen. "} Deshalb werden CSS-Techniken angewandt, um das Zitat ein weiteres mal sichtbar zu machen. In Octopress kann man dieses sehr einfach mit dem Pullquote-Tag erreichen.
{% endpullquote %}

{% highlight html %}
{% raw %}{% pullquote %}
Wenn man sehr lange Absätze schreibt, … {" Wichtig anzumerken ist … und nicht zweimal im Code erscheinen. "} Deshalb werden CSS-Techniken angewandt, um …
{% endpullquote %}{% endraw %}
{% endhighlight %}


#### Pullquote (links)

{% pullquote left %}
Wenn man sehr lange Absätze schreibt, ist es hilfreich ein herausgeschobenen Zitatblock zu verwenden, der einen wichtigen Teil des Abschnitts markiert. Einige benutzen vielleicht lieber viele Überschriften, was auch meistens gut funktioniert, aber weniger gut für lange Prosa geeignet ist. {" Wichtig anzumerken ist, dass die Pullquotes nur visuelle Präsentation sind und nicht zweimal im Code erscheinen. "} Deshalb werden CSS-Techniken angewandt, um das Zitat ein weiteres mal sichtbar zu machen. In Octopress kann man dieses sehr einfach mit dem Pullquote-Tag erreichen.
{% endpullquote %}

{% highlight html %}
{% raw %}{% pullquote left %}
Wenn man sehr lange Absätze schreibt, … {" Wichtig anzumerken ist … und nicht zweimal im Code erscheinen. "} Deshalb werden CSS-Techniken angewandt, um …
{% endpullquote %}{% endraw %}
{% endhighlight %}


#### Pullquote (zentriert)

Manchmal möchte man einen kurzen Zitatblock verwenden, der nicht im Text vorkommt, oder besonders prägnant ist und daher zentriert stehen soll. Wenn ein Attribute `lang` mitgegeben wird, werden automatisch die korrekten Zitatzeichen verwendet (für Deutsch, Englisch und Japanisch).

<blockquote lang="en" class="pullquote">
  <p>No time for pessimism.</p>
</blockquote>

{% highlight html %}
<blockquote lang="en" class="pullquote">
  <p>No time for pessimism.</p>
</blockquote>
{% endhighlight %}


### Inline-Zitate

Peter sagte <q>Sie soll mir das sofort hergeben</q> und war ziemlich sauer.

{% highlight html %}
Peter sagte <q>Sie soll mir das sofort hergeben</q> und war ziemlich sauer.
{% endhighlight %}


#### Deutsche Zitate (verschachtelt)

Luke führte weiter aus, <q>Und sie nannte ihn einen <q>total blöd-aussehenen Idioten</q>! Ich denke ich habe eine Chance!</q> Dieser arme Idiot …

{% highlight html %}
Luke führte weiter aus, <q>Und sie nannte ihn einen <q>total blöd-aussehenen Idioten</q>! Ich denke ich habe eine Chance!</q> Dieser arme Idiot …
{% endhighlight %}


#### Englische Zitate (verschachtelt)

<p lang="en">Luke conntinued, <q>And the she called him a <q>scruffy-looking nerf-herder</q>! I think I’ve got a chance!</q> The poor naive fool …</p>

{% highlight html %}
<p lang="en">Luke conntinued, <q>And the she called him a <q>scruffy-looking nerf-herder</q>! I think I’ve got a chance!</q> The poor naive fool …</p>
{% endhighlight %}


#### Japanische Zitate (verschachtelt)

<p lang="ja">彼女は<q>日本語に猫は<q>にゃん</q>と鳴く</q>と言った。</p>

{% highlight html %}
<p lang="ja">彼女は<q>日本語に猫は<q>にゃん</q>と鳴く</q>と言った。</p>
{% endhighlight %}


## Verse

Gedichte und Verse sollen so geschrieben werden, wie sie vom Autor gedacht waren und außerdem in der Seite zentriert stehen. Dafür gibt es einen Stil:

{% verse Lewis Carroll, Jabberwocky (1832-98) %}
‘Twas brillig, and the slithy toves
Did gyre and gimble            in the wabe;
All mimsy     were     the borogoves,
And       the mome     raths            outgrabe.
{% endverse %}

{% highlight html %}
{% raw %}{% verse Lewis Carroll, Jabberwocky (1832-98) %}
‘Twas brillig, and the slithy toves
Did gyre and gimble            in the wabe;
All mimsy     were     the borogoves,
And       the mome     raths            outgrabe.
{% endverse %}{% endraw %}
{% endhighlight %}


## Randbemerkungen

{% aside %}
<h4 class="aside__headline">Überschrift</h4>
<p>Dies ist eine Randbemerkung.</p>
{% endaside %}

Manchmal möchte man mitten im Text etwas erklären, was nicht direkt zum Text gehört, aber das zum Verständnis des Textes beitragen kann. Diese Randbemerkungen wurden im Print üblicherweise in den Rand der Publikation gedruckt und hatten eine kleinere Schrift. Manchmal kann man diese aber auch im Text selbst stehen sehen, und sie werden durch eine andere Farbe oder einen Rand als Nebenbemerkung gekennzeichnet. Auf dieser Website stehen die Randbemerkungen (`aside`) im Rand und zwar im rechten Rand. Als Überschrift (wenn nötig) sollte minimal eine `h4` verwendet werden.

{% highlight html %}
{% raw %}{% aside %}
<h4 class="aside__headline">Überschrift</h4>
<p>Dies ist eine Randbemerkung.</p>
{% endaside %}{% endraw %}
{% endhighlight %}

## Listen

### Geordnete Listen

Das Element `ol` kennzeichnet eine geordnete Lste, und durch CSS sind verschiedenste Nummerierungen möglich (z. B. 1, 2, 3, … a, b, c, … und so weiter).

1. Dies ist eine geordnete Liste
2. Dies ist der zweite Listeneintrag, der eine Unterliste enthält
   1. Dies ist die Unterliste, ebenfalls geordnet
   2. Sie hat zwei Einträge
3. Dies ist der dritte Listeneintrag
4. Dies ist der vierte Listeneintrag
5. Dies ist der fünfte Listeneintrag
6. Dies ist der sechste Listeneintrag
7. Dies ist der siebte Listeneintrag
8. Dies ist der achte Listeneintrag
9. Dies ist der neunste Listeneintrag
10. Dies ist der zehnte Listeneintrag
11. Dies ist der elfte Listeneintrag
12. Dies ist der zwölfte und letzte Eintrag auf dieser Liste

{% highlight html %}
1. Dies ist eine geordnete Liste
2. Dies ist der zweite Listeneintrag, der eine Unterliste enthält
   1. Dies ist die Unterliste, ebenfalls geordnet
   2. Sie hat zwei Einträge
3. Dies ist der letzte Eintrag auf dieser Liste
{% endhighlight %}


### Ungeordnete Listen

Das Element `ul` kennzeichnet eine ungeordnete Liste (z. B. eine Liste von Einträgen, die nur locker sortiert sind oder eine Punktliste).

- HTML
- CSS
  - Sass
    - Compass
  - LESS
  - Stylus
- JavaScript
  - Backbone.js
  - Angular.js
  - Ember.js

{% highlight html %}
- HTML
- CSS
  - Sass
    - Compass
  - LESS
  - Stylus
- JavaScript
  - Backbone.js
  - Angular.js
  - Ember.js
{% endhighlight %}

Manchmal soll eine Liste auch Blockelemente enthalten, üblicherweise einen Absatz oder zwei.

- HTML ist eine Auszeichnungssprache die verwendet wird, um die semantische Struktur eines Dokumentes zu schreiben.

- CSS ist eine deklarive Sprache für Stilvorlagen. Damit wird das visuelle Aussehen eines HTML-Dokumentes gesteuert.

- JavaScript ist eine Programmiersprache, die verwendet wird um Interaktionen zu einer Website hinzuzufügen oder ganze Programme für das Internet zu schreiben.

{% highlight html %}
- HTML ist eine Auszeichnungssprache die verwendet wird, um …

- CSS ist eine deklarive Sprache für Stilvorlagen. Damit wird …

- JavaScript ist eine Programmiersprache, die verwendet wird um …
{% endhighlight %}


### Definitionslisten

Das Element `dl` ist ein weiterer Typ von Liste, nämlich eine Defintionsliste. Anstelle von Listeneinträgen besteht eine `dl` aus Paaren von `dt` (Defintion Term) und `dd` (Definition Description). Auch wenn diese Listenform *Definitionsliste* genannt wird, kann sie auch in anderen Szenarios verwendet werden, in denen Eltern/Kind-Beziehungen vorkommen.

<dl>
  <dt>Dies ist eine Bezeichnung.</dt>
  <dd>Dies ist die Definition für die Bezeichnung.</dd>
  <dt>Dies ist eine weitere Bezeichnung.</dt>
  <dd>Und dies ist die Definitions für die Bezeichnung.</dd>
  <dt>Hier ist eine Bezeichnung die sich eine Definition mit der Bezeichnung darunter teilt.</dt>
  <dt>Dies ist eine Bezeichnung.</dt>
  <dd>Dies ist eine Definition für die beiden Bezeichnungen darüber.</dd>
</dl>

{% highlight html %}
<dl>
  <dt>Dies ist eine Bezeichnung.</dt>
  <dd>Dies ist die Definition für die Bezeichnung.</dd>
  <dt>Dies ist eine weitere Bezeichnung.</dt>
  <dd>Und dies ist die Definitions für die Bezeichnung.</dd>
  <dt>Hier ist eine Bezeichnung … der Bezeichnung darunter teilt.</dt>
  <dt>Dies ist eine Bezeichnung.</dt>
  <dd>Dies ist eine Definition für die beiden Bezeichnungen darüber.</dd>
</dl>
{% endhighlight %}


## Inline-Text

Es gibt eine Vielzahl von Inline-HTML-Elementen, die überall in anderen Elementen verwendet werden können.


### Links und Anker

Das Element `a` wird verwendet um Text zu verlinken, ob auf eine andere Seite, ein benanntes Fragment der aktuellen Seite oder auf einen anderen Ort im Internet:

[Gehe zur Startseite zurück](/),  [Springe zum Anfang der Seite](#top) oder besuche eine [fantastische Website im Internet]({{ site.url }}).

{% highlight html %}
[Dies ist ein Link]({{ site.url }})
{% endhighlight %}


### Betonte Texte

Das Element `em` wird benutzt, um Betonung für Text auszuzeichnen, also z. B. wenn etwas anders ausgesprochen wird oder wichtiger ist. Um Text nur schräg zu stellen ist das Element `i` vorzuziehen:

Du *musst* einfach Negitoro Maki[^3] probieren!

{% highlight html %}
Du *musst* einfach Negitoro Maki probieren!
{% endhighlight %}


### Wichtige Texte

Das Element `strong` wird verwendet, um Text mit starker Wichtigkeit auszuzeichnen. Wo Text nur fett sein soll, ist das Element `b`vorzuziehen:

Das Eis zu betreten ist **verboten**!

{% highlight html %}
Das Eis zu betreten ist **verboten**!
{% endhighlight %}


### Durchgestrichene Texte

Das Element `s` wird verwendet um Inhalte auszuzeichnen, die nicht länger akturat oder relevant sind. Um in Dokumenten zu markieren, dass ein Text entfernt wurde, ist das Element `del` zu verwenden.

<s>Empfohlene Preisempfehlung: 3,99 € pro Flasche</s><br>
<strong>Jetzt für nur noch 2,99 € pro Flasche! </strong>

{% highlight html %}
<s>Empfohlene Preisempfehlung: 3,99 € pro Flasche</s>
{% endhighlight %}


### Zitat-Quellen

Das Element `cite` wird verwendet um den Titel einer Arbeit (z. B. ein Buch, Aufsatz, Gedicht, Song, Film, TV-Show, Skulptur, Gemälde, Musical, Ausstellung etc) zu markieren.

<cite>Universal Declaration of Human Rights</cite>, United Nations, December 1948. Adopted by General Assembly resolution 217 A (III).

{% highlight html %}
<cite>Universal Declaration of Human Rights</cite>, United Nations, …
{% endhighlight %}


### Definitionen

Das Element `dfn` wird verwendet um Begriffe zu markieren, die erklärungsbedürftig sind. Mit dem Attribute `title` kann die Erklärung hinzugefügt werden.

Die <dfn title="geheime Person">Ninja</dfn> wurden im Zeitalter <dfn title="Zeitalter des Bürgerkriegs">Sengokujidai</dfn> von Japan als Spione, Kundschafter oder Attentäter eingesetzt, um Aufgaben zu erledigen, die den <dfn title="Kriegerkaste Japans">Samurai</dfn> aufgrund ihres Ehrenkodex nicht möglich war.

{% highlight html %}
Die <dfn title="geheime Person">Ninja</dfn> wurden im Zeitalter …
{% endhighlight %}


### Abkürzungen

Das Element `abbr` wird für abgekürzten Text verwenden, egal ob es sich um Akronyme, Initialworte oder ähnliches. Nur wenn die Abkürzung nicht in Kapitälchen geschrieben werden soll, vergibt man ein extra Klassen-Attribut.

BBC, HTML, and <abbr class="no-caps" title="Staffordshire">Staffs.</abbr>

{% highlight html %}
BBC, HTML, and <abbr class="no-caps" title="Staffordshire">Staffs.</abbr>
{% endhighlight %}


### Zeiten

Das Element `time` wird benutzt, um entweder die Zeit auf einer 24-Stunden-Uhr zu markieren oder ein präzises Datum des Gregorianischen Kalenders zu kennzeichnen.

Die Schlacht von Sekigahara[^4] am <time datetime="1600-10-21">21. Oktober 1600</time> stellte einen Wendepunkt der japanischen Geschichte dar. Durch den Sieg gelangt es dem Haus Tokugawa, die Vormachtstellung in Japan zu sichern.

{% highlight html %}
Die Schlacht von Sekigahara am <time datetime="1600-10-21">21. Oktober 1600</time> …
{% endhighlight %}


### Variablen

Das Element `var` wird verwendet, um Variablen in mathematischen Ausdrücken oder Programmcode zu kennzeichnen, kann aber auch verwendet werden um Platzhalter zu markieren, bei denen der Wert mit dem eigenen Wert ersetzt werden soll.

Wenn <var>n</var> Rohre zur Eiscreme-Fabrik führen, dann erwarte ich *wenigstens* <var>n</var> verschiedene Geschmacksrichtungen für den Verkauf!

{% highlight html %}
Wenn <var>n</var> Rohre zur Eiscreme-Fabrik führen, dann erwarte …
{% endhighlight %}


### Beispiel-Ausgabe

Das Element `samp` wird verwendet um beispielhafte Ausgaben von Programmen oder Computer-Systemen zu kennzeichnen.

Der Computer gab <samp>Fehler -1</samp> auf dem Bildschirm aus, aber ich weiß nicht, was das bedeutet.

{% highlight html %}
Der Computer gab <samp>Fehler -1</samp> auf dem Bildschirm aus, aber …
{% endhighlight %}


### Keyboard-Tasten

Mit dem Element `kbd` werden Benutzereingaben gekennzeichnet (üblicherweise über die Tastatur, aber es können auch andere Eingaben, wie Sprachbefehle gekennzeichnet werden).

Dies ist nur etwas zufälliger Text, um sicherzustellen, dass die Tastaturbefehle in der mitte des Absatz gezeigt werden, da so die korrekte Zeilenhöhe geprüft werden kann. Um einen Screenshot am Mac zu erstellen, drücke <kbd>⌘ Cmd</kbd> + <kbd>⇧ Shift</kbd> + <kbd>3</kbd>. Und noch etwas Text danach, nur um sicherzugehen, das alles gut aussieht.

{% highlight html %}
Drücke <kbd>⌘ Cmd</kbd> + <kbd>⇧ Shift</kbd> + <kbd>3</kbd>
{% endhighlight %}


### Superskript und Subskript

Das Element `sup` kennzeichnet Superskript und das Element `sub` Subskript.

Die Koordinate des <var>i</var>ten Punktes ist (<var>x</var><var><sub>i</sub></var>, <var>y</var><var><sub>i</sub></var>). Der zehnte Punkt hat die Coordinate (<var>x<sub>10</sub></var>, <var>y<sub>10</sub></var>). Dies ist nur etwas weiterer Text der nur dafür da ist zu prüfen, ob die Zeilenhöhe stimmt.

Mathe ist eine nette Sache, manchmal möchte man mitten im Text eine Formel haben. Und sogar Berechnungen wie diese f(<var>x</var>, <var>n</var>) = log<sub>4</sub><var>x</var><sup><var>n</var></sup> sollte funktionieren und nicht die Zeilenhöhe verändern oder den Textfluß verändern.

{% highlight html %}
x<sub>i</sub>

f(x, n) = log<sub>4</sub>x<sup>n</sup>
{% endhighlight %}


### Kursive Texte

Das Element `i` wird benutzt um eine andere Stimme oder Stimmung zu kennzeichnen oder Text, der auf andere Weise vom Fließtext abweicht. Dies können z. B. technische Begriffe, umgangssprachliche Begriffe aus anderen Sprachen, der Name eines Schiffes oder andere Arten von Text, die üblicherweise kursiv dargestellt werden.

Es liegt eine bestimmte <i lang="fr">je ne sais quoi</i> in der Luft.

{% highlight html %}
Es liegt eine bestimmte <i lang="fr">je ne sais quoi</i> in der Luft.
{% endhighlight %}


### Fette Texte

Das Element `b` wird verwendet um Worte vom Text abzuheben ohne ihnen extra Bedeutung zu geben, wie z. B. Schlüsselworte, Produktnamen oder andere Arten von Text, die üblicherweise fett dargestellt werden.

Du betrittst einen kleinen Raum. Dein <b>Schwert</b> leuchtet heller. Eine <b>Ratte</b> huscht an der Wand vorbei.

{% highlight html %}
Dein <b>Schwert</b> leuchtet heller. Eine <b>Ratte</b> huscht an der Wand vorbei.
{% endhighlight %}


### Markierte oder hervorgehobene Texte

Das Element `mark` wird verwendet um einen <mark>Textmarker</mark> zu repräsentieren, der durch einen Text geht und stellen hervorhebt. Wenn es in einem Zitat verwendet wird, dann um eine Stelle <mark>hervorzuheben</mark>, die vorher nicht hervorgehoben war, aber auf die hingewiesen werden soll.

{% highlight html %}
Mit <mark>mark</mark> kann man Worte markieren.
{% endhighlight %}


### Bearbeitungen

Das Element `del` wird verwendet um Text zu markieren, der nicht mehr gültig ist und entfernt werden müsste, aber aus bestimmten Gründen auf der Seite stehen bleiben muss. Sein Gegenstück, das Element `ins` markiert Text, der hinzugefügt wurde. Es kann optional ein Zeitstempel hinzugefügt werden, der anzeigt, wann die Änderung durchgeführt wurde.

Sie kaufte <del datetime="2005-05-30T13:00:00">zwei</del> <ins datetime="2005-05-30T13:00:00">fünf</ins> Paar Schuhe.

{% highlight html %}
Sie kaufte <del datetime="2005-05-30T13:00:00">zwei</del> <ins datetime="2005-05-30T13:00:00">fünf</ins> Paar Schuhe.
{% endhighlight %}


### Ruby

Das Element `ruby` hat nichts mit der Programmiersprache <cite>Ruby</cite> zu tun. Damit wird in verschiedenen asiatischen Sprachen die Aussprache von seltenen Schriftzeichen übertitelt. Im Japanischen gelten z. B. nur 1945 Zeichen als offizielle Zeichen, die im täglichen Sprachgebrauch von offiziellen Dokumenten verwendet werden dürfen. Es gibt aber viele tausend Zeichen mehr. Um auch weniger gebildeten zu ermöglichen, das Zeichen zu lesen, wird dann über diesen Zeichen Lautschrift geschrieben.

<ruby>攻殻<rp>（</rp><rt>こうかく</rt><rp>）</rp>機動隊<rp>（</rp><rt>きどうたい</rt><rp>）</rp></ruby>

Das Japanische Kino hat einige Meisterwerke hervorgebracht, sowohl in Farbe als auch in Schwarz/Weiß. Der bekannte Film 7 Samurai (<ruby>七人の侍<rp>（</rp><rt>しちにんのさむらい</rt><rp>）</rp></ruby>) von Akira Kurosawa ist einer der besten Filme der japanischen Geschichte. Der Film ist so gut, dass er sogar ein Remake erfahren hat: <cite>Die Glorreichen Sieben</cite>.

{% highlight html %}
<ruby>攻殻<rp>（</rp><rt>こうかく</rt><rp>）</rp>機動隊<rp>（</rp><rt>きどうたい</rt><rp>）</rp></ruby>
{% endhighlight %}


## Tabellen

Tabellen sollten verwendet werden, um tabellarische Daten anzuzeigen. Die Elemente `thead`, `tbody` und `tfoot` sind dafür da Reihen in der Tabelle zu gruppieren.


### Einfache Tabellen

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

{% highlight html %}
First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell
{% endhighlight %}

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

{% highlight html %}
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
{% endhighlight %}


### Gestreifte Tabellen

<table class="table--striped">
  <thead>
    <tr>
      <th>#</th>
      <th>Vorname</th>
      <th>Nachname</th>
      <th>Benutzername</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

{% highlight html %}
<table class="table--striped">
…
</table>
{% endhighlight %}


### Tabellen mit Rand

<table class="table--bordered">
  <thead>
    <tr>
      <th>#</th>
      <th>Vorname</th>
      <th>Nachname</th>
      <th>Benutzername</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

{% highlight html %}
<table class="table--bordered">
…
</table>
{% endhighlight %}


### Tabellen mit Hover-Interaktion

<table class="table--hover">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

{% highlight html %}
<table class="table--hover">
…
</table>
{% endhighlight %}


## Bilder

Ein einfaches Bild:

<img src="http://lorempixel.com/680/408/nightlife/" alt="Example image">

{% highlight html %}
<img src="http://lorempixel.com/680/408/nightlife/" alt="Example image">
{% endhighlight %}


## Abbildungen

{% figure "Dies ist der Untertitel, die <code>figcaption</code>." %}
  <img src="http://lorempixel.com/680/408/fashion/" alt="Example image">
{% endfigure %}

{% highlight html %}
{% raw %}{% figure "Dies ist der Untertitel, die <code>figcaption</code>." %}
  <img src="http://lorempixel.com/680/408/fashion/" alt="Example image">
{% endfigure %}{% endraw %}
{% endhighlight %}

### Abbildung mit erzwungender Umrandung

{% figure image-figure--border %}
  <img src="http://lorempixel.com/680/408/nature/" alt="Example image">
{% endfigure %}

{% highlight html %}
{% raw %}{% figure image-figure--border %}
  <img src="http://lorempixel.com/680/408/nature/" alt="Example image">
{% endfigure %}{% endraw %}
{% endhighlight %}

### Abbildung mit entfernter Umrandung

{% figure image-figure--noborder %}
  <img src="http://lorempixel.com/680/408/food/" alt="Example image">
{% endfigure %}

{% highlight html %}
{% raw %}{% figure image-figure--noborder %}
  <img src="http://lorempixel.com/680/408/food/" alt="Example image">
{% endfigure %}{% endraw %}
{% endhighlight %}

### Abbildung mit Schatten

{% figure image-figure--shadow %}
  <img src="http://lorempixel.com/680/408/animals/" alt="Example image">
{% endfigure %}

{% highlight html %}
{% raw %}{% figure image-figure--shadow %}
  <img src="http://lorempixel.com/680/408/animals/" alt="Example image">
{% endfigure %}{% endraw %}
{% endhighlight %}

## Videos

Es ist auch möglich Videos einzubetten, und zwar als natives HTML5, direkt von YouTube oder Vimeo.

### Native HTML5-Videos

{% video http://s3.imathis.com/video/zero-to-fancy-buttons.mp4 640 420 http://s3.imathis.com/video/zero-to-fancy-buttons.png %}

{% highlight html %}
{% raw %}{% video http://s3.imathis.com/video/zero-to-fancy-buttons.mp4 640 420 http://s3.imathis.com/video/zero-to-fancy-buttons.png %}{% endraw %}
{% endhighlight %}

### YouTube-Videos

{% youtube zY_D2ZZAZIo %}

{% highlight html %}
{% raw %}{% youtube zY_D2ZZAZIo %}{% endraw %}
{% endhighlight %}

### Vimeo-Videos

{% vimeo 29413609 %}

{% highlight html %}
{% raw %}{% vimeo 29413609 %}{% endraw %}
{% endhighlight %}


## Code

Das Element `code` ist nützlich um Fragmente von Computercode auszuzeichnen.

Wenn du die Methode `activate()` des Objektes `robotSnowman` aufrufst, leuchten die Augen.

Dieses wird oft zusammen mit dem Element `pre` verwendet.


### Codeblöcke


#### Ohne Highlighting

Einfache Codeblöcke ohne Sprachangabe und Highlighting können so geschrieben werden:

    Mein fantastischer Code

{% highlight text %}
    Mein fantastischer Code
{% endhighlight %}

Diese werden einfach in ein `<pre>` und ein `<code>` eingeschlossen.


#### Mit Hightlighting

{% highlight sh %}
$ chmod a+x *.txt
{% endhighlight %}

{% highlight ruby %}
def index
  puts "Hallo Welt"
end
{% endhighlight %}

{% highlight html %}
{% raw %}{% highlight sh %}
$ chmod a+x *.txt
{% endhighlight %}

{% highlight ruby %}
def index
  puts "Hallo Welt"
end
{% endhighlight %}
{% endraw %}{% endhighlight %}


#### Mit Hightlighting und Zeilennummerierung

{% highlight ruby linenos %}
def index
  puts "Hallo Welt"
end
{% endhighlight %}

{% highlight html %}
{% raw %}
{% highlight ruby linenos %}
def index
  puts "Hallo Welt"
end
{% endhighlight %}
{% endraw %}
{% endhighlight %}


#### Längere Beispiele

{% highlight ruby %}
namespace :images do

  desc "Crush all images"
  task :crush do
    App::Application.config.assets.paths.each do |directory|
      ImageCrusher.optimize({
        directory: directory,
        quantize: true
      })
    end
  end

end
{% endhighlight %}

{% highlight css %}
/**
 * CSS/Markup: Flexbox
 */

article {
  margin-bottom: 20px;
}

article > div {
  display: -webkit-flex;
  display: flex;
  background: red;
}

.trigger {
  background: red;
  display: block;
}

.opportunity {
  background: green;
  flex: 1;
}

.match {
  background: blue;
  flex: 1;
}
{% endhighlight %}

Es werden eine Reihe von Sprachen unterstützt: [Pygments-Dokumentation](http://pygments.org/docs/lexers/) oder eine [kurze Liste](https://github.com/jneen/rouge/wiki/List-of-supported-languages-and-lexers)

[^1]: Ein Styleguide (oder deutsch Gestaltungsrichtlinie) beschreibt, wie bestimmte Elemente eines Druckerzeugnisses oder einer Website zu gestalten sind. Diese Richtlinien sollen ein einheitliches Erscheinungsbild verschiedener Kommunikationsmittel einer Institution oder Firma, z. B. Werbe- und Informationsmaterial, Geschäftsbriefe oder Internetauftritte, gewährleisten und so die Bildung einer Corporate Identity ermöglichen. Daneben werden Styleguides auch für die Software-Erstellung oder Produkte allgemein eingesetzt; auch hier ist das Ziel: Produkte sollen als zusammengehörig wahrgenommen werden und ggf. auch mit der verbundenen Marke assoziiert werden.
[^2]: Der American Standard Code for Information Interchange (ASCII, alternativ US-ASCII, oft [ˈæski] ausgesprochen) ist eine 7-Bit-Zeichenkodierung; sie entspricht der US-Variante von ISO 646 und dient als Grundlage für spätere, auf mehr Bits basierende Kodierungen für Zeichensätze. Die ASCII-Kodierung wurde am 17. Juni 1963 von der American Standards Association (ASA) als Standard ASA X3.4-1963 veröffentlicht und 1967 sowie zuletzt im Jahr 1968 (ANSI X3.4-1968) aktualisiert. Die Zeichenkodierung definiert 128 Zeichen, bestehend aus 33 nicht druckbaren sowie 95 druckbaren.
[^3]: Maki-Sushi (巻き寿司, Maki-Zushi, dt. „Rollen-Sushi“) sind mit einer Bambusmatte (Makisu) gerollte Stücke. Es wird für gewöhnlich in Nori eingepackt.
[^4]: Die Schlacht von Sekigahara (jap. 関ヶ原の戦い, Sekigahara no tatakai) am 21. Oktober 1600 stellte einen Wendepunkt in der japanischen Geschichte dar. Durch den Sieg in dieser Schlacht gelang es dem Haus Tokugawa, seine Vormachtstellung in Japan zu festigen. Im Laufe der nächsten fünfzig Jahre gab es zwar noch einige kleinere Aufstände, aber das Land wurde letztlich befriedet. Viele Historiker setzen den Übergang von der Sengoku-Zeit zur Edo-Zeit auf das Datum dieser Schlacht.
