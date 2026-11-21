# 🎬 Emby Web Mod (এমবি ওয়েব মড)

<p align="center">
  <b>A collection of lightweight, high-performance UI/UX enhancements and feature extensions for Emby Web.</b><br>
  <b>এমবি ওয়েব (Emby Web)-এর জন্য হালকা ও উন্নত পারফরম্যান্সের ইউজার ইন্টারফেস এবং ফিচার এক্সটেনশন প্যাকেজ।</b>
</p>

<p align="center">
  <b>Maintained by <a href="https://github.com/Sohag-Dev12">Sohag (@Sohag-Dev12)</a></b><br>
  <a href="#-english"><b>English</b></a> •
  <a href="#-বাংলা-bengali"><b>বাংলা (Bengali)</b></a>
</p>

---

<a name="-english"></a>
## 🌐 English

Welcome to **Emby Web Mod**, a curated suite of modular client-side JavaScript extensions designed to elevate your Emby web client experience. Each module is self-contained and can be installed individually or combined with others.

### 🎨 Modules Overview

| No. | Module | Directory | Description |
|:---:|:---|:---|:---|
| 1 | **actorPlus** | [`actorPlus/`](./actorPlus/) | Hides cast and crew members who do not have profile images, keeping the details page clean. |
| 2 | **emby-swiper** | [`emby-swiper/`](./emby-swiper/) | Adds a modern, dynamic hero carousel slider with touch support and optional YouTube trailer playback. |
| 3 | **emby-tab** | [`emby-tab/`](./emby-tab/) | Customizes, reorders, or hides top navigation tabs for Movies, TV Shows, Music, and Home Videos. |
| 4 | **fanart_show** | [`fanart_show/`](./fanart_show/) | Displays an interactive fanart/stills gallery with full-screen zoom and download support. |
| 5 | **itemSortForNewDevice** | [`itemSortForNewDevice/`](./itemSortForNewDevice/) | Automatically configures default sorting rules for newly connected devices and fresh sessions. |
| 6 | **playbackRate** | [`playbackRate/`](./playbackRate/) | Adds touch gestures (volume, brightness, seek) and keyboard shortcuts for video playback speed control. |
| 7 | **trailer** | [`trailer/`](./trailer/) | Plays video trailer previews directly inside media posters upon mouse hover. |

---

### 🛠️ Installation Methods

You can choose either of the following methods to install any of the modules:

