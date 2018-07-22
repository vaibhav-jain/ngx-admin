import {Component, OnDestroy, ViewChild} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {takeWhile} from 'rxjs/operators/takeWhile';
import {NgxXml2jsonService} from 'ngx-xml2json';

import { MENU_ITEMS } from "../pages-menu";

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnDestroy {

  private alive = true;
  fileNames: string[] = [];
  fileData: any[] = [];
  @ViewChild('form') form;

  lightCard: CardSettings = {
    title: 'Light',
    iconClass: 'nb-lightbulb',
    type: 'primary',
  };
  rollerShadesCard: CardSettings = {
    title: 'Roller Shades',
    iconClass: 'nb-roller-shades',
    type: 'success',
  };
  wirelessAudioCard: CardSettings = {
    title: 'Wireless Audio',
    iconClass: 'nb-audio',
    type: 'info',
  };
  coffeeMakerCard: CardSettings = {
    title: 'Coffee Maker',
    iconClass: 'nb-coffee-maker',
    type: 'warning',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.lightCard,
    this.rollerShadesCard,
    this.wirelessAudioCard,
    this.coffeeMakerCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.lightCard,
        type: 'warning',
      },
      {
        ...this.rollerShadesCard,
        type: 'primary',
      },
      {
        ...this.wirelessAudioCard,
        type: 'danger',
      },
      {
        ...this.coffeeMakerCard,
        type: 'secondary',
      },
    ],
  };

  constructor(private themeService: NbThemeService, private ngxXml2jsonService: NgxXml2jsonService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }

  fileChange(event) {
    let input = event.target;
    const parser = new DOMParser();

    for (let index = 0; index < input.files.length; index++) {
      let reader = new FileReader();
      reader.onload = () => {
        // this 'text' is the content of the file
        let text = reader.result;
        const xml = parser.parseFromString(text, 'text/xml');
        const obj = this.ngxXml2jsonService.xmlToJson(xml);
        let items = obj.root.data;
        if (!Array.isArray(items)) {
          items = [items];
        }
        for (let i=0; i < items.length; i++) {
          const data = items[i];
          delete data['#text'];
          data['file_name'] = input.files[index].name;
          this.fileData.push(data);
          console.log(data);
        }
      };
      this.fileNames.push(input.files[index].name);
      reader.readAsText(input.files[index]);
    }
  }

  clear() {
    this.form.nativeElement.reset()
    this.fileData = [];
    this.fileNames = [];
  }

  uploadFiles() {
    this.fileData.forEach(function (data, _) {
      let menu_item = {};
      menu_item['title'] = data.file_name;
      menu_item['icon'] = 'nb-locked';
      menu_item['children'] = [];
      menu_item['link'] = '/pages/dashboard/?file=' + data.file_name;
      const data_props = Object.keys(data);
      data_props.forEach(function (key, _) {
        if (key != 'file_name') {
          menu_item['children'].push({
            title: data[key],
            link: '/pages/dashboard',
            queryParams: {data: JSON.stringify(data)},
            data: data
          });
        }
      });
      console.log(data);
      MENU_ITEMS.push(menu_item)
    });
    this.fileData = [];
  }

}
