/* 編輯指南：所有行程內容都集中在這個陣列。
   date 為 null 的項目會顯示「日期待確認」。photo 可填相對路徑，例如 images/zermatt.jpg。 */
const places = [
  {id:'geneva-start',name:'Geneva',zh:'日內瓦',date:'2026-07-24',country:'瑞士',cat:'城市',lat:46.2044,lng:6.1432,desc:'20:10 抵達日內瓦，入住機場附近；隔天前往法國霞慕尼。',maps:'https://www.google.com/maps/search/?api=1&query=Geneva%2C%20Switzerland',photo:'images/geneva.jpg'},
  {id:'chamonix',name:'Chamonix',zh:'霞慕尼',date:'2026-07-25',country:'法國',cat:'城市',lat:45.9237,lng:6.8694,desc:'從日內瓦搭巴士抵達白朗峰山腳小鎮，下午安排鎮上與河邊的輕鬆散步。',maps:'https://www.google.com/maps/search/?api=1&query=Chamonix%2C%20France',photo:'images/chamonix.jpg'},
  {id:'aiguille',name:'Aiguille du Midi',zh:'南針峰',date:'2026-07-26',country:'法國',cat:'景點',lat:45.8786,lng:6.8870,desc:'搭乘高山纜車抵達海拔 3,842 公尺，近距離觀看白朗峰與冰河；包含 Step into the Void 玻璃觀景箱。',maps:'https://www.google.com/maps/search/?api=1&query=Aiguille%20du%20Midi',photo:'images/panoramic-mont-blanc.jpg'},
  {id:'helbronner',name:'Pointe Helbronner',zh:'赫爾布倫納峰',date:'2026-07-26',country:'義大利',cat:'交通',lat:45.8458,lng:6.9310,desc:'天氣穩定時搭乘 Panoramic Mont Blanc 纜車跨越冰河，從法國進入義大利。',maps:'https://www.google.com/maps/search/?api=1&query=Pointe%20Helbronner',photo:'images/panoramic-mont-blanc.jpg'},
  {id:'geneva-return',name:'Geneva',zh:'日內瓦（中途）',date:'2026-07-27',country:'瑞士',cat:'交通',lat:46.2070,lng:6.1470,desc:'霞慕尼上午保留作山區備用時段，下午搭巴士回到日內瓦。',maps:'https://www.google.com/maps/search/?api=1&query=Geneva%2C%20Switzerland',photo:'images/geneva.jpg'},
  {id:'annecy',name:'Annecy',zh:'安錫一日遊',date:'2026-07-28',country:'法國',cat:'城市',lat:45.8992,lng:6.1294,desc:'從日內瓦前往安錫的一日遊，走訪湖區與運河老城。這是依實際旅程補入，確切景點與心得可再編輯。',maps:'https://www.google.com/maps/search/?api=1&query=Annecy%20Old%20Town%2C%20France',photo:'images/annecy-old-town.jpg'},
  {id:'oeschinensee',name:'Oeschinensee',zh:'厄希嫩湖一日遊',date:'2026-07-29',country:'瑞士',cat:'景點',lat:46.4986,lng:7.7268,desc:'經 Kandersteg 前往厄希嫩湖。纜車票需要預先處理；當天忘了購票，因此徒步上山約 1.5–2 小時。抵達後在湖邊停留，晚上繼續移動到策馬特。',maps:'https://www.google.com/maps/search/?api=1&query=Oeschinensee%2C%20Switzerland',photo:'images/oeschinensee.jpg'},
  {id:'zermatt',name:'Zermatt',zh:'策馬特',date:'2026-07-29',country:'瑞士',cat:'城市',lat:46.0207,lng:7.7491,desc:'結束厄希嫩湖一日遊後，當晚抵達並入住策馬特；接下來展開馬特洪峰與高山步道行程。',maps:'https://www.google.com/maps/search/?api=1&query=Zermatt%2C%20Switzerland',photo:'images/matterhorn-sunrise.jpg'},
  {id:'gornergrat',name:'Gornergrat',zh:'戈爾內格拉特',date:'2026-07-30',country:'瑞士',cat:'交通',lat:45.9830,lng:7.7849,desc:'搭乘登山鐵路，一路眺望馬特洪峰、Monte Rosa 與 Gorner Glacier。',maps:'https://www.google.com/maps/search/?api=1&query=Gornergrat',photo:'images/gornergrat-railway.jpg'},
  {id:'riffelsee',name:'Riffelsee',zh:'利菲爾湖',date:'2026-07-30',country:'瑞士',cat:'景點',lat:45.9839,lng:7.7624,desc:'從 Rotenboden 步行前往，成功拍到馬特洪峰倒影。',maps:'https://www.google.com/maps/search/?api=1&query=Riffelsee',photo:'images/matterhorn-sunrise.jpg'},
  {id:'stellisee',name:'Stellisee',zh:'斯泰利湖',date:'2026-07-31',country:'瑞士',cat:'健行',lat:46.0133,lng:7.8016,desc:'Five Lakes Trail 的重要一站，以馬特洪峰倒影聞名。',maps:'https://www.google.com/maps/search/?api=1&query=Stellisee',photo:'images/stellisee.jpg'},
  {id:'fluhalp',name:'Fluhalp',zh:'弗盧阿爾普',date:'2026-07-31',country:'瑞士',cat:'健行',lat:46.0167,lng:7.8072,desc:'從 Stellisee 額外繞上 Fluhalp，依旅行紀錄來回約 30 分鐘，再返回五湖主線。',maps:'https://www.google.com/maps/search/?api=1&query=Fluhalp%20Zermatt',photo:'images/fluhalp.jpg'},
  {id:'grindjisee',name:'Grindjisee',zh:'格林德湖',date:'2026-07-31',country:'瑞士',cat:'健行',lat:46.0082,lng:7.7869,desc:'Five Lakes Trail 中帶有自然山林感的高山湖泊，還額外繞湖一圈。',maps:'https://www.google.com/maps/search/?api=1&query=Grindjisee',photo:'images/grindjisee.jpg'},
  {id:'grunsee',name:'Grünsee',zh:'綠湖',date:'2026-07-31',country:'瑞士',cat:'健行',lat:46.0041,lng:7.7976,desc:'Five Lakes Trail 的湖泊節點；午後雲量增加後繼續前進。',maps:'https://www.google.com/maps/search/?api=1&query=Grunsee%20Zermatt',photo:'images/grunsee.jpg'},
  {id:'moosjisee',name:'Moosjisee',zh:'莫斯湖',date:'2026-07-31',country:'瑞士',cat:'健行',lat:46.0018,lng:7.7871,desc:'色澤鮮明的高山水庫，是 Five Lakes 路線中的獨特景觀。',maps:'https://www.google.com/maps/search/?api=1&query=Moosjisee',photo:'images/moosjisee.jpg'},
  {id:'leisee',name:'Leisee',zh:'萊湖',date:'2026-07-31',country:'瑞士',cat:'健行',lat:46.0166,lng:7.7718,desc:'完成五湖路線的最後一段，再回到 Sunnegga。',maps:'https://www.google.com/maps/search/?api=1&query=Leisee%20Zermatt',photo:'images/leisee.jpg'},
  {id:'murmelweg',name:'Murmelweg',zh:'土撥鼠步道',date:'2026-08-01',country:'瑞士',cat:'健行',lat:46.0080,lng:7.7750,desc:'同日自然路線節點；座標為概略位置，可再依實際 GPS 軌跡調整。',maps:'https://www.google.com/maps/search/?api=1&query=Murmelweg%20Zermatt',photo:'images/stellisee.jpg'},
  {id:'furi-bridge',name:'Furi Suspension Bridge',zh:'Furi 吊橋',date:'2026-08-01',country:'瑞士',cat:'景點',lat:45.9967105,lng:7.7278736,desc:'Furi-Hängebrücke 位於 Dossen Glacier Garden 一帶，跨越 Gorner Gorge，橋面約在峽谷上方 90 公尺。走過吊橋後可往 Furi、Zum See 方向繼續下行。',maps:'https://www.google.com/maps/search/?api=1&query=Furi%20Suspension%20Bridge%2C%20Zermatt'},
  {id:'zum-see',name:'Restaurant Zum See',zh:'Zum See 餐廳',date:'2026-08-01',country:'瑞士',cat:'餐廳',lat:46.0070,lng:7.7280,desc:'走完 Furi 吊橋後往 Zum See 聚落方向下行，在 Restaurant Zum See 用午餐。點了羊肉、Sauvignon Blanc 與馬鈴薯。',maps:'https://www.google.com/maps/search/?api=1&query=Restaurant%20Zum%20See%20Zermatt',photo:'images/zum-see.jpg'},
  {id:'josephine',name:'Restaurant Joséphine',zh:'Restaurant Joséphine',date:'2026-07-26',country:'法國',cat:'餐廳',lat:45.9234,lng:6.8691,desc:'霞慕尼晚餐：Lamb Shank、白酒與蘑菇配菜；羊肉很好吃，整體法式料理印象很好。',maps:'https://maps.app.goo.gl/1rAnZgoPcG46kHXn8'},
  {id:'geneva-airport',name:'Geneva Airport',zh:'日內瓦機場',date:'2026-08-02',country:'瑞士',cat:'交通',lat:46.2381,lng:6.1090,desc:'建議 07:06 從策馬特出發，11:05 抵達日內瓦機場，銜接 15:15 KLM 航班。',maps:'https://www.google.com/maps/search/?api=1&query=Geneva%20Airport',photo:'images/geneva.jpg'},
  {id:'amsterdam',name:'Amsterdam',zh:'阿姆斯特丹',date:'2026-08-02',country:'荷蘭',cat:'城市',lat:52.3676,lng:4.9041,desc:'回到阿姆斯特丹，為 2026 阿爾卑斯旅程畫下句點。',maps:'https://www.google.com/maps/search/?api=1&query=Amsterdam%2C%20Netherlands'}
];

