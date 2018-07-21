/**
 *
 */

import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth/services/auth.service';

export declare class DaLogoutComponent implements OnInit {
    protected service: NbAuthService;
    protected options: {};
    protected router: Router;
    redirectDelay: number;
    strategy: string;
    constructor(service: NbAuthService, options: {}, router: Router);
    ngOnInit(): void;
    logout(strategy: string): void;
    getConfigValue(key: string): any;
}
