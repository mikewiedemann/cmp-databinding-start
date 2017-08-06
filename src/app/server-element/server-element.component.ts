import { Component, OnInit, Input, ViewEncapsulation,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ContentChild
 } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // None, ...
})
export class ServerElementComponent implements
OnInit,
OnChanges,
AfterViewInit,
AfterContentInit,
AfterContentChecked,
OnDestroy {
  @Input() element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paraGraph: ElementRef;

  constructor() {
    console.log('construcor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Text Content of Paragraph: ' + this.paraGraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanegd called');
    console.log(changes);
  }

  ngOnCheck() {
    console.log('ngOnCheck called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log(this.header.nativeElement.textContent);

  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log('Text Content of Paragraph: ' + this.paraGraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngViewInit() {
    console.log('ngViewChecked called');
  }

  ngViewChecked() {
    console.log('ngViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
