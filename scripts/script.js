// Part 1 & Part 4
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  const mainEl = document.querySelector("main");
  mainEl.style.backgroundColor = "var(--main-bg)";
  mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
  mainEl.classList.add("flex-ctr");
  const topMenuEl = document.querySelector("#top-menu");
  topMenuEl.style.height = "100%";
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
  topMenuEl.classList.add("flex-around");
  // console.log(topMenuEl)
  menuLinks.forEach(link => {
    const newEl = document.createElement("a");
    newEl.href = link.href;
    newEl.textContent = link.text;
    topMenuEl.append(newEl);
  })
  // Part 3
  const subMenuEl = document.querySelector("#sub-menu");
  subMenuEl.style.height = "100%";
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  subMenuEl.classList.add("flex-around");
  subMenuEl.style.position = "absolute";
  subMenuEl.style.top = "0";
  // Part 4
  const topMenuLinks = topMenuEl.querySelectorAll("a");
  let activeMenu = null;  // Track the currently active menu for toggling
  topMenuEl.addEventListener('click', onClick);
  function onClick(evt) {
  evt.preventDefault();
  if (!evt.target.matches("a")) {
    return;
  }
  const clickedLink = menuLinks.find(link => link.text === evt.target.textContent);
  // If "About" is clicked, navigate directly to the About page
  if (clickedLink.text === 'about') {
    subMenuEl.style.top = "0";
    subMenuEl.innerHTML = "";
    activeMenu = null;
    // const h1 = document.createElement('h1');
    // h1.textContent = 'About';
    mainEl.innerHTML = "<h1>About</h1>";
    return;  
  }
  // Part 5 & 6
  if (clickedLink.subLinks) {
    if (activeMenu === clickedLink.text) {
      
      subMenuEl.style.top = "0";
      subMenuEl.innerHTML = "";
      activeMenu = null;
    } else {
   
      subMenuEl.innerHTML = "";
      clickedLink.subLinks.forEach(subLink => {
        const subLinkEl = document.createElement("a");
        subLinkEl.href = subLink.href;
        subLinkEl.textContent = subLink.text;
        subMenuEl.append(subLinkEl);
      });
      subMenuEl.style.top = "100%";
      activeMenu = clickedLink.text;  // Set the clicked menu as active
    }
  }
  }
  subMenuEl.addEventListener('click', buildSubMenu);
  function buildSubMenu(evt) {
  evt.preventDefault();
  if (!evt.target.matches("a")) {
    return;
  }
  console.log(evt.target);
  
  }