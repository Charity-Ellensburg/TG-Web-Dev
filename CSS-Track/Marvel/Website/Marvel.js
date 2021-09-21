const toggleButton = document.getElementById("toggle-button");
const navList = document.getElementById("nav-list");

toggleButton.addEventListener("click", () => {
  navList.classList.toggle("active");
});

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "20em";
  document.getElementById("main").style.marginLeft = "20em";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// API key voor toegang tot de Marvel API
const pub_key = "0926a6345f9d79f2c19fa876e13f08a5";

// Timestamp voor API key en encryptie
const ts = new Date().getTime();

// Private key voor encryptie
const priv_Key = "9129672a7833f92952fe14a30bb66381ad12daa3";

// Encryptie gebruikt keys en huidige tijd.
const hash = CryptoJS.MD5(ts + priv_Key + pub_key).toString();

// URL waar data verzoek naartoe gestuurd wordt
const main_comics = `https://gateway.marvel.com/v1/public/comics?limit=16&ts=${ts}&apikey=${pub_key}&hash=${hash}`;

// Een array waar het resultaat in opgeslagen wordt.
let resultsArray = [];

// Fetch() vraagt de data op.
fetch(main_comics)
  // Vervolgens wordt deze naar JSON verwerkt
  .then((reply) => reply.json())

  // Daarna wordt de verwerkte response gecontroleerd op items zonder plaatje
  .then((response) => {
    // Loopt door elk item in de response
    response.data.results.forEach((item) => {
      // Checkt of het een valid item is.
      if (validItem(item)) {
        // Bij valid items pakt hij de thumbnail
        let thumb = item.thumbnail;
        // En wordt de thumbnail gebruikt om het grootste formaat plaatje op te slaan in item.img
        item.img = thumb.path + "/portrait_xlarge." + thumb.extension;
        // Vervolgens wordt het hele item toegevoegd aan het resultaat.
        resultsArray.push(item);
      }
    });
    showResult(resultsArray);
  });

// Kijkt of de image beschikbaar is. Een item zonder image is geen valid item.
function validItem(item) {
  // Als er geen thumbnail is, wordt er false gereturned.
  if (!item.thumbnail || !item.thumbnail.path) {
    return false;
  }
  // Als er wel een thumbnail is, maar de thumbnail zegt "image not available" is het ook false.
  let image_available =
    item.thumbnail.path.indexOf("image_not_available") === -1;
  // Anders is het true.
  return image_available;
}

function showResult(resultsArray) {
    // Image of a comic
    let img0 = document.querySelector(".img_0");
    img0.onclick = displayModal;
    img0.src = resultsArray[0].thumbnail.path + ".jpg";
    // Title of a comic
    let title0 = document.querySelector(".title_0");
    title0.innerText = resultsArray[0].title;
    // Description of the comic
    let descr0 = document.querySelector(".descr_0");
    // descr0.innerText = resultsArray[0].description; 

    
    let img1 = document.querySelector(".img_1");
    img1.onclick = displayModal;
    img1.src = resultsArray[1].thumbnail.path + ".jpg";
    
    let title1 = document.querySelector(".title_1");
    title1.innerText = resultsArray[1].title;
    
    let descr1 = document.querySelector(".descr_1");
    // descr1.innerText = resultsArray[1].description;


    let img2 = document.querySelector(".img_2");
    img2.onclick = displayModal;
    img2.src = resultsArray[3].thumbnail.path + ".jpg";
    
    let title2 = document.querySelector(".title_2");
    title2.innerText = resultsArray[3].title;
    
    let descr2 = document.querySelector(".descr_2");
    // descr2.innerText = resultsArray[3].description;
    
    let img3 = document.querySelector(".img_3");
    img3.onclick = displayModal;
    img3.src = resultsArray[4].thumbnail.path + ".jpg";
    
    let title3 = document.querySelector(".title_3");
    title3.innerText = resultsArray[4].title;
    
    let descr3 = document.querySelector(".descr_3");
    // descr3.innerText = resultsArray[4].description;

    let img4 = document.querySelector(".img_4");
    img4.onclick = displayModal;
    img4.src = resultsArray[5].thumbnail.path + ".jpg";
    
    let title4 = document.querySelector(".title_4");
    title4.innerText = resultsArray[5].title;
    
    let descr4 = document.querySelector(".descr_4");
    // descr4.innerText = resultsArray[5].description;

    let img5 = document.querySelector(".img_5");
    img5.onclick = displayModal;
    img5.src = resultsArray[6].thumbnail.path + ".jpg";
    
    let title5 = document.querySelector(".title_5");
    title5.innerText = resultsArray[6].title;
    
    let descr5 = document.querySelector(".descr_5");
    // descr5.innerText = resultsArray[6].description;

    let img6 = document.querySelector(".img_6");
    img6.onclick = displayModal;
    img6.src = resultsArray[7].thumbnail.path + ".jpg";
    
    let title6 = document.querySelector(".title_6");
    title6.innerText = resultsArray[7].title;
    
    let descr6 = document.querySelector(".descr_6");
    // descr6.innerText = resultsArray[7].description;

    let img7 = document.querySelector(".img_7");
    img7.onclick = displayModal;
    img7.src = resultsArray[8].thumbnail.path + ".jpg";
    
    let title7 = document.querySelector(".title_7");
    title7.innerText = resultsArray[8].title;
    
    let descr7 = document.querySelector(".descr_7");
    // descr7.innerText = resultsArray[8].description;
}

//Modal
// Get the modal
const modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
function displayModal (event) {
  const comicNumber = event.target.id.charAt(event.target.id.length - 1)
  // Image of a comic
  const imgModal = document.querySelector("#displayModal");
  imgModal.src = resultsArray[comicNumber].thumbnail.path + ".jpg";
  // Title of a comic
  const titleModal = document.querySelector("#title_modal");
  titleModal.innerText = resultsArray[comicNumber].title;
  // Description of the comic
  const descrModal = document.querySelector("#descr_modal");
  descrModal.innerText = resultsArray[comicNumber].description;
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

