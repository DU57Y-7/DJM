/* Draws the History timeline (from data/history.js) . Rarely needs editing. */
(function(){
  // timeline (dark, two-sided)
  const tl = document.getElementById("timeline");
  if (tl && window.HISTORY){
    const M=["January","February","March","April","May","June","July","August","September","October","November","December"];
    const fmt=d=>d.length>4?M[+d.slice(5,7)-1]+" "+d.slice(0,4):d;
    const items=window.HISTORY.map((h,i)=>({...h,i})).sort((a,b)=>b.date.localeCompare(a.date)||a.i-b.i);
    let yr="",html="",n=0;
    items.forEach(h=>{const y=h.date.slice(0,4); if(y!==yr){yr=y;html+=`<div class="yr2"><span>${y}</span></div>`}
      html+=`<div class="ti2 ${n++%2?"R":"L"} t-${h.type}"><span class="dot"></span><div class="box"><div class="d">${fmt(h.date)}</div><h3>${h.title}</h3>${h.text?`<p>${h.text}</p>`:""}</div></div>`});
    tl.innerHTML=html;
  }
})();
