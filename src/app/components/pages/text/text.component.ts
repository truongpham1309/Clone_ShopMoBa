import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {
  
}
