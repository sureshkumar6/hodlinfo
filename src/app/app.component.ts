import { Component, OnInit } from '@angular/core';
import { StatusService } from './shared/status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Hodlinfo';
  status = 'DOWN';

  constructor(private statusService: StatusService) {}

  ngOnInit(): void {
    this.statusService.getStatus().then((result: any) => {
      this.status = result.status;
    });
  }
}
