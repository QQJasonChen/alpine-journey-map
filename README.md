# Alpine Notes — 2026 阿爾卑斯互動旅行地圖

一個可直接部署到 GitHub Pages、嵌入 Notion 的純前端旅行地圖。介面使用繁體中文，以 Leaflet + OpenStreetMap 呈現，不需要 API key，也不需要安裝套件或建置。

## 專案內容

- `index.html`：網站結構與 SEO 資訊
- `styles.css`：完整視覺與響應式版面
- `script.js`：行程資料、地圖、篩選、時間軸與詳情互動

## 本機預覽

最簡單的方式是直接雙擊 `index.html`。若瀏覽器限制本機資源，可在此資料夾執行：

```bash
python3 -m http.server 8000
```

然後開啟 `http://localhost:8000`。

## 編輯日期、內容、連結與照片

打開 `script.js`，編輯最上方的 `places` 陣列：

```js
{
  id: 'riffelsee',
  name: 'Riffelsee',
  zh: '利菲爾湖',
  date: '2026-07-29', // 尚未確認可保留 null
  country: '瑞士',
  cat: '景點',
  lat: 45.9839,
  lng: 7.7624,
  desc: '你的旅行心得',
  maps: 'Google Maps 連結',
  photo: 'images/riffelsee.jpg' // 選填
}
```

瑞士段日期以旅行者確認的實際旅程為準：7/28 從 Geneva 前往 Annecy 一日遊；7/29 前往 Oeschinensee，結束後當晚直接入住 Zermatt。這取代 Notion 舊版中 7/29 Geneva／Montreux／Brig、7/30 才抵達 Zermatt 的計畫。Fluhalp、Murmelweg、Zum See 暫列在 8/1 同日自然路線中；實際造訪順序仍可調整。Murmelweg 座標為地圖概略位置，若有 GPS 紀錄可再精確替換。

Top memories 的文字與照片位於同一檔案下方的 `memories` 陣列。照片建議放在新建的 `images/` 資料夾中，使用相對路徑，例如 `images/matterhorn-sunrise.jpg`。

## 部署到 GitHub Pages

1. 在 GitHub 建立一個新的公開 repository，例如 `alpine-journey-map`。
2. 把本資料夾內的 `index.html`、`styles.css`、`script.js` 與 `README.md` 上傳到 repository 根目錄。
3. 進入 repository 的 **Settings → Pages**。
4. 在 **Build and deployment** 選擇 **Deploy from a branch**。
5. Branch 選 `main`、資料夾選 `/ (root)`，按 **Save**。
6. 等候約 1–3 分鐘，GitHub 會顯示公開網址，格式通常是 `https://你的帳號.github.io/alpine-journey-map/`。

若 repository 設為私有，GitHub Pages 的可用性會依帳號方案而異；公開 repository 最簡單。

## 嵌入 Notion

1. 完成 GitHub Pages 部署，確認公開網址可以正常開啟。
2. 在 Notion 頁面輸入 `/embed`，選擇 **Embed**。
3. 貼上 GitHub Pages 公開網址，按 **Embed link**。
4. 拖曳區塊邊緣調整高度；建議寬度設為頁面全寬，高度至少 700 px。

Notion 無法嵌入本機 `file://` 或 `localhost` 網址，必須先部署成可公開存取的 HTTPS 網址。

## 地圖與隱私說明

底圖圖磚由 OpenStreetMap 提供。網站本身不含追蹤碼、不保存訪客資料；點擊 Google Maps 按鈕時才會離開網站前往 Google Maps。若日後流量很大，請改用符合正式流量需求的圖磚供應商並遵守其使用政策。

## 示意照片來源與授權

目前 Top Memories 與部分詳情卡使用 Wikimedia Commons 的可再利用照片。這些是同地點的網路示意照片，不是旅行者本人拍攝；日後可直接換成自己的照片。

