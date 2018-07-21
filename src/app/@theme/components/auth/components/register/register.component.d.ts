import { Router } from '@angular/router';
import { NbAuthSocialLink } from '@nebular/auth/auth.options';
import { NbAuthService } from '@nebular/auth/services/auth.service';

export declare class DaRegisterComponent {
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
    socialLinks: NbAuthSocialLink[];
    constructor(service: NbAuthService, options: {}, router: Router);
    register(): void;
    getConfigValue(key: string): any;
}
