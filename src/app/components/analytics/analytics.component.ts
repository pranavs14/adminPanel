import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

import {
  Chart,
  registerables
} from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit, AfterViewInit {
  customerCount = 0;
  userCount = 0;
  studentCount = 0;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.customerCount = this.commonService.getCustomerData().length;
    this.userCount = this.commonService.getUserData().length;
    this.studentCount = this.commonService.getStudentData().length;
  }

  ngAfterViewInit(): void {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Customers', 'Users', 'Students'],
        datasets: [{
          label: 'Counts',
          data: [this.customerCount, this.userCount, this.studentCount],
          backgroundColor: ['#2196f3', '#4caf50', '#ff9800']
        }]
      },
    });
  }
}
