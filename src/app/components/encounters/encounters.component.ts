import { Component, OnInit } from '@angular/core';
import { EncounterService} from '../../services/encounters';
import { Report} from '../../models/report';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styles: ['./encounters.component.scss'],
  providers: [
    EncounterService,
  ]
})
export class EncountersComponent implements OnInit {

    reports: Report[]

  constructor(private encounterService: EncounterService) { }

  
  
    async ngOnInit() {
      this.reports = await this.encounterService.getReport();
      
    }
  
    

}
