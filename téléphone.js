/** Exigences
* Écrivez une programme qui calcule le prix total de votre mobile. 
* Vous continuerez à acheter des mobiles jusqu'à vous dépenser tout 
* votre argent. Vous acheterez aussi des accessoires pour chaque mobile 
* à condition que le montant de votre achat est dessous votre budget. 
*
*/

// Constants
const TAX_RATE = 0.07;
const PHONE_PRICE = 100;
const ACCESSORIES = 15;

// Variables
var Budget = prompt("Combien d'argent avez-vous pour cet achat? ");
var cart = 0;
var total;

// Interactive Session
while (cart < Budget) {
  
  if ((Budget - cart) > PHONE_PRICE) {
      cart = purchase(cart);
      console.log(cart);
      } else {
        break;
      }
  if ((Budget - cart) > ACCESSORIES) {
      cart = purchase(cart);
      console.log(cart);
      } else {
        break;
  }
}

total = calculateFinalPurchaseAmount(cart);
verifyPrice(total);

// Functions
function purchase(c) {
    var phonePrompt = prompt("Bienvenue au magasin de Télé-Portable! Est-ce que vous voudriez faire un achat? Nos nouveaux portables coutent 100 euros. (Oui/Non) [Votre Budget: "+Budget+" euros, Votre Cart: "+c+" euros ]");
    var accessoiresPrompt = prompt("Vous voudriez des accessoires? (Oui/Non) [Votre Budget: "+Budget+" euros, Votre Cart: "+c+" euros ]");
      phonePrompt;
      if (phonePrompt == "Oui") {
          if (Budget > c) {
              c = c + PHONE_PRICE;
          }
      } else {
          console.log("Pas de problème.");
      }
      
      
      if (accessoiresPrompt == "Oui") {
          if (Budget > c) {
              c = c + ACCESSORIES;
          }
      } else {
          console.log("Pas de problème.");
      }
    return c;
}

function calculateFinalPurchaseAmount(amt){
    // appliquer la taxe
    amt = amt + (amt * TAX_RATE);

    //retourner le nouveaux prix
    return amt;
}

function verifyPrice (total){
    console.log("Votre taux sera " + printAmount(total) );
    if (total < Budget) {
      console.log("Merci pour vos achats. Au revoir!");
    } else (
      console.log("Vous n'avez pas assez d'argent. Au revoir!")
      );
  }

function printAmount (amount) {
    return "$" + amount.toFixed( 2 );
}
