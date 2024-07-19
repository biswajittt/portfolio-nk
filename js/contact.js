const contactInfoResult = document.getElementById("contact_info_result");
const messageBox = document.getElementById("contact-message-box");
const form = document.getElementById("contact_form");
const contactMessageBoxSocial = document.getElementById(
  "contact-message-box-social"
);

// contactInfoResult.style.fontSize = "17px";
// contactInfoResult.style.fontWeight = "bold";
// console.log(result);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  //   result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      //   console.log(response.status);
      let json = await response.json();
      if (response.status == 200) {
        contactInfoResult.innerHTML = "We have received your message";
        form.style.display = "none";
        // result.style.display = "block";
        contactMessageBoxSocial.style.display = "flex";
        // console.log(result);
      } else {
        // console.log(response);
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      contactInfoResult.innerHTML = "Something went wrong!";
      form.style.display = "none";
      contactMessageBoxSocial.style.display = "flex";
    });
  // .then(function () {
  //   form.reset();
  //   setTimeout(() => {
  //     result.style.display = "none";
  //   }, 3000);
  // });
});
