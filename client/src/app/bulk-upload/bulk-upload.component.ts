import { Component, OnInit, Inject } from '@angular/core';
import { AutomobileService } from '../automobile.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { async } from '@angular/core/testing';
import { MatTableDataSource } from '@angular/material/table';


export interface spareElement {
  // part_photo: string;
  part_number: string;
  oes_oem: string;
  part_name: string;
}

@Component({
  selector: 'app-bulk-upload',
  templateUrl: './bulk-upload.component.html',
  styleUrls: ['./bulk-upload.component.css']
})
export class BulkUploadComponent implements OnInit {
  display: boolean = false;
  bulkUploadForm: FormGroup;
  fileResponse: any;
  displayedColumns: string[] = ['PartNumber', 'OESOEM', 'PartName'];
  dataSource = [];
  public templateData: any;

  constructor(private auto_servce: AutomobileService,
    private _FormBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
this.listSpare()

    this.bulkUploadForm = this._FormBuilder.group({
      xls_file: new FormControl({ value: null, disabled: false },
        [Validators.required]),
    });
  }

listSpare(){
  this.auto_servce.listSpare().subscribe(res => {
    if (res['code'] == 200) {

      this.templateData =new MatTableDataSource(res['data']); 
    }
  })
}
  showDialog() {
    this.display = true;

  }

  onSelectFile(event) {
    this.fileResponse = event.target.files[0]
    console.log("this.fileResponse", this.fileResponse)
  }
  bulkUpload() {
    if ((this.bulkUploadForm.value.xls_file != null || undefined || '')) {
      console.log('fileResponse', this.fileResponse);
      const formData = new FormData();
      formData.append('xlsfile', this.fileResponse);
      this.auto_servce.bulkUpload(formData).subscribe(res => {
        if (res['code'] == 200) {
          alert('BuLK UPLOAD SUCCESS');
          this.display = false
          this.listSpare()
        } else {
          alert('ERROR')
        }
      })
    }
  }
}


