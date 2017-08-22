import { Component, OnInit } from '@angular/core';
import { ReportService} from '../../services/encounters';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.css']
})
export class EncounterComponent implements OnInit {

  constructor(reportService: ReportService) { }

  ngOnInit() {
  }

}
