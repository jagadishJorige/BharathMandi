import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiCommonService } from "../api-common.service";

@Component({
  selector: 'app-tablelayout',
  templateUrl: './tablelayout.component.html',
  styleUrls: ['./tablelayout.component.scss']
})
export class TablelayoutComponent implements OnInit{
  url: string = 'https://mocki.io/v1/072f4309-6b86-4ecc-b055-e16192d9f76a';
  plainHeaders: any = {};

  tableLoadData: any = [];
  selectedRecords: any;
  loading: boolean = false;
  currentPage: number = 1;

  // filters & pagination purpose
  filterCriteria: {} = {};
  tableLimit: number = 30; // default
  totalRecords: number = 0; // default

  constructor(private apiService: ApiCommonService) { }

  ngOnInit(): void {}

  getTableData=(event:any)=> {
    this.loading = true;
    if (event && (event.first || event.rows)) {
      this.currentPage = (event.first || 0) / event.rows + 1;
    }
    
    this.apiService.getList(this.url).subscribe((res: any)=> {
      this.tableLimit = res['limit'] || 10;
      this.totalRecords = res.posts.length || 0;
      if(res && res.posts && res.posts.length) {
        this.tableLoadData = res.posts;
        for(let i=0;i< this.tableLoadData.length;i++) {
          if(event) {
            this.tableLoadData[i]['serialNo'] = i + 1 + (this.currentPage - 1) * (event.rows);
          }
        }
      }
    }).add(() => {  this.loading = false; });

  }

  getSeverity(status: number) {
    switch (status) {
        case 0: return 'danger';
        case (1 || 2):  return 'warning';
        case (3 || 4): return 'info';
        case 5: return 'success';
        default: return "";
    }
}

}
