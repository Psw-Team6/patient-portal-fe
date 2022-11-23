import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from '../model/feedback.model';
import { FeedbackService } from '../services/feedback.service.service';
import {TokenStorageService} from "../services/token-storage.service";

@Component({
  selector: 'app-create-feedback',
  templateUrl: './create-feedback.component.html',
  styleUrls: ['./create-feedback.component.css']
})
export class CreateFeedbackComponent implements OnInit {


  ngOnInit(): void {
  }
  public feedback: Feedback = new Feedback();

  constructor(private tokenStorageService: TokenStorageService, private feedbackService: FeedbackService, private router: Router) { }

  public createFeedback() {
    if (!this.isValidInput()){
      alert("Feedback cannot be empty.");
      return;
    }
    try {
      this.feedback.patientId = this.tokenStorageService.getUser().id;
      this.feedbackService.createFeedback(this.feedback).subscribe(res => {
      alert("Feedback sent for review.")
      this.router.navigate(['/home']);
    });
  } catch(error) {
    alert(error)
  }
}

  public printFeedback() {
    console.log(this.feedback);
  }

  private isValidInput(): boolean {
    return this.feedback.text != '';
  }

}
