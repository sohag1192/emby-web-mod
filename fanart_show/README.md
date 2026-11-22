# 🎨 fanart_show

<p align="center">
  <b>Interactive fanart and production stills gallery slider with full-screen zoom and download support for Emby.</b><br>
  <b>এমবি (Emby)-র আইটেম ডিটেইলস পেজে ফ্যানআর্ট ও স্টিলস গ্যালারি, ফুলস্ক্রিন জুম ও ডাউনলোড সুবিধাসহ।</b>
</p>

<p align="center">
  <a href="#-english"><b>English</b></a> •
  <a href="#-বাংলা-bengali"><b>বাংলা (Bengali)</b></a>
</p>

---

<a name="-english"></a>
## 🌐 English

### 📖 Overview
**fanart_show** enhances Emby details pages (Movies, Series, People, and Videos) by adding an interactive production stills and fanart gallery slider. Powered by [Swiper.js](https://swiperjs.com) for smooth sliding and [Viewer.js](https://fengyuanchen.github.io/viewerjs) for full-screen photo interactions, it allows users to browse backdrops and high-resolution artworks effortlessly.

---

### ✨ Features
- **Responsive Carousel**: Horizontally browse backdrops and artwork with smooth hardware-accelerated transitions.
- **Full-Screen Lightbox**: Click any image to open Viewer.js with interactive controls:
  - Zoom in / Zoom out / 1:1 Actual Size
  - Rotate left / Rotate right / Flip horizontally & vertically
  - Play slideshow
  - One-click image download button
- **Extrafanart Support**: Can automatically detect and display artworks located in the `extrafanart` folder of your media.
- **Self-Contained**: Swiper.js and Viewer.js styles and scripts are bundled inline; no external CDN dependencies required.

---

### ⚙️ Configuration

Open `fanart_show.js` to modify optional settings:

```javascript
// Supported page item types:
this.show_pages = ["Movie", "Series", "Person", "Video"];

// Set to true to show ONLY images from the extrafanart folder:
this.extraFlag = false;
```

---

### 🛠️ Installation
Add `fanart_show.js` via **Emby.CustomCssJS** or insert into `index.html`:
```html
<script type="text/javascript" src="fanart_show.js"></script>
```

---

### 🖼️ Preview
![Preview](https://github.com/jackloves111/emby-front-end-mod/assets/89971817/3ddfebb8-be1b-462b-8911-a34284aa56d7)

---

### 🔗 Credits & Dependencies
- Slider engine: [Swiper.js](https://swiperjs.com)
- Lightbox viewer: [Viewer.js](https://fengyuanchen.github.io/viewerjs)

---

<a name="-বাংলা-bengali"></a>
## 🇧🇩 বাংলা (Bengali)

### 📖 সারসংক্ষেপ
**fanart_show** স্ক্রিপ্টটি Emby-র মুভি, সিরিজ, অভিনেতা এবং ভিডিও পেজের নিচে একটি সুন্দর ফ্যানআর্ট এবং প্রোডাকশন স্টিলস গ্যালারি যুক্ত করে। এটি স্লাইডারের জন্য [Swiper.js](https://swiperjs.com) এবং ফুলস্ক্রিন ইমেজ ভিউয়ারের জন্য [Viewer.js](https://fengyuanchen.github.io/viewerjs) ব্যবহার করে।

---

### ✨ মূল বৈশিষ্ট্যসমূহ
- **রেসপন্সিভ ক্যারোজেল**: অত্যন্ত মসৃণ ট্রানজিশনের সাথে ব্যাকড্রপ ও ফটো আর্ট স্ক্রোল করে দেখার সুবিধা।
- **উন্নত ফুলস্ক্রিন লাইটবক্স**: যেকোনো ছবিতে ক্লিক করলেই ফুলস্ক্রিন ভিউয়ার চালু হয়, যেখানে রয়েছে:
  - জুম ইন / জুম আউট / ১:১ প্রকৃত সাইজে দেখা
  - ডানে বা বামে ঘোরানো (Rotate) এবং উল্টানো (Flip)
  - স্লাইডশো অটো-প্লে
  - সরাসরি মূল হাই-রেজ্যুলেশন ছবি ডাউনলোডের ডেডিকেটেড বোতাম
- **এক্সট্রাফ্যানআর্ট সমর্থন**: আপনার মিডিয়ার `extrafanart` ফোল্ডারে থাকা ছবিগুলো স্বয়ংক্রিয়ভাবে খুঁজে নিয়ে প্রদর্শন করতে পারে।
- **সম্পূর্ণ স্বয়ংসম্পূর্ণ**: স্ক্রিপ্টের ভেতরেই Swiper ও Viewer-এর কোড অন্তর্ভুক্ত আছে, ফলে আলাদা কোনো ইন্টারনেট CDN-এর ওপর নির্ভর করতে হয় না।

---

### ⚙️ কনফিগারেশন

`fanart_show.js` ফাইলে প্রয়োজন অনুযায়ী অপশন পরিবর্তন করা যায়:

```javascript
// যেসব পেজে গ্যালারি প্রদর্শিত হবে:
this.show_pages = ["Movie", "Series", "Person", "Video"];

// কেবল extrafanart ফোল্ডারের ছবি দেখাতে চাইলে true করুন:
this.extraFlag = false;
```

---

### 🛠️ ইনস্টলেশন পদ্ধতি
`fanart_show.js` ফাইলটি **Emby.CustomCssJS** প্লাগইনে যুক্ত করুন অথবা `index.html`-এর `</body>` ট্যাগের আগে ইনজেক্ট করুন:
```html
<script type="text/javascript" src="fanart_show.js"></script>
```

---

### 🖼️ প্রিভিউ
![প্রিভিউ](https://github.com/jackloves111/emby-front-end-mod/assets/89971817/3ddfebb8-be1b-462b-8911-a34284aa56d7)

---

### 🔗 কৃতজ্ঞতা স্বীকার ও প্রযুক্তি
- ক্যারোজেল ইঞ্জিন: [Swiper.js](https://swiperjs.com)
- লাইটবক্স ভিউয়ার: [Viewer.js](https://fengyuanchen.github.io/viewerjs)

---

### 👤 Author & Maintainer / লেখক ও রক্ষণাবেক্ষণকারী
- **Maintainer**: **Sohag** ([@Sohag-Dev12](https://github.com/Sohag-Dev12))
- **Repository**: [https://github.com/Sohag-Dev12/emby-web-mod](https://github.com/Sohag-Dev12/emby-web-mod)
- **License**: MIT
