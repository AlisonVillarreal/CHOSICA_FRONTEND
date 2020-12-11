import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Persona } from 'src/app/models/persona';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted= false;

 
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService

  ) { }

  //Validaciones
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id_tipodoc: ['', Validators.required],
      nombres: ['', Validators.required],
      apepat: ['', Validators.required],
      apemat: ['', Validators.required],
      numero_doc: ['', Validators.required],
      fec_nac: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      clave: ['', [Validators.required, Validators.minLength(6)]]
      });
  }


  get f() { return this.form.controls; }

  onSubmit(){
    this.submitted = true;
  
    if (this.form.invalid){
      return;
    }
    //this.form.patchValue ({
    //  fec_nac: formato(this.form.get('fec_nac').value)
    //});
    this.loading = true;    
    this.accountService.registrosol(this.form.value)
    .pipe(first())
    .subscribe({
      next: () => {
        this.router.navigate(['../login'], {relativeTo:this.route})
      },
    error: error => {
      console.log(error);
      this.loading = false;
    }
    
    });
  }
  
}

function formato(texto: string){
  return texto.split('-').reverse().join('/');
}
