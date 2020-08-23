import { Security } from './../../../utils/security.util';
import { User } from './../../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public user: User
  
  constructor(private router: Router) { }

  

  ngOnInit(): void {
    this.user = Security.getUser()
    //aqui ele vai ler do localStorage (desencriptar) gerar um json e retornar o user pra "nois"
  }

  logout(){
    Security.clear()
    this.router.navigate(['/login'])
  }

}
