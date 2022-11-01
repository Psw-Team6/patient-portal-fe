import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewFeedback } from 'src/app/modules/hospital/model/view-feedback.model';
import { FeedbackService } from '../../hospital/services/feedback.service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public feedbacks: ViewFeedback[] = [];
  public patientNameSurname: string = "";

  constructor(private feedbackService: FeedbackService, private router: Router) { }

  ngOnInit(): void {
    this.feedbackService.getFeedback().subscribe(res => {
      this.feedbacks = res;
    })
  }
}