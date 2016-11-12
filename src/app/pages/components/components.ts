import {Component} from '@angular/core';
import {MdIconRegistry} from '@angular/material';

export class ComponentGroup {
  name: string;
  list: ComponentItem[];

  constructor(name: string, list: ComponentItem[]) {
    this.name = name;
    this.list = list;
  }
}
export class ComponentItem {
  name: string;
  src: string;
  link: string;

  constructor(name: string, src?: string, link?: string) {
    this.name = name;
    this.src = src ? src : name;
    this.link = link ? link : this.src;
  }

  get routerLink() {
    return '../component/' + this.link;
  }

  get imageSrc() {
    return `../../../assets/img/components/${this.src}.svg`;
  }
}

@Component({
  selector: 'app-components',
  templateUrl: 'components.html',
  styleUrls: ['components.scss'],
  viewProviders: [MdIconRegistry],
})
export class ComponentsPageComponent {
  componentGroups: ComponentGroup[] = [
    new ComponentGroup('Form Controls', [
      new ComponentItem('Buttons', 'Button'),
      new ComponentItem('Button-Toggle', 'ButtonToggle'),
      new ComponentItem('Chips', 'Chip'),
    ]),
    new ComponentGroup('Layout Components', [
      new ComponentItem('Cards', 'Card'),
      new ComponentItem('Grid lists', 'Grid'),
    ]),
    new ComponentGroup('Pop-up and Notifications', [
      new ComponentItem('Tooltip'),
      new ComponentItem('Menu'),
    ]),
    new ComponentGroup('Miscellaneous', [
      new ComponentItem('Progress'),
    ]),
  ]

  gridMode: boolean = true;

  get viewIcon() : string {
    return this.gridMode ? 'lists' : 'apps';
  }

  switchViewMode() {
    this.gridMode = !this.gridMode;
  }
}
