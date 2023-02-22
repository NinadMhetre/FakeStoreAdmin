import {OnInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { ProductSetupService } from 'src/app/shared/services/product-setup.service';
import { ProductElements } from 'src/app/shared/models/product-setup';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.scss']
})
export class ProductMasterComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'title', 'price', 'description', 'category', 'image', 'rating', 'options'];
  dataSource = new MatTableDataSource<ProductElements>;
  showList = true;
  showTable = false;
  revealClass = 'classHide';

  productData:any;
  categoryData:any;


  @ViewChild(MatPaginator) dataSourcePaginator: MatPaginator;
  
  constructor(private productSetupService:ProductSetupService) {}
  
  ngOnInit() {
    this.getListData();
    this.getCategoryData();
  }
  
  getListData()
  {
    this.showTable=false;
    this.productSetupService.getAllProducts().subscribe((data: ProductElements[])=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.dataSourcePaginator;
      this.showTable = true;
      this.revealClass = 'classShow';
    });
  }

  getCategoryData(){
    this.productSetupService.getAllCategories().subscribe(data=>{
      this.categoryData = data;
    });
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  createProduct(){
    this.showList = false;
    this.productData = {};
  }

  onSave(){
    this.showList = true;    
    this.getListData();
  }

  onCancel(){
    this.showList = true;
  }

  onDelete(rowData:any){
    Swal.fire({ title: 'Proceed to Delete?', text: rowData.title, showConfirmButton: true });
    this.productSetupService.deleteProduct(rowData.id).subscribe(data=>{
      Swal.fire({ title: 'Deleted Product !', showConfirmButton: true });
      this.getListData();
    });
  }

  onUpdate(rowData:any){
    this.productData = rowData;
    this.showList = false;
  }
  
}