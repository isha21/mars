import { Component, OnInit } from '@angular/core';
import { colonistService} from '../../services/colonist';
import { JobService} from '../../services/job';
import { Job} from '../../models/job';
import { FormControl, FormGroup, Validators, ValidatorFn} from '@angular/forms';
import { NewColonist} from '../../models/colonist';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
  providers: [
    colonistService,
    JobService
  ]
})
export class RegisterComponent implements OnInit {

  jobs: Job[];

   registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(2)]),
      age:  new FormControl('', [Validators.required, Validators.max(100), Validators.min(10)]),
      job_id: new FormControl('',[Validators.required, ])
      
   });




  constructor(
  private jobService: JobService,
  private colonistService: colonistService,
  private router: Router,

  ){}

  async ngOnInit() {
    this.jobs = await this.jobService.getJobs();
  }




async registerColonist(){
  const newColonist: NewColonist = {
    name: this.registerForm.get('name').value,
    age: this.registerForm.get('age').value,
    job_id:this.registerForm.get('job_id').value
  };


  const colonist = await this.colonistService.registerColonist(newColonist);
   if (this.registerForm.status === 'VALID'){this.router.navigate(['/encounters']);}
}

private noNumbers(validNameRegex): ValidatorFn{
  return (control): { [key: string]: any} => {
  const forbiddenName = validNameRegex.test(control.value);
  return forbiddenName ? {'forbiddenName' : {value: control.value } } : null;
  }

  }

}
 
