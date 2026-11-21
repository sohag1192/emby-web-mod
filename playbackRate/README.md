# ⏩ playbackRate

<p align="center">
  <b>Intuitive touch gestures and keyboard/gamepad shortcuts for Emby video playback speed, volume, and brightness.</b><br>
  <b>ভিডিও প্লেব্যাকের গতি, ভলিউম এবং ব্রাইটনেস নিয়ন্ত্রণের জন্য কীবোর্ড ও টাচ জেসচার কন্ট্রোল।</b>
</p>

<p align="center">
  <a href="#-english"><b>English</b></a> •
  <a href="#-বাংলা-bengali"><b>বাংলা (Bengali)</b></a>
</p>

---

<a name="-english"></a>
## 🌐 English

### 📖 Overview
**playbackRate** enhances Emby's built-in video player (Video OSD) with fluid keyboard shortcuts and mobile touch gesture controls. It brings popular video streaming app features (such as long-press to 2x speed, split-screen swipe for brightness/volume, and instant speed hotkeys) directly to your Emby client.

---

### ⌨️ Keyboard & Gamepad Shortcuts

| Key / Button | Action | Playback Rate |
|---|---|:---:|
| **Hold Right Arrow** *(500ms)* | Fast-Forward Boost | **2.0x** |
| **Hold Left Arrow** *(500ms)* | Reset to Normal Speed | **1.0x** |
| **Gamepad D-Pad Right / Stick Right** | Fast-Forward Boost | **2.0x** |
| **Gamepad D-Pad Left / Stick Left** | Reset to Normal Speed | **1.0x** |
| **`** or **0** | Normal Speed | **1.0x** |
| **1** | Speed 1.5x | **1.5x** |
| **2** | Speed 2.0x | **2.0x** |
| **3** | Speed 2.5x | **2.5x** |
| **4** | Speed 3.0x | **3.0x** |
| **5** | Speed 3.5x | **3.5x** |
| **6** | Speed 4.0x | **4.0x** |

---

### 📱 Mobile & Touch Screen Gestures

- **Long Press (700ms)**: Automatically doubles current playback rate (e.g. `2.0x`) with haptic vibration feedback. Release your finger to immediately revert to original speed.
- **Horizontal Swipe (Left / Right)**: Progress scrub to smoothly seek forward or backward through the video.
- **Vertical Swipe (Right Half of Screen)**: Adjust volume up or down with real-time on-screen volume slider indicator.
- **Vertical Swipe (Left Half of Screen)**: Adjust video brightness up or down with real-time brightness slider.

---

### 🛠️ Installation
Add `playbackRate.js` via **Emby.CustomCssJS** or insert into `index.html`:
```html
<script type="text/javascript" src="playbackRate.js"></script>
```

---

### 🔗 Credits & Acknowledgments
Special thanks to the open-source community contributors and original creators (Xiaomi / Ding-Ding-Dang) for inspiration and initial implementations.

---

<a name="-বাংলা-bengali"></a>
## 🇧🇩 বাংলা (Bengali)

### 📖 সারসংক্ষেপ
**playbackRate** স্ক্রিপ্টটি Emby-র বিল্ট-ইন ভিডিও প্লেয়ারে ইউটিউব ও আধুনিক স্ট্রিমিং অ্যাপের মতো উন্নত কীবোর্ড শর্টকাট এবং মোবাইল টাচ জেসচার সুবিধা যুক্ত করে। এর মাধ্যমে আপনি সহজেই যেকোনো ডিভাইসে ভিডিওর গতি (স্পিড), ভলিউম, ব্রাইটনেস এবং টাইমলাইন নিয়ন্ত্রণ করতে পারবেন।

---

### ⌨️ কীবোর্ড ও গেমপ্যাড শর্টকাট

| কী / বাটন | কাজ | প্লেব্যাক স্পিড |
|---|---|:---:|
| **Right Arrow চেপে ধরুন** *(৫০০ms)* | দ্রুত গতিতে প্লে (Fast-Forward) | **২.০x** |
| **Left Arrow চেপে ধরুন** *(৫০০ms)* | স্বাভাবিক গতিতে ফেরত | **১.০x** |
| **গেমপ্যাড D-Pad Right / স্টিক ডান** | দ্রুত গতিতে প্লে | **২.০x** |
| **গেমপ্যাড D-Pad Left / স্টিক বাম** | স্বাভাবিক গতিতে ফেরত | **১.০x** |
| **`** অথবা **0** | স্বাভাবিক গতি | **১.০x** |
| **1** | স্পিড ১.৫ গুণ | **১.৫x** |
| **2** | স্পিড ২.০ গুণ | **২.০x** |
| **3** | স্পিড ২.৫ গুণ | **২.৫x** |
| **4** | স্পিড ৩.০ গুণ | **৩.০x** |
| **5** | স্পিড ৩.৫ গুণ | **৩.৫x** |
| **6** | স্পিড ৪.০ গুণ | **৪.০x** |

---

### 📱 মোবাইল ও টাচ স্ক্রিন জেসচার

- **স্ক্রিনে লং প্রেস (৭০০ms)**: ভিডিও তাৎক্ষণিকভাবে দ্বিগুণ গতিতে (2x) চলতে শুরু করবে এবং মোবাইলে মৃদু ভাইব্রেশন হবে। আঙুল তুলে নিলে সাথে সাথে আগের গতিতে ফিরে আসবে।
- **আনুভূমিক সোয়াইপ (ডানে / বামে)**: ভিডিও স্মুথভাবে সামনে এগিয়ে নেওয়া বা পেছনে নেওয়ার জন্য (Seek)।
- **ডান অর্ধে উল্লম্ব সোয়াইপ (উপরে / নিচে)**: ভিডিওর ভলিউম সহজে বাড়ানো বা কমানোর জন্য (স্ক্রিনে ভলিউম বার দৃশ্যমান হবে)।
- **বাম অর্ধে উল্লম্ব সোয়াইপ (উপরে / নিচে)**: ডিসপ্লের ব্রাইটনেস বা উজ্জ্বলতা বাড়ানো বা কমানোর জন্য (স্ক্রিনে ব্রাইটনেস বার দৃশ্যমান হবে)।

---

### 🛠️ ইনস্টলেশন পদ্ধতি
`playbackRate.js` ফাইলটি **Emby.CustomCssJS** প্লাগইনে যোগ করুন অথবা `index.html`-এ যুক্ত করুন:
```html
<script type="text/javascript" src="playbackRate.js"></script>
```

---

### 🔗 কৃতজ্ঞতা স্বীকার
এই ফিচারের মূল কোড ও অনুপ্রেরণার জন্য ওপেন-সোর্স কমিউনিটি ও মূল নির্মাতাদের প্রতি বিশেষ ধন্যবাদ ও কৃতজ্ঞতা।
