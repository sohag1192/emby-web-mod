# 📑 emby-tab

<p align="center">
  <b>Customize, reorder, or hide top navigation bar tab buttons in Emby Web.</b><br>
  <b>মুভি, টিভি শো ও মিউজিক লাইব্রেরির শীর্ষ নেভিগেশন বার ট্যাব কাস্টমাইজ বা লুকানোর টুল।</b>
</p>

<p align="center">
  <a href="#-english"><b>English</b></a> •
  <a href="#-বাংলা-bengali"><b>বাংলা (Bengali)</b></a>
</p>

---

<a name="-english"></a>
## 🌐 English

### 📖 Overview
In Emby media libraries (such as Movies, TV Shows, Music, and Home Videos), the top navigation bar often shows many tabs (e.g., *Upcoming, Studios, Suggestions, Composers, Trailers*). Many of these may be irrelevant, empty, or rarely used, cluttering the interface.

**emby-tab** gives you fine-grained control over these navigation buttons, allowing you to hide specific tabs and rename display labels.

---

### ✨ Features
- **Hide Unneeded Tabs**: Set `enabled: false` to instantly hide unwanted tabs.
- **Custom Tab Names**: Rename any tab by changing the `name` field in the configuration.
- **Multi-Library Support**: Distinct tab configurations for:
  - `movies` (Movie Libraries)
  - `tvshows` (Television / Series Libraries)
  - `homevideos` (Home Videos & Photos)
  - `music` (Music Libraries)
- **Automatic Version Adaptation**: Adapts automatically to server-specific tab variations in Emby.

---

### ⚙️ Configuration Guide

Open `emby-tab.js` and locate the `customtabs` configuration object near the top. Toggle `enabled: true` or `enabled: false` for each tab:

```javascript
var customtabs = {
    movies: [
        { name: "Series", id: "series", enabled: false },
        { name: "Movies", id: "videos", enabled: true },
        { name: "Suggestions", id: "suggestions", enabled: true },
        { name: "Trailers", id: "trailers", enabled: false },
        { name: "Playlists", id: "playlists", enabled: true },
        { name: "Collections", id: "collections", enabled: true },
        { name: "Genres", id: "genres", enabled: true },
        { name: "Tags", id: "tags", enabled: true },
        { name: "Favorites", id: "favorites", enabled: true },
        { name: "Folders", id: "folders", enabled: true }
    ],
    tvshows: [
        { name: "Series", id: "series", enabled: true },
        { name: "Suggestions", id: "suggestions", enabled: false },
        { name: "Upcoming", id: "upcoming", enabled: false },
        { name: "Favorites", id: "favorites", enabled: true },
        { name: "Collections", id: "collections", enabled: false },
        { name: "Genres", id: "genres", enabled: true },
        { name: "Tags", id: "tags", enabled: true },
        { name: "Networks", id: "studios", enabled: false },
        { name: "Episodes", id: "episodes", enabled: true },
        { name: "Folders", id: "folders", enabled: true }
    ],
    // Additional configurations for homevideos and music...
};
```

#### Supported Tab IDs by Library Type:
- **Movies (`movies`)**: `series`, `videos`, `suggestions`, `trailers`, `photos`, `albumartists`, `artists`, `playlists`, `collections`, `genres`, `tags`, `favorites`, `folders`.
- **TV Shows (`tvshows`)**: `series`, `suggestions`, `upcoming`, `favorites`, `collections`, `genres`, `tags`, `studios`, `episodes`, `folders`.
- **Home Videos (`homevideos`)**: `series`, `videos`, `suggestions`, `trailers`, `photos`, `albumartists`, `artists`, `playlists`, `collections`, `genres`, `tags`, `favorites`, `folders`.
- **Music (`music`)**: `suggestions`, `albums`, `albumartists`, `artists`, `composers`, `playlists`, `genres`, `songs`, `tags`, `folders`.

---

### 🛠️ Installation
1. Edit `emby-tab.js` to enable or disable the tabs you want.
2. Install via **Emby.CustomCssJS** or insert into `index.html`:
   ```html
   <script type="text/javascript" src="emby-tab.js"></script>
   ```
3. Refresh your Emby web client.

---

<a name="-বাংলা-bengali"></a>
## 🇧🇩 বাংলা (Bengali)

### 📖 সারসংক্ষেপ
Emby-র বিভিন্ন মিডিয়া লাইব্রেরিতে (যেমন সিনেমা, টিভি শো, মিউজিক, হোম ভিডিও) পেজের শীর্ষ নেভিগেশন বারে অনেকগুলো ট্যাব প্রদর্শিত হয় (যেমন: *Upcoming, Studios, Suggestions, Composers, Trailers* ইত্যাদি)। এগুলোর মধ্যে অনেক ট্যাব থাকে যা ব্যবহারকারী কখনই ব্যবহার করেন না বা খালি পড়ে থাকে।

