function removeAds() {

    let ads = document.getElementsByTagName("span");

    for (let i = 0; i < ads.length; ++i) {
        if (ads[i].innerHTML === "Promoted") {
            let card = ads[i].closest(".feed-shared-update-v2");
            if (card === null) {
                let k = 0;
                card = ads[i];
                while (k < 6) {
                    card = card.parentNode;
                    ++k;
                }
            }
            card.setAttribute("style", "display: none !important;");
        }
    }
}
removeAds();
setInterval(function () {
    removeAds();
}, 100)


