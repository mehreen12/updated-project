document.addEventListener('DOMContentLoaded', function () {
  const products = document.querySelectorAll('.product');

  const productData = {
    product1: {
      title: 'Product 1 Title',
      description: 'Product 1 description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum purus vel ipsum interdum, sit amet ullamcorper ligula suscipit. Sed non augue massa. Sed convallis orci non felis convallis, vitae rutrum sem tincidunt.',
      relatedImages: [
        { src: 'related1.jpg', alt: 'Related Image 1' },
        { src: 'related2.jpg', alt: 'Related Image 2' },
      ],
    },
    product2: {
      title: 'Product 2 Title',
      description: 'Product 2 description goes here. Sed quis dapibus felis. In non felis sit amet elit euismod tincidunt. Aenean convallis leo nec eros lobortis, id vestibulum nisi fermentum. Proin euismod lacinia libero vitae vestibulum.',
      relatedImages: [
        { src: 'related3.jpg', alt: 'Related Image 3' },
        { src: 'related4.jpg', alt: 'Related Image 4' },
      ],
    },
    product3: {
      title: 'Product 3 Title',
      description: 'Product 3 description goes here. Phasellus at justo tellus. Sed laoreet libero sed magna finibus eleifend. Morbi sit amet tincidunt dui. Integer consectetur fermentum arcu eu consequat. Donec elementum magna libero, sit amet hendrerit augue tempor et.',
      relatedImages: [
        { src: 'related5.jpg', alt: 'Related Image 5' },
        { src: 'related6.jpg', alt: 'Related Image 6' },
      ],
    },
    product4: {
      title: 'Product 4 Title',
      description: 'Product 4 description goes here. Fusce elementum ligula nec eros lobortis, a elementum tortor tristique. Ut sed varius tortor. Aliquam posuere consequat elit, eget varius felis tincidunt in. Vestibulum sed nibh tellus.',
      relatedImages: [
        { src: 'related7.jpg', alt: 'Related Image 7' },
        { src: 'related8.jpg', alt: 'Related Image 8' },
      ],
    },
    product5: {
      title: 'Product 5 Title',
      description: 'Product 5 description goes here. Curabitur a dui in quam lobortis consectetur non a ante. Donec nec odio mauris. Sed sagittis magna nec dolor volutpat, ut eleifend nulla ultricies. Mauris vel dolor scelerisque, vulputate enim at, pharetra nulla.',
      relatedImages: [
        { src: 'related9.jpeg', alt: 'Related Image 9' },
        { src: 'images/bgh.jpeg', alt: 'Related Image 10' },
      ],
    },
  };

  products.forEach(product => {
    const img = product.querySelector('.product-image');
    img.onclick = function() {
      const productId = product.id;
      const data = productData[productId];

      const modalTemplate = document.getElementById('modal-template');
      const modal = modalTemplate.cloneNode(true);
      modal.id = '';
      document.body.appendChild(modal);

      const modalContent = modal.querySelector('.modal-content');
      const modalTitle = modalContent.querySelector('h2');
      const modalDescription = modalContent.querySelector('p');
      const modalRelatedImages = modalContent.querySelector('.related-images');

      modalTitle.textContent = data.title;
      modalDescription.textContent = data.description;

      data.relatedImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        modalRelatedImages.appendChild(imgElement);
      });

      modal.style.display = "block";

      const closeModal = modal.querySelector('.close');
      closeModal.onclick = function() {
        modal.style.display = "none";
        document.body.removeChild(modal);
      };

      window.onclick = function(event) {
        if (event.target === modal) {
          modal.style.display = "none";
          document.body.removeChild(modal);
        }
      };
    };
  });
});
































/*body{
  background: whitesmoke;

  
}
.header {
    display: flex;
    width: 80%;
    margin-top: 20px;
    
}

.imgh{
  height: 875px;
  display: block;
  position: relative;
  width: 100%;
    background-image:url("images/bgh.jpeg") ;
  background-repeat: repeat-y;
  background-size: cover;

}
a {
    color: black; /* Change to your desired color */
    text-decoration: none; /* Optional: Removes underline */
}

a:hover {
    color: sandybrown; /* Change to your desired color on hover */
}

  
.icon{
  
  border: none;
    background: none;
    cursor: pointer;
    outline: none;
    font-size: 24px;
    color: black;
    margin-left: 30vh;
    margin-top: 65px;

  }

.icon :hover{
  color: sandybrown;
  transform: scale(1.1,1.1);
  transition: .3s transform;
}
.htext{
  font-size: 35px;
  font-family: serif,cursive;
  color: black;
  text-align: center;
  margin-top: 65px;
}

#cart{
  float: right;
  border: none;
    background: none;
    cursor: pointer;
    outline: none;
    font-size: 24px;
    color: black;
    margin-right: 30vh;
    margin-top: 65px ;

}

