/* Shared header + footer. Edit the nav list here and it updates every page. */
(function(){
  const root = document.body.dataset.root || "", page = document.body.dataset.page || "";
  const links = [["about","About","index.html"],["projects","Projects","projects/index.html"],["history","History","history/index.html"],["contact","Contact","contact/index.html"]];
  document.body.insertAdjacentHTML("afterbegin",
   `<header class="nav"><div class="wrap"><a class="brand" href="${root}index.html"><img src="${root}assets/logos/mark.png" alt="Dustin James McGuire"></a><nav>`+
   links.map(l=>`<a href="${root}${l[2]}" class="${page===l[0]?"on":""}">${l[1]}</a>`).join("")+`</nav></div></header>`);
  document.body.insertAdjacentHTML("beforeend",
   `<footer><div class="wrap"><span>© 2026 Dustin James McGuire, StudIEAust</span><span><a href="mailto:dustinjmcguire@gmail.com">Email</a> · <a href="https://www.linkedin.com/in/du57y/" target="_blank" rel="noopener">LinkedIn</a> · <a href="https://orcid.org/0009-0005-3889-661X" target="_blank" rel="noopener">ORCID</a></span></div></footer>`);
})();
