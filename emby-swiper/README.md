---

## 🖼️ Homepage Carousel

### 🔗 Reference Projects
- Base project: [Nolovenodie/emby-crx](https://github.com/Nolovenodie/emby-crx)  
- Carousel engine: [Swiper.js](https://swiperjs.com)

---

### 🧩 Optional: Hide Default Homepage Module (for Emby ≤ 4.8)
To hide the default homepage section (module 1), add this custom CSS:
```css
@media (min-width: 50em) {
  .section0 {
    display: none;
  }
}
```

---

### 📺 YouTube Trailer Background Playback (Added: 2024-11-19)
- Script: `emby-swiper-trailer.js`
- Requirement: The media item must have a scraped YouTube trailer.

#### ⚠️ Activation Notes
- If you previously used `emby-swiper.js` and switch to `emby-swiper-trailer.js`, the trailer feature will activate **the next day** due to caching.
- To force immediate activation:
  - Go to **Settings > Homepage**
  - Change any carousel setting to invalidate the cache (which resets daily at midnight)

---

### 🖼️ Preview
![Preview](https://github.com/jackloves111/emby-front-end-mod/assets/89971817/48a4b66c-a412-4f67-8dab-d4e96354d5c8)

---

