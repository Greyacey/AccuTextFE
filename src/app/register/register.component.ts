import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { AcctextService } from '../acctext.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _router: Router, private accutext: AcctextService) { }
  onSubmit(data)
    {
      console.warn(data)
      this._router.navigate(['login'])
    }

  ngOnInit(): void {
  }

}