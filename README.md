# 🌸 Romantic Flower

Butona basınca sapı çizilen, yaprakları büyüyen, taç yaprakları açan bir çiçek ve ardından beliren bir sevgi mesajı.
React + Vite ile yazılmış, tamamen statik bir site — backend, veritabanı veya API yok. GitHub Pages'te ücretsiz yayınlanır.

---

## ✏️ Mesajı kişiselleştirme

Tüm metinler tek dosyada: **`src/config.js`**

```js
export const config = {
  startTitle: 'Sana küçük bir sürprizim var',
  startButton: 'Aç 🌸',
  finalTitle: 'Bu çiçek senin için açtı',
  finalMessage: 'Her gün yeniden açan bir çiçek gibi...',
  signature: '— Seni seven biri',
  replayButton: 'Tekrar izle',
};
```

---

## 💻 Yerelde çalıştırma

Gereken: [Node.js](https://nodejs.org) 18 veya üstü.

```bash
npm install        # bağımlılıkları kur (bir kez)
npm run dev        # geliştirme sunucusu → http://localhost:5173
npm run build      # üretim derlemesi → dist/ klasörü
npm run preview    # derlenmiş siteyi önizle → http://localhost:4173
```

---

## 📦 GitHub'a hangi dosyalar yüklenecek?

**Yükle (repository'nin kök dizinine, klasörün İÇİNDEKİLERİ):**

```text
.github/workflows/deploy.yml   ← otomatik yayın (ÖNEMLİ, unutma)
public/assets/flower.svg
src/                           ← tüm klasör
index.html
package.json
package-lock.json              ← ÖNEMLİ: workflow "npm ci" ile bunu kullanır
vite.config.js
.gitignore
README.md
```

**Yükleme:**

```text
node_modules/   ← çok büyük, GitHub Actions kendisi kurar
dist/           ← GitHub Actions kendisi oluşturur
```

> ⚠️ Dosyalar repository'nin **kökünde** olmalı. Yani repo açıldığında doğrudan `package.json`, `src/`, `.github/` görünmeli; `romantic-flower/package.json` gibi bir alt klasör içinde OLMAMALI.

---

## 🚀 GitHub Pages ile yayınlama (önerilen: GitHub Actions)

### 1. Repository oluştur
1. GitHub'da sağ üstteki **+** → **New repository**.
2. İsim ver (ör. `romantic-flower`). İsim ne olursa olsun çalışır.
3. **Public** seç (ücretsiz hesapta Pages için gerekli).
4. README / .gitignore ekleme seçeneklerini **boş bırak** → **Create repository**.

### 2. Dosyaları yükle

**Yol A — Tarayıcıdan (en kolay):**
1. Yeni repo sayfasında **"uploading an existing file"** bağlantısına tıkla.
2. `romantic-flower` klasörünü aç, içindeki dosya ve klasörleri seç (`node_modules` ve `dist` hariç) ve sayfaya sürükle.
3. `.github` klasörünün de yüklendiğini kontrol et (listede `.github/workflows/deploy.yml` görünmeli).
4. **Commit changes**.

> `.github` klasörü sürükle-bırakta görünmezse: repo'da **Add file → Create new file** de, dosya adına `.github/workflows/deploy.yml` yaz ve bu projedeki aynı dosyanın içeriğini yapıştır.

**Yol B — Git ile (terminal):**
```bash
cd romantic-flower
git init
git add .
git commit -m "İlk sürüm"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADIN/REPO_ADIN.git
git push -u origin main
```

### 3. Pages'i aktifleştir
1. Repo → **Settings** → sol menüde **Pages**.
2. **Build and deployment → Source:** **GitHub Actions** seç.
3. **Actions** sekmesine git; "Deploy to GitHub Pages" iş akışı çalışıyor olmalı (çalışmıyorsa **Run workflow** ile elle başlat).
4. Yeşil ✅ olduktan sonra site adresi:

```text
https://KULLANICI_ADIN.github.io/REPO_ADIN/
```

Bu linki gönderebilirsin. 💌 Bundan sonra `main` dalına yaptığın her değişiklik otomatik yeniden yayınlanır.

---

## 🔁 Alternatif: `gh-pages` paketiyle yayın

Actions kullanmak istemezsen (Yol B ile git remote kurulmuş olmalı):

```bash
npm run deploy
```

Bu komut siteyi derleyip `gh-pages` dalına gönderir. Sonra **Settings → Pages → Source: Deploy from a branch → Branch: `gh-pages` / `(root)`** seç.

---

## 🛠️ Teknik notlar

- **`base: './'`** (`vite.config.js`): tüm CSS, JS ve görseller relative path ile yüklenir, bu yüzden repository adı ne olursa olsun site çalışır. Sabit yol istersen `base: '/REPO_ADIN/'` yazabilirsin.
- **404 koruması:** Site tek sayfa, router yok; yenilemede 404 oluşmaz. Ek güvence olarak build sonrası `dist/404.html` (index.html kopyası) üretilir.
- **Erişilebilirlik:** `prefers-reduced-motion` açık cihazlarda animasyonlar kısaltılır.

## 📁 Yapı

```text
src/
├── components/
│   ├── StartScreen.jsx     başlangıç ekranı + buton
│   ├── FlowerAnimation.jsx SVG sahnesi, renk gradyanları
│   ├── FlowerStem.jsx      sap + yapraklar
│   ├── FlowerPetals.jsx    taç yapraklar + merkez
│   ├── Particles.jsx       süzülen kalpler / parıltılar
│   └── FinalMessage.jsx    final mesaj kartı
├── styles/
│   ├── global.css          renkler, düzen, yazı tipleri
│   ├── animation.css       tüm keyframe'ler ve zaman çizelgesi
│   └── responsive.css      mobil / yatay ekran / reduced-motion
├── config.js               ✏️ metinler
├── App.jsx                 aşama yönetimi (start → blooming → final)
└── main.jsx
```
