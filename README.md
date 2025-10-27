# 🧪 WDIO1

WebdriverIO end-to-end testing scaffold for Web and iOS (including combined scenarios). This repository contains example specs, configuration, and commands to run tests and generate Allure reports.

## Project description
WDIO1 is a starter project for writing and running E2E tests with WebdriverIO. It supports:
- Browser (Web) tests
- iOS app tests (simulator/device via Appium)
- Combined scenarios (web + app)
- Allure reporting

## Prerequisites
- Node.js (recommended >=16)
- npm
- Xcode and iOS Simulator (for iOS tests)
- Appium (if running iOS tests on local or CI)
- Allure CLI (optional, for viewing reports): https://docs.qameta.io/allure/

## Installation
1. Clone the repository:
```bash
git clone <repo-url>
cd wdio1
```
2. Install dependencies:
```bash
npm install
```

## Run commands
The repository defines npm scripts in package.json. Use these commands to run tests and generate reports.

Web test (example):
```bash
npm run browser -- --spec=test/specs/web.sample.e2e.ts
```

iOS App test (example):
```bash
npm run ios.app -- --spec=test/specs/ios.sample.e2e.ts
```

Combined test (example):
```bash
npm run combine -- --spec=test/specs/combine.sample.e2e.ts
```

Generate Allure report:
```bash
npm run allure-report
```
