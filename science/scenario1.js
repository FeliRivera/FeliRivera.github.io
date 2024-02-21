function goForWalk() {
  var outcomeText =
    "You went for a brisk walk around the park's walking trail, promoting cardiovascular health. Great choice!";
  var outcomeImageSrc = "img/img1.webp"; // Replace with the actual path to your image

  // Create an <img> element
  var imgElement = document.createElement("img");
  imgElement.src = outcomeImageSrc;
  imgElement.alt = "Image of walking";

  // Create a <div> element to contain the outcome text and image
  var outcomeDiv = document.createElement("div");

  // Create a <p> element for the text
  var textElement = document.createElement("p");
  textElement.textContent = outcomeText;
  textElement.style.marginBottom = "20px"; // Add margin to the bottom of the text

  // Create a button to view organ effects
  var viewEffectsButton = document.createElement("button");
  viewEffectsButton.textContent = "View Organ Effects";
  viewEffectsButton.onclick = function () {
    // Navigate to the new HTML page
    window.location.href = "organ_effects1.html"; // Replace with the actual path to the new HTML page
  };

  // Append the text element and image element to the outcome div
  outcomeDiv.appendChild(textElement);
  outcomeDiv.appendChild(imgElement);
  outcomeDiv.appendChild(viewEffectsButton);

  function displayOutcome(outcome) {
    var outcomeContainer = document.getElementById("outcome");
    outcomeContainer.innerHTML = ""; // Clear previous content
    outcomeContainer.appendChild(outcome);
  }
  // Display the outcome
  displayOutcome(outcomeDiv);
}

function displayOutcome(outcome) {
  document.getElementById("outcome").innerHTML = outcome;
}

function playGame() {
  var outcomeText =
    "You participated in a game of soccer with friends, engaging in aerobic exercise and promoting muscle and bone health. Well done!";
  var outcomeImageSrc = "img/img2.webp"; // Replace with the actual path to your image

  // Create an <img> element
  var imgElement = document.createElement("img");
  imgElement.src = outcomeImageSrc;
  imgElement.alt = "Image of walking";

  // Create a <div> element to contain the outcome text and image
  var outcomeDiv = document.createElement("div");

  // Create a <p> element for the text
  var textElement = document.createElement("p");
  textElement.textContent = outcomeText;
  textElement.style.marginBottom = "20px"; // Add margin to the bottom of the text

  // Create a button to view organ effects
  var viewEffectsButton = document.createElement("button");
  viewEffectsButton.textContent = "View Organ Effects";
  viewEffectsButton.onclick = function () {
    // Navigate to the new HTML page
    window.location.href = "organ_effects2.html"; // Replace with the actual path to the new HTML page
  };

  // Append the text element and image element to the outcome div
  outcomeDiv.appendChild(textElement);
  outcomeDiv.appendChild(imgElement);
  outcomeDiv.appendChild(viewEffectsButton);

  function displayOutcome(outcome) {
    var outcomeContainer = document.getElementById("outcome");
    outcomeContainer.innerHTML = ""; // Clear previous content
    outcomeContainer.appendChild(outcome);
  }
  // Display the outcome
  displayOutcome(outcomeDiv);
}

function sit() {
  var outcomeText =
    "You sat down for a long period of time negatevly affecting you body organs. Unfortunate Choice!";
  var outcomeImageSrc = "img/img3.webp"; // Replace with the actual path to your image

  // Create an <img> element
  var imgElement = document.createElement("img");
  imgElement.src = outcomeImageSrc;
  imgElement.alt = "Image of walking";

  // Create a <div> element to contain the outcome text and image
  var outcomeDiv = document.createElement("div");

  // Create a <p> element for the text
  var textElement = document.createElement("p");
  textElement.textContent = outcomeText;
  textElement.style.marginBottom = "20px"; // Add margin to the bottom of the text

  // Create a button to view organ effects
  var viewEffectsButton = document.createElement("button");
  viewEffectsButton.textContent = "View Organ Effects";
  viewEffectsButton.onclick = function () {
    // Navigate to the new HTML page
    window.location.href = "organ_effects3.html"; // Replace with the actual path to the new HTML page
  };

  // Append the text element and image element to the outcome div
  outcomeDiv.appendChild(textElement);
  outcomeDiv.appendChild(imgElement);
  outcomeDiv.appendChild(viewEffectsButton);

  function displayOutcome(outcome) {
    var outcomeContainer = document.getElementById("outcome");
    outcomeContainer.innerHTML = ""; // Clear previous content
    outcomeContainer.appendChild(outcome);
  }
  // Display the outcome
  displayOutcome(outcomeDiv);
}

function unhealthy() {
  var outcomeText =
    "You ordered an unhealthy hamburger which resulted in your body having a lack of nutrients and an excess of calories and bodyweight. Unfortunate Choice!";
  var outcomeImageSrc = "img/img4.webp"; // Replace with the actual path to your image

  // Create an <img> element
  var imgElement = document.createElement("img");
  imgElement.src = outcomeImageSrc;
  imgElement.alt = "Image of walking";

  // Create a <div> element to contain the outcome text and image
  var outcomeDiv = document.createElement("div");

  // Create a <p> element for the text
  var textElement = document.createElement("p");
  textElement.textContent = outcomeText;
  textElement.style.marginBottom = "20px"; // Add margin to the bottom of the text

  // Create a button to view organ effects
  var viewEffectsButton = document.createElement("button");
  viewEffectsButton.textContent = "View Organ Effects";
  viewEffectsButton.onclick = function () {
    // Navigate to the new HTML page
    window.location.href = "organ_effects4.html"; // Replace with the actual path to the new HTML page
  };

  // Append the text element and image element to the outcome div
  outcomeDiv.appendChild(textElement);
  outcomeDiv.appendChild(imgElement);
  outcomeDiv.appendChild(viewEffectsButton);

  function displayOutcome(outcome) {
    var outcomeContainer = document.getElementById("outcome");
    outcomeContainer.innerHTML = ""; // Clear previous content
    outcomeContainer.appendChild(outcome);
  }
  // Display the outcome
  displayOutcome(outcomeDiv);
}

function healthy() {
  var outcomeText =
    "You ordered Sushi Rolls that come with balanced proprtion of proteins and carbohydrates positivly affecting your health. Great choice!";
  var outcomeImageSrc = "img/img5.webp"; // Replace with the actual path to your image

  // Create an <img> element
  var imgElement = document.createElement("img");
  imgElement.src = outcomeImageSrc;
  imgElement.alt = "Image of walking";

  // Create a <div> element to contain the outcome text and image
  var outcomeDiv = document.createElement("div");

  // Create a <p> element for the text
  var textElement = document.createElement("p");
  textElement.textContent = outcomeText;
  textElement.style.marginBottom = "20px"; // Add margin to the bottom of the text

  // Create a button to view organ effects
  var viewEffectsButton = document.createElement("button");
  viewEffectsButton.textContent = "View Organ Effects";
  viewEffectsButton.onclick = function () {
    // Navigate to the new HTML page
    window.location.href = "organ_effects5.html"; // Replace with the actual path to the new HTML page
  };

  // Append the text element and image element to the outcome div
  outcomeDiv.appendChild(textElement);
  outcomeDiv.appendChild(imgElement);
  outcomeDiv.appendChild(viewEffectsButton);

  function displayOutcome(outcome) {
    var outcomeContainer = document.getElementById("outcome");
    outcomeContainer.innerHTML = ""; // Clear previous content
    outcomeContainer.appendChild(outcome);
  }
  // Display the outcome
  displayOutcome(outcomeDiv);
}
