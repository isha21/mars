import { Component, OnInit } from '@angular/core';
import { colonistService} from '../../services/colonist';
import { JobService} from '../../services/job';
import { FormControl, FormGroup} from '@angular/forms';
import { Job} from '../../models/job';

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

  jobs: Job[] = [];

   registerForm = new FormGroup({
      name: new FormControl('Default value'),
      age:  new FormControl(''),
      job_id: new FormControl(''),
   });

  constructor(
  private jobService: JobService,
   private colonistService: colonistService
  ){}

  async ngOnInit() {
    this.jobs = await this.jobService.getJobs();
  }

}





 
