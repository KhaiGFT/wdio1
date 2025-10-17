# 🧪 WDIO1 Project

> WebdriverIO E2E Testing Setup (Web & Visual Testing)

📘 **Official Docs:** [https://webdriver.io/docs/gettingstarted/](https://webdriver.io/docs/gettingstarted/)

---

## 🚀 Setup Instructions

### Initialize Project
1 - Clone source code at this repo
2 - Install dependencies
```bash
npm install
```
3 - Without error, try a commnand for trigger test at Run Tests section.
---

## ⚙️ WDIO Configuration Wizard

```text
===============================
🤖 WDIO Configuration Wizard 🧙
===============================

✔ A project named "wdio1" was detected at "/Users/kitn/Documents/demo_auto/wdio1", correct? Yes  
✔ What type of testing would you like to do? E2E Testing - of Web or Mobile Applications  
✔ Where is your automation backend located? On my local machine  
✔ Which environment would you like to automate? Web - web applications in the browser  
✔ With which browser should we start? Chrome  
✔ Which framework do you want to use? Mocha (https://mochajs.org/)  
✔ Do you want to use TypeScript to write tests? Yes  
✔ Do you want WebdriverIO to autogenerate some test files? Yes  
✔ What should be the location of your spec files?  
  `/Users/kitn/Documents/demo_auto/wdio1/test/specs/**/*.ts`  
✔ Do you want to use page objects? (https://martinfowler.com/bliki/PageObject.html) Yes  
✔ Where are your page objects located?  
  `/Users/kitn/Documents/demo_auto/wdio1/test/pageobjects/**/*.ts`  
✔ Which reporter do you want to use? spec  
✔ Do you want to add a plugin to your test setup?  
✔ Would you like to include Visual Testing to your setup?  
  (https://webdriver.io/docs/visual-testing) Yes  
✔ Do you want to add a service to your test setup? visual  
✔ Do you want me to run `npm install`? Yes  
```

---

## 🧩 Generated Structure

```
wdio1/
├── test/
│   ├── specs/
│   │   └── example.e2e.ts
│   └── pageobjects/
│       └── example.page.ts
├── wdio.conf.ts
├── package.json
└── README.md
```

---

## 🧰 Features

- ✅ **Web automation** using Chrome  
- ✅ **Mocha** test framework  
- ✅ **TypeScript** support  
- ✅ **Page Object pattern**  
- ✅ **Visual Testing** integration  
- ✅ **Spec reporter** for clean console output  
a
---

## ▶️ Run Tests

1 - Run test on iOS application
```bash
npm run ios.app -- --spec=test/specs/ios.sample.e2e.ts
```
2 - Run test on desktop web
```bash
npm run browser -- --spec=test/specs/web.sample.e2e.ts
```
3 - Run test on desktop web + iOS app
```bash
npm run combine -- --spec=test/specs/combine.sample.e2e.ts
```
4 - Generate Allure Report
```bash
npm run allure-report
```
5 - Open Appium inspector
```bash
npm run appium-inspector
```
---

## 📸 Visual Testing

> Integrated with WebdriverIO Visual Testing Service  
See docs: [https://webdriver.io/docs/visual-testing](https://webdriver.io/docs/visual-testing)

---

## 📄 License
MIT © 2025
