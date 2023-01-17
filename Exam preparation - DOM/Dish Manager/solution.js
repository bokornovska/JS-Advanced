window.addEventListener("load", solve);

// function solve() {
//   const firstNameInputEl = document.getElementById("first-name");
//   const lastNameInputEl = document.getElementById("last-name");
//   const genderInputEl = document.querySelector(".gender-radio");
//   const ageInputEl = document.getElementById("age");
//   const descriptionInputEl = document.getElementById("task");
//   const inProgressUlEl = document.getElementById("in-progress");
//   const finishedUlEl = document.getElementById("finished");
//   const counter = document.getElementById("progress-count");
//   document.getElementById("clear-btn").addEventListener("click", clearPosts);
//   const submitButtonEl = document
//     .getElementById("form-btn")
//     .addEventListener("click", (ev) => {
//       if (
//         firstNameInputEl.value !== "" &&
//         lastNameInputEl.value !== "" &&
//         genderInputEl.value !== "" &&
//         ageInputEl.value !== "" &&
//         descriptionInputEl.value !== ""
//       ) {
//         createDish(
//           ev,
//           firstNameInputEl.value,
//           lastNameInputEl.value,
//           genderInputEl.value,
//           descriptionInputEl.value,
//           ageInputEl.value
//         );
//         clearInputFileds();
//       }
//     });

//   function createDish(
//     ev,
//     firstNameInputEl,
//     lastNameInputEl,
//     genderInputEl,
//     descriptionInputEl,
//     ageInputEl
//   ) {
//     ev.preventDefault();

//     const li = elGenerator("li");
//     li.setAttribute("class", "each-line");
//     let article = elGenerator("article", "", li);
//     elGenerator("h4", `${firstNameInputEl} ${lastNameInputEl}`, article);
//     elGenerator("p", `${genderInputEl}, ${ageInputEl}`, article);
//     elGenerator("p", `Dish description: ${descriptionInputEl}`, article);

//     const editBtn = elGenerator("button", "Edit", li);
//     editBtn.setAttribute("class", "edit-btn");
//     const completeBtn = elGenerator("button", "Mark as complete", li);
//     completeBtn.setAttribute("class", "complete-btn");

//     inProgressUlEl.appendChild(li);

//     completeBtn.addEventListener("click", (ev) => completePost(ev, article));
//     editBtn.addEventListener("click", (ev) =>
//       edit(
//         ev,
//         firstNameInputEl,
//         lastNameInputEl,
//         ageInputEl,
//         genderInputEl,
//         descriptionInputEl
//       )
//     );

//     if (counter.textContent == 0) {
//       counter.textContent = "";
//       counter.textContent = Number(counter.textContent) + 1;
//     } else {
//       counter.textContent = Number(counter.textContent) + 1;
//     }
//   }

//   function edit(
//     ev,
//     _firstNameInputEl,
//     _lastNameInputEl,
//     _ageInputEl,
//     _genderInputEl,
//     _descriptionInputEl
//   ) {
//     ev.target.parentNode.remove();

//     firstNameInputEl.value = _firstNameInputEl;
//     lastNameInputEl.value = _lastNameInputEl;
//     ageInputEl.value = _ageInputEl;
//     genderInputEl.value = _genderInputEl;
//     descriptionInputEl.value = _descriptionInputEl;

//     counter.textContent = Number(counter.textContent - 1);
//   }

//   function completePost(ev, articleEl) {
//     ev.target.parentNode.remove();

//     const completedUlEl = document.createElement("li");
//     completedUlEl.className = "each-line";
//     completedUlEl.appendChild(articleEl);
//     finishedUlEl.appendChild(completedUlEl);
//     counter.textContent = Number(counter.textContent - 1);
//   }

//   function clearPosts() {
//     let finishedDishes = Array.from(finishedUlEl.children);
//     finishedDishes.forEach((post) => {
//       post.remove();
//     });
//   }

//   function clearInputFileds() {
//     firstNameInputEl.value = "";
//     lastNameInputEl.value = "";
//     ageInputEl.value = "";
//     descriptionInputEl.value = "";
//   }

//   function elGenerator(type, content, parent) {
//     const element = document.createElement(type);
//     element.textContent = content;

//     if (parent) {
//       parent.appendChild(element);
//     }
//     return element;
//   }
// }

