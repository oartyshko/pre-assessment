import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { findNextPrimeFibonacci } from './number-search.utils';

@Component({
  selector: 'app-number-search',
  templateUrl: './number-search.component.html',
  styleUrls: ['./number-search.component.css']
})
export class NumberSearchComponent {
  userNumber: number;
  nextPrimeFibonacciNumber: number;

  @ViewChild('searchForm') searchForm: NgForm;

  onSubmit() {
    if (this.searchForm.valid) {
      this.nextPrimeFibonacciNumber = findNextPrimeFibonacci(this.userNumber);
    }
  }

  onChange() {
    this.nextPrimeFibonacciNumber = 0;
  }
}
