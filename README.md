
---

## 🛠️ Installation Methods

### Method 1: Recommended Plugin Integration  
- Use with [Emby.CustomCssJS](https://github.com/Shurelol/Emby.CustomCssJS) for best compatibility and script management.

---

### Method 2: Manual HTML Injection  
1. Open your Emby client or web interface and edit `index.html`.  
2. Insert the following line **at the end of the `<body>` tag**:
   ```html
   <script type="text/javascript" src="XXX.js"></script>
   ```
3. Download the `XXX.js` file and place it in the same directory as `index.html`.  
   - On non-Windows systems, ensure the file has read permissions.

---

## 🎨 Module Overview

| No. | Module Name             | Description                                                                 |
|:---:|--------------------------|------------------------------------------------------------------------------|
| 1   | `actorPlus`             | Hides actors and creators without profile images                            |
| 2   | `emby-swiper`           | Adds a homepage carousel using Swiper.js                                    |
| 3   | `emby-tab`              | Customizes or hides top navigation bar buttons                              |
| 4   | `fanart_show`           | Displays fanart images (e.g., anime-style visuals)                          |
| 5   | `itemSortForNewDevice`  | Changes default media sorting for new devices                               |
| 6   | `playbackRate`          | Adds gesture and keyboard controls for playback speed                       |
| 7   | `trailer`               | Auto-plays trailers on hover over media cards  
|     |                         | (See [XingyiHua2024’s Emby-Javascript-Details](https://github.com/XingyiHua2024/Emby-Javascript-Details)) |

---
