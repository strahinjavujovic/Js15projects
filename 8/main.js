///divs
var butterMilk = document.createElement("div"); //bf/////////////////////
butterMilk.innerHTML = `<div class="img"><img src="img/item-1.jpg" /></div>
<div class="info">
  <h3>Buttermilk Pancakes <span class="prize">$15.99</span></h3>
  <p>
    I'm baby woke mlkshk wolf bitters live-edge blue bottle,
    hammock freegan copper mug whatever cold-pressed
  </p>
</div>`;
var countryDelight = document.createElement("div"); //bf///////////
countryDelight.innerHTML = `<div class="img"><img src="img/item-4.jpg" /></div>
<div class="info">
  <h3>Country Delight <span class="prize">$20.99</span></h3>
  <p>
  Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,
  </p>
</div>`;
var baconOverflow = document.createElement("div"); //bf///////////
baconOverflow.innerHTML = `<div class="img"><img src="img/item-7.jpg" /></div>
<div class="info">
  <h3>Bacon Overflow <span class="prize">$8.99</span></h3>
  <p>
  carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird
  </p>
</div>`;
///////////////////////////LUNCH
var dinerDouble = document.createElement("div"); //lunch
dinerDouble.innerHTML = ` 
<div class="img"><img src="img/item-2.jpg" /></div>
<div class="info">
  <h3>Diner Double <span class="prize">$13.99</span></h3>
  <p>
  vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats
  </p>
</div>`;
var americanClassic = document.createElement("div"); //lunch
americanClassic.innerHTML = ` 
<div class="img"><img src="img/item-8.jpg" /></div>
<div class="info">
  <h3>American Classic <span class="prize">$12.99</span></h3>
  <p>
  on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut.
  </p>
</div>`;
var eggAttack = document.createElement("div"); //lunch
eggAttack.innerHTML = ` 
<div class="img"><img src="img/item-5.jpg" /></div>
<div class="info">
  <h3>Egg Attack <span class="prize">$22.99</span></h3>
  <p>
  franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up
  </p>
</div>`;
////////////SHAKESS
var godMilk = document.createElement("div"); //shakes
godMilk.innerHTML = ` 
<div class="img"><img src="img/item-3.jpg" /></div>
<div class="info">
  <h3>Godzilla Milkshake <span class="prize">$6.99</span></h3>
  <p>
  ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.
  </p>
</div>`;
var quarantineBuddy = document.createElement("div"); //shakes
quarantineBuddy.innerHTML = ` 
<div class="img"><img src="img/item-9.jpg" /></div>
<div class="info">
  <h3>Quarantine Buddy <span class="prize">$16.99</span></h3>
  <p>
  skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.
  </p>
</div>`;
var oreoDream = document.createElement("div"); //shakes
oreoDream.innerHTML = ` 
<div class="img"><img src="img/item-6.jpg" /></div>
<div class="info">
  <h3>Oreo Dream <span class="prize">$18.99</span></h3>
  <p>
  Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday.
  </p>
</div>`;
/////////////////DINNER
var steak = document.createElement("div"); //dinner
steak.innerHTML = ` 
<div class="img"><img src="img/item-10.jpg" /></div>
<div class="info">
  <h3>Steak Dinner <span class="prize">$39.99</span></h3>
  <p>
  skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.
  </p>
</div>`;
//function on load
window.addEventListener("load", all);
function all() {
  //listONE
  document.querySelector(".list-one").appendChild(butterMilk);
  document.querySelector(".list-one").appendChild(godMilk);
  document.querySelector(".list-one").appendChild(eggAttack);
  document.querySelector(".list-one").appendChild(baconOverflow);
  document.querySelector(".list-one").appendChild(quarantineBuddy);
  //listTWO
  document.querySelector(".list-two").appendChild(dinerDouble);
  document.querySelector(".list-two").appendChild(countryDelight);
  document.querySelector(".list-two").appendChild(oreoDream);
  document.querySelector(".list-two").appendChild(americanClassic);
  document.querySelector(".list-two").appendChild(steak);
}
///FUNCTIONS ON BUTTON CLICK
document.querySelector(".all").addEventListener(
  //ALL
  "click",
  function () {
    //listONE
    document.querySelector(".list-one").appendChild(butterMilk);
    document.querySelector(".list-one").appendChild(godMilk);
    document.querySelector(".list-one").appendChild(eggAttack); //
    document.querySelector(".list-one").appendChild(baconOverflow);
    document.querySelector(".list-one").appendChild(quarantineBuddy);
    //listTWO
    document.querySelector(".list-two").appendChild(dinerDouble); //
    document.querySelector(".list-two").appendChild(countryDelight);
    document.querySelector(".list-two").appendChild(oreoDream);
    document.querySelector(".list-two").appendChild(americanClassic); //
    document.querySelector(".list-two").appendChild(steak);
  },
  false
);
document.querySelector(".bf").addEventListener(
  //BREAKFAST
  "click",
  function () {
    //listONE
    document.querySelector(".list-one").appendChild(butterMilk);
    document.querySelector(".list-one").appendChild(godMilk);
    document.querySelector(".list-one").appendChild(eggAttack); //
    document.querySelector(".list-one").appendChild(baconOverflow);
    document.querySelector(".list-one").appendChild(quarantineBuddy);
    //listTWO
    document.querySelector(".list-two").appendChild(dinerDouble); //
    document.querySelector(".list-two").appendChild(countryDelight);
    document.querySelector(".list-two").appendChild(oreoDream);
    document.querySelector(".list-two").appendChild(americanClassic); //
    document.querySelector(".list-two").appendChild(steak);
    //listONE
    document.querySelector(".list-one").removeChild(godMilk);
    document.querySelector(".list-one").removeChild(eggAttack);
    document.querySelector(".list-one").removeChild(quarantineBuddy);
    ///listTWO
    document.querySelector(".list-two").removeChild(dinerDouble);
    document.querySelector(".list-two").removeChild(oreoDream);
    document.querySelector(".list-two").removeChild(americanClassic);
    document.querySelector(".list-two").removeChild(steak);
  },
  false
);
//LUNCH
document.querySelector(".lunch").addEventListener(
  //lunch

  "click",
  function () {
    //listONE
    document.querySelector(".list-one").appendChild(butterMilk);
    document.querySelector(".list-one").appendChild(godMilk);
    document.querySelector(".list-two").appendChild(eggAttack);
    document.querySelector(".list-one").appendChild(baconOverflow);
    document.querySelector(".list-one").appendChild(quarantineBuddy);
    //listTWO
    document.querySelector(".list-one").appendChild(dinerDouble);
    document.querySelector(".list-two").appendChild(countryDelight);
    document.querySelector(".list-two").appendChild(oreoDream);
    document.querySelector(".list-one").appendChild(americanClassic);
    document.querySelector(".list-two").appendChild(steak);
    //listONE

    document.querySelector(".list-one").removeChild(butterMilk);
    document.querySelector(".list-one").removeChild(godMilk);
    document.querySelector(".list-one").removeChild(baconOverflow);
    document.querySelector(".list-one").removeChild(quarantineBuddy);
    //listTWO
    document.querySelector(".list-two").removeChild(countryDelight);
    document.querySelector(".list-two").removeChild(oreoDream);
    document.querySelector(".list-two").removeChild(steak);
  },
  false
);
//SHAKES
document.querySelector(".shakes").addEventListener(
  //shakes
  "click",
  function () {
    //listONE
    document.querySelector(".list-one").appendChild(butterMilk);
    document.querySelector(".list-one").appendChild(godMilk);
    document.querySelector(".list-one").appendChild(eggAttack);
    document.querySelector(".list-one").appendChild(baconOverflow);
    document.querySelector(".list-one").appendChild(quarantineBuddy);
    //listTWO
    document.querySelector(".list-two").appendChild(dinerDouble);
    document.querySelector(".list-two").appendChild(countryDelight);
    document.querySelector(".list-two").appendChild(oreoDream);
    document.querySelector(".list-two").appendChild(americanClassic);
    document.querySelector(".list-two").appendChild(steak);
    //listONE
    document.querySelector(".list-one").removeChild(butterMilk);
    document.querySelector(".list-one").removeChild(eggAttack);
    document.querySelector(".list-one").removeChild(baconOverflow);
    ///listTWO
    document.querySelector(".list-two").removeChild(dinerDouble);
    document.querySelector(".list-two").removeChild(countryDelight);
    document.querySelector(".list-two").removeChild(americanClassic);
    document.querySelector(".list-two").removeChild(steak);
  },
  false
);
//DINNER
document.querySelector(".dinner").addEventListener(
  //shakes
  "click",
  function () {
    //listONE
    document.querySelector(".list-one").appendChild(steak);
    document.querySelector(".list-one").appendChild(godMilk);
    document.querySelector(".list-one").appendChild(eggAttack);
    document.querySelector(".list-one").appendChild(baconOverflow);
    document.querySelector(".list-one").appendChild(quarantineBuddy);
    //listTWO
    document.querySelector(".list-two").appendChild(butterMilk);
    document.querySelector(".list-two").appendChild(countryDelight);
    document.querySelector(".list-two").appendChild(oreoDream);
    document.querySelector(".list-two").appendChild(americanClassic);
    document.querySelector(".list-two").appendChild(dinerDouble);
    //listONE
    document.querySelector(".list-one").removeChild(godMilk);
    document.querySelector(".list-one").removeChild(eggAttack);
    document.querySelector(".list-one").removeChild(baconOverflow);
    document.querySelector(".list-one").removeChild(quarantineBuddy);
    ///listTWO
    document.querySelector(".list-two").removeChild(butterMilk);
    document.querySelector(".list-two").removeChild(countryDelight);
    document.querySelector(".list-two").removeChild(oreoDream);
    document.querySelector(".list-two").removeChild(americanClassic);
    document.querySelector(".list-two").removeChild(dinerDouble);
  },
  false
);
