document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.quote-slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Initially show the first slide
    showSlide(currentSlide);

    // Change slides every 3 seconds
    setInterval(nextSlide, 3000);
});

/*search*/
const items = ['Keychain', 'Keychain with charm', 'coaster', 'Name-stand', 'Pendent', 'bookmark' ,'Product 2 Image'];
const searchBar = document.getElementById('search-bar');
const results = document.getElementById('results');
const noResults = document.getElementById('no-results');

searchBar.addEventListener('input', function() {
    const query = searchBar.value.toLowerCase();
    results.innerHTML = '';
    noResults.style.display = 'none';

    if (query) {
        const filteredItems = items.filter(item => item.toLowerCase().includes(query));

        if (filteredItems.length > 0) {
            filteredItems.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                results.appendChild(li);
            });
        } else {
            noResults.style.display = 'block';
        }
    }
});

/*product pictues*/
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
        { src: 'related9.jpg', alt: 'Related Image 9' },
        { src: 'related10.jpg', alt: 'Related Image 10' },
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


/*Contact us*/

document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Example validation code (can be extended as needed)
    const phoneInput = document.getElementById('phone');
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneInput.value)) {
        alert('Please enter a valid 10-digit phone number.');
        event.preventDefault();
    } else {
        // If validation is successful, redirect to the thank you page
        event.preventDefault();
        window.location.href = 'thankyou.html';
    }
});
