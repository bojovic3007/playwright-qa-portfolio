import { Page, expect } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async verifyOnProductsPage() {
    await expect(this.page).toHaveURL(/inventory/);
  }

  async getProductTitles() {
    return this.page.locator('.inventory_item_name');
  }

  async verifyProductsVisible() {
    const products = await this.getProductTitles();
    await expect(products.first()).toBeVisible();
  }
}