#cart :hover{
  color: sandybrown;
  transform: scale(1.1,1.1);
  transition: .3s transform;
}
.header-line{
      width: 50px;
      height: 4px;
      background-color: sandybrown;
      margin: 25px auto;

}

h1{
  text-align: center;
  padding-bottom: 20px;
    padding-top: 5px ;
    font-family: serif,cursive;
  font-weight: 20px;
  font-size: 30px;
}

h3{
  text-align: center;
  padding-bottom: 20px;
    padding-top: 5px ;
    font-family: Arial;
  font-weight: 10px;
  font-size: 15px;

}



}

.centered-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    text-align: center;
}

.centered-list li {
    margin: 10px 0;
    font-size: 24px;
    transition: text-decoration 0.3s ease;
}

.centered-list li:hover {
    text-decoration: line-through;
}

}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

.centered-list {
    list-style-type: none;
    padding: 0;
    margin: 70px;
    text-align: center;
}

.centered-list li {
    margin: 10px 0;
    font-size: 24px;
    transition: text-decoration 0.3s ease;
}

.centered-list li:hover {
    text-decoration: underline;
    transform: scale(1.3,1.3);
  transition: .3s transform;

}
.gallery
{
  display: block;
    float: left;
  padding: 10px;
  margin: 20px;
  padding-left: 12px;
  overflow: hidden;
}

.img4 
{
  width:380px;
  height: 450px;
  border-radius: 5px;
  
}

.img4:hover
{
  transform: scale(1.1,1.1);
  transition: .3s transform;


}

.text
{
  color: whitesmoke;
  
  text-align: center;
  font-size: 15px;
  font-family: cursive;
  padding: 5px;
  margin: 5px;
  position: relative;border: 5px;width: 30px;height: 40px;
   
}
   

}



body {
    
    margin-left: 35px;
    background-color:  white ;
}

.R-head {
    display: flex;
    width: 80%;
    margin-top: 20px;
    
}

.social-icons {
    display: flex;
    gap: 30px;
    font-size: 30px;
    margin-left: 30px;

}

.text {
    flex-grow: 1;
    font-family: serif;
    font-size: 20px;
    color: black;
    text-align: center;
}
hr{
    width: 100%;
    height: 0.5px;
    background-color: grey;
    margin: 20px 0;
}
.R-head {
    display: flex;
    align-items: center;
    width: 80%; /* Adjust the width as needed */
    justify-content: center;
    position: relative;
}
.R-logo{
   float: right;
   width: 160px;

}
/*search*/
#search-bar {
    width: 100%;
    padding: 10px;
   
}


.search-container {
    position: relative;
    flex-grow: 1;
    max-width: 600px; /* Adjust the max-width as needed */
    transition: border-color 0.3s;

}
.search-container input[type="text"]:hover{
    border-color: black;
}

.search-input {
    width: 100%;
    padding: 10px;
    padding-right: 40px; /* Ensure there is space for the icon */
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 25px;
    outline: none;
    font-size: 16px;
}
#results {
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 150px;
    overflow-y: auto;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#results li {
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

#results li:last-child {
    border-bottom: none;
}

#no-results {
    color: red;
    margin-top: 10px;
    text-align: center;
}



.search-button {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
    color: #666;
    font-size: 18px;
}
.search-container .icon :hover{
    color: lightpink;
}

.search-button .fa-search {
    pointer-events: none; /* Ensures the button click goes through the icon */
}

.icons {
    position: absolute;
    right: 0;
    display: flex;
    gap: 30px;
}

.icon-button {
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
    font-size: 24px;
    color: black;
}

.icon-button:hover {
    color: sandybrown;
}


* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

footer{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
    background-color: #c68a0f;
}

.quote-container {
    width: 80%;
    max-width: 600px;
    position: relative;
    overflow: hidden;
    padding: 20px;
}

.quote-slide {
    display: none;
    padding: 20px;
    text-align: center;
}

.quote-slide.active {
    display: block;
}
.bottom{
    text-align: center;
    padding-bottom: 20px;
}

body {
  font-family: Arial, sans-serif;
}

.product-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; /* Adjust gap between product items */
  margin-top: 50px;
}

.product {
  width: 300px;
  text-align: center;
}

.product-image {
  width: 100%;
  cursor: pointer;
}
.product-image:hover{
    transform: scale(1.1,1.1);
    transition: .3s transform;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.related-images img {
  width: 100px;
  margin: 10px;
  cursor: pointer;
}


/* Responsive adjustments */
@media (max-width: 600px) {
    .form-container {
        padding: 15px;
    }

    .form-group input,
    .form-group textarea {
        font-size: 14px;
    }

    button {
        font-size: 14px;
    }
}

.thank-you-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    background-color: #f0f0f0;
}

.thank-you-container h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #333;
}

.thank-you-container p {
    font-size: 1.2em;
    color: #555;
}

.thank-you-container a {
    margin-top: 20px;
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
}

.thank-you-container a:hover {
    background-color: #0056b3;*/
}

*/
