var routes = {
  '':          'home.html',     
  '/':         'home.html',
  '#/home':    'home.html',                
  '#/signin':  'signin.html',     
  '#/about':    'about.html',
  '#/contact':  'contact.html',
};

// This is a function that takes a page path as an argument
async function router() {
  var innerElement = '';
  let link = window.location.hash;
  
  var count = (link.split("/").length -1);
  if(count > 1){
    innerElement = link.split("/")[2];
    link = link.split("/")[1];
  }

  let route = routes[link];
  if (route) loadPage(route, innerElement);
}
router();

// You need to make the function load the content of that page into the "content" div on the index file
async function loadPage(page, innerElement) {
  // fetch the page, use await
  const res = await fetch(page);
  // get text from res, use await
  const content = await res.text();
  // get the element with id 'content'
  const element = document.getElementById('content');
  // set innerHTML of the element
  // your code goes here
  element.innerHTML = content;

  if(innerElement) scrollIntoView(innerElement);
}

function scrollIntoView(id){
  document.getElementById(id).scrollIntoViwe();
}

window.addEventListener('hashchange', router);