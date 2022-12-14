import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { ProductService } from './product.service';

@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.scss'],
})
export class DataviewComponent implements OnInit {
  products: any = [];
  sortOptions: SelectItem[] = [];
  sortOrder: number = 1;
  sortField: string = '';

  constructor(
    private productService: ProductService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.getProducts();
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' },
    ];

    this.primengConfig.ripple = true;
  }
  getProducts() {
    this.productService.getProducts().then((data) => (this.products = data));
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
  filter(event: any) {
    const search = event.target.value;
    !search
      ? this.getProducts()
      : (this.products = this.products.filter((item: any) =>
          item.name.toLowerCase().startsWith(search.toLowerCase())
        ));
  }
}
