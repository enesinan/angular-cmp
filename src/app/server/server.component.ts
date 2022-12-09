import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ServerComponent implements
  OnInit,
  OnDestroy,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('header', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) parapgraph: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
  }
  ngDoCheck(){
  }
  ngAfterContentInit() {
    console.log(this.parapgraph.nativeElement.textContent);
  }
  ngAfterContentChecked() {
  }
  ngAfterViewInit() {
    console.log(this.header.nativeElement.textContent)

  }
  ngAfterViewChecked() {
  }
  ngOnDestroy() {
  }

}