#### Method 1: Recommended Plugin Integration (Emby.CustomCssJS)
For easiest management and update resilience across Emby server upgrades:
1. Install the [Emby.CustomCssJS](https://github.com/Shurelol/Emby.CustomCssJS) plugin on your Emby server.
2. In the Emby Server Dashboard, navigate to **Plugins > Custom Css & JS**.
3. Add the JavaScript file (e.g., `actorPlus.js`, `emby-swiper.js`, etc.) into the custom script configuration.
4. Save and refresh your Emby client.

#### Method 2: Manual HTML Injection
If you do not use plugins or host Emby Web statically:
1. Locate your Emby web client's root directory (e.g., `/system/dashboard-ui/` or your web root).
2. Download the target `.js` script from this repository and place it in the same directory as `index.html`.
3. Open `index.html` with a text editor and add the script tag just before the closing `</body>` tag:
   ```html
   <script type="text/javascript" src="moduleName.js"></script>
   ```
   *(Replace `moduleName.js` with the filename, such as `actorPlus.js`)*
4. Ensure appropriate read permissions on Linux/macOS (`chmod 644 filename.js`).
5. Clear browser cache and refresh.

---

### 💡 General Tips
- **Selective Usage**: You do not have to use all modules; pick only the enhancements you desire.
- **Cache Invalidation**: When modifying or switching scripts, clear your browser cache (`Ctrl + F5`) or increment the script version parameter (e.g., `src="module.js?v=2"`).

---

<a name="-বাংলা-bengali"></a>
## 🇧🇩 বাংলা (Bengali)

**Emby Web Mod**-এ আপনাকে স্বাগতম। এটি Emby ওয়েব ক্লায়েন্টের ইন্টারফেস ও কার্যক্ষমতা বাড়ানোর জন্য একাধিক মডিউলার জাভাস্ক্রিপ্ট স্ক্রিপ্টের একটি সমন্বিত প্যাকেজ। প্রতিটি মডিউল সম্পূর্ণ স্বাধীন, তাই আপনি আপনার প্রয়োজন অনুযায়ী যেকোনো মডিউল এককভাবে অথবা একসাথে ব্যবহার করতে পারেন।

### 🎨 মডিউলসমূহের বিবরণ

| নং | মডিউল | ডিরেক্টরি | বিবরণ |
|:---:|:---|:---|:---|
| ১ | **actorPlus** | [`actorPlus/`](./actorPlus/) | যেসব অভিনেতা ও কলাকুশলীদের প্রোফাইল ছবি নেই, তাদের স্বয়ংক্রিয়ভাবে লুকিয়ে পেজ পরিচ্ছন্ন রাখে। |
| ২ | **emby-swiper** | [`emby-swiper/`](./emby-swiper/) | হোমপেজে আধুনিক হিরো ক্যারোজেল স্লাইডার এবং ব্যাকগ্রাউন্ডে ইউটিউব ট্রেলার প্লেব্যাক সুবিধা যোগ করে। |
| ৩ | **emby-tab** | [`emby-tab/`](./emby-tab/) | মুভি, টিভি শো, মিউজিক ও হোম ভিডিও লাইব্রেরির শীর্ষ নেভিগেশন ট্যাব কাস্টমাইজ বা অপ্রয়োজনীয় ট্যাব লুকায়। |
| ৪ | **fanart_show** | [`fanart_show/`](./fanart_show/) | আইটেম ডিটেইলস পেজে ফ্যানআর্ট ও ব্যাকড্রপ গ্যালারি প্রদর্শন করে (ফুলস্ক্রিন জুম ও ডাউনলোড সুবিধাসহ)। |
| ৫ | **itemSortForNewDevice** | [`itemSortForNewDevice/`](./itemSortForNewDevice/) | নতুন ডিভাইস বা ব্রাউজারের জন্য মিডিয়া লাইব্রেরির ডিফল্ট সর্টিং (সাজানোর ক্রম) স্বয়ংক্রিয়ভাবে সেট করে। |
| ৬ | **playbackRate** | [`playbackRate/`](./playbackRate/) | ভিডিও প্লেয়ারে কীবোর্ড শর্টকাট এবং মোবাইল টাচ জেসচারের মাধ্যমে প্লেব্যাক স্পিড, ভলিউম ও ব্রাইটনেস নিয়ন্ত্রণ করে। |
| ৭ | **trailer** | [`trailer/`](./trailer/) | মিডিয়া কার্ডের ওপর মাউস রাখলে সরাসরি পোস্টারের ভেতরেই ট্রেলার প্রিভিউ প্লে করে। |

---

### 🛠️ ইনস্টলেশন পদ্ধতি

যেকোনো মডিউল ইনস্টল করার জন্য নিচের যেকোনো একটি পদ্ধতি অনুসরণ করুন:

#### পদ্ধতি ১: প্লাগইনের মাধ্যমে ইনস্টলেশন (প্রস্তাবিত)
Emby সার্ভার আপডেটের পরও স্ক্রিপ্ট সচল রাখার জন্য এটি সবচেয়ে সহজ পদ্ধতি:
1. আপনার Emby সার্ভারে [Emby.CustomCssJS](https://github.com/Shurelol/Emby.CustomCssJS) প্লাগইনটি ইনস্টল করুন।
2. Emby ড্যাশবোর্ডে গিয়ে **Plugins > Custom Css & JS** অপশনে প্রবেশ করুন।
3. পছন্দের জাভাস্ক্রিপ্ট ফাইলটির কোড কপি করে কাস্টম স্ক্রিপ্ট বক্সে যুক্ত করুন (অথবা ফাইল আপলোড করুন)।
4. সংরক্ষণ করুন এবং ব্রাউজার রিলোড দিন।

#### পদ্ধতি ২: ম্যানুয়াল HTML ইনজেকশন
আপনি যদি কোনো প্লাগইন ব্যবহার করতে না চান:
1. আপনার Emby সার্ভারের ওয়েব ডিরেক্টরিতে যান (যেখানে `index.html` অবস্থিত, যেমন `/system/dashboard-ui/`)।
2. এই রিপোজিটরি থেকে প্রয়োজনীয় `.js` ফাইলটি ডাউনলোড করে `index.html`-এর একই ফোল্ডারে রাখুন।
3. `index.html` ফাইলটি এডিটর দিয়ে খুলুন এবং `</body>` ট্যাগের ঠিক উপরে স্ক্রিপ্টটি যুক্ত করুন:
   ```html
   <script type="text/javascript" src="moduleName.js"></script>
   ```
   *(এখানে `moduleName.js`-এর জায়গায় ফাইলের সঠিক নাম দিন, যেমন `actorPlus.js`)*
4. লিনাক্স বা ম্যাক সিস্টেমে ফাইলের পড়ার অনুমতি (Read Permission) নিশ্চিত করুন (`chmod 644 filename.js`)।
5. ব্রাউজারের ক্যাশ ক্লিয়ার করে পেজ রিলোড দিন।

---

### 💡 কিছু গুরুত্বপূর্ণ পরামর্শ
- **পছন্দমতো ব্যবহার**: সবগুলো মডিউল একসাথে ব্যবহার করা বাধ্যতামূলক নয়; আপনার যেটি প্রয়োজন কেবল সেটিই ব্যবহার করতে পারেন।
- **ক্যাশ সমস্যা**: স্ক্রিপ্ট আপডেট করার পর পরিবর্তন দেখতে না পেলে ব্রাউজার ক্যাশ ক্লিয়ার করুন (`Ctrl + F5`) অথবা ফাইলের নামের শেষে ভার্সন প্যারামিটার যুক্ত করুন (যেমন `module.js?v=2`)।

---

### 👤 Author & Maintainer / লেখক ও রক্ষণাবেক্ষণকারী
- **Maintainer**: **Sohag** ([@Sohag-Dev12](https://github.com/Sohag-Dev12))
- **Repository**: [https://github.com/Sohag-Dev12/emby-web-mod](https://github.com/Sohag-Dev12/emby-web-mod)
- **License**: MIT
