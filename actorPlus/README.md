# 🎭 actorPlus

<p align="center">
  <b>Hides actors, creators, and crew members without profile avatars in Emby.</b><br>
  <b>প্রোফাইল ছবিবিহীন অভিনেতা ও কলাকুশলীদের লুকিয়ে Emby-কে দিন পরিচ্ছন্ন রূপ।</b>
</p>

<p align="center">
  <a href="#-english"><b>English</b></a> •
  <a href="#-বাংলা-bengali"><b>বাংলা (Bengali)</b></a>
</p>

---

<a name="-english"></a>
## 🌐 English

### 📖 Overview
By default, Emby displays all actors, directors, writers, and crew associated with a media item, even if they have no profile picture (displaying a generic grey placeholder silhouette instead). When many people lack avatars, the cast section looks cluttered and incomplete.

**actorPlus** automatically filters out anyone missing a profile picture (`PrimaryImageTag`), showing only people with valid photos.

### ✨ Features
- **Dynamic Filtering**: Automatically hides cast and crew without photos in real-time.
- **Broad Page Support**: Works across Movie, Series, Season, and Episode detail pages.
- **Video OSD Support**: Also cleans up the cast list in the video player overlay (OSD).
- **Zero Configuration**: Simply inject the script and it works immediately.

### 🛠️ Installation
Add `actorPlus.js` via **Emby.CustomCssJS** or inject it into `index.html`:
```html
<script type="text/javascript" src="actorPlus.js"></script>
```

### 🖼️ Visual Comparison

#### Before Installation
*(Notice multiple blank/placeholder silhouettes cluttering the cast list)*

![Before](https://github.com/jackloves111/emby-front-end-mod/assets/89971817/22fa18c3-48f9-4bb2-9f71-762d32c0b0a5)

#### After Installation
*(Only cast members with authentic profile photos are displayed)*

![After](https://github.com/jackloves111/emby-front-end-mod/assets/89971817/1b81f489-490a-47fe-9817-0254bbdd4b38)

---

<a name="-বাংলা-bengali"></a>
## 🇧🇩 বাংলা (Bengali)

### 📖 সারসংক্ষেপ
ডিফল্টভাবে Emby-তে কোনো মুভি বা নাটকের কাস্ট ও ক্রু তালিকায় এমন অনেক অভিনেতা বা নির্মাতাদের নাম আসে যাদের কোনো প্রোফাইল ছবি থাকে না (পরিবর্তে একটি ফাঁকা ধূসর সিলুয়েট আইকন প্রদর্শিত হয়)। এটি ইন্টারফেসের সৌন্দর্য নষ্ট করে।

**actorPlus** স্বয়ংক্রিয়ভাবে যেসব ব্যক্তির প্রোফাইল ছবি (`PrimaryImageTag`) নেই তাদের তালিকা থেকে বাদ দেয় এবং কেবল যাদের আসল ছবি রয়েছে তাদেরই প্রদর্শন করে।

### ✨ মূল বৈশিষ্ট্যসমূহ
- **স্বয়ংক্রিয় ফিল্টারিং**: ছবিবিহীন কাস্ট ও ক্রুদের রিয়েল-টাইমে তালিকা থেকে সরিয়ে ফেলে।
- **বিস্তৃত সমর্থন**: মুভি, সিরিজ, সিজন এবং এপিসোডের বিস্তারিত পেজে কাজ করে।
- **ভিডিও ওএসডি (OSD) সমর্থন**: ভিডিও প্লে চলাকালীন ওএসডি স্ক্রিনেও কাস্ট তালিকা পরিচ্ছন্ন রাখে।
- **কোনো কনফিগারেশনের প্রয়োজন নেই**: শুধুমাত্র স্ক্রিপ্টটি যুক্ত করলেই স্বয়ংক্রিয়ভাবে কাজ শুরু করে।

### 🛠️ ইনস্টলেশন
`actorPlus.js` ফাইলটি **Emby.CustomCssJS** প্লাগইনের মাধ্যমে যুক্ত করুন অথবা `index.html`-এ ইনজেক্ট করুন:
```html
<script type="text/javascript" src="actorPlus.js"></script>
```

### 🖼️ ব্যবহারের চিত্র তুলনা

#### ব্যবহারের পূর্বে
*(প্রোফাইল ছবি ছাড়া খালি আইকন প্রদর্শিত হচ্ছে)*

![ব্যবহারের পূর্বে](https://github.com/jackloves111/emby-front-end-mod/assets/89971817/22fa18c3-48f9-4bb2-9f71-762d32c0b0a5)

#### ব্যবহারের পরে
*(কেবলমাত্র ছবিযুক্ত অভিনেতাদের পরিচ্ছন্ন তালিকা প্রদর্শিত হচ্ছে)*

![ব্যবহারের পরে](https://github.com/jackloves111/emby-front-end-mod/assets/89971817/1b81f489-490a-47fe-9817-0254bbdd4b38)
