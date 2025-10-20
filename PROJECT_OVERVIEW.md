# 🧪 Automation Test Project Overview

## 1. Project Goals & Requirements

**Goal:**  
Build an **Automation Testing Framework** that can comprehensively test **Web Desktop**, **Mobile Apps (Android/iOS)**, and **cross-platform scenarios** (mixing Web + Mobile actions).

**Requirements:**
- ✅ Support testing **Web desktop** (Chrome, Safari, Edge, Firefox)  
- ✅ Support testing **Native Android / iOS apps**  
- ✅ Support **mixed-mode tests** (e.g., login on web → verify on mobile app)  
- ✅ Easy to configure, scalable, and maintainable  
- ✅ Automatically generate **Allure Reports** after execution  
- ✅ Support **parallel execution** to speed up test runs  
- ✅ Easy **CI/CD integration** (Jenkins, GitHub Actions, etc.)  

---

## 2. Selected Solution: **WebdriverIO**

**WebdriverIO** is a modern, open-source automation framework built on **Node.js**, designed to test **Web**, **Mobile (via Appium)**, and **Hybrid** applications using a unified setup.

**Key Technologies:**
- WebdriverIO v9+  
- Mocha Framework  
- Appium Service (Android/iOS)  
- Allure Reporter  
- TypeScript  

---

## 3. Why Choose WebdriverIO

| Criteria | Reason |
|-----------|---------|
| 🧩 **Built-in Web + Mobile (mix mode) support** | Enables testing web and mobile in a single test case without managing multiple drivers. |
| ⚙️ **Easy setup with npm** | Quick installation via `npm init wdio .` – automatically creates project structure with Mocha, Allure, and Appium preconfigured. |
| 🚀 **Parallel execution** | Includes `@wdio/local-runner` for running multiple tests or devices in parallel. |
| 📊 **Built-in Allure reporting** | Automatically generates detailed HTML reports after every test run. |
| 🌍 **Modern framework & large community** | Actively maintained, async/await syntax, strong documentation, and large open-source community. |
| 🔄 **Seamless CI/CD integration** | Node-based environment makes integration with Jenkins, GitHub Actions, or GitLab CI easy. |
| 💰 **Low setup & maintenance cost** | Eliminates the need to manually build and maintain a Selenium + Appium Java framework. |

---

## 4. Key files and structure
- Configs:
  - config/wdio.shared.conf.ts — shared settings, reporters, hooks
  - config/wdio.browser.conf.ts — Chrome/web config
  - config/wdio.ios.app.conf.ts — iOS native app config
  - config/wdio.combine.conf.ts — multiremote (browser + mobile)
  - config/wdio.shared.local.appium.conf.ts — Appium service + local hooks

- Tests & objects:
  - test/specs/*.e2e.ts — sample specs (web, ios, combine)
  - test/pageobjects/*.ts — web PageObjects (LoginPage, SecurePage, DropDownPage, Page)
  - test/screenobjects/*.ts — mobile ScreenObjects (LoginScreen, FormsScreen, TabBar, NativeAlert)

- Reports:
  - Allure raw results: ./reports/allure-results/
  - Generated HTML report: ./allure-report/index.html

## 5. How it works (summary)
- WDIO runner executes using one of the config files in config/.
- For multiremote or multiple drivers, use getDeviceFromCapabilities (test/helpers/utils.ts) to obtain the correct instance (e.g., 'browser' or 'mobile').
- PageObjects/ScreenObjects use the device instance passed to them.
- Allure is configured in config/wdio.shared.conf.ts and stores results in ./reports/allure-results/.

## 6. Common commands (run from project root)
- Run test on iOS application
  - npm run ios.app -- --spec=test/specs/ios.sample.e2e.ts
- Run test on desktop web
  - npm run browser -- --spec=test/specs/web.sample.e2e.ts
- Run test on desktop web + iOS app
  - npm run combine -- --spec=test/specs/combine.sample.e2e.ts
- Generate Allure Report
  - npm run allure-report

-------


