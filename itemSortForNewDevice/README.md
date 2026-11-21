# 🔄 itemSortForNewDevice

<p align="center">
  <b>Automatically applies preferred default sorting rules for newly connected devices and sessions in Emby.</b><br>
  <b>নতুন ডিভাইস বা ব্রাউজারের জন্য Emby মিডিয়া লাইব্রেরির ডিফল্ট সর্টিং স্বয়ংক্রিয়ভাবে নির্ধারণের টুল।</b>
</p>

<p align="center">
  <a href="#-english"><b>English</b></a> •
  <a href="#-বাংলা-bengali"><b>বাংলা (Bengali)</b></a>
</p>

---

<a name="-english"></a>
## 🌐 English

### 📖 Overview
In Emby, sorting preferences (such as sorting movies by release year or date added) are stored locally in the client browser's `localStorage` per user and per library tab. Whenever you log in from a new browser, phone, tablet, smart TV, or incognito window, all media views revert to Emby's standard server defaults (often alphabetical ascending). Users then have to manually click through each tab to re-apply their desired sorting order.

**itemSortForNewDevice** solves this by automatically writing your preferred default sorting rules into `localStorage` upon logging in on a new device, saving time and ensuring a consistent viewing experience everywhere.

---

### ✨ Default Presets

The script comes pre-configured with practical defaults:

| Library Type | Tab Key | Default Sort Field (`sortby`) | Sort Direction (`sortorder`) |
|---|---|---|---|
| **Movies** (`movies`) | `videos` | `ProductionYear,PremiereDate,SortName` | **Descending** (Newest first) |
| | `collections` | `DateCreated,SortName` | **Descending** (Newest first) |
| | `folders` | `SortName` | **Ascending** (A-Z) |
| **TV Shows** (`tvshows`) | `series` | `ProductionYear,PremiereDate,SortName` | **Descending** (Newest first) |
| | `videos` | `ProductionYear,PremiereDate,SortName` | **Descending** |
| | `collections` | `DateCreated,SortName` | **Descending** |
| | `folders` | `SortName` | **Ascending** (A-Z) |
| **Home Videos** (`homevideos`) | `videos` | `DateCreated,SortName` | **Descending** |
| | `photos` | `DateCreated,SortName` | **Descending** |
| | `folders` | `SortName` | **Ascending** (A-Z) |
| **Music** (`music`) | `albums` | `ProductionYear,PremiereDate,SortName` | **Descending** |
| | `albumartists` | `SortName` | **Ascending** (A-Z) |
| | `artists` | `SortName` | **Ascending** (A-Z) |
| | `composers` | `SortName` | **Ascending** (A-Z) |
| | `songs` | `ProductionYear,PremiereDate,SortName` | **Descending** |
| | `folders` | `SortName` | **Ascending** (A-Z) |

---

### ⚙️ Customization
Open `itemSortForNewDevice.js` and edit the `sort` configuration dictionary to adjust any sort fields or directions:

```javascript
var sort = {
    movies: {
        videos: { sortby: "ProductionYear,PremiereDate,SortName", sortorder: "Descending" },
        collections: { sortby: "DateCreated,SortName", sortorder: "Descending" },
        folders: { sortby: "SortName", sortorder: "Ascending" }
    },
    // ...
};
```

---

### 🛠️ Installation
Add `itemSortForNewDevice.js` via **Emby.CustomCssJS** or insert into `index.html`:
```html
<script type="text/javascript" src="itemSortForNewDevice.js"></script>
```

---

<a name="-বাংলা-bengali"></a>
## 🇧🇩 বাংলা (Bengali)

### 📖 সারসংক্ষেপ
Emby-তে ব্যবহারকারীর মিডিয়া সাজানোর পছন্দ (যেমন মুভি রিলিজের সাল বা যুক্ত করার তারিখ অনুযায়ী সাজানো) ব্রাউজারের `localStorage`-এ সংরক্ষিত থাকে। ফলে প্রতিবার যখন আপনি নতুন কোনো কম্পিউটার, মোবাইল, ট্যাবলেট বা নতুন ব্রাউজারে লগইন করেন, তখন সব মিডিয়া ডিফল্ট বর্ণানুক্রমিক (A-Z) নিয়মে ফিরে যায়। ব্যবহারকারীকে প্রতিবার প্রতিটি ট্যাবে গিয়ে ম্যানুয়ালি সর্টিং ঠিক করতে হয়।

