# 🧭 WebdriverIO Locator Cheat Sheet
*(Web + Mobile - with Mocha + TypeScript examples)*

---

## 🌐 WEB LOCATORS

| **Locator Type** | **Syntax** | **Example** | **Description** |
|------------------|-------------|--------------|-----------------|
| **ID** | `#id` | `$('#loginBtn')` | Locate element by `id` attribute |
| **Class Name** | `.className` | `$('.btn-primary')` | Locate element by `class` |
| **Name Attribute** | `'[name="username"]'` | `$('input[name="username"]')` | Locate element by name |
| **Tag Name** | `'tag'` | `$('input')` | Locate element by tag name |
| **CSS Selector** | `'tag[attr="value"]'` | `$('div.container > input[type="text"]')` | Flexible and powerful |
| **Link Text** | `=text` | `$('=Login')` | Locate link (`<a>Login</a>`) by its visible text |
| **Partial Link Text** | `*=text` | `$('*=Sign')` | Match partial visible text |
| **XPath** | `'//...'` | `$('//button[text()="Submit"]')` | Locate using XPath expression |
| **Text Contains (XPath)** | `'//tag[contains(text(), "word")]'` | `$('//div[contains(text(),"Welcome")]')` | Match visible text fragment |
| **Chained Selector** | `parent.$('child')` | `$('form').$('input[type="password"]')` | Find element relative to parent |
| **Data Attribute** | `'[data-testid="value"]'` | `$('button[data-testid="save-btn"]')` | Recommended for test automation |
| **Shadow DOM Selector** | `browser.shadow$('#host', '#child')` | `await browser.shadow$('#app', '#login')` | Locate elements inside Shadow DOM |

---

### ✅ Example (Mocha + TypeScript)
```typescript
import { expect } from 'chai';

describe('Login Page', () => {
  it('should login successfully', async () => {
    await browser.url('https://example.com/login');

    await $('input[name="username"]').setValue('admin');
    await $('input[type="password"]').setValue('secret');
    await $('#loginBtn').click();

    const successMsg = await $('//div[contains(text(),"Welcome")]');
    expect(await successMsg.isDisplayed()).to.be.true;
  });
});
