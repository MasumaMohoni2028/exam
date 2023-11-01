
(function () {
   
    function insertImage() {
      
      var image = document.createElement('img');
      image.src = 'image/kind.webp'; 
      image.alt = 'Image Description'; 
      image.className = 'img-fluid'; 
  
     
      var imageContainer = document.getElementById('imageContainer');
      imageContainer.appendChild(image);
    }
  
    
    document.getElementById('insertImageBtn').addEventListener('click', insertImage);
  })();
  