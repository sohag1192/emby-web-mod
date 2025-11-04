
---

## 🖼️ Homepage Carousel for Emby

### 🔗 Reference Projects
- Base: [Nolovenodie’s emby-crx](https://github.com/Nolovenodie/emby-crx)  
- Carousel Engine: [Swiper.js](https://swiperjs.com)

---

### 🎨 Optional CSS: Hide Default Homepage Section (Emby ≤ 4.8)
To hide the default homepage module (section 0), add this custom CSS:
```css
@media (min-width: 50em) {
  .section0 {
    display: none;
  }
}
```

---

### 📺 YouTube Trailer Background Playback
- **Added on**: 2024-11-19  
- **Script**: `emby-swiper-trailer.js`  
- **Requirement**: Media must have scraped trailer metadata

#### ⚠️ Activation Notes
- If switching from `emby-swiper.js` to `emby-swiper-trailer.js`, trailer playback will activate **the next day** due to caching.
- To force immediate refresh:
  - Go to **Settings > Homepage**
  - Change carousel settings to invalidate cache (which resets daily at midnight)

---

### 🖼️ Preview
![Carousel Preview](https://github.com/jackloves111/emby-front-end-mod/assets/89971817/48a4b66c-a412-4f67-8dab-d4e96354d5c8)

---

