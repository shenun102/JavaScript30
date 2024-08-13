console.log("html");
window.addEventListener("keydown", playSound);

function playSound(e) {
  const keyElement = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // audio[data-key="65"] this is an attribute selector used in css
  const soundClip = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  // console.log(e.key, e.keyCode, keyElement, soundClip);
  // console.log(!soundClip);

  if (!soundClip) {
    return; // If there is no corresponding audio clip, stop the function from running
  } else {
    // restart the clip if audio is played in succession
    soundClip.currentTime = 0;
    // calling .play on an audio element that is already playing wont play it again until it finishes
    soundClip.play();
    // Animate key presses
    keyElement.classList.add("playing");
    // rather than using a timer to remove the animation, as it can desync with css
    // Instead use a transition end event
  }
}

function removeTransition(e) {
  // several events will happen, we want to select the one that takes the longest i.e. the transform
  if (e.propertyName !== "transform") return; //skip it if its not a transform
  // this refers to the key pressed because this function is acting as the callback for the eventlistener for 'key'
  this.classList.remove("playing");
}

const allKeys = document.querySelectorAll(".key");

allKeys.forEach((key) =>
  key.addEventListener("transitionend", removeTransition)
);
