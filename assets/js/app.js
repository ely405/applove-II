
window.addEventListener("load", function(){
  var imageToShow = document.getElementsByClassName("image-to-show-modal");
  var boxModal = document.getElementById("modal-container");
  var imageModal = document.getElementById("image-modal");

  for (var i = 0; i < imageToShow.length; i++) {
    imageToShow[i].addEventListener("click", function(event){
      alert("hola");
      boxModal.style.display = "block";
      imageModal.src = event.target.src;
      imageModal.style.border = "8px solid white";
      imageModal.style.borderRadius = "3px";
    });
  }

  document.getElementById("close").addEventListener("click", function(){
    boxModal.style.display = "none";
  });
});
