let buttonShare = document.querySelector(".share-button");
let buttonShareClicked = document.querySelector('#clicked');
let shareP = buttonShare.parentElement;
let shareClickedP =buttonShareClicked.parentElement;

function hideShareSection(){
    shareP.className= "share-section clicked"
    shareClickedP.className="share-button-clicked clicked"
}
function hideShareSectionClicked(){
    shareP.className= "share-section "
    shareClickedP.className="share-button-clicked"
}
buttonShare.addEventListener('click',hideShareSection)
buttonShareClicked.addEventListener('click',hideShareSectionClicked)