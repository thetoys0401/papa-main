import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService } from "src/app/service/book.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-edit-book',
    templateUrl: './editbook.component.html',
    styleUrls: ['./editbook.component.css']
})
export class EditBookComponent implements OnInit {
    id: any;
    bookForm!: FormGroup;
    currentBook: any;
    constructor(private ps: BookService, private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.bookForm = new FormGroup({
            name: new FormControl(),
            price: new FormControl(),
            publischer: new FormControl(),
            img: new FormControl()
        });
        this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
        });
        this.ps.getBookById(this.id).subscribe((res) => {
            this.currentBook = res.data;
            this.bookForm.controls['name'].setValue(this.currentBook.name);
            this.bookForm.controls['price'].setValue(this.currentBook.price);
            this.bookForm.controls['publischer'].setValue(this.currentBook.publischer);
            this.bookForm.controls['img'].setValue(this.currentBook.img);
        });
    }

    updateBook() {
        let book = {
            name: this.bookForm.value.name,
            price: this.bookForm.value.price,
            publischer: this.bookForm.value.publischer,
            img: this.bookForm.value.img
        };
        this.ps.updateBook(this.id, book).subscribe(res => {
            console.log(res);
            this.router.navigate(["/book"]);
        });
    }
}
