/**
 *
 */

import { OnDestroy } from '@angular/core';
import { NbAuthService } from '@nebular/auth/services/auth.service';

export declare class DaAuthComponent implements OnDestroy {
    protected auth: NbAuthService;
    private alive;
    subscription: any;
    authenticated: boolean;
    token: string;
    constructor(auth: NbAuthService);
    ngOnDestroy(): void;
}
