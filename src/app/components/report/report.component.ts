import { Component, OnInit } from '@angular/core';
import { AlienService} from '../../services/alien';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(alienService: AlienService) { }

  ngOnInit() {
  }

}
