let hiddenElements = document.querySelectorAll(".hidden-wrapper");
let hiddenButtons = document.querySelectorAll(".bb");

function changeHidden() {
    hiddenElements.forEach(element => {
        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
}

hiddenButtons.forEach(button => {
    button.addEventListener("click", changeHidden);
});

let hiddenButton = document.querySelectorAll(".hidden-button")

function hideHiddden(){
    hiddenElements.forEach(element => {
        if (element.style.display === "block") {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    });
}

hiddenButton.forEach(buttons => {
    buttons.addEventListener("click", hideHiddden);
});



let hiddenElements2 = document.querySelectorAll(".second-hidden-wrapper");
let hiddenButtons2 = document.querySelectorAll(".bbb");

function changeHidden2() {
    hiddenElements2.forEach(element => {
        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
}

hiddenButtons2.forEach(button2 => {
    button2.addEventListener("click", changeHidden2);
});


hiddenButtons.forEach(button => {
    button.addEventListener("click", changeHidden);
});

let hiddenButton2 = document.querySelectorAll(".hidden-button2")

function hideHiddden2(){
    hiddenElements2.forEach(element => {
        if (element.style.display === "block") {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    });
}

hiddenButton2.forEach(buttons2 => {
    buttons2.addEventListener("click", hideHiddden2);
});



let hiddenElements3 = document.querySelectorAll(".third-hidden-wrapper");
let hiddenButtons3 = document.querySelectorAll(".bbbb");

function changeHidden3() {
    hiddenElements3.forEach(element => {
        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
}

hiddenButtons3.forEach(button3 => {
    button3.addEventListener("click", changeHidden3);
});

let hiddenButton3 = document.querySelectorAll(".hidden-button3")

function hideHiddden3(){
    hiddenElements3.forEach(element => {
        if (element.style.display === "block") {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    });
}

hiddenButton3.forEach(buttons3 => {
    buttons3.addEventListener("click", hideHiddden3);
});



// let leftArrow = document.querySelector(".left-arrow")
// let RightArrow = document.querySelector(".right-arrow")
// let pDivs = document.querySelectorAll(".p-grids")

// RightArrow.addEventListener("click",function(){
//     if (pDivs.length >= 4){
//         pDivs[3].scrollIntoView({behavior: "smooth"})
//     }
// })

// var rightArrow = document.querySelector(".right-arrow");
// var gridContainer = document.querySelector(".p-grids");

// rightArrow.addEventListener("click", function () {
//   var gridItems = gridContainer.children;

//   if (gridItems.length >= 4) {
//     gridItems[3].scrollIntoView({
//       behavior: "smooth",
//       inline: "start"
//     });
//   }
// });

// let numbers = document.querySelector(".p-sides-icon")
// let firstChild = numbers.querySelector(":first-child")
// let firstGrid = document.querySelector(".p-grids-first-container")
// let firstGridImage = firstGrid.querySelector("img")
// let secondGrid = document.querySelector(".p-grids-second-container")
// let thirdGrid = document.querySelector(".p-grids-third-container")
// let fourthGrid = document.querySelector(".p-grids-fourth-container")
// let fifthGrid = document.querySelector(".p-grids-fifth-container")
// let hiddenWrapper = document.querySelector(".hidden-wrapper")
// // let projectSection = document.querySelector(".project-section")
// // let isOriginal = true
// // let tcolor1 = "rgb(72,11,95)"

// let isFocused = false
// firstChild.onmouseover = () =>{
//     firstChild.style.backgroundColor = "rgb(185, 92, 190)"
// }
// firstChild.onmouseout = () => {
//             firstChild.style.backgroundColor = ""
//         }

// function changeNumber(){
//     if (!isFocused){
//         firstChild.onmouseout = () => {
//             firstChild.style.backgroundColor = "rgb(185, 92, 190)"
//         }
//         firstGrid.style.marginLeft = "32vw"
//         firstGridImage.style.width = "370px"
//         firstGridImage.style.height = "200px"
//         firstGridImage.style.marginLeft = "-8px"
//         firstGridImage.style.marginTop = "-28px"
//         secondGrid.style.filter = "blur(25px)"
//         thirdGrid.style.filter = "blur(25px)"
//         fourthGrid.style.filter = "blur(25px)"
//         fifthGrid.style.filter = "blur(25px)"
//         firstGrid.style.position = "absolute"
//         firstGrid.style.zIndex = "1"
//         firstGrid.style.width = "420px"
//         firstChild.style.backgroundColor = "rgb(185, 92, 190)"
//         // firstGrid.style.paddingRight = "1px"
//         hiddenWrapper.style.zIndex = "2"
        

//         isFocused = true
//     }
//     else{
//         firstChild.onmouseout = () => {
//             firstChild.style.backgroundColor = ""
//         }
//         firstChild.style.backgroundColor = "transparent"
//         firstGridImage.style.height = "170px"
//         firstGridImage.style.width = "270px"
//         firstGridImage.style.marginLeft = "0"
//         firstGridImage.style.marginTop = "0"
//         firstGrid.style.marginLeft = "0"
//         secondGrid.style.filter = "none"
//         thirdGrid.style.filter = "none"
//         fourthGrid.style.filter = "none"
//         fifthGrid.style.filter = "none"
//         firstGrid.style.width = "320px"
//         firstGrid.style.position = "static"
//         firstGrid.style.zIndex = "auto"
//         hiddenWrapper.style.zIndex = "auto"

//         isFocused = false
//     }
//     // isOriginal = !isOriginal
// }
// firstChild.addEventListener("click", changeNumber) 


// let numbers2 = document.querySelector(".p-sides-icon")
// let secondChild = numbers2.querySelector(":nth-child(2)")
// let firstChild2 = numbers2.querySelector(":first-child")
// let firstGrid2 = document.querySelector(".p-grids-first-container")
// let secondGrid2 = document.querySelector(".p-grids-second-container")
// let secondGridImage = secondGrid2.querySelector("img")
// let thirdGrid2 = document.querySelector(".p-grids-third-container")
// let fourthGrid2 = document.querySelector(".p-grids-fourth-container")
// let fifthGrid2 = document.querySelector(".p-grids-fifth-container")
// let secondHiddenWrapper = document.querySelector(".second-hidden-wrapper")

// let isFocused2 = false

// secondChild.onmouseover = () =>{
//     secondChild.style.backgroundColor = "rgb(185, 92, 190)"
// }
// secondChild.onmouseout = () => {
//             secondChild.style.backgroundColor = "rgb(185, 92, 190)"
//         }

// function changeNumber2(){
//     if (!isFocused2){
//         secondChild.onmouseout = () => {
//             secondChild.style.backgroundColor = "rgb(185, 92, 190)"
//         }
//         secondGrid2.style.marginLeft = "32vw"
//         secondGridImage.style.width = "370px"
//         secondGridImage.style.height = "200px"
//         secondGridImage.style.marginLeft = "-8px"
//         secondGridImage.style.marginTop = "-28px"
//         firstGrid2.style.filter = "blur(25px)"
//         thirdGrid2.style.filter = "blur(25px)"
//         fourthGrid2.style.filter = "blur(25px)"
//         fifthGrid2.style.filter = "blur(25px)"
//         secondGrid2.style.position = "absolute"
//         secondGrid2.style.zIndex = "1"
//         secondGrid2.style.width = "420px"
//         secondChild.style.backgroundColor = "rgb(185, 92, 190)"
//         // firstGrid.style.paddingRight = "1px"
//         secondHiddenWrapper.style.zIndex = "2"
//         secondChild.style

//         isFocused2 = true
//     }
//     else{
//         secondChild.onmouseout = () => {
//             secondChild.style.backgroundColor = ""
//         }
//         secondGrid2.style.marginLeft = "0"
//         secondChild.style.backgroundColor = "transparent"
//         secondGridImage.style.height = "170px"
//         secondGridImage.style.width = "270px"
//         secondGridImage.style.marginLeft = "0"
//         secondGridImage.style.marginTop = "0"
//         firstGrid.style.marginLeft = "0"
//         firstGrid2.style.filter = "none"
//         thirdGrid2.style.filter = "none"
//         fourthGrid2.style.filter = "none"
//         fifthGrid2.style.filter = "none"
//         secondGrid2.style.width = "320px"
//         secondGrid2.style.position = "static"
//         secondGrid2.style.zIndex = "auto"
//         secondHiddenWrapper.style.zIndex = "auto"

//         isFocused2 = false
//     }
//     // isOriginal = !isOriginal
// }
// secondChild.addEventListener("click", changeNumber2)



// ===== First Icon Selectors =====
let numbers = document.querySelector(".p-sides-icon")
let firstChild = numbers.querySelector(":first-child")
let firstGrid = document.querySelector(".p-grids-first-container")
let firstGridImage = firstGrid.querySelector("img")
let secondGrid = document.querySelector(".p-grids-second-container")
let thirdGrid = document.querySelector(".p-grids-third-container")
let fourthGrid = document.querySelector(".p-grids-fourth-container")
let fifthGrid = document.querySelector(".p-grids-fifth-container")
let hiddenWrapper = document.querySelector(".hidden-wrapper")

// ===== Second Icon Selectors =====
let numbers2 = document.querySelector(".p-sides-icon")
let secondChild = numbers2.querySelector(":nth-child(2)")
let firstChild2 = numbers2.querySelector(":first-child")
let firstGrid2 = document.querySelector(".p-grids-first-container")
let secondGrid2 = document.querySelector(".p-grids-second-container")
let secondGridImage = secondGrid2.querySelector("img")
let thirdGrid2 = document.querySelector(".p-grids-third-container")
let fourthGrid2 = document.querySelector(".p-grids-fourth-container")
let fifthGrid2 = document.querySelector(".p-grids-fifth-container")
let secondHiddenWrapper = document.querySelector(".second-hidden-wrapper")

// ===== Third Icon Selectors =====
let numbers3 = document.querySelector(".p-sides-icon")
let thirdChild = numbers3.querySelector(":nth-child(3)")
let firstChild3 = numbers3.querySelector(":first-child")
let firstGrid3 = document.querySelector(".p-grids-first-container")
let secondGrid3 = document.querySelector(".p-grids-second-container")
let thirdGrid3 = document.querySelector(".p-grids-third-container")
let thirdGridImage = thirdGrid3.querySelector("img")
let fourthGrid3 = document.querySelector(".p-grids-fourth-container")
let fifthGrid3 = document.querySelector(".p-grids-fifth-container")
let thirdHiddenWrapper = document.querySelector(".third-hidden-wrapper")

// ===== State Variables =====
let isFocused = false
let isFocused2 = false
let isFocused3 = false
let activeIcon = null // track which icon is active

// ===== Hover Effects =====
firstChild.onmouseover = () => {
    firstChild.style.backgroundColor = "rgb(185, 92, 190)"
}
firstChild.onmouseout = () => {
    firstChild.style.backgroundColor = ""
}

secondChild.onmouseover = () => {
    secondChild.style.backgroundColor = "rgb(185, 92, 190)"
}
secondChild.onmouseout = () => {
    secondChild.style.backgroundColor = ""
}

thirdChild.onmouseover = () => {
    thirdChild.style.backgroundColor = "rgb(185, 92, 190)"
}
thirdChild.onmouseout = () => {
    thirdChild.style.backgroundColor = ""
}

// ===== Reset Functions =====
function resetFirstIcon() {
    firstChild.onmouseout = () => {
        firstChild.style.backgroundColor = "";
    };
    firstChild.style.backgroundColor = "transparent";
    firstGridImage.style.height = "170px";
    firstGridImage.style.width = "270px";
    firstGridImage.style.marginLeft = "0";
    firstGridImage.style.marginTop = "0";
    firstGrid.style.marginLeft = "0";
    secondGrid.style.filter = "none";
    thirdGrid.style.filter = "none";
    fourthGrid.style.filter = "none";
    fifthGrid.style.filter = "none";
    firstGrid.style.width = "320px";
    firstGrid.style.position = "static";
    firstGrid.style.zIndex = "auto";
    hiddenWrapper.style.zIndex = "auto";
    isFocused = false;
}

function resetSecondIcon() {
    secondChild.onmouseout = () => {
        secondChild.style.backgroundColor = "";
    };
    secondChild.style.backgroundColor = "transparent";
    secondGrid2.style.marginLeft = "0";
    secondGridImage.style.height = "170px";
    secondGridImage.style.width = "270px";
    secondGridImage.style.marginLeft = "0";
    secondGridImage.style.marginTop = "0";
    firstGrid2.style.filter = "none";
    thirdGrid2.style.filter = "none";
    fourthGrid2.style.filter = "none";
    fifthGrid2.style.filter = "none";
    secondGrid2.style.width = "320px";
    secondGrid2.style.position = "static";
    secondGrid2.style.zIndex = "auto";
    secondHiddenWrapper.style.zIndex = "auto";
    isFocused2 = false;
}

function resetThirdIcon() {
    thirdChild.onmouseout = () => {
        thirdChild.style.backgroundColor = "";
    };
    thirdChild.style.backgroundColor = "transparent";
    thirdGrid3.style.marginLeft = "0";
    thirdGridImage.style.height = "170px";
    thirdGridImage.style.width = "270px";
    thirdGridImage.style.marginLeft = "0";
    thirdGridImage.style.marginTop = "0";
    firstGrid3.style.filter = "none";
    secondGrid3.style.filter = "none";
    fourthGrid3.style.filter = "none";
    fifthGrid3.style.filter = "none";
    thirdGrid3.style.width = "320px";
    thirdGrid3.style.position = "static";
    thirdGrid3.style.zIndex = "auto";
    thirdHiddenWrapper.style.zIndex = "auto";
    isFocused3 = false;
}
// ===== Toggle Functions =====
function changeNumber() {
    if (activeIcon && activeIcon !== "first") {
        resetSecondIcon();
    }

    if (!isFocused) {
        firstChild.onmouseout = () => {
            firstChild.style.backgroundColor = "rgb(185, 92, 190)";
        };
        firstGrid.style.marginLeft = "32vw";
        firstGridImage.style.width = "370px";
        firstGridImage.style.height = "200px";
        firstGridImage.style.marginLeft = "-8px";
        firstGridImage.style.marginTop = "-28px";
        secondGrid.style.filter = "blur(25px)";
        thirdGrid.style.filter = "blur(25px)";
        fourthGrid.style.filter = "blur(25px)";
        fifthGrid.style.filter = "blur(25px)";
        firstGrid.style.position = "absolute";
        firstGrid.style.zIndex = "1";
        firstGrid.style.width = "420px";
        firstChild.style.backgroundColor = "rgb(185, 92, 190)";
        hiddenWrapper.style.zIndex = "2";
        isFocused = true;
        activeIcon = "first";
    } else {
        resetFirstIcon();
        activeIcon = null;
    }
}

function changeNumber2() {
    if (activeIcon && activeIcon !== "second") {
        resetFirstIcon();
    }

    if (!isFocused2) {
        secondChild.onmouseout = () => {
            secondChild.style.backgroundColor = "rgb(185, 92, 190)";
        };
        secondGrid2.style.marginLeft = "32vw";
        secondGridImage.style.width = "370px";
        secondGridImage.style.height = "200px";
        secondGridImage.style.marginLeft = "-8px";
        secondGridImage.style.marginTop = "-28px";
        firstGrid2.style.filter = "blur(25px)";
        thirdGrid2.style.filter = "blur(25px)";
        fourthGrid2.style.filter = "blur(25px)";
        fifthGrid2.style.filter = "blur(25px)";
        secondGrid2.style.position = "absolute";
        secondGrid2.style.zIndex = "1";
        secondGrid2.style.width = "420px";
        secondChild.style.backgroundColor = "rgb(185, 92, 190)";
        secondHiddenWrapper.style.zIndex = "2";
        isFocused2 = true;
        activeIcon = "second";
    } else {
        resetSecondIcon();
        activeIcon = null;
    }
}



function changeNumber3() {
    if (activeIcon && activeIcon !== "third") {
        resetFirstIcon(), resetSecondIcon();
    }

    if (!isFocused3) {
        thirdChild.onmouseout = () => {
            thirdChild.style.backgroundColor = "rgb(185, 92, 190)";
        };
        thirdGrid3.style.marginLeft = "32vw";
        thirdGridImage.style.width = "370px";
        thirdGridImage.style.height = "200px";
        thirdGridImage.style.marginLeft = "-8px";
        thirdGridImage.style.marginTop = "-28px";
        firstGrid3.style.filter = "blur(25px)";
        secondGrid3.style.filter = "blur(25px)";
        fourthGrid3.style.filter = "blur(25px)";
        fifthGrid3.style.filter = "blur(25px)";
        thirdGrid3.style.position = "absolute";
        thirdGrid3.style.zIndex = "1";
        thirdGrid3.style.width = "420px";
        thirdChild.style.backgroundColor = "rgb(185, 92, 190)";
        thirdHiddenWrapper.style.zIndex = "2";
        isFocused3 = true;
        activeIcon = "third";
    } else {
        resetThirdIcon();
        activeIcon = null;
    }
}

// ===== Event Listeners =====
firstChild.addEventListener("click", changeNumber);
secondChild.addEventListener("click", changeNumber2);
thirdChild.addEventListener("click", changeNumber3)


// scroll animation

let navHome = document.querySelector(".home")
let navAbout = document.querySelector(".about")
let navReviews = document.querySelector(".reviews")
let navServices = document.querySelector(".service")
let navProject = document.querySelector(".projecct")
let navContact = document.querySelector(".contact")

let homes = document.querySelector("header")
let abouts = document.getElementsByClassName("about-section")[0]
let services = document.getElementsByClassName("services-section")[0]
let projects = document.getElementsByClassName("project-section")[0]
let review = document.getElementsByClassName("review-section")[0]
let footer = document.getElementsByClassName("footer-wrapper")[0]


navHome.addEventListener("click", function (e) { // e is an event in JS that tells the event that was done
  e.preventDefault(); // Prevent default anchor behavior
  homes.scrollIntoView({ behavior: "smooth" });
});

navAbout.addEventListener("click", function (e) {
  e.preventDefault();
  abouts.scrollIntoView({ behavior: "smooth" });
});

navReviews.addEventListener("click", function (e) {
  e.preventDefault();
  review.scrollIntoView({ behavior: "smooth" });
});

navServices.addEventListener("click", function (e) {
  e.preventDefault();
  services.scrollIntoView({ behavior: "smooth" });
});

navContact.addEventListener("click", function (e) {
  e.preventDefault();
  footer.scrollIntoView({ behavior: "smooth" });
});

// email service

emailjs.init("nteYjWFSLikAuFoNR");

(function () {
  const form = document.getElementsByClassName("formm")[0];
  const status = document.getElementById("status");

  if (!form) {
    console.error("Form with class .formm not found.");
    return;
  }
  if (!status) {
    console.warn("#status element not found — messages will not be shown to the user.");
  }

  function setStatus(msg, color) {
    if (status) {
      status.innerText = msg;
      status.style.color = color || "black";
    } else {
      // fallback: alert (avoid using alert in production, it's here only if #status missing)
      console.log(msg);
    }
  }

  function isValidEmail(email) {
    // simple, widely used email regex (sufficient for basic validation)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function findEmailField(formEl) {
    // prefer input[type="email"]
    let emailInput = formEl.querySelector('input[type="email"]');
    if (emailInput) return emailInput;
    // fallback: any input or textarea with name containing "email"
    const byName = formEl.querySelector('input[name*="email"], textarea[name*="email"]');
    if (byName) return byName;
    // no email field found
    return null;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    try {
      // collect all inputs and textareas that have a name attribute (these will be sent by emailjs)
      const fields = Array.from(this.querySelectorAll('input[name], textarea[name], select[name]'));

      // if no named fields found, we cannot validate — block sending to be safe
      if (fields.length === 0) {
        setStatus("Form fields not found. Cannot send.", "red");
        console.error("No named inputs/textareas/selects inside the form were found.");
        return;
      }

      // Trim values and check emptiness
      const emptyFields = fields.filter(f => {
        const val = (f.value || "").toString().trim();
        return val === "";
      });

      if (emptyFields.length > 0) {
        // Optionally list missing field names (if named)
        const names = emptyFields.map(f => f.name || f.getAttribute("id") || "unnamed").join(", ");
        setStatus("Please fill in all fields before sending. Missing: " + names, "red");
        return;
      }

      // Validate email specifically
      const emailField = findEmailField(this);
      if (!emailField) {
        setStatus("No email field found in the form. Please include an input with name or type 'email'.", "red");
        console.error("No email input found in the form.");
        return;
      }

      const emailVal = (emailField.value || "").trim();
      if (!isValidEmail(emailVal)) {
        setStatus("Please enter a valid email address.", "red");
        emailField.focus && emailField.focus();
        return;
      }

      // Optional: show sending state
      setStatus("Sending...", "blue");

      // All validation passed — send with emailjs (using the same call you used originally)
      emailjs.sendForm("favour", "template_u3sv7od", this).then(
  () => {
    setStatus("✅ Message sent Successfully", "green");
    this.reset();

    // ⏳ Make message disappear after 5 seconds
    setTimeout(() => {
      setStatus(""); // clears the text
    }, 5000);
  },
  (error) => {
    setStatus("❌ Failed to send. Please try again later.", "red");
    console.error("emailjs.sendForm error:", error);
  }
);

    } catch (err) {
      setStatus("An unexpected error occurred. Check console for details.", "red");
      console.error(err);
    }
  });
})();


let barIcon = document.querySelector(".bar")
let xicon = document.querySelector(".xicon")
let navIcon = document.querySelector("nav")

barIcon.addEventListener("click",  () =>{
    navIcon.classList.toggle("active")
    
})

const screenLimit = 768

let b1 = document.querySelector(".bb")
let b2 = document.querySelector(".bbb")
let b3 = document.querySelector(".bbbb")
let b4 = document.querySelector(".bbbbb")
let b5 = document.querySelector(".bbbbbb")

b1.addEventListener("click", () => {
    if (window.innerWidth <= screenLimit){
        window.location.href = "projects page.html"
    }
})
b2.addEventListener("click", () => {
    if (window.innerWidth <= screenLimit){
        window.location.href = "projects page.html"
    }
})
b3.addEventListener("click", () => {
    if (window.innerWidth <= screenLimit){
        window.location.href = "projects page.html"
    }
})
b4.addEventListener("click", () => {
    if (window.innerWidth <= screenLimit){
        window.location.href = "projects page.html"
    }
})
b5.addEventListener("click", () => {
    if (window.innerWidth <= screenLimit){
        window.location.href = "projects page.html"
    }
})