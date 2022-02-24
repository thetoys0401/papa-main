import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService } from "src/app/service/book.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-book',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class NewBookComponent implements OnInit {
  bookForm!: FormGroup;
  constructor(private ps: BookService, private router:Router) { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      book_id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      publischer: new FormControl(),
      img: new FormControl()
    });
  }

  addBook(){
    let book = {
      book_id: this.bookForm.value.book_id,
      name: this.bookForm.value.name,
      price: this.bookForm.value.price,
      publischer: this.bookForm.value.publischer,
      img: this.bookForm.value.img,
    };
    this.ps.addBook(book).subscribe(res=>{
      console.log(res);
      this.router.navigate(["/book"]);
    });
  }

}
