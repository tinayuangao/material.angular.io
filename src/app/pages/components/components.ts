import { Component} from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: 'components.html',
  styleUrls: ['components.scss']
})
export class ComponentsPageComponent {
  componentItems = [
    {name: 'Buttons', src: 'Button'},
    {name: 'Cards', src: 'Card'},
    {name: 'Chips', src: 'Chip'},
    {name: 'Grid lists', src: 'Grid'},
    {name: 'Menu', src: 'Menu'},
    {name: 'Tooltip', src: 'Tooltip'},
    {name: 'Progress', src: 'Progress'},
  ]
}
