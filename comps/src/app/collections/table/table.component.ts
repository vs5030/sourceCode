import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input('class') classnames = '';
  @Input() childData = [] as any;
  @Input() childHeaders = [] as any;
}
