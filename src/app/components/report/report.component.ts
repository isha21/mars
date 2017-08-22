import { Component, OnInit } from '@angular/core';
import { AlienService} from '../../services/alien';
import { EncounterService} from '../../services/encounters';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styles: [],
  providers: [
    AlienService, EncounterService
  ]
})
export class ReportComponent implements OnInit {

  constructor(private alienService: AlienService, private encounterService:EncounterService) { }

  // ngOnInit() {
  //   this.alienService.getAliens().then(response => {
  //     console.log(response);
  //   });
  // }

  // async ngOnInit() {
  //   const aliens = await this.alienService.getAliens();
  //   console.log(aliens);
  // }
  async ngOnInit() {  
    
        const data ={
          action: '3',
          date: '2016-11-18',
          atype:'2',
          colonist_id:'8'
        }
    
        const newReport = await this.encounterService.newEncounter(data);
        const aliens = await this.alienService.getAliens();
        console.log(aliens);
        console.log(data);
    
      }

}
