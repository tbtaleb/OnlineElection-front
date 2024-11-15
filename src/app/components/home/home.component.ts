import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { CandidatDivComponent } from "../candidat-div/candidat-div.component";
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChartModule, CandidatDivComponent,AnimateOnScrollModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  styles: [
    `
        :host {
            @keyframes slidedown-icon {
                0% {
                    transform: translateY(0);
                }

                50% {
                    transform: translateY(20px);
                }

                100% {
                    transform: translateY(0);
                }
            }

            .slidedown-icon {
                animation: slidedown-icon;
                animation-duration: 3s;
                animation-iteration-count: infinite;
            }

            .box {
                background-image: radial-gradient(var(--primary-300), var(--primary-600));
                border-radius: 50% !important;
                color: var(--primary-color-text);
            }
        }
    `
]
})
export class HomeComponent implements OnInit {
  data: any;
  options: any;

  ngOnInit() {
    // Define the chart data
    this.data = {
      labels: ['taleb', 'janbou', 'gzeza', 'ayar', 'eyaaa'],
      datasets: [
        {
          data: [11, 16, 7, 3, 14],
          backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#36A2EB', '#9966FF'],
          hoverBackgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#36A2EB', '#9966FF'],
        },
      ],
    }}

}
