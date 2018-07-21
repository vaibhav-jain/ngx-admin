import { Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth/services/auth.service';

export declare class DaResetPasswordComponent {
    protected service: NbAuthService;
    protected options: {};
    protected router: Router;
    redirectDelay: number;
    showMessages: any;
    strategy: string;
    submitted: boolean;
    errors: string[];
    messages: string[];
    user: any;
    constructor(service: NbAuthService, options: {}, router: Router);
    resetPass(): void;
    getConfigValue(key: string): any;
}
