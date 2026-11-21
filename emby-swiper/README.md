# 🖼️ emby-swiper

<p align="center">
  <b>Modern, responsive homepage carousel slider for Emby Web with optional YouTube trailer background playback.</b><br>
  <b>এমবি ওয়েব (Emby Web)-এর জন্য আধুনিক রেসপন্সিভ হোমপেজ ক্যারোজেল স্লাইডার এবং ব্যাকগ্রাউন্ড ট্রেলার প্লেব্যাক।</b>
</p>

<p align="center">
  <a href="#-english"><b>English</b></a> •
  <a href="#-বাংলা-bengali"><b>বাংলা (Bengali)</b></a>
</p>

---

<a name="-english"></a>
## 🌐 English

### 📖 Overview
**emby-swiper** replaces or enhances Emby's default home hero banner with a dynamic, full-featured carousel slider powered by [Swiper.js](https://swiperjs.com). It presents recently added, trending, or recommended media with high-resolution backdrops, logos, descriptions, and interactive thumbnails.

### 📦 Available Scripts

1. **`emby-swiper.js`** *(Standard Edition)*
   - Full-width hero carousel with backdrop art, logo, rating, synopsis, and thumbnail navigation.
   - Built-in library access filter dialog directly inside the Emby Settings page.
   - Smooth animations, circular autoplay progress indicator, and responsive touch gestures.

2. **`emby-swiper-trailer.js`** *(Trailer Background Edition)*
   - Includes all features of the standard edition.
   - Automatically streams scraped YouTube trailers in the background of active slides for an immersive streaming-service feel.

---

### ✨ Key Features
- **Touch & Swipe Ready**: Fluid gestures on mobile, tablet, and touch-screen devices.
- **Custom Library Access**: Choose which media libraries appear in the carousel via the Emby Web settings interface.
- **Backdrop & Logo Integration**: Loads official media title logos and high-res backdrops with smooth blur masking.
- **Autoplay Progress**: Visual circular SVG timer tracking slide transitions.

---

### 🛠️ Installation

Choose **either** `emby-swiper.js` or `emby-swiper-trailer.js` (do not load both simultaneously).

#### Method 1: Emby.CustomCssJS Plugin
- Add either `emby-swiper.js` or `emby-swiper-trailer.js` into your custom script list in the plugin settings.

#### Method 2: index.html Manual Injection
- Place the script in your Emby web folder and add before `</body>`:
  ```html
  <script type="text/javascript" src="emby-swiper.js"></script>
  ```
  *(or `emby-swiper-trailer.js`)*

---

### 🧩 Optional: Hide Default Homepage Section (Emby ≤ 4.8)
To hide the default Emby hero section (Section 0) so only the new Swiper carousel is visible, add this custom CSS into **Emby Server Dashboard > Settings > Custom CSS**:

```css
@media (min-width: 50em) {
  .section0 {
    display: none;
  }
}
```

---

### ⚠️ Activation & Caching Notes
- **Daily Cache**: Recommendations and media metadata are cached in browser `localStorage` and refresh daily at midnight.
- **Switching Scripts**: If you switch from `emby-swiper.js` to `emby-swiper-trailer.js`, trailers will activate the next day unless you clear the cache.
- **Force Immediate Refresh**:
  1. Open Emby Web and navigate to **Settings > Homepage**.
  2. Toggle any carousel library setting and click **Save** to immediately invalidate the cache.
  3. Alternatively, clear your browser's `localStorage` item `CACHE|Movies-Date`.

---

