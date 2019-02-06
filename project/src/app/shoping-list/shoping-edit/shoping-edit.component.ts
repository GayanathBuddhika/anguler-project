import { ShopingListService } from './../shoping_list.service';
import { Ingredient } from './../../shaird/ingredient.model';
import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  @ViewChild('nameInput') nameRef : ElementRef;
  @ViewChild('amountInput') amountRef : ElementRef;
  constructor(private shopingListService : ShopingListService) { }

  ngOnInit() {

  }
  addIndredient(){
    const ingName = this.nameRef.nativeElement.value;
    console.log(ingName);
    const ingamount = this.amountRef.nativeElement.value;
    const newIngerdient = new Ingredient(ingName,ingamount);
    console.log(newIngerdient);
    this.shopingListService.addIngerdient(newIngerdient);
  
  }

}
