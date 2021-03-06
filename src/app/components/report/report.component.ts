import { Component, OnInit } from '@angular/core';
import { AlienService} from '../../services/alien';
import { EncounterService} from '../../services/encounters';
import { colonistService} from '../../services/colonist';
import { Router} from '@angular/router';
import {Alien} from '../../models/alien';
import {NewReport} from '../../models/report';
import { FormControl, FormGroup, Validators, ValidatorFn} from '@angular/forms';



@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styles: ['./report.component.scss'],
  providers: [
    AlienService, EncounterService, colonistService
  ]
})
export class ReportComponent implements OnInit {

 public aliens: Alien[];
 public date;

 reportForm = new FormGroup({
  description: new FormControl('', [Validators.required, Validators.maxLength(5000), Validators.minLength(10)]),
  alien_id: new FormControl('',[])
  
});
 
 constructor(private alienService: AlienService, private encounterService:EncounterService, 
  private router:Router) { }

  
  async ngOnInit() {  
    
       
        this.aliens = await this.alienService.getAliens();
        this.date = new Date().toISOString().slice(0,10);
        
    
      }

 async reportEncounters(){
  const newReport: NewReport = {
    atype : this.reportForm.get('alien_id').value,
    date : this.date,
    action : this.reportForm.get('description').value,
    colonist_id :'5'
  }

 await this.encounterService.newEncounter(newReport);
       this.router.navigate(['encounters']);
      
  
 }
 
 
}