**itemSortForNewDevice** এই সমস্যার সহজ সমাধান। নতুন কোনো ডিভাইস বা সেশনে লগইন করার সাথে সাথে এটি আপনার পছন্দের ডিফল্ট সর্টিং নিয়মগুলো স্বয়ংক্রিয়ভাবে ব্রাউজারের `localStorage`-এ সেট করে দেয়।

---

### ✨ ডিফল্ট প্রিসেট রুলস

স্ক্রিপ্টটিতে নিচের উপযোগী ডিফল্ট সেটিংস দেওয়া রয়েছে:

| লাইব্রেরির ধরন | ট্যাব | সাজানোর ফিল্ড (`sortby`) | সাজানোর ক্রম (`sortorder`) |
|---|---|---|---|
| **সিনেমা** (`movies`) | `videos` | `ProductionYear,PremiereDate,SortName` | **Descending** (নতুন মুভি আগে) |
| | `collections` | `DateCreated,SortName` | **Descending** (নতুন সংগ্রহ আগে) |
| | `folders` | `SortName` | **Ascending** (A-Z বর্ণানুক্রমিক) |
| **টিভি সিরিজ** (`tvshows`) | `series` | `ProductionYear,PremiereDate,SortName` | **Descending** (নতুন সিরিজ আগে) |
| | `videos` | `ProductionYear,PremiereDate,SortName` | **Descending** |
| | `collections` | `DateCreated,SortName` | **Descending** |
| | `folders` | `SortName` | **Ascending** (A-Z) |
| **হোম ভিডিও** (`homevideos`) | `videos` | `DateCreated,SortName` | **Descending** (নতুন ভিডিও আগে) |
| | `photos` | `DateCreated,SortName` | **Descending** (নতুন ছবি আগে) |
| | `folders` | `SortName` | **Ascending** (A-Z) |
| **মিউজিক** (`music`) | `albums` | `ProductionYear,PremiereDate,SortName` | **Descending** (নতুন অ্যালবাম আগে) |
| | `albumartists` | `SortName` | **Ascending** (A-Z) |
| | `artists` | `SortName` | **Ascending** (A-Z) |
| | `composers` | `SortName` | **Ascending** (A-Z) |
| | `songs` | `ProductionYear,PremiereDate,SortName` | **Descending** |
| | `folders` | `SortName` | **Ascending** (A-Z) |

---

### ⚙️ কাস্টমাইজেশন
আপনার পছন্দের সর্টিং পরিবর্তন করতে `itemSortForNewDevice.js` ফাইলের শুরুতে থাকা `sort` অবজেক্টের মান পরিবর্তন করুন:

```javascript
var sort = {
    movies: {
        videos: { sortby: "ProductionYear,PremiereDate,SortName", sortorder: "Descending" },
        collections: { sortby: "DateCreated,SortName", sortorder: "Descending" },
        folders: { sortby: "SortName", sortorder: "Ascending" }
    },
    // ...
};
```

---

### 🛠️ ইনস্টলেশন পদ্ধতি
`itemSortForNewDevice.js` ফাইলটি **Emby.CustomCssJS** প্লাগইনে যুক্ত করুন অথবা `index.html`-এ ইনজেক্ট করুন:
```html
<script type="text/javascript" src="itemSortForNewDevice.js"></script>
```

---

### 👤 Author & Maintainer / লেখক ও রক্ষণাবেক্ষণকারী
- **Maintainer**: **Sohag** ([@Sohag-Dev12](https://github.com/Sohag-Dev12))
- **Repository**: [https://github.com/Sohag-Dev12/emby-web-mod](https://github.com/Sohag-Dev12/emby-web-mod)
- **License**: MIT
