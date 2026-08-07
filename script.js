/* 編輯指南：所有行程內容都集中在這個陣列。
   date 為 null 的項目會顯示「日期待確認」。photo 可填相對路徑，例如 images/zermatt.jpg。 */
const places = [
  {id:'geneva-start',name:'Geneva',zh:'日內瓦',date:'2026-07-24',country:'瑞士',cat:'城市',lat:46.2044,lng:6.1432,desc:'20:10 抵達日內瓦，入住機場附近；隔天前往法國霞慕尼。',maps:'https://www.google.com/maps/search/?api=1&query=Geneva%2C%20Switzerland',photo:'images/geneva.jpg'},
  {id:'chamonix',name:'Chamonix',zh:'霞慕尼',date:'2026-07-25',country:'法國',cat:'城市',lat:45.9237,lng:6.8694,desc:'從日內瓦搭巴士抵達白朗峰山腳小鎮，下午安排鎮上與河邊的輕鬆散步。',maps:'https://www.google.com/maps/search/?api=1&query=Chamonix%2C%20France',photo:'images/chamonix.jpg'},
  {id:'aiguille',name:'Aiguille du Midi',zh:'南針峰',date:'2026-07-26',country:'法國',cat:'景點',lat:45.8786,lng:6.8870,desc:'搭乘高山纜車抵達海拔 3,842 公尺，近距離觀看白朗峰與冰河；包含 Step into the Void 玻璃觀景箱。',maps:'https://www.google.com/maps/search/?api=1&query=Aiguille%20du%20Midi',photo:'images/panoramic-mont-blanc.jpg'},
  {id:'helbronner',name:'Pointe Helbronner',zh:'赫爾布倫納峰',date:'2026-07-26',country:'義大利',cat:'交通',lat:45.8458,lng:6.9310,desc:'天氣穩定時搭乘 Panoramic Mont Blanc 纜車跨越冰河，從法國進入義大利。',maps:'https://www.google.com/maps/search/?api=1&query=Pointe%20Helbronner',photo:'images/panoramic-mont-blanc.jpg'},
  {id:'geneva-return',name:'Geneva',zh:'日內瓦（中途）',date:'2026-07-27',country:'瑞士',cat:'交通',lat:46.2070,lng:6.1470,desc:'霞慕尼上午保留作山區備用時段，下午搭巴士回到日內瓦。',maps:'https://www.google.com/maps/search/?api=1&query=Geneva%2C%20Switzerland',photo:'images/geneva.jpg'},
  {id:'annecy',name:'Annecy',zh:'安錫一日遊',date:'2026-07-28',country:'法國',cat:'城市',lat:45.8992,lng:6.1294,desc:'從日內瓦前往安錫的一日遊，走訪湖區與運河老城。這是依實際旅程補入，確切景點與心得可再編輯。',maps:'https://www.google.com/maps/search/?api=1&query=Annecy%20Old%20Town%2C%20France',photo:'images/annecy-old-town.jpg'},
  {id:'oeschinensee',name:'Oeschinensee',zh:'厄希嫩湖一日遊',date:'2026-07-29',country:'瑞士',cat:'景點',lat:46.4986,lng:7.7268,desc:'前往 Kandersteg 與厄希嫩湖的一日遊；結束後繼續移動，晚上入住策馬特。確切健行路線與停留時間可再補充。',maps:'https://www.google.com/maps/search/?api=1&query=Oeschinensee%2C%20Switzerland',photo:'images/oeschinensee.jpg'},
  {id:'zermatt',name:'Zermatt',zh:'策馬特',date:'2026-07-29',country:'瑞士',cat:'城市',lat:46.0207,lng:7.7491,desc:'結束厄希嫩湖一日遊後，當晚抵達並入住策馬特；接下來展開馬特洪峰與高山步道行程。',maps:'https://www.google.com/maps/search/?api=1&query=Zermatt%2C%20Switzerland',photo:'images/matterhorn-sunrise.jpg'},
  {id:'gornergrat',name:'Gornergrat',zh:'戈爾內格拉特',date:'2026-07-31',country:'瑞士',cat:'交通',lat:45.9830,lng:7.7849,desc:'搭乘登山鐵路，一路眺望馬特洪峰、Monte Rosa 與 Gorner Glacier。',maps:'https://www.google.com/maps/search/?api=1&query=Gornergrat',photo:'images/gornergrat-railway.jpg'},
  {id:'riffelsee',name:'Riffelsee',zh:'利菲爾湖',date:'2026-07-31',country:'瑞士',cat:'景點',lat:45.9839,lng:7.7624,desc:'從 Rotenboden 步行前往，天氣晴朗時可拍到馬特洪峰倒影。',maps:'https://www.google.com/maps/search/?api=1&query=Riffelsee',photo:'images/matterhorn-sunrise.jpg'},
  {id:'stellisee',name:'Stellisee',zh:'斯泰利湖',date:'2026-08-01',country:'瑞士',cat:'健行',lat:46.0133,lng:7.8016,desc:'Five Lakes Trail 的重要一站，以馬特洪峰倒影聞名。',maps:'https://www.google.com/maps/search/?api=1&query=Stellisee',photo:'images/stellisee.jpg'},
  {id:'fluhalp',name:'Fluhalp',zh:'弗盧阿爾普',date:'2026-08-01',country:'瑞士',cat:'健行',lat:46.0167,lng:7.8072,desc:'位於 Five Lakes 高山路線旁的停留點；實際造訪順序可依當日路況調整。',maps:'https://www.google.com/maps/search/?api=1&query=Fluhalp%20Zermatt',photo:'images/fluhalp.jpg'},
  {id:'grindjisee',name:'Grindjisee',zh:'格林德湖',date:'2026-08-01',country:'瑞士',cat:'健行',lat:46.0082,lng:7.7869,desc:'Five Lakes Trail 中帶有自然山林感的高山湖泊。',maps:'https://www.google.com/maps/search/?api=1&query=Grindjisee',photo:'images/grindjisee.jpg'},
  {id:'grunsee',name:'Grünsee',zh:'綠湖',date:'2026-08-01',country:'瑞士',cat:'健行',lat:46.0041,lng:7.7976,desc:'Five Lakes Trail 的湖泊節點；實際停留時間可依體力調整。',maps:'https://www.google.com/maps/search/?api=1&query=Grunsee%20Zermatt',photo:'images/grunsee.jpg'},
  {id:'moosjisee',name:'Moosjisee',zh:'莫斯湖',date:'2026-08-01',country:'瑞士',cat:'健行',lat:46.0018,lng:7.7871,desc:'色澤鮮明的高山水庫，是 Five Lakes 路線中的獨特景觀。',maps:'https://www.google.com/maps/search/?api=1&query=Moosjisee',photo:'images/moosjisee.jpg'},
  {id:'leisee',name:'Leisee',zh:'萊湖',date:'2026-08-01',country:'瑞士',cat:'健行',lat:46.0166,lng:7.7718,desc:'接近 Sunnegga 的湖泊；若不走完整 Five Lakes，可作為輕鬆版目的地。',maps:'https://www.google.com/maps/search/?api=1&query=Leisee%20Zermatt',photo:'images/leisee.jpg'},
  {id:'murmelweg',name:'Murmelweg',zh:'土撥鼠步道',date:'2026-08-01',country:'瑞士',cat:'健行',lat:46.0080,lng:7.7750,desc:'同日自然路線節點；座標為概略位置，可再依實際 GPS 軌跡調整。',maps:'https://www.google.com/maps/search/?api=1&query=Murmelweg%20Zermatt',photo:'images/stellisee.jpg'},
  {id:'zum-see',name:'Restaurant Zum See',zh:'Zum See 餐廳',date:'2026-08-01',country:'瑞士',cat:'餐廳',lat:46.0070,lng:7.7280,desc:'策馬特近郊的餐廳，暫列於 8/1 自然日；實際用餐時間與餐點心得可再補充。',maps:'https://www.google.com/maps/search/?api=1&query=Restaurant%20Zum%20See%20Zermatt',photo:'images/zum-see.jpg'},
  {id:'geneva-airport',name:'Geneva Airport',zh:'日內瓦機場',date:'2026-08-02',country:'瑞士',cat:'交通',lat:46.2381,lng:6.1090,desc:'建議 07:06 從策馬特出發，11:05 抵達日內瓦機場，銜接 15:15 KLM 航班。',maps:'https://www.google.com/maps/search/?api=1&query=Geneva%20Airport',photo:'images/geneva.jpg'},
  {id:'amsterdam',name:'Amsterdam',zh:'阿姆斯特丹',date:'2026-08-02',country:'荷蘭',cat:'城市',lat:52.3676,lng:4.9041,desc:'回到阿姆斯特丹，為 2026 阿爾卑斯旅程畫下句點。',maps:'https://www.google.com/maps/search/?api=1&query=Amsterdam%2C%20Netherlands'}
];

