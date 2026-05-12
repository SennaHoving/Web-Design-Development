#check-out
## 09/02
werken met een api omhoog gehaalt, zo opgezet dat ik alle data uit de api kan halen. En vervolgens gekeken naar het concept. 
fetchen van de api heb ik in de ochtend kunnen afronden, concept heb ik de rest van de middag aan gewerkt maar.
niet veel nieuws geleerd, werken met een api was vooral weer kennis terug ophalen. 
morgen ga ik mijn leerdoelen opzetten. 

## 10/02
schets leerdoelen opgesteld, concept bedacht, en hybrid scrolling proberen uit te werken
leerdoelen één uur, concept heeft wel even geduurt ben ik rest van de ochten en deels middag mee bezig geweest, en scrollen nog mee bezig
concept verzinnen gaat makkelijke als je richting eraan geeft, en limiteringen voor jezelf maakt. Hybrid scrolling is toch best lastig?
Morgen het scrollen afmaken, en de svg / tekeningen maken.  

## 11/02 code review
font? miss via html
Quotes niet consistent javascript
javascript structure
root styles aan de body koppelen? 
responsive

vergekeken naar het animeren van de svg op scroll, en de responsiveness daarvan. En kort gekeken naar ligt and dark mode. 
de animatie werkte all, eigenlijk de heledag bezig geweest met de scroll en de animatie tegelijkertijd op de scroll
het scrollen werk bijna (en responsive), en morgen de animaties maken. 

## Voortgang 
Voor de voortgang heb ik niet niet veel kunnen laten zien aangezien het nu nog simpele svg waren, dus het concept nog niet heel duidelijk overkwam. Wel heb ik feedback gekregen op mijn leerdoelen. De leerdoelen waren opzich goed, wees er bewust van dat leerdoel 3 over plannen en meer ruimte voor feedback overhouden goed te doen is door deadlines voor jezelf te stellen. 

## Reflectie
Voor deze week nog niet heel ver kunnen komen met het project als ik denk had gewilt, maar ik denk dat het goed is dat ik toch wat langer op het concept ben blijven hangen omdat dat er uiteindelijk toch voor gezorgt dat ik een iets meer buiten mijn comfort bezig ben, wat aansluit op een leerdoel. 

[screenshot week 1](./assets/week1.png)

## Checkout
Vandag ben ik bezig geweest met de svg zelf en de animatie ervan. Ik ben begonnen met het tekenenen van de svg, waarbij ik nog steeds dat 'single line' effect wou houden. En nadat ik de svg af had gemaakt, heb ik de animtie ervan verder gemaakt, zodat het net lijkt alsof the svgs getekend worden. Omdat de animatie natuurlijk moest werken op basis van hoe ver je bent gescrolled, was dit nog wel even uitzoeken maar uiteindelijk gelukt: 

```
window.addEventListener('scroll', () => {
    const box = hybridSection.getBoundingClientRect();
    const sectionHeight = hybridSection.offsetHeight;
    const viewportHeight = window.innerHeight;

    const scrollableDistance = sectionHeight - viewportHeight;
    const scrolledIn = -box.top;

    const progress = Math.min(Math.max(scrolledIn / scrollableDistance, 0), 1);

    paths.forEach((path, i) => {
        const length = path.getTotalLength();
        const start = i / paths.length;
        const end = i === paths.length - 1 ? 1.05 : (i + 1) / paths.length; // ← extend last path's end

        const lineProgress = Math.min(Math.max((progress - start) / (end - start), 0), 1);
        path.style.strokeDashoffset = length * (1 - lineProgress);
    });
});
```

## Checkout
Vandaag heb ik de api toegepast. Hiervoor heb ik eerst de api in javascript gefetched, en daarna de alle namen vanuit die api in een container toegevoegd in de html. Het is een tijd geleden dat ik een api heb gebruikt, dus misschien niet perse veel nieuws hierbij opgepakt, maar was het goed om weer een keer te gebuiken. 

## Reflectie 
Uiteindeijk heb ik misschien lang gedaan over het concept, maar ik ben wel tevreden met het resultaat. Het is iets waar ik normaal gesproken denk niet super snel aan was begonnen, omdat ik zeker aan het begin een beetje twijfelde of ik dit wel kon. Ik denk dat buiten mijn stijl / comfor lag, maar nog niet gek genoeg waarbij het onhaalbaar leek, dus heeft mij goed uitgedaagd. 

[eind 1](./assets/eind.png)
[eind 2](./assets/eind2.png)

Verder had ik misschien met wat meer tijd nog wat meer in de details gegaan voor de pagina. Ik denk dat de coole dingen goed gelukt zijn, maar op sommige delen van de site nog wel wat detial mist, aan de lege kant. Door het missende detail toe te voegen gaat de pagina er denk nog wel veel op vooruit. 

## bronnen
https://medium.com/@lauren.perini/creating-javascript-scroll-animations-3d685519d6f8
https://chatgpt.com/share/6989df4b-acec-800a-b53d-7dd37db2ac0e
https://chatgpt.com/share/698b171c-e874-800a-a9b5-190a80037839
https://codepen.io/bibomato/pen/poqYzeq
https://www.youtube.com/watch?v=yXnK8ND76z8

