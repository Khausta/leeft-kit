const validOptions = {
  
  validatePhone(phone) {
    const re = /\+7\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/;
    if (!re.test(String(phone.value))) {
      this.addErrorStyle(phone);
      return false;
    } else {
      return true;
    }
  },

  validateName(inputName) {
        if (inputName.value === "") {
          this.addErrorStyle(inputName);
          return false;
        } 
        return true;
  },

  addErrorStyle(element) {
    element.classList.add('js-error');
    setTimeout(() => {
      element.classList.remove('js-error');
    }, 3000);
  },

  addPhoneMask(input) {
    new IMask(input, {
      mask: "+{7} (000) 000-00-00"
    });
  }
}

const allPhoneInputs = document.querySelectorAll('[name="phone"]');
console.log(allPhoneInputs);
for (let i = 0; i < allPhoneInputs.length; i++) {
  validOptions.addPhoneMask(allPhoneInputs[i])
}
 
 //faq 
document.querySelectorAll('.faq__question').forEach( item => {
  item.addEventListener('click', () => {
    
    const arrow = item;
    const content = item.nextElementSibling;

    if (content.style.maxHeight) {
      document.querySelectorAll('.faq__text').forEach( item => {
        item.style.maxHeight = null;
        item.style.opacity = null;
        }) 
      document.querySelectorAll('.faq__question').forEach(item => {
        item.classList.remove('_active');
      })
    } else {
      document.querySelectorAll('.faq__text').forEach( item => {
        item.style.maxHeight = null;
        item.style.opacity = null;  
      })
      content.style.maxHeight = content.scrollHeight + 'px';
      content.style.opacity = 1;
      
      document.querySelectorAll('.faq__question').forEach(item => {
        item.classList.remove('_active');
      })
      arrow.classList.add('_active');
    }
  })
})



//menu mobile
if(window.innerWidth < 768) {
  const menuOpenButton = document.querySelector(".menu-burger");
  const menu = document.querySelector(".header__menu");
  const closeMenuButton = document.querySelector(".header__close");
  const menuWrapper = document.querySelector(".header__wrapper");

  menuOpenButton.addEventListener("click", () => {
    document.body.style.overflow = "hidden";
    menu.classList.add("_active");
    menuWrapper.classList.add("_active");
  })

  closeMenuButton.addEventListener("click", () => {
    document.body.style.overflow = "auto";
    menu.classList.remove("_active");
    menuWrapper.classList.remove("_active");
  })
}

//popup
const overlay = document.querySelector('.overlay');

const openFeedbackFormButtons = document.querySelectorAll("._js_openFeedBackForm");
const closePopupBtn = document.querySelector("._js_closePopupForm");
// const popupOverlay = document.querySelector(".overlay");
const popupForm = document.querySelector(".popup_feedback");
const popupSuccess = document.querySelector(".popup_success");
const successPopup = document.querySelector('._js-popup-success');
const succesPopupCloseBtn = document.querySelector('._js-popup-success-close-btn');

openFeedbackFormButtons.forEach(el => {
  el.addEventListener("click", () => {
    showOverlay();
    openPopupForm();
    overlay.addEventListener("click", closePopupHendler);

    if (window.innerWidth < 768) {
      document.querySelector(".header__menu").classList.remove("_active");
    }
  })
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
if (e.target === overlay 
  || e.target == document.querySelector('._js_closePopupForm_img')
  || e.target == document.querySelector('._js-popup-success-close-btn')) {
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

const popupSubmitButton = document.querySelector('._js_popup-button');
popupSubmitButton.addEventListener("click", e => {
  e.preventDefault();
  let isValid = false;
  validOptions.validateName(popupForm.querySelector('[name="name"]'));
  validOptions.validatePhone(popupForm.querySelector('[name="phone"]'));
  isValid = validOptions.validateName(popupForm.querySelector('[name="name"]')) 
            && validOptions.validatePhone(popupForm.querySelector('[name="phone"]'));
  if (isValid) {
    popupForm.querySelector('form').reset();
    closePopupForm();
    showSuccessPopup();
  }
});

//feedback-block button hendler 
const feedbackSubmitButtons = document.querySelectorAll('._js_feedback-submit-btn');
if (feedbackSubmitButtons.length) {
  feedbackSubmitButtons.forEach(el => {
    el.addEventListener("click", e => {
      e.preventDefault();
      let isValid = false;
      const nameInput = e.target.parentNode.querySelector('[name="name"]');
      const phoneInput = e.target.parentNode.querySelector('[name="phone"]');

      validOptions.validateName(nameInput);
      validOptions.validatePhone(phoneInput);
      isValid = validOptions.validateName(nameInput) && validOptions.validatePhone(phoneInput);
      if (isValid) {
        showOverlay();
        showSuccessPopup();  
        e.target.parentNode.reset();
      }
    })
  })
}




if (window.innerWidth > 768) {
  const cards = document.querySelectorAll('.our-business__big-card');
  
  cards.forEach(card => {
    card.addEventListener("mouseover", () => {
      card.classList.add('our-business__big-card_hover');

      card.addEventListener("animationend", onanimationend);
      function onanimationend() {
        card.classList.remove('our-business__big-card_hover');
        card.removeEventListener("animationend", onanimationend);
      }
    });

  })
}