const categoryMeta={城市:['◉','#477c9e'],景點:['✦','#e9814c'],健行:['↗','#4d795e'],餐廳:['●','#b55e45'],交通:['→','#735f8e']};
const routeCoordinates=places.map(p=>[p.lat,p.lng]);
const map=L.map('map',{zoomControl:false,scrollWheelZoom:false}).setView([46.05,7.15],8);
L.control.zoom({position:'topright'}).addTo(map);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap contributors'}).addTo(map);
const route=L.polyline(routeCoordinates,{color:'#244c40',weight:3,opacity:.6,dashArray:'7 9'}).addTo(map);
const markerLayer=L.layerGroup().addTo(map); let markers={}; let activeFilter='全部';

function iconFor(p){const [symbol,color]=categoryMeta[p.cat];return L.divIcon({className:'custom-pin',html:`<div class="pin-body" style="background:${color}"><span>${symbol}</span></div>`,iconSize:[35,35],iconAnchor:[17,31],popupAnchor:[0,-30]})}
function displayDate(p){if(!p.date)return '日期待確認';return new Intl.DateTimeFormat('zh-TW',{month:'numeric',day:'numeric'}).format(new Date(`${p.date}T12:00:00`))}
function showPlace(p){
  const content=document.querySelector('#detailContent');
  content.innerHTML=`<div class="detail-photo"${p.photo?` style="background-image:url('${p.photo}');background-size:cover;background-position:center"`:''}>${p.photo?'':'照片待加入'}</div><div class="detail-body"><div class="detail-overline">${displayDate(p)} · ${p.cat}</div><h2 id="detailTitle">${p.zh}</h2><div class="detail-location">${p.name} · ${p.country}</div><p class="detail-desc">${p.desc}</p><div class="detail-actions"><a class="maps-link" href="${p.maps}" target="_blank" rel="noopener">在 Google Maps 開啟 ↗</a><button class="secondary-link" type="button" onclick="focusOnMap('${p.id}')">回到地圖</button></div></div>`;
  document.querySelector('#detailDialog').showModal();
}
function focusOnMap(id){const p=places.find(x=>x.id===id);document.querySelector('#detailDialog').close();document.querySelector('.map-section').scrollIntoView({behavior:'smooth'});setTimeout(()=>{map.setView([p.lat,p.lng],13);markers[id]?.openPopup()},500)}
window.focusOnMap=focusOnMap;
function shortDate(p){return p.date?`${Number(p.date.slice(5,7))}/${Number(p.date.slice(8,10))}`:''}
function renderMarkers(){markerLayer.clearLayers();markers={};places.filter(p=>activeFilter==='全部'||p.cat===activeFilter||p.country===activeFilter||shortDate(p)===activeFilter).forEach(p=>{const m=L.marker([p.lat,p.lng],{icon:iconFor(p)}).bindPopup(`<div class="popup-title">${p.zh}</div><div class="popup-meta">${displayDate(p)} · ${p.cat}</div>`);m.on('click',()=>setTimeout(()=>showPlace(p),180));m.addTo(markerLayer);markers[p.id]=m})}
const filters=['全部','7/24','7/25','7/26','7/27','7/28','7/29','7/31','8/1','8/2','瑞士','法國','義大利','城市','景點','健行','餐廳','交通'];
document.querySelector('#filters').innerHTML=filters.map(f=>`<button class="filter ${f==='全部'?'active':''}" data-filter="${f}" type="button">${f}</button>`).join('');
document.querySelector('#filters').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;activeFilter=b.dataset.filter;document.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x===b));renderMarkers()});

