import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewFeedback } from 'src/app/modules/hospital/model/view-feedback.model';
import { FeedbackService } from '../../hospital/services/feedback.service.service';
import {TokenStorageService} from "../../hospital/services/token-storage.service";
import {NewsFromBloodBank} from "../../hospital/model/news.model";
import {NewsService} from "../../hospital/services/news.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public feedbacks: ViewFeedback[] = [];
  public patientNameSurname: string = "";
  public news: NewsFromBloodBank[] = [];
  public dataSourceNewsFromBloodBank = new MatTableDataSource<NewsFromBloodBank>();
  public isNewsEmpty: boolean = false;
  public new: NewsFromBloodBank = new NewsFromBloodBank();

  constructor(private newsService: NewsService, private feedbackService: FeedbackService, private router: Router,private token: TokenStorageService) { }

  slides = [];

  ngOnInit(): void {
    console.log(this.token.getUser());
    this.feedbackService.getFeedback().subscribe(res => {
      this.feedbacks = res;
    })
    this.newsService.getNews().subscribe(res => {
      console.log("res:");
      console.log(res);
      this.news = res;
      this.dataSourceNewsFromBloodBank.data = res;
      if(this.news.length == 0){
        this.isNewsEmpty = true;
      }

      this.new = this.news[1];
      console.log("news:", this.news)
    })


  }
}
