(function(){
  // publications
  const pb = document.getElementById("pubs");
  if (pb && window.PUBLICATIONS){
    const live=window.PUBLICATIONS.filter(p=>["accepted","published"].includes(p.status));
    pb.innerHTML = live.length ? live.map(p=>`<div class="ti"><div class="d">${p.date}</div><div class="box"><span class="t">${p.status}</span><h3>${p.title}</h3><p><b>${p.authors}</b><br>${p.venue}</p>${p.abstract?`<p>${p.abstract}</p>`:""}${p.link?`<a href="${p.link}" target="_blank" rel="noopener">View publication →</a>`:""}</div></div>`).join("")
     : `<p>Publications are coming soon.</p>`;
  }
})();
