// @ts-check
const { test, expect } = require('@playwright/test');

test('should increment and reset counter', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const counterValue = page.locator('p')
  await expect(counterValue).toHaveText('0')

  const buttons = page.locator('button');

  const incrementButton = buttons.nth(0);
  const resetButton = buttons.nth(1);
  const decrementButton = buttons.nth(2);


  await incrementButton.click();
  await expect(counterValue).toHaveText('1');

  await resetButton.click();
  await expect(counterValue).toHaveText('0');

  await decrementButton.click();
  await expect(counterValue).toHaveText('-1');
});

