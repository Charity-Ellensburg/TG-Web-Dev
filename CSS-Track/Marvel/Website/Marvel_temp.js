const toggleButton = document.getElementById('toggle-button')
const navList = document.getElementById('nav-list')

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
})

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
        const pub_key = '0926a6345f9d79f2c19fa876e13f08a5'

        // Timestamp voor API key en encryptie
        const ts = new Date().getTime();

        // Private key voor encryptie
        const priv_Key = '9129672a7833f92952fe14a30bb66381ad12daa3'

        // Encryptie gebruikt keys en huidige tijd.
        const hash = CryptoJS.MD5(ts + priv_Key + pub_key).toString()

        // URL waar data verzoek naartoe gestuurd wordt
        const main_comics = `https://gateway.marvel.com/v1/public/comics?limit=16&ts=${ts}&apikey=${pub_key}&hash=${hash}`

        // Een array waar het resultaat in opgeslagen wordt.
        let resultsArray = []

        // Fetch() vraagt de data op.
        fetch(main_comics)
            // Vervolgens wordt deze naar JSON verwerkt
            .then(reply => reply.json())
            // Daarna wordt de verwerkte response gecontroleerd op items zonder plaatje
            .then(response => {
                // Loopt door elk item in de response
                response.data.results.forEach((item) => {
                    // Checkt of het een valid item is.
                    if (validItem(item)) {
                        // Bij valid items pakt hij de thumbnail
                        let thumb = item.thumbnail
                        // En wordt de thumbnail gebruikt om het grootste formaat plaatje op te slaan in item.img
                        item.img = thumb.path + '/portrait_xlarge.' + thumb.extension
                        // Vervolgens wordt het hele item toegevoegd aan het resultaat.
                        resultsArray.push(item)
                    }
                })
                showResult(resultsArray);
                showTitle(resultsArray)
            });

        // Kijkt of de image beschikbaar is. Een item zonder image is geen valid item.
        function validItem(item) {
            // Als er geen thumbnail is, wordt er false gereturned.
            if (!item.thumbnail || !item.thumbnail.path) {
                return false
            }
            // Als er wel een thumbnail is, maar de thumbnail zegt "image not available" is het ook false.
            let image_available = item.thumbnail.path.indexOf('image_not_available') === -1
            // Anders is het true.
            return image_available
        }
let link = []
function showResult(resultsArray) {
    for (let index = 0; index < resultsArray.length; index++) {
    // link.push(resultsArray[index].thumbnail.path + ".jpg");
    document.querySelector('image-' + index).src = resultsArray[index].thumbnail.path + ".jpg";
    }  
}
console.log(link)

      