**emby-tab** আপনাকে এই ট্যাবগুলোর ওপর পূর্ণ নিয়ন্ত্রণ দেয়। এর মাধ্যমে আপনি যেকোনো অপ্রয়োজনীয় ট্যাব সম্পূর্ণ লুকিয়ে ফেলতে পারেন এবং চাইলে ট্যাবের প্রদর্শিত নামও নিজের মতো পরিবর্তন করতে পারেন।

---

### ✨ মূল বৈশিষ্ট্যসমূহ
- **ট্যাব লুকানোর সুবিধা**: যেকোনো ট্যাবের জন্য `enabled: false` সেট করলেই সেই ট্যাব লুকিয়ে যাবে।
- **কাস্টম নাম নির্ধারণ**: `name` প্রোপার্টিতে আপনার পছন্দের নাম (বাংলা বা ইংরেজি) দিয়ে ট্যাবের শিরোনাম পরিবর্তন করতে পারবেন।
- **চারটি লাইব্রেরি ধরন সমর্থন**:
  - `movies` (সিনেমা লাইব্রেরি)
  - `tvshows` (টিভি সিরিজ ও নাটক)
  - `homevideos` (ব্যক্তিগত ভিডিও ও ফটো)
  - `music` (গান ও মিউজিক)
- **সার্ভার ভার্সন সামঞ্জস্যতা**: Emby-র বিভিন্ন ভার্সনের ট্যাবের সংখ্যার সাথে স্ক্রিপ্টটি স্বয়ংক্রিয়ভাবে খাপ খাইয়ে নেয়।

---

### ⚙️ কনফিগারেশন নির্দেশিকা

`emby-tab.js` ফাইলটি খুলুন এবং ফাইলের শুরুর দিকে থাকা `customtabs` অবজেক্টটি লক্ষ্য করুন। কোনো ট্যাব প্রদর্শন করতে চাইলে `enabled: true` এবং লুকাতে চাইলে `enabled: false` লিখুন:

```javascript
var customtabs = {
    movies: [
        { name: "সিরিজ", id: "series", enabled: false },
        { name: "সিনেমা", id: "videos", enabled: true },
        { name: "পরামর্শ", id: "suggestions", enabled: true },
        { name: "ট্রেলার", id: "trailers", enabled: false },
        { name: "প্লেলিস্ট", id: "playlists", enabled: true },
        { name: "সংগ্রহ", id: "collections", enabled: true },
        { name: "ধরণ", id: "genres", enabled: true },
        { name: "ট্যাগ", id: "tags", enabled: true },
        { name: "প্রিয়", id: "favorites", enabled: true },
        { name: "ফোল্ডার", id: "folders", enabled: true }
    ],
    // tvshows, homevideos ও music এর জন্য একইভাবে কনফিগার করুন...
};
```

#### প্রতিটি লাইব্রেরির সমর্থিত ট্যাব আইডি (Tab IDs):
- **সিনেমা (`movies`)**: `series`, `videos`, `suggestions`, `trailers`, `photos`, `albumartists`, `artists`, `playlists`, `collections`, `genres`, `tags`, `favorites`, `folders`।
- **টিভি শো (`tvshows`)**: `series`, `suggestions`, `upcoming`, `favorites`, `collections`, `genres`, `tags`, `studios`, `episodes`, `folders`।
- **হোম ভিডিও (`homevideos`)**: `series`, `videos`, `suggestions`, `trailers`, `photos`, `albumartists`, `artists`, `playlists`, `collections`, `genres`, `tags`, `favorites`, `folders`।
- **মিউজিক (`music`)**: `suggestions`, `albums`, `albumartists`, `artists`, `composers`, `playlists`, `genres`, `songs`, `tags`, `folders`।

---

### 🛠️ ইনস্টলেশন পদ্ধতি
১. `emby-tab.js` ফাইলে আপনার পছন্দমতো ট্যাব সেটিংস করুন।
২. **Emby.CustomCssJS** প্লাগইনের মাধ্যমে যুক্ত করুন অথবা `index.html`-এর শেষে ইনজেক্ট করুন:
   ```html
   <script type="text/javascript" src="emby-tab.js"></script>
   ```
৩. ব্রাউজার ক্যাশ ক্লিয়ার করে পেজ রিলোড দিন।

---

### 👤 Author & Maintainer / লেখক ও রক্ষণাবেক্ষণকারী
- **Maintainer**: **Sohag** ([@Sohag-Dev12](https://github.com/Sohag-Dev12))
- **Repository**: [https://github.com/Sohag-Dev12/emby-web-mod](https://github.com/Sohag-Dev12/emby-web-mod)
- **License**: MIT
