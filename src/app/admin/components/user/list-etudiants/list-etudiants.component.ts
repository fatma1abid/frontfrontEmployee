import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-etudiants',
  templateUrl: './list-etudiants.component.html',
  styleUrls: ['./list-etudiants.component.scss']
})
export class ListEtudiantsComponent  implements OnInit{
  users!:any[]
  constructor(private userService:UserService ){
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      users =>{
        this.users = users;
      },
      error=>{}
    )
  }
  changerEtat(id:any,etat:String){
    this.userService.changerEtat(id,etat).subscribe(
      result=>{
        console.log(result);
      }
    )
  }

}
