function navigation(slider) {
  let wrapper, dots, arrowLeft, arrowRight

  function markup(remove) {
    wrapperMarkup(remove)
    dotMarkup(remove)
    arrowMarkup(remove)
  }

  function removeElement(elment) {
    elment.parentNode.removeChild(elment)
  }
  function createDiv(className) {
    let div = document.createElement("div")
    let classNames = className.split(" ")
    // console.log('whoop')
    // console.log(className)
    // console.log(classNames)
    classNames.forEach((name) => div.classList.add(name))
    return div
  }

  function arrowMarkup(remove) {
    if (remove) {
      removeElement(arrowLeft)
      removeElement(arrowRight)
      return
    }
    arrowLeft = createDiv("arrow arrow--left")
    arrowLeft.addEventListener("click", () => slider.prev())
    arrowRight = createDiv("arrow arrow--right")
    arrowRight.addEventListener("click", () => slider.next())

    wrapper.appendChild(arrowLeft)
    wrapper.appendChild(arrowRight)
  }

  function wrapperMarkup(remove) {
    if (remove) {
      let parent = wrapper.parentNode
      while (wrapper.firstChild)
        parent.insertBefore(wrapper.firstChild, wrapper)
      removeElement(wrapper)
      return
    }
    wrapper = createDiv("navigation-wrapper")
    slider.container.parentNode.appendChild(wrapper)
    wrapper.appendChild(slider.container)
  }

  function dotMarkup(remove) {
    if (remove) {
      removeElement(dots)
      return
    }
    dots = createDiv("dots")
    slider.track.details.slides.forEach((_e, idx) => {
      let dot = createDiv("dot")
      dot.addEventListener("click", () => slider.moveToIdx(idx))
      dots.appendChild(dot)
    })
    wrapper.appendChild(dots)
  }

  function updateClasses() {
    let slide = slider.track.details.rel
    slide === 0
      ? arrowLeft.classList.add("arrow--disabled")
      : arrowLeft.classList.remove("arrow--disabled")
    slide === slider.track.details.slides.length - 1
      ? arrowRight.classList.add("arrow--disabled")
      : arrowRight.classList.remove("arrow--disabled")
    Array.from(dots.children).forEach(function (dot, idx) {
      idx === slide
        ? dot.classList.add("dot--active")
        : dot.classList.remove("dot--active")
    })
  }

  slider.on("created", () => {
    markup()
    updateClasses()
  })
  slider.on("optionsChanged", () => {
    console.log(2)
    markup(true)
    markup()
    updateClasses()
  })
  slider.on("slideChanged", () => {
    updateClasses()
  })
  slider.on("destroyed", () => {
    markup(true)
  })
}

let slider = new KeenSlider("#limo-keen-slider", {}, [navigation])



// let zipcodes = [1234, 5678];

// function checkZipCode() {

//   let i, validCode = false;

//   for (i = 0; i < zipcodes.length; i++) {

//     if (zipcode[i] == document.getElementById('zipCode').value) {
//       validCode = true;
//     }


//   }

// }


// let zipcodes = [1234, 5678];

// //prevent site from refeshing
// document.querySelector('#zipCode').addEventListener('submit,', function (e) {
//   e.preventDefault();

//   //create a loop to loop through the zipcodes in the array to check and see if valid on submit

//   for (i = 0; i < zipcodes.length; i++) {

//     //grab the zipcode input to run it through the loop

//     if (zipcodes[i] == document.getElementById('search').innerHTML) {

//     }
//     // prompt user to enter valid zipcode if incorrect
//     else { {}
//       message.push("Please Input Valid Zipcode");
//     }
//   }


// });






let zipcodes = [12378, 67890];

// //create a function to validateZipCodes
function validateZipCodes(e) {
  // console.log(this)
  e.preventDefault();

  // //target the zipcode search box
  let inputZipcode = document.querySelector('#zipCode').value;
  console.log(inputZipcode)
  inputZipcode = Number(inputZipcode)
  console.log(inputZipcode)
  if (zipcodes.indexOf(inputZipcode) < 0) {
    //an invalid zip code was entered 

    document.querySelector('#zipCode').setCustomValidity("Services limited to New York City")
    document.querySelector('#zipCode').reportValidity("")
    console.log("here")
  } else {
    //if zipcode is valid
    this.submit()
    //submit the form
  }

  // //create a loop to run through the zipcode arrays

  // //validate zipcodes and if incorrect push a message to user to enter valid zipcode 




  // }


}
document.querySelector(".limoForm").addEventListener('submit', validateZipCodes)