import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface Product {
  label: string,
  value: string,
  path?: string
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() data: Product;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(action: string) {
    setTimeout(() => {
      this.router.navigate([action]);
    });
  }

}
