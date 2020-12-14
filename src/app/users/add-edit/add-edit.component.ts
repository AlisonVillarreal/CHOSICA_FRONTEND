
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Rol } from 'src/app/models/rol';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  form: FormGroup;
  id: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;
  roles: Rol [];
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {

    this.listar_roles();

    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    const passwordValidators = [Validators.minLength(6)];

    if (this.isAddMode) {
        passwordValidators.push(Validators.required);
      }
      this.form = this.formBuilder.group({
        nombre: ['', Validators.required],
        usuario: ['', Validators.required],
        clave: ['', [Validators.required, Validators.minLength(6)]],
        id_rol: ['', Validators.required]
      });

      if (!this.isAddMode) {
        this.accountService.getById(parseInt(this.id))
        .pipe(first())
        .subscribe(res => this.form.patchValue(res));
      }
      }
    get f() {return this.form.controls;}

    listar_roles(){
      this.accountService.getRoles().subscribe(
        roles => {
          this.roles = roles['CUR_ROLES'];
        },
        error => {
          console.log(error);
        }
      )
    }
    onSubmit() {
      this.submitted = true;


      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      this.loading = true;
      if (this.isAddMode) {
          this.RegUsuario();
      } else {
          this.updateUsuario();
      }
  } 
  private RegUsuario() {
    
    this.accountService.registro(this.form.value)
        .pipe(first())
        .subscribe({
            next: () => {
                this.router.navigate(['../'], { relativeTo: this.route });
            },
            error: error => {
                this.loading = false;
            }
        });
  }
  private updateUsuario() {
    this.accountService.updUsuario(this.id, this.form.value)
        .pipe(first())
        .subscribe({
            next: () => {
                this.router.navigate(['../../'], { relativeTo: this.route });
            },
            error: error => {
                this.loading = false;
                console.log(error);
            }
        });
}

}
