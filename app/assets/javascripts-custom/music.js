//= require music
const playSound = (e) => {
  const soundclip = document.querySelector(`audio[data-key="${e.keyCode}"]`);


  const keyelement = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!soundclip) return undefined; // Stop function from running if key pressed doesn't match up with our elements
  keyelement.classList.add('playing');
  // Ensures that the sound clip always plays from the beginning. Otherwise,
  // if the 'a' key is pressed twice rapidly, the soundclip will only play through
  // once.
  soundclip.currentTime = 0;
  soundclip.play(); // Play sound
}
const removeTransition = (e) => {
  // skip if it's not a transform event
  if (e.propertyName !== 'transform') return undefined;
  e.target.classList.remove('playing');
}
// Find all elements in the document with a class 'key'
const keys = document.querySelectorAll('.key');
// Listen for any `keydown` events that occur on this browser window instance (this page)
// When a `keydown` event is observered, trigger the `playSound` function, passing in the
// `keydown` event as the argument (e)
window.addEventListener('keydown', playSound);
keys.forEach(key =>
  key.addEventListener(
    'transitionend',
    (e) => removeTransition.call(key, e)
  ));
