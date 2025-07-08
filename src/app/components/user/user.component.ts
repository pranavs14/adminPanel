import { Component} from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'] 
})
export class UserComponent {
    userForm : FormGroup;
    userError : string | null = null;
    userData : any = [];
    displayedColumns: string[] = ['User ID', 'User Name', 'delete'];
    editUser: boolean = false;

    constructor(private formBuilder: FormBuilder, private router: Router, private commonService: CommonService) {
      this.userForm = this.formBuilder.group({
        id: [''],
        name: [''],
      })
    }

    ngOnInit(): void {
      this.userData = this.commonService.getUserData();
    }

    addUser(){
      if(this.userForm.invalid){
        return;
      }

      const {id, name} = this.userForm.value;
      this.commonService.addUser(id,name);
      console.log('edit')
      this.userData = this.commonService.getUserData();
      this.editUser = false;
      this.userForm.patchValue({
        id: '',
        name: ''
      });
    }

    handleEdit(row: any) {
      this.editUser = true;
      this.commonService.deleteUser(row['UserID']);
      this.userForm.patchValue({
        id: row?.UserID,
        name: row?.UserName
      });
    }
    
    handleDelete(row: any) {
      this.commonService.deleteUser(row['UserID']);
      this.userData = this.commonService.getUserData();
    }
}

