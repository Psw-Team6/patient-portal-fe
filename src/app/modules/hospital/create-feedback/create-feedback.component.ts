import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from '../model/feedback.model';
import { FeedbackService } from '../services/feedback.service.service';

@Component({
  selector: 'app-create-feedback',
  templateUrl: './create-feedback.component.html',
  styleUrls: ['./create-feedback.component.css']
})
export class CreateFeedbackComponent implements OnInit {


  ngOnInit(): void {
  }
  public feedback: Feedback = new Feedback();

  constructor(private feedbackService: FeedbackService, private router: Router) { }

  public createFeedback() {
    if (!this.isValidInput()) return;
    this.feedbackService.createFeedback(this.feedback).subscribe(res => {
      this.router.navigate(['/home']);
    });
  }

  public printFeedback() {
    console.log(this.feedback);
  }

  private isValidInput(): boolean {
    return this.feedback?.text != '';
  }

}
