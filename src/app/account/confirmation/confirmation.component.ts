import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  id: string;
  constructor( 
    private route:ActivatedRoute,
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.accountService.activacion(this.id).subscribe(
      {
        next: (res) => {
          alert('Activación Completada')
          setTimeout(() =>
              { this.router.navigate(['/login'])
             },2000);
        } ,
        error: (error) => {
          //this.router.navigate(['/login'])
          console.log(error);
        }
      }
      
      
    );
  }

}
