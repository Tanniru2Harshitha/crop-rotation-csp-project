import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  videoSource: string;

  constructor() {
    // Set the video source dynamically here
    this.videoSource = '../../assets/video.mp4'; // Replace with your video file path or URL
  }
}