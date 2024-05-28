"use strict";

var validOptions = {
  validatePhone: function validatePhone(phone) {
    var re = /\+7\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/;
    if (!re.test(String(phone.value))) {
      this.addErrorStyle(phone);
      return false;
    } else {
      return true;
    }
  },
  validateName: function validateName(inputName) {
    if (inputName.value === "") {
      this.addErrorStyle(inputName);
      return false;
    }
    return true;
  },
  addErrorStyle: function addErrorStyle(element) {
    element.classList.add('js-error');
    setTimeout(function () {
      element.classList.remove('js-error');
    }, 3000);
  },
  addPhoneMask: function addPhoneMask(input) {
    new IMask(input, {
      mask: "+{7} (000) 000-00-00"
    });
  }
};
var allPhoneInputs = document.querySelectorAll('[name="phone"]');
console.log(allPhoneInputs);
for (var i = 0; i < allPhoneInputs.length; i++) {
  validOptions.addPhoneMask(allPhoneInputs[i]);
}

//faq 
document.querySelectorAll('.faq__question').forEach(function (item) {
  item.addEventListener('click', function () {
    var arrow = item;
    var content = item.nextElementSibling;
    if (content.style.maxHeight) {
      document.querySelectorAll('.faq__text').forEach(function (item) {
        item.style.maxHeight = null;
        item.style.opacity = null;
      });
      document.querySelectorAll('.faq__question').forEach(function (item) {
        item.classList.remove('_active');
      });
    } else {
      document.querySelectorAll('.faq__text').forEach(function (item) {
        item.style.maxHeight = null;
        item.style.opacity = null;
      });
      content.style.maxHeight = content.scrollHeight + 'px';
      content.style.opacity = 1;
      document.querySelectorAll('.faq__question').forEach(function (item) {
        item.classList.remove('_active');
      });
      arrow.classList.add('_active');
    }
  });
});

//menu mobile
if (window.innerWidth < 768) {
  var menuOpenButton = document.querySelector(".menu-burger");
  var menu = document.querySelector(".header__menu");
  var closeMenuButton = document.querySelector(".header__close");
  var menuWrapper = document.querySelector(".header__wrapper");
  menuOpenButton.addEventListener("click", function () {
    document.body.style.overflow = "hidden";
    menu.classList.add("_active");
    menuWrapper.classList.add("_active");
  });
  closeMenuButton.addEventListener("click", function () {
    document.body.style.overflow = "auto";
    menu.classList.remove("_active");
    menuWrapper.classList.remove("_active");
  });
}

//popup
var overlay = document.querySelector('.overlay');
var openFeedbackFormButtons = document.querySelectorAll("._js_openFeedBackForm");
var closePopupBtn = document.querySelector("._js_closePopupForm");
// const popupOverlay = document.querySelector(".overlay");
var popupForm = document.querySelector(".popup_feedback");
var popupSuccess = document.querySelector(".popup_success");
var successPopup = document.querySelector('._js-popup-success');
var succesPopupCloseBtn = document.querySelector('._js-popup-success-close-btn');
openFeedbackFormButtons.forEach(function (el) {
  el.addEventListener("click", function () {
    showOverlay();
    openPopupForm();
    overlay.addEventListener("click", closePopupHendler);
    if (window.innerWidth < 768) {
      document.querySelector(".header__menu").classList.remove("_active");
    }
  });
});
function showOverlay() {
  overlay.classList.add('_active');
  document.body.style.overflow = "hidden";
}
function removeOverlay() {
  overlay.classList.remove('_active');
  document.body.style.overflow = "visible";
}
function openPopupForm() {
  popupForm.classList.add('_active');
}
function closePopupForm() {
  popupForm.classList.remove('_active');
}
function closePopupHendler(e) {
  if (e.target === overlay || e.target == document.querySelector('._js_closePopupForm_img') || e.target == document.querySelector('._js-popup-success-close-btn')) {
    closePopupForm();
    removeOverlay();
    closeSuccessPopup();
    closePopupBtn.removeEventListener("click", closePopupHendler);
  }
}
function closeSuccessPopup() {
  successPopup.classList.remove('_active');
  removeOverlay();
}
function showSuccessPopup() {
  successPopup.classList.add('_active');
  overlay.addEventListener("click", closePopupHendler);
}
var popupSubmitButton = document.querySelector('._js_popup-button');
popupSubmitButton.addEventListener("click", function (e) {
  e.preventDefault();
  var isValid = false;
  validOptions.validateName(popupForm.querySelector('[name="name"]'));
  validOptions.validatePhone(popupForm.querySelector('[name="phone"]'));
  isValid = validOptions.validateName(popupForm.querySelector('[name="name"]')) && validOptions.validatePhone(popupForm.querySelector('[name="phone"]'));
  if (isValid) {
    popupForm.querySelector('form').reset();
    closePopupForm();
    showSuccessPopup();
  }
});

//feedback-block button hendler 
var feedbackSubmitButtons = document.querySelectorAll('._js_feedback-submit-btn');
if (feedbackSubmitButtons.length) {
  feedbackSubmitButtons.forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      var isValid = false;
      var nameInput = e.target.parentNode.querySelector('[name="name"]');
      var phoneInput = e.target.parentNode.querySelector('[name="phone"]');
      validOptions.validateName(nameInput);
      validOptions.validatePhone(phoneInput);
      isValid = validOptions.validateName(nameInput) && validOptions.validatePhone(phoneInput);
      if (isValid) {
        showOverlay();
        showSuccessPopup();
        e.target.parentNode.reset();
      }
    });
  });
}
if (window.innerWidth > 768) {
  var cards = document.querySelectorAll('.our-business__big-card');
  cards.forEach(function (card) {
    card.addEventListener("mouseover", function () {
      card.classList.add('our-business__big-card_hover');
      card.addEventListener("animationend", onanimationend);
      function onanimationend() {
        card.classList.remove('our-business__big-card_hover');
        card.removeEventListener("animationend", onanimationend);
      }
    });
  });
}
//# sourceMappingURL=main.js.map