function solve() {
  const formBtn = document.getElementById("form-btn");
  formBtn.addEventListener("click", onSubmit);

  const clearBtn = document.getElementById("clear-btn");
  clearBtn.addEventListener("click", onClear);

  function onClear(ev) {
    ev.preventDefault();
    const ulElement = document.getElementById("finished");

    Array.from(ulElement.children).forEach((c) => ulElement.remove(c));
  }

  function onSubmit(ev) {
    ev.preventDefault();
    const firstNameElement = document.getElementById("first-name");
    const firstName = firstNameElement.value;
    const lastNameElement = document.getElementById("last-name");
    const lastName = lastNameElement.value;
    const ageElement = document.getElementById("age");
    const age = ageElement.value;
    const maleRadio = document.getElementById("male");
    const femaleRadio = document.getElementById("female");
    const textAreaElement = document.getElementById("task");
    const textArea = textAreaElement.value;

    if (
      !firstName ||
      !lastName ||
      !age ||
      !textArea ||
      (!maleRadio.checked && !femaleRadio.checked)
    ) {
      return;
    }

    const li = document.createElement("li");
    li.classList.add("each-line");
    const article = document.createElement("article");

    const h4 = document.createElement("h4");
    h4.textContent = `${firstName} ${lastName}`;

    const maleAgeP = document.createElement("p");
    maleAgeP.textContent = `${maleRadio.checked ? "Male" : "Female"}, ${age}`;

    const descriptionP = document.createElement("p");
    descriptionP.textContent = `Dish description: ${textArea}`;

    article.appendChild(h4);
    article.appendChild(maleAgeP);
    article.appendChild(descriptionP);

    const editBtnElement = document.createElement("button");
    editBtnElement.classList.add("edit-btn");
    editBtnElement.textContent = "Edit";
    editBtnElement.addEventListener("click", onEdit);

    const markBtnElement = document.createElement("button");
    markBtnElement.classList.add("complete-btn");
    markBtnElement.textContent = "Mark as complete";
    markBtnElement.addEventListener("click", onMark);

    li.appendChild(article);
    li.appendChild(editBtnElement);
    li.appendChild(markBtnElement);

    const ul = document.getElementById("in-progress");
    ul.appendChild(li);

    firstNameElement.value = "";
    lastNameElement.value = "";
    ageElement.value = "";
    textAreaElement.value = "";
    const spanCount = document.getElementById("progress-count");
    spanCount.textContent = Number.parseInt(spanCount.textContent) + 1;
  }

  function onEdit(ev) {
    ev.preventDefault();

    const ulElement = ev.target.parentElement.parentElement;
    const liElement = ev.target.parentElement;
    const articleChildren = liElement.firstElementChild.children;

    const h4ElementArr = articleChildren[0].textContent.split(" ");
    const firstName = document.getElementById("first-name");
    firstName.value = h4ElementArr[0];

    const lastName = document.getElementById("last-name");
    lastName.value = h4ElementArr[1];

    const firstParagraphArr = articleChildren[1].textContent.split(", ");
    const age = document.getElementById("age");
    age.value = firstParagraphArr[1];

    const maleRadio = document.getElementById("male");
    const femaleRadio = document.getElementById("female");
    firstParagraphArr[0] == "Male"
      ? (maleRadio.checked = true)
      : (femaleRadio.checked = true);

    const lastParagraph = articleChildren[2].textContent;
    const textArea = document.getElementById("task");
    textArea.value = lastParagraph;

    ulElement.removeChild(liElement);
    const spanCount = document.getElementById("progress-count");
    spanCount.textContent = Number.parseInt(spanCount.textContent) - 1;
  }

  function onMark(ev) {
    ev.preventDefault();
    const liElement = ev.target.parentElement;
    const ulElement = liElement.parentElement;

    const firstBtn = liElement.children[1];
    const secondBtn = liElement.children[2];

    liElement.removeChild(firstBtn);
    liElement.removeChild(secondBtn);

    const finishedUlElement = document.getElementById("finished");
    finishedUlElement.appendChild(liElement);

    ulElement.removeChild(liElement);
    const spanCount = document.getElementById("progress-count");
    spanCount.textContent = Number.parseInt(spanCount.textContent) - 1;
  }
}
