// const dropdownbuttom = document.querySelector('.menu');
// const dropdownlist = document.querySelector('.nav-link');

// const observer = new IntersectionObserver(entries => {
//   // Loop over the entries
//   entries.forEach(entry => {
//     const square = entry.target.querySelector('.pos-r-eight');
//     // If the element is visible
//     if (entry.isIntersecting) {
//       square.classList.add('pos-r-eight-animation');
//       return; // if we added the class, exit the function
//     }
//     square.classList.remove('pos-r-eight-animation');
//   });
// });

// //observer.observe(document.querySelector('.pos-l-eight'));
// observer.observe(document.querySelector('.pos-r-eight'));

const nine_R = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('r-nine-animation');
      console.log('Hello NINE');
    }
  });
});
nine_R.observe(document.querySelector('.r-nine'));
const nine_L = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('ii-animation');
      console.log('Hello NINE');
    }
  });
});
nine_L.observe(document.querySelector('.ii'));

const eight_R = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('r-eight-animation');
      console.log('Hello EIGHT');
    }
  });
});
eight_R.observe(document.querySelector('.r-eight'));
const eight_L = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('hh-animation');
      console.log('Hello EIGHT');
    }
  });
});
eight_L.observe(document.querySelector('.hh'));

const seven_R = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('r-seven-animation');
      console.log('Hello SEVEN');
    }
  });
});
seven_R.observe(document.querySelector('.r-seven'));
const seven_L = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('gg-animation');
      console.log('Hello SEVEN');
    }
  });
});
seven_L.observe(document.querySelector('.gg'));

const six_R = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('r-six-animation');
      console.log('Hello SIX');
    }
  });
});
six_R.observe(document.querySelector('.r-six'));
const six_L = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('ff-animation');
      console.log('Hello SIX');
    }
  });
});
six_L.observe(document.querySelector('.ff'));

const five_R = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('r-five-animation');
      console.log('Hello FIVE');
    }
  });
});
five_R.observe(document.querySelector('.r-five'));
const five_L = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('ee-animation');
      console.log('Hello FIVE');
    }
  });
});
five_L.observe(document.querySelector('.ee'));

const four_R = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('r-three-animation');
      console.log('Hello THREE');
    }
  });
});
four_R.observe(document.querySelector('.r-four'));
const four_L = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('dd-animation');
      console.log('Hello THREE');
    }
  });
});
four_L.observe(document.querySelector('.dd'));

const three_R = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('r-three-animation');
      console.log('Hello THREE');
    }
  });
});
three_R.observe(document.querySelector('.r-three'));
const three_L = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('cc-animation');
      console.log('Hello THREE');
    }
  });
});
three_L.observe(document.querySelector('.cc'));

const two_R = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('r-two-animation');
      console.log('Hello TWO');
    }
  });
});
two_R.observe(document.querySelector('.r-two'));
const two_L = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('bb-animation');
      console.log('Hello TWO');
    }
  });
});
two_L.observe(document.querySelector('.bb'));

const one_R = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('r-one-animation');
      console.log('Hello ONE');
    }
  });
});
one_R.observe(document.querySelector('.r-one'));
const one_L = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('aa-animation');
      console.log('Hello ONE');
    }
  });
});
one_L.observe(document.querySelector('.aa'));

//////////////////////////////////////////////
////////////// PROGRESS BARS ////////////////
//////////////////////////////////////////////

const bars = document.querySelectorAll('.bar');
const progress = document.querySelectorAll('.progress');

let scale = [
  '75%',
  '85%',
  '80%',
  '75%',
  '70%',
  '80%',
  '90%',
  '75%',
  '90%',
  '95%',
];
let i = 0;
bars.forEach((bar, index) => {
  console.log(index + ' ' + bar);
  // const randomWidth = Math.floor(Math.random() * 25 + 10);
  bar.style.width = scale[i];
  i++;
  // progress[index].addEventListener("mouseover", () => {
  //   const randomTiming = Math.floor(Math.random() * 2 + 2);
  //   console.log(randomTiming);
  //   bar.style.transitionDuration = `${randomTiming}s`;
  //   bar.style.width = "100%";
  // });
});
