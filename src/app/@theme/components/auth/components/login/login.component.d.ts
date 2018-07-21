import { Router } from '@angular/router';
import { NbAuthSocialLink } from '@nebular/auth/auth.options';
import { NbAuthService } from '@nebular/auth/services/auth.service';

export declare class DaLoginComponent {
    protected service: NbAuthService;
    protected options: {};
    protected router: Router;
    redirectDelay: number;
    showMessages: any;
    strategy: string;
    errors: string[];
    messages: string[];
    user: any;
    submitted: boolean;
    socialLinks: NbAuthSocialLink[];
    constructor(service: NbAuthService, options: {}, router: Router);
    login(): void;
    getConfigValue(key: string): any;
}