const categoryMeta={城市:['◉','#477c9e'],景點:['✦','#e9814c'],健行:['↗','#4d795e'],餐廳:['●','#b55e45'],交通:['→','#735f8e']};
// 餐廳 pin 顯示在地圖上，但不改變城市間的主旅行路線順序。
const routeCoordinates=places.filter(p=>p.id!=='josephine').map(p=>[p.lat,p.lng]);
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
const filters=['全部','7/24','7/25','7/26','7/27','7/28','7/29','7/30','7/31','8/1','8/2','瑞士','法國','義大利','城市','景點','健行','餐廳','交通'];
document.querySelector('#filters').innerHTML=filters.map(f=>`<button class="filter ${f==='全部'?'active':''}" data-filter="${f}" type="button">${f}</button>`).join('');
document.querySelector('#filters').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;activeFilter=b.dataset.filter;document.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x===b));renderMarkers()});

const days=[
  {date:'2026-07-24',label:'抵達日內瓦',note:'旅行開場',events:[['晚上','抵達 Geneva','湖邊與城市散步；Broken Chair、Jet d’Eau 等停留細節來自回顧對話。','geneva-start']]},
  {date:'2026-07-25',label:'Geneva → Chamonix',note:'轉進阿爾卑斯',events:[['上午','前往霞慕尼','從日內瓦移動到白朗峰山腳。','chamonix'],['午後','Chamonix 小鎮','逛市中心、感受阿爾卑斯度假小鎮氣氛。','chamonix']]},
  {date:'2026-07-26',label:'白朗峰與跨境纜車',note:'高山觀景與跨境移動',events:[['清晨','上山與高山露台','從 Chamonix 搭兩段纜車上到 Aiguille du Midi。官方建議整體參觀至少預留 2–3 小時；高峰期可能更久。','aiguille'],['上午','3,842 m 觀景區','先在露台辨認 Mont Blanc、法國／義大利／瑞士阿爾卑斯山。拍 Mont Blanc 近景時保留岩稜作前景；拍 Chamonix 方向則使用較廣角構圖。','aiguille'],['上午','Step into the Void','玻璃觀景箱位於 3,842 m 露台。同行者可從玻璃箱外拍攝人物與腳下山谷；開放會受天候與人流影響。','aiguille'],['中午','Le Tube 與中央岩峰','沿著海拔 3,700 m 以上的環形通道繞過中央岩峰，可拍金屬步道、岩壁與遠方雪峰的層次。','aiguille'],['午後','Panoramic Mont Blanc','從南針峰搭小型纜車越過 Glacier du Géant 到 Pointe Helbronner；車廂與冰河裂隙適合用中長焦拍攝。','helbronner'],['晚餐','Restaurant Joséphine','Lamb Shank、白酒、蘑菇配菜。','josephine']]},
  {date:'2026-07-27',label:'L’Index、Lac Blanc → Geneva',note:'健行後移動',events:[['上午','L’Index Trail','沿線持續看到 Mont Blanc，路線開闊。'],['午後','Lac Blanc','抵達白湖；當天湖面倒影不明顯。'],['傍晚','回到 Geneva','住一晚、簡單休息。','geneva-return']]},
  {date:'2026-07-28',label:'Annecy 安錫一日遊',note:'舊城與湖岸環形散步',events:[['上午','Palais de l’Île','先到 Thiou 河中的石造建築；從 Perrière 橋附近可拍到建築、運河與兩側房屋。','annecy'],['上午','Thiou 運河與舊城','沿運河進入 Vieille Ville，走過中世紀拱廊、窄巷與舊宅；不必逐點打卡，順著河道走即可。','annecy'],['中午','舊城午餐','餐廳名稱未在對話中確認，保留為待補欄位。'],['午後','Jardins de l’Europe','從舊城走到湖邊公園，適合短暫休息，再接往 Pont des Amours。','annecy'],['午後','Pont des Amours → Pâquier','橋的一側可拍 Annecy 湖與山景，另一側是 Canal du Vassé 與停泊小船；最後沿 Pâquier 湖岸散步。','annecy'],['晚上','回到 Geneva','為隔天 Oeschinensee 與前往 Zermatt 做準備。','geneva-return']]},
  {date:'2026-07-29',label:'Oeschinensee → Zermatt',note:'徒步上山、湖區與長距離移動',events:[['上午','Kandersteg → Oeschinensee','纜車票需要提前購買；當天忘了買，因此改成徒步上山，約走 1.5–2 小時。','oeschinensee'],['午後','Oeschinensee 湖邊','這個地點由瑞士當地人推薦。抵達後在湖邊停留，再準備下山與後續移動。','oeschinensee'],['晚上','抵達 Zermatt','結束厄希嫩湖行程後，當晚直接入住策馬特。','zermatt']]},
  {date:'2026-07-30',label:'Gornergrat 與倒影',note:'登山鐵路與湖泊步道',events:[['日出','Matterhorn Sunrise','第一個早晨看到山頂被晨光染成金黃色。','zermatt'],['上午','Gornergrat Railway','搭登山鐵路上山，沿途觀看 Matterhorn、Monte Rosa 與 Gorner Glacier。','gornergrat'],['中午','Riffelsee','在 Rotenboden 下車後步行前往湖邊，拍到馬特洪峰倒影。','riffelsee'],['午後','Riffelsee → Riffelberg','沿下坡路線繼續到 Riffelberg；途中停下看山、聽 Podcast，再搭車返回 Zermatt。']]},
  {date:'2026-07-31',label:'Five Lakes Walk',note:'官方 11.3 km；實際另加支線',events:[['上午','Zermatt → Sunnegga → Blauherd','先搭地下纜車到 Sunnegga，再轉纜車到 Blauherd（2,571 m）。官方五湖路線由此起步。'],['上午','Blauherd → Stellisee','第一湖距起點較近。湖岸低角度可拍 Matterhorn 倒影；之後可選擇原路線或加走 Fluhalp。','stellisee'],['上午','Fluhalp 支線','從 Stellisee 額外往 Fluhalp，再返回五湖主線；這段不包含在官方 11.3 km 內。','fluhalp'],['中午','Stellisee → Grindjisee','回到主線後下降至 Grindjisee。官方指出 Stellisee、Grindjisee、Leisee 都可能拍到 Matterhorn 倒影。','grindjisee'],['午後','Grindjisee → Grünsee','穿過較多林木與高山植被；Grünsee 周邊地貌更裸露。','grunsee'],['午後','Grünsee → Moosjisee','繼續下降至呈乳藍色的水庫；此段留意午後雲量與雷雨。','moosjisee'],['傍晚','Moosjisee → Leisee → Sunnegga','抵達 Leisee 後走回 Sunnegga。官方標準為 3 小時 30 分、上升 265 m、下降 542 m；加 Fluhalp、繞湖與拍照需另加時間。','leisee']]},
  {date:'2026-08-01',label:'Murmelweg、Furi、Zum See、國慶',note:'自然步道與村內活動',events:[['清晨','Murmelweg','起初找不到入口，確認路線後看到多隻野生阿爾卑斯土撥鼠。','murmelweg'],['中午','Furi Suspension Bridge','前往 Dossen Glacier Garden 一帶的 Furi 吊橋。吊橋跨越 Gorner Gorge，橋面約在峽谷上方 90 公尺，可向下看 Gornera 河谷。','furi-bridge'],['午餐','Furi → Restaurant Zum See','走完吊橋後往 Furi、Zum See 方向下行，在 Restaurant Zum See 用餐；點了羊肉、Sauvignon Blanc 與馬鈴薯。','zum-see'],['晚上','Swiss National Day','策馬特街區出現瑞士國旗、音樂與節慶活動。','zermatt']]},
  {date:'2026-08-02',label:'Zermatt → Geneva Airport → Amsterdam',note:'慢慢收尾',events:[['早上','早餐與最後一次 Matterhorn','全身痠、左膝有感，取消 Montreux，選擇不再趕行程。','zermatt'],['上午','前往 Genève-Aéroport','搭火車前往日內瓦機場。','geneva-airport'],['傍晚','回到 Amsterdam','完成這趟阿爾卑斯旅行。','amsterdam']]}
];
document.querySelector('#timeline').innerHTML=days.map(d=>`<article class="day-card"><header class="day-meta"><time datetime="${d.date}">${shortDate({date:d.date})}</time><span>${d.label}</span><p>${d.note}</p></header><div class="day-events">${d.events.map(e=>`<div class="day-event" ${e[3]?`data-place="${e[3]}" tabindex="0" role="button"`:''}><div class="event-time">${e[0]}${['上午','午後','晚上','白天','清晨','傍晚','中午','午餐','晚餐','日出'].includes(e[0])?'<span class="estimated">約</span>':''}</div><div class="event-copy"><h3>${e[1]}${e[3]?'<span class="event-link">查看地圖 ↗</span>':''}</h3><p>${e[2]}</p></div></div>`).join('')}</div></article>`).join('');
document.querySelector('#timeline').addEventListener('click',e=>{const item=e.target.closest('[data-place]');if(item)showPlace(places.find(p=>p.id===item.dataset.place))});
document.querySelector('#timeline').addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-place]')){e.preventDefault();showPlace(places.find(p=>p.id===e.target.dataset.place))}});