document.querySelector('#timeline').innerHTML=places.map(p=>`<article class="timeline-item" data-id="${p.id}" tabindex="0" role="button" aria-label="查看 ${p.zh}"><div class="timeline-date">${displayDate(p)}<small>${p.country}</small></div><div class="timeline-place"><h3>${p.zh} <span lang="en">${p.name}</span></h3><p>${p.desc}</p></div><span class="category-pill">${p.cat}</span></article>`).join('');
document.querySelector('#timeline').addEventListener('click',e=>{const item=e.target.closest('.timeline-item');if(item)showPlace(places.find(p=>p.id===item.dataset.id))});
document.querySelector('#timeline').addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('.timeline-item')){e.preventDefault();showPlace(places.find(p=>p.id===e.target.dataset.id))}});

const memories=[
  {title:'跨越冰河，抵達義大利',sub:'Panoramic Mont Blanc · Pointe Helbronner',desc:'一天之內從法國越過冰河進入義大利，是整趟旅程數一數二精彩的移動。',photo:'images/panoramic-mont-blanc.jpg'},
  {title:'馬特洪峰的金色日出',sub:'Matterhorn Sunrise · Zermatt',desc:'回頭整理照片才發現，第一天就是最漂亮的一次；山頂在晨光裡變成金黃色。',photo:'images/matterhorn-sunrise.jpg'},
  {title:'在 Riffelberg 坐著看山',sub:'Riffelberg · Zermatt',desc:'沒有趕景點，只是坐著、聽 Podcast、發呆，反而成為最難忘的一段。',photo:'images/riffelberg-matterhorn.jpg'}
];
document.querySelector('#memories').innerHTML=memories.map((m,i)=>`<article class="memory-card" ${m.photo?`data-photo style="background-image:url('${m.photo}')"`:''}><span class="memory-num">0${i+1}</span><div><div class="section-kicker">${m.sub}</div><h3>${m.title}</h3><p>${m.desc}</p></div></article>`).join('');
document.querySelector('#fitRoute').addEventListener('click',()=>map.fitBounds(route.getBounds(),{padding:[35,35]}));
document.querySelector('#closeDialog').addEventListener('click',()=>document.querySelector('#detailDialog').close());
document.querySelector('#detailDialog').addEventListener('click',e=>{if(e.target===e.currentTarget)e.currentTarget.close()});
renderMarkers();
// 首次進入聚焦阿爾卑斯主行程；「顯示完整路線」才會納入阿姆斯特丹。
map.fitBounds(L.latLngBounds(places.filter(p=>p.id!=='amsterdam').map(p=>[p.lat,p.lng])),{padding:[35,35]});
