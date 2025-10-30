# ✅ Feedback Responses from Ter Pong in rehearsal meeting

## **1️⃣ How to capture the element locator?**
We can capture element locators in multiple ways — no dependency on the developer team as long as each element has a unique attribute.

### 🔹 **Web Example**
```js
// By ID
const username = $('#userId');

// By name
const username = $('[name="userId"]');

// By CSS selector
const loginBtn = $('button.login-btn');

// By text (XPath)
const submit = $('//button[text()="Submit"]');
```

### 🔹 **Mobile Example**
```js
// By Accessibility ID
const loginButton = $('~loginButton');

// By resource-id (Android)
const username = $('id:com.bankapp.android:id/username');

// By class and text
const label = $('//android.widget.TextView[@text="Welcome"]');

// By iOS name attribute
const passwordField = $('//XCUIElementTypeTextField[@name="password"]');
```

➡️ *We can identify elements independently using attributes like `id`, `text`, `content-desc`, or `accessibilityId` without waiting for developer changes.*

---

## **2️⃣ How to write a test case using our framework (Live coding)**
We will demonstrate this in the live session:  
- Create a new test file using our WebdriverIO + TypeScript template.  
- Implement a simple scenario (e.g., login test).  
- Execute and show Allure report generation.

---

## **3️⃣ How automation saves manual tester effort (Pain-point)**
Manual testing works fine for small projects, but as systems scale, re-running hundreds of test cases manually becomes inefficient.

➡️ **Key idea:**
- For small projects → limited ROI initially.  
- As features grow → automation greatly reduces regression time and catches side-effect issues earlier.

| Task | Manual Effort | Automated Effort | Saving |
|------|----------------|------------------|---------|
| Regression test execution (50 test cases) | ~12.5 hours | ~2.5 hour | ~80% saved |
| Cross-browser test execution (execute 50 test cases on 2 browsers) | ~25 hours | ~5 hours | ~80% saved |  (But it's not required more effort on automation development)
| Multiple-environments test execution (execute 50 test cases on SIT and UAT env) | ~25 hours |  ~5 hour | ~80% saved |  (But it's not required more effort on automation development)

The figure above is based on the following data
  + The velocity of manual execution = 15 minutes/test cases
  + Automation test instance = 5 instances/threads/runners/worker per execution time
  + The velocity of automation execution = The velocity of manual execution (but in practice, automation execution is faster then manual execution on complicated test cases)
  + The working time for automation execution = 24 hours > the working time of manual tester = 8 hours

> Automation testing lets manual testers focus on exploratory and high-value testing instead of repeating routine checks.

---

## **4️⃣ Benefits of automation test**
- Faster regression and release cycles.  
- Consistent test execution with fewer human errors.  
- Easy scaling across browsers and devices.  
- Reusable scripts and long-term cost efficiency.  

> “Automation provides faster delivery, higher accuracy, and sustainable cost reduction over time.”

---

## **5️⃣ Comparison: WebdriverIO vs Java (Selenium + TestNG + Cucumber)**

| Criteria | WebdriverIO | Java (Selenium + TestNG + Cucumber) |
|-----------|--------------|-------------------------------------|
| Setup time | ~1 hour | 3–4 hours |
| Config complexity | Low (simple configs) | High (manual XML setup) |
| Code verbosity | TypeScript (clean) | Java (verbose) |
| Parallel execution | Built-in | Needs plugin |
| CI/CD integration | Native support | Manual setup |
| Community support | Large & active | Moderate |

📘 **References:**  
- [WebdriverIO – Getting Started](https://webdriver.io/docs/gettingstarted)  
- [Appium Service for WebdriverIO](https://webdriver.io/docs/appium-service)

---

## **6️⃣ Change “large community” wording**
> “Because WebdriverIO is backed by a strong open-source community, we can quickly find and reuse proven solutions — reducing both issue resolution time and licensing cost.”

---

## **7️⃣ How can we do automation testing on a high-security banking app?**

- **Run Tests Inside SIT Environment (Secure & Controlled)**  
  All automation tests are executed inside the bank’s SIT network. Sensitive data never leaves the secured environment, and test results are stored internally under access control.

- **Use Appium on Standard Banking App (Without Breaking Security)**  
  Appium uses official OS testing frameworks — **UIAutomator2** (Android) and **XCUITest** (iOS).  
  These frameworks are **built-in and approved by Google and Apple**, meaning automation runs **like a real user**, not through code injection or modification.  
  Therefore, **developers should not disable UIAutomator or XCUITest** on the testing build; otherwise, no legitimate testing (manual or automated) can inspect or interact with UI elements.