const restaurants=[
  {name:'Restaurant Joséphine',place:'Chamonix · 約 7/26 晚餐',rating:'4 / 5',note:'羊膝是主角。旅行回顧裡對整體法式料理印象很好，搭配白酒與蘑菇配菜。',dishes:['Lamb Shank','白酒','Mushroom'],maps:'https://maps.app.goo.gl/1rAnZgoPcG46kHXn8'},
  {name:'Restaurant Zum See',place:'Zermatt · 8/1 午餐',rating:'5 / 5',note:'點了羊肉與 Sauvignon Blanc；旅行紀錄中特別提到馬鈴薯的表現。',dishes:['Lamb','Sauvignon Blanc','馬鈴薯'],maps:'https://maps.app.goo.gl/YXq2GdV8Qm4C7eUv8'}
];
document.querySelector('#restaurants').innerHTML=restaurants.map(r=>`<article class="food-card"><div><div class="food-location">${r.place}</div><h3>${r.name}</h3><p class="food-note">${r.note}</p><div class="food-dishes">${r.dishes.map(d=>`<span class="dish">${d}</span>`).join('')}</div><a class="food-map" href="${r.maps}" target="_blank" rel="noopener">在 Google Maps 開啟 ↗</a></div><div class="food-rating">${r.rating}</div></article>`).join('');

