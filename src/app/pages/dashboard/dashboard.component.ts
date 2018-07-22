import {Component, OnDestroy} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {takeWhile} from 'rxjs/operators/takeWhile';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from "../../services/user.service";

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {

  private alive = true;
  file_data: any = {};
  parsed_data: any = {};
  api_data: any = {};

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

  constructor(
    private themeService: NbThemeService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
  ) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
      });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.file_data = queryParams['data'];
      this.parsed_data = JSON.parse(queryParams['data'])
    });
    this.userService.getUser(this.parsed_data.username).subscribe((data: any) => {
      this.api_data = data;
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }

  goToIndex() {
    this.router.navigate(['/pages/index']);
  }

  postData() {
    this.userService.updateUser(this.parsed_data).subscribe((data: any) => {
      this.api_data = data;
    });
  }
}
