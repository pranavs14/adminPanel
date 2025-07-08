import { Component} from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'] 
})
export class CustomerComponent {
    customerForm : FormGroup;
    customerError : string | null = null;
    customerData : any = [];
    displayedColumns: string[] = ['Customer ID', 'Customer Name', 'delete'];
    editCustomer: boolean = false;

    constructor(private formBuilder: FormBuilder, private router: Router, private commonService: CommonService) {
      this.customerForm = this.formBuilder.group({
        id: [''],
        name: [''],
      })
    }

    ngOnInit(): void {
      this.customerData = this.commonService.getCustomerData();
    }

    addCustomer(){
      if(this.customerForm.invalid){
        return;
      }

      const {id, name} = this.customerForm.value;
      this.commonService.addCustomer(id,name);
      console.log('edit')
      this.customerData = this.commonService.getCustomerData();
      this.editCustomer = false;
      this.customerForm.patchValue({
        id: '',
        name: ''
      });
    }

    handleEdit(row: any) {
      this.editCustomer = true;
      this.commonService.deleteCustomer(row['CustomerID']);
      this.customerForm.patchValue({
        id: row?.CustomerID,
        name: row?.CustomerName
      });
    }
    
    handleDelete(row: any) {
      this.commonService.deleteCustomer(row['CustomerID']);
      this.customerData = this.commonService.getCustomerData();
    }
}

