import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from "src/app/service/book.service";

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

    constructor(private ps: BookService, private router: Router) { }
    books: any;
    ngOnInit(): void {
        this.ps.getBooks().subscribe((res: any) => {
            this.books = res.data;

            
        });

    }

    deleteBook(id: any) {
        if (confirm("Confirm deletion?")) {
            this.ps.deleteBook(id).subscribe((res) => {
                console.log(res);
                this.router.navigateByUrl('/', { skipLocationChange: true })
                    .then(() => this.router.navigate([`/book`]));
            });
        }
    }

}
