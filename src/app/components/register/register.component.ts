import { Component, OnInit } from '@angular/core';
import { colonistService} from '../../services/colonist';
import { JobService} from '../../services/job';

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

  

  constructor(
  private jobService: JobService,
   private colonistService: colonistService
  ){}

  async ngOnInit() {  

    const data ={
      name: 'Hello there',
      age: '50',
      job_id:'2',
    };

    const newColonist = await this.colonistService.registerColonist(data);
    console.log(newColonist);

    const jobs = await this.jobService.getJobs();
    console.log(jobs);
  }

}