- `panoramic-mont-blanc.jpg`：Christian David，〈[Cable cars crossing crevassed glacier below Aiguille du Midi](https://commons.wikimedia.org/wiki/File:Cable_cars_crossing_crevassed_glacier_below_Aiguille_du_Midi,_Chamonix,_Haute-Savoie.jpg)〉，[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- `matterhorn-sunrise.jpg`：Deralpinbergsteiger，〈[Matterhorn at sunrise reflecting in the Riffelsee](https://commons.wikimedia.org/wiki/File:Matterhorn_at_sunrise_reflecting_in_the_Riffelsee.jpg)〉，[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- `riffelberg-matterhorn.jpg`：Andrew Bossi，〈[Riffelberg — Matterhorn viewed from Gornergratbahn](https://commons.wikimedia.org/wiki/File:3818_-_Riffelberg_-_Matterhorn_viewed_from_Gornergratbahn.JPG)〉，[CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/)

三張照片均只做裁切顯示，未改變照片內容。若公開部署，請保留本段授權資訊。

其餘景點照片亦來自 Wikimedia Commons：

- Geneva：Graymo86，〈[Jet d’Eau, Rainbow](https://commons.wikimedia.org/wiki/File:Jet_dEau,_Rainbow.jpg)〉，CC BY-SA 4.0
- Chamonix：Romainbehar，〈[Place de l'Église](https://commons.wikimedia.org/wiki/File:Chamonix-Mont-Blanc_-_Place_de_l%27%C3%89glise_-_H%C3%B4tel_de_ville_-_Portrait_d%27%C3%89mile_Chautemps.jpg)〉，CC0
- Gornergrat Railway：Patryk Hejduk，〈[Gornergrat Railway with Matterhorn view](https://commons.wikimedia.org/wiki/File:Gornergrat_Railway_with_Matterhorn_view.jpg)〉，CC BY-SA 4.0
- Stellisee：Giles Laurent，〈[Matterhorn reflecting in Stellisee at sunset](https://commons.wikimedia.org/wiki/File:043_Matterhorn_reflecting_in_Stellisee_at_sunset_Photo_by_Giles_Laurent.jpg)〉，CC BY-SA 4.0
- Grindjisee：Ka23 13，〈[Grindjisee](https://commons.wikimedia.org/wiki/File:Grindjisee_20190716_110955.jpg)〉，CC BY-SA 4.0
- Grünsee：Roy Egloff，〈[Grünsee](https://commons.wikimedia.org/wiki/File:CH.VS.Zermatt_Gr%C3%BCnsee_9818_16x9-R_6K.jpg)〉，CC BY-SA 4.0
- Moosjisee：Markus Bernet，〈[Moosjisee Matterhorn](https://commons.wikimedia.org/wiki/File:Moosjisee_Matterhorn.jpg)〉，CC BY-SA 4.0
- Leisee：Ka23 13，〈[Leisee](https://commons.wikimedia.org/wiki/File:Leisee_20190716_0552b.jpg)〉，CC BY-SA 4.0
- Fluhalp：Paebi，〈[Bergrestaurant Fluhalp Zermatt](https://commons.wikimedia.org/wiki/File:Bergrestaurant_Fluhalp_Zermatt.jpg)〉，CC BY-SA 4.0
- Zum See：Tiia Monto，〈[Zum See, Zermatt](https://commons.wikimedia.org/wiki/File:Zum_See,_Zermatt.jpg)〉，CC BY-SA 3.0
- Annecy：Guilhem Vellut，〈[Canal at Old Town, Annecy](https://commons.wikimedia.org/wiki/File:Canal_@_Old_Town_@_Annecy_(34660327594).jpg)〉，CC BY 2.0
- Oeschinensee：Günter Seggebäing，〈[Oeschinensee Panorama, Kandersteg](https://commons.wikimedia.org/wiki/File:20190725_Oeschinensee-Panorama,_Kandersteg_(06540-42_stitch).jpg)〉，CC BY-SA 3.0
