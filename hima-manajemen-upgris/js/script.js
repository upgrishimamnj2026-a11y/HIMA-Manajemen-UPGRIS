const $=s=>document.querySelector(s);

// Halaman Struktur: tab bidang (butuh js/data.js)
if($("#tabs")){
const tabs=$("#tabs"),panel=$("#panel");
const list=(arr,open)=>arr.map((x,i)=>`<details${open&&i===0?" open":""}><summary>${x[0]}</summary><p>${x[1]}</p></details>`).join("");
function show(k){
  [...tabs.children].forEach(b=>b.setAttribute("aria-pressed",b.dataset.k===k));
  const d=D[k];
  panel.innerHTML=`<h3>${d.n}</h3><div class="members">${d.m.map((m,i)=>`<div class="m${i===0&&k!=="harian"?" k":""}"><div class="ph"><img src="${m[2]}" alt="Foto ${m[0]}"></div><div class="t">${m[0]}<small>${m[1]}</small></div></div>`).join("")}</div><div class="cols"><div><p class="sub">Program kerja</p>${list(d.p,true)}</div><div><p class="sub">Agenda kerja</p>${list(d.a,true)}</div></div>`;
}
Object.keys(D).forEach(k=>{const b=document.createElement("button");b.className="tab";b.dataset.k=k;b.textContent=D[k].n;b.onclick=()=>show(k);tabs.append(b)});
show("harian");
}

// Halaman Dokumentasi: galeri + lightbox (butuh js/data.js)
if($("#ggrid")){
const gt=$("#gtabs"),gg=$("#ggrid"),lb=$("#lb");
let vis=[],cur=0;
function renderG(k){
  [...gt.children].forEach(b=>b.setAttribute("aria-pressed",b.dataset.k===k));
  vis=G.filter(x=>k==="semua"||x[0]===k);
  gg.innerHTML=vis.map((x,i)=>`<button class="g" data-i="${i}" aria-label="Perbesar foto: ${x[1]}"><img src="${x[2]}" alt="Dokumentasi ${x[1]}" loading="lazy" decoding="async"><span>${x[1]}</span></button>`).join("");
}
["semua",...Object.keys(D)].forEach(k=>{const b=document.createElement("button");b.className="tab";b.dataset.k=k;b.textContent=k==="semua"?"Semua":D[k].n;b.onclick=()=>renderG(k);gt.append(b)});
renderG("semua");
function showLb(){const x=vis[cur];$("#lbImg").src=x[2];$("#lbImg").alt="Dokumentasi "+x[1];$("#lbCap").textContent=x[1]+" · "+D[x[0]].n+" ("+(cur+1)+"/"+vis.length+")"}
function step(d){cur=(cur+d+vis.length)%vis.length;showLb()}
gg.addEventListener("click",e=>{const b=e.target.closest(".g");if(b){cur=+b.dataset.i;showLb();lb.showModal()}});
$("#lbPrev").onclick=()=>step(-1);$("#lbNext").onclick=()=>step(1);$("#lbClose").onclick=()=>lb.close();
lb.addEventListener("click",e=>{if(e.target===lb)lb.close()});
lb.addEventListener("keydown",e=>{if(e.key==="ArrowRight")step(1);if(e.key==="ArrowLeft")step(-1)});
}

// Semua halaman: menu mobile dan tema terang/gelap (disimpan di browser)
const menu=$("#menu"),links=$("#links");
menu.onclick=()=>{const o=links.classList.toggle("open");menu.setAttribute("aria-expanded",o)};
links.addEventListener("click",e=>{if(e.target.tagName==="A"){links.classList.remove("open");menu.setAttribute("aria-expanded","false")}});
$("#theme").onclick=()=>{const r=document.documentElement;const d=r.dataset.theme?r.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;r.dataset.theme=d?"light":"dark";try{localStorage.setItem("theme",r.dataset.theme)}catch(_){}};
