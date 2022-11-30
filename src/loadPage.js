import './style.css';
import BgImage from './restaurant-background.jpg';

function loadPage() {
  const content = document.getElementById('content');
  const test = document.createElement('div');
  const ul = document.createElement('ul')
  
  //Add bg image
  const myBgImage = new Image()
  myBgImage.src = BgImage

  ul.insertAdjacentHTML("beforeend", `
    <li>Homepage</li>
    <li>Menu</li>
    <li>About</li>
  `)

  test.appendChild(ul)
  content.appendChild(test);
  content.appendChild(myBgImage)
}

export { loadPage };