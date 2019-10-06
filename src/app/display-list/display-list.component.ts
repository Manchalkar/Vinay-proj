import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {

    //let elParent = this.imageLoader.nativeElement;
    const elExisting = event.target as HTMLElement;
    console.log(elExisting)

    if(elExisting.classList.contains('display-div')){
        this.router.navigate(['selected'])
    }
  }

}