const memories=[
  {title:'跨越冰河到義大利',sub:'Panoramic Mont Blanc · Pointe Helbronner',desc:'從 Aiguille du Midi 搭小型纜車越過冰河，抵達義大利側的 Pointe Helbronner。',photo:'images/panoramic-mont-blanc.jpg'},
  {title:'馬特洪峰日出',sub:'Matterhorn Sunrise · Zermatt',desc:'第一個早晨拍到晨光照亮山頂，照片中保留了湖面與岩岸前景。',photo:'images/matterhorn-sunrise.jpg'},
  {title:'Riffelberg 停留',sub:'Riffelberg · Zermatt',desc:'從 Riffelsee 往 Riffelberg 移動途中停下休息，看山並聽 Podcast。',photo:'images/riffelberg-matterhorn.jpg'}
];
document.querySelector('#memories').innerHTML=memories.map((m,i)=>`<article class="memory-card" ${m.photo?`data-photo style="background-image:url('${m.photo}')"`:''}><span class="memory-num">0${i+1}</span><div><div class="section-kicker">${m.sub}</div><h3>${m.title}</h3><p>${m.desc}</p></div></article>`).join('');
document.querySelector('#fitRoute').addEventListener('click',()=>map.fitBounds(route.getBounds(),{padding:[35,35]}));
document.querySelector('#closeDialog').addEventListener('click',()=>document.querySelector('#detailDialog').close());
document.querySelector('#detailDialog').addEventListener('click',e=>{if(e.target===e.currentTarget)e.currentTarget.close()});
renderMarkers();
// 首次進入聚焦阿爾卑斯主行程；「顯示完整路線」才會納入阿姆斯特丹。
map.fitBounds(L.latLngBounds(places.filter(p=>p.id!=='amsterdam').map(p=>[p.lat,p.lng])),{padding:[35,35]});