### 🖼️ Preview
![Preview](https://github.com/jackloves111/emby-front-end-mod/assets/89971817/48a4b66c-a412-4f67-8dab-d4e96354d5c8)

---

### 🔗 Reference Projects & Credits
- Base concept: [Nolovenodie/emby-crx](https://github.com/Nolovenodie/emby-crx)
- Carousel engine: [Swiper.js](https://swiperjs.com)

---

<a name="-বাংলা-bengali"></a>
## 🇧🇩 বাংলা (Bengali)

### 📖 সারসংক্ষেপ
**emby-swiper** হলো Emby ওয়েব ক্লায়েন্টের জন্য একটি চমৎকার হোমপেজ ক্যারোজেল স্লাইডার, যা [Swiper.js](https://swiperjs.com) ইঞ্জিনের ওপর ভিত্তি করে তৈরি। এটি আপনার Emby হোমপেজের ডিফল্ট ব্যানারকে নেটফ্লিক্স বা ডিজনি+ এর মতো দৃষ্টিনন্দন, অ্যানিমেটেড এবং রেসপন্সিভ হিরো স্লাইডারে রূপান্তর করে।

### 📦 উপলব্ধ স্ক্রিপ্টসমূহ

১. **`emby-swiper.js`** *(স্ট্যান্ডার্ড সংস্করণ)*
   - ব্যাকড্রপ আর্ট, লোগো, বিবরণ এবং থাম্বনেইল নেভিগেশন সহ সম্পূর্ণ স্ক্রিনজুড়ে হিরো ক্যারোজেল।
   - Emby সেটিংস পেজে সরাসরি লাইব্রেরি নির্বাচন ও ফিল্টারিং সুবিধা।
   - মসৃণ অ্যানিমেশন, সার্কুলার অটো-প্লে টাইমার এবং মোবাইল টাচ জেসচার সমর্থন।

২. **`emby-swiper-trailer.js`** *(ট্রেলার ব্যাকগ্রাউন্ড সংস্করণ)*
   - স্ট্যান্ডার্ড সংস্করণের সব সুবিধা এতে অন্তর্ভুক্ত।
   - যেসব মুভি বা সিরিজের ইউটিউব ট্রেলার স্ক্র্যাপ করা আছে, স্লাইড চলাকালীন ব্যাকগ্রাউন্ডে স্বয়ংক্রিয়ভাবে সেই ট্রেলার প্লে করে এক প্রিমিয়াম অভিজ্ঞতা তৈরি করে।

---

### ✨ মূল বৈশিষ্ট্যসমূহ
- **মোবাইল ও টাচ বান্ধব**: মোবাইল, ট্যাবলেট এবং টাচ স্ক্রিনে চমৎকার স্মুথ সোয়াইপ অভিজ্ঞতা।
- **লাইব্রেরি অ্যাক্সেস কন্ট্রোল**: Emby সেটিংস মেনু থেকে আপনি নির্ধারণ করতে পারবেন কোন কোন লাইব্রেরির মিডিয়া ক্যারোজেলে প্রদর্শিত হবে।
- **হাই-রেজ্যুলেশন ব্যাকড্রপ ও লোগো**: টাইটেল লোগো ও হাই-কোয়ালিটি পোস্টার স্বয়ংক্রিয় ব্লার ট্রানজিশনের সাথে লোড হয়।
- **অটো-প্লে প্রোগ্রেস ইন্ডিকেটর**: পরবর্তী স্লাইডে যাওয়ার সময় বৃত্তাকার এসভিজি (SVG) টাইমার প্রদর্শিত হয়।

---

### 🛠️ ইনস্টলেশন পদ্ধতি

যেকোনো **একটি** স্ক্রিপ্ট বেছে নিন (`emby-swiper.js` অথবা `emby-swiper-trailer.js`)। একসাথে দুটি স্ক্রিপ্ট ব্যবহার করবেন না।

#### পদ্ধতি ১: Emby.CustomCssJS প্লাগইন
- প্লাগইনের কাস্টম স্ক্রিপ্ট সেকশনে পছন্দের স্ক্রিপ্টটি যুক্ত করুন।

#### পদ্ধতি ২: index.html ম্যানুয়াল ইনজেকশন
- ফাইলটি আপনার Emby ওয়েব ডিরেক্টরিতে রাখুন এবং `index.html`-এর `</body>` ট্যাগের আগে যুক্ত করুন:
  ```html
  <script type="text/javascript" src="emby-swiper.js"></script>
  ```
  *(অথবা `emby-swiper-trailer.js`)*

---

### 🧩 ঐচ্ছিক: ডিফল্ট হোমপেজ সেকশন লুকানো (Emby ≤ 4.8)
ডিফল্ট Emby হিরো সেকশন লুকিয়ে কেবল Swiper ক্যারোজেলটি চালু রাখতে নিচের কাস্টম সিএসএস কোডটি **Emby Server Dashboard > Settings > Custom CSS**-এ যোগ করুন:

```css
@media (min-width: 50em) {
  .section0 {
    display: none;
  }
}
```

---

### ⚠️ অ্যাক্টিভেশন ও ক্যাশিং নির্দেশিকা
- **দৈনিক ক্যাশ**: মিডিয়া তথ্য এবং রেকমেন্ডেশন ব্রাউজারের `localStorage`-এ জমা থাকে এবং প্রতিদিন রাত ১২টায় স্বয়ংক্রিয়ভাবে নতুন করে লোড হয়।
- **স্ক্রিপ্ট পরিবর্তন**: আপনি যদি `emby-swiper.js` থেকে `emby-swiper-trailer.js`-এ পরিবর্তন করেন, তবে ট্রেলার ফিচারটি ক্যাশের কারণে সাধারণত পরদিন চালু হবে।
- **তাৎক্ষণিক রিফ্রেশ করার উপায়**:
  1. Emby ওয়েব খুলে **Settings > Homepage**-এ যান।
  2. ক্যারোজেল লাইব্রেরি সেটিংসে যেকোনো একটি অপশন পরিবর্তন করে **Save** বাটনে ক্লিক করুন। এতে পুরনো ক্যাশ মুছে গিয়ে তাৎক্ষণিকভাবে নতুন সেটিংস কার্যকর হবে।

---

### 🖼️ প্রিভিউ
![প্রিভিউ](https://github.com/jackloves111/emby-front-end-mod/assets/89971817/48a4b66c-a412-4f67-8dab-d4e96354d5c8)

---

### 🔗 রেফারেন্স ও কৃতজ্ঞতা স্বীকার
- মূল আইডিয়া: [Nolovenodie/emby-crx](https://github.com/Nolovenodie/emby-crx)
- ক্যারোজেল ইঞ্জিন: [Swiper.js](https://swiperjs.com)
