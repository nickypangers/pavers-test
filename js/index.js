const getElementList = (className) => {
  const elementObject = $(className);
  const elements = Array.prototype.map.call(
    elementObject,
    (element) => element
  );
  return elements;
};

let selectedVariant = "Khaki";
let selectedSize = "2";

const productDetail = {
  images: {
    Khaki: [
      "images/972945_grande.jpg",
      "images/972946_grande.jpg",
      "images/972947_grande.jpg",
      "images/972948_grande.jpg",
      "images/972949_grande.jpg",
    ],
    Tan: [
      "images/972950_grande.jpg",
      "images/972951_grande.jpg",
      "images/972952_grande.jpg",
      "images/972953_grande.jpg",
      "images/972954_grande.jpg",
    ],
    "Forest Green": [
      "images/972960_grande.jpg",
      "images/972961_grande.jpg",
      "images/972962_grande.jpg",
      "images/972963_grande.jpg",
      "images/972964_grande.jpg",
    ],
  },
  out_of_stock: {
    Khaki: [],
    Tan: [9, 10, 11, 12],
    "Forest Green": [2, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
};

const owlCarouselOptions = {
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<div class='prev-slide'><i class='fas fa-chevron-left'></i></div>",
    "<div class='next-slide'><i class='fas fa-chevron-right'></i></div>",
  ],
  responsive: {
    0: {
      items: 1,
    },
  },
};

function clearProductSizes() {
  $(".size-option").remove();
}

function updateProductSizes() {
  clearProductSizes();
  setProductSizes(selectedVariant);
}

function setProductSizes(colour) {
  const outOfStockSizeList = productDetail.out_of_stock[colour];
  let sizeButtonList = [];
  for (let i = 2; i < 13; i++) {
    let button = document.createElement("button");
    button.classList = "size-option";
    if (outOfStockSizeList.includes(i)) {
      button.setAttribute("disabled", "disabled");
    }

    button.dataset.value = i;
    button.innerHTML = i;
    button.onclick = function () {
      productSizeButtonClick(this);
    };
    sizeButtonList.push(button);
  }
  const activeIndex = sizeButtonList.findIndex(
    (element) => element.getAttribute("disabled") != "disabled"
  );

  sizeButtonList[activeIndex].classList.add("active");

  sizeButtonList.forEach((button) => {
    $("#product-size-list").append(button);
  });
}

function productSizeButtonClick(element) {
  setSizeOptionActive(element);
}

function setProductImages(colour) {
  const imageList = productDetail.images[colour];
  imageList.forEach((image) => {
    $(".owl-carousel").append(
      "<div class='item'><img src='" +
        image +
        "' alt='' class='product-image' /></div>"
    );
  });
}

function updateProductImages() {
  clearProductImages();
  setProductImages(selectedVariant);
  $(".owl-carousel").owlCarousel(owlCarouselOptions);
}

function clearProductImages() {
  $(".owl-carousel").children().remove();
  $(".owl-carousel").trigger("destroy.owl.carousel");
}

function productVariantButtonClick(element) {
  setVariantOptionActive(element);
  updateProductImages();
  updateProductSizes();
}

// Document on Ready

$(document).ready(function () {
  updateProductSizes();

  // Product Images
  setProductImages(selectedVariant);

  $(".owl-carousel").owlCarousel(owlCarouselOptions);

  $(document).on("scroll", function () {
    toggleScrollTopButton();
  });
});

function toggleScrollTopButton() {
  if (window.scrollY > 10) {
    $("#scroll-top").css("display", "flex");
  } else {
    $("#scroll-top").css("display", "none");
  }
}

function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Nav Cart on Click
$("#nav-cart").click(function () {
  console.log("clicked");
});

// Nav Menu on Click
$("#nav-menu").click(function () {
  console.log("clicked");
});

function setVariantOptionActive(element) {
  getElementList(".variant-option").forEach((el) => {
    el.classList = "variant-option";
  });
  selectedVariant = element.dataset.value;
  element.classList.add("active");
}

function setSizeOptionActive(element) {
  getElementList(".size-option").forEach((el) => {
    el.classList = "size-option";
  });
  selectedSize = element.dataset.value;
  element.classList.add("active");
}
