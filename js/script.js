function openContent(evt, services) {
  let i;
  let tabContent;
  let tabLinks;

  tabContent = document.querySelectorAll(".benefits__tabcontent");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  tabLinks = document.querySelectorAll(".benefits__tablinks");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
    document.getElementById(services).style.display = "block";
    evt.currentTarget.className += ' active'
}

//accordeon

let acc = document.getElementsByClassName("services__btn");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active')

    let panel = this.nextElementSibling
    if (panel.style.display === 'block') {
      panel.style.display = 'none'
    } else {
      panel.style.display = 'block'
    }
  })
}