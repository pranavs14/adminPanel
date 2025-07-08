import { Component} from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
    studentForm : FormGroup;
    studentError : string | null = null;
    studentData : any = [];
    displayedColumns: string[] = ['student ID', 'student Name', 'delete'];
    editStudent: boolean = false;

    constructor(private formBuilder: FormBuilder, private router: Router, private commonService: CommonService) {
      this.studentForm = this.formBuilder.group({
        id: [''],
        name: [''],
      })
    }

    ngOnInit(): void {
      this.studentData = this.commonService.getStudentData();
    }

    addStudent(){
      if(this.studentForm.invalid){
        return;
      }

      const {id, name} = this.studentForm.value;
      this.commonService.addStudent(id,name);
      console.log('edit')
      this.studentData = this.commonService.getStudentData();
      this.editStudent = false;
      this.studentForm.patchValue({
        id: '',
        name: ''
      });
    }

    handleEdit(row: any) {
      console.log('edit')
      this.editStudent = true;
      this.commonService.deleteStudent(row['StudentID']);
      this.studentForm.patchValue({
        id: row?.StudentID,
        name: row?.StudentName
      });
    }
    
    handleDelete(row: any) {
      this.commonService.deleteStudent(row['StudentID']);
      this.studentData = this.commonService.getStudentData();
    }
}

