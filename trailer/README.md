# 🎥 trailer

<p align="center">
  <b>Auto-plays video trailers directly inside media cards upon mouse hover in Emby Web.</b><br>
  <b>মিডিয়া পোস্টার কার্ডের ওপর মাউস হোভার করলেই স্বয়ংক্রিয় ট্রেলার প্রিভিউ প্লেয়ার।</b>
</p>

<p align="center">
  <a href="#-english"><b>English</b></a> •
  <a href="#-বাংলা-bengali"><b>বাংলা (Bengali)</b></a>
</p>

---

<a name="-english"></a>
## 🌐 English

### 📖 Overview
**trailer** brings an interactive Netflix-style browsing experience to Emby Web. When you hover your mouse cursor over any movie or series card in your library, the script automatically fetches the trailer and plays it seamlessly inside the poster with a smooth fade-in effect. Moving your mouse away stops playback and restores the original poster image.

---

### ✨ Features
- **Hover-to-Play**: Instant trailer streaming right inside media cards without leaving the library page.
- **Intelligent Caching**: Trailer URLs are cached locally for 2 days to minimize server requests and reduce bandwidth consumption.
- **Volume Memory**: Your chosen volume level is automatically saved in `localStorage` across browsing sessions.
- **In-Video Keyboard Controls**: When hovering over a playing card trailer:
  - `M`: Toggle Mute / Unmute
  - `W` or `Arrow Up`: Increase volume (+10%)
  - `S` or `Arrow Down`: Decrease volume (-10%)
  - `A` or `Arrow Left`: Rewind 2 seconds
  - `D` or `Arrow Right`: Fast-forward 4 seconds

---

### 📹 Video Demo
A demo video showcasing this feature is included in this directory:
- Local file: [`2024-03-28 22-53-09-110.mp4`](./2024-03-28%2022-53-09-110.mp4)
- Online preview: [GitHub Video Asset Link](https://github.com/newday-life/emby-front-end-mod/assets/25839463/d4826e18-9d8e-4360-8f72-d58189d4af5d)

---

### 🛠️ Installation
Add `trailer.js` via **Emby.CustomCssJS** or insert into `index.html`:
```html
<script type="text/javascript" src="trailer.js"></script>
```

---

### 🔗 Credits & Acknowledgments
Code references and special thanks to:
- Bolin Chan's project [bolin-dev/JavPack](https://github.com/bolin-dev/JavPack) (`JavDB.trailer.user.js`).
- [XingyiHua2024/Emby-Javascript-Details](https://github.com/XingyiHua2024/Emby-Javascript-Details).

---

<a name="-বাংলা-bengali"></a>
## 🇧🇩 বাংলা (Bengali)

### 📖 সারসংক্ষেপ
**trailer** স্ক্রিপ্টটি Emby ওয়েবে নেটফ্লিক্স বা প্রাইম ভিডিওর মতো আকর্ষণীয় প্রিভিউ অভিজ্ঞতা যোগ করে। আপনি যখন লাইব্রেরিতে কোনো মুভি বা টিভি সিরিজ কার্ডের ওপর মাউসের কার্সার রাখবেন, তখন পোস্টারের ভেতর সরাসরি সেই মিডিয়ার ট্রেলার স্বয়ংক্রিয়ভাবে প্লে হতে শুরু করবে। মাউস সরিয়ে নিলে ট্রেলার বন্ধ হয়ে মূল পোস্টার ফিরে আসবে।

---

### ✨ মূল বৈশিষ্ট্যসমূহ
- **হোভার প্রিভিউ**: কোনো পেজ পরিবর্তন না করেই কার্ডের ভেতরে সরাসরি ট্রেলার দেখার সুবিধা।
- **স্মার্ট ক্যাশিং**: একবার প্লে হওয়া ট্রেলারের লিঙ্ক ব্রাউজারে ২ দিন পর্যন্ত সংরক্ষিত (ক্যাশ) থাকে, ফলে ব্যান্ডউইথ বাঁচে এবং দ্রুত প্রিভিউ লোড হয়।
- **ভলিউম মেমোরি**: আপনার পছন্দের ভলিউম লেভেল স্বয়ংক্রিয়ভাবে সংরক্ষিত থাকে।
- **ভিডিও নিয়ন্ত্রণের কীবোর্ড শর্টকাট**: কার্ডে ট্রেলার চলাকালীন কিবোর্ডের মাধ্যমে নিয়ন্ত্রণ করতে পারবেন:
  - `M`: মিউট / আনমিউট
  - `W` অথবা `Arrow Up`: ভলিউম বাড়ানো (+১০%)
  - `S` অথবা `Arrow Down`: ভলিউম কমানো (-১০%)
  - `A` অথবা `Arrow Left`: ২ সেকেন্ড পেছনে নেওয়া
  - `D` অথবা `Arrow Right`: ৪ সেকেন্ড সামনে এগিয়ে নেওয়া

---

### 📹 ভিডিও ডেমো
এই ফিচারের একটি ভিডিও ডেমো এই ডিরেক্টরিতে অন্তর্ভুক্ত রয়েছে:
- লোকাল ফাইল: [`2024-03-28 22-53-09-110.mp4`](./2024-03-28%2022-53-09-110.mp4)
- অনলাইন প্রিভিউ লিঙ্ক: [GitHub Video Asset Link](https://github.com/newday-life/emby-front-end-mod/assets/25839463/d4826e18-9d8e-4360-8f72-d58189d4af5d)

---

### 🛠️ ইনস্টলেশন পদ্ধতি
`trailer.js` ফাইলটি **Emby.CustomCssJS** প্লাগইনে যোগ করুন অথবা `index.html`-এ ইনজেক্ট করুন:
```html
<script type="text/javascript" src="trailer.js"></script>
```

---

### 🔗 কৃতজ্ঞতা স্বীকার
এই ফিচারের মূল কোড ও অনুপ্রেরণার জন্য কৃতজ্ঞতা:
- Bolin Chan-এর প্রজেক্ট [bolin-dev/JavPack](https://github.com/bolin-dev/JavPack) (`JavDB.trailer.user.js`)।
- [XingyiHua2024/Emby-Javascript-Details](https://github.com/XingyiHua2024/Emby-Javascript-Details)।
