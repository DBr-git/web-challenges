console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const post1 = document.createElement("article");
post1.classList.add("post");
document.body.append(post1);

const p1 = document.createElement("p");
p1.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
p1.classList.add("post__content");
post1.append(p1);

const footer1 = document.createElement("footer");
footer1.classList.add("post__footer");
post1.append(footer1);

const span1 = document.createElement("span");
span1.classList.add("post__username");
span1.textContent = "@username";
footer1.append(span1);

const button1 = document.createElement("button");
button1.classList.add("post__button");
button1.type = "button";
button1.textContent = "♥ Like";
footer1.append(button1);
button1.addEventListener("click", handleLikeButtonClick);
