import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.class';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  custs: Customer[] = [];

  searchCriteria: string = "";
  sortColumn: string = "id";
  sortAsc: boolean = true;
  sortFn(column: string): void {
    if(column === this.sortColumn) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = column;
    this.sortAsc = true;
  }
  
  constructor(
    private custsvc: CustomerService
  ) { }

  ngOnInit(): void {
    this.custsvc.list().subscribe(
      res => {
        console.debug("Customers:", res);
        this.custs = res;
      },
      err => { console.error(err); }
    );
  }

}
