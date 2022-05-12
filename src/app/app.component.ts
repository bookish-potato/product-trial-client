import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'product-trial-client';

  public nameAddInput = "";
  public nameQueryInput = "";

  public nameAddMessage: string | null = null;
  public nameQueryMessage: string | null = null;

  public constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    
  }

  public addName() {
    this.httpClient.post(`${environment.serverBaseUrl}/names/add`, { name: this.nameAddInput }).subscribe((res: any) => {
      this.nameAddMessage = res.message as string;
    });
  }

  public queryName() {
    this.httpClient.get(`${environment.serverBaseUrl}/names/` + this.nameQueryInput).subscribe((res: any) => {
      this.nameQueryMessage = res.message as string;
    });
  }
}
