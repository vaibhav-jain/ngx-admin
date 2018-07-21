import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NB_AUTH_OPTIONS } from '@nebular/auth/auth.options';
import { getDeepFromObject } from '@nebular/auth/helpers';
import { NbAuthService } from '@nebular/auth/services/auth.service';

var DaLogoutComponent = /** @class */ (function () {
    function DaLogoutComponent(service, options, router) {
        if (options === void 0) { options = {}; }
        this.service = service;
        this.options = options;
        this.router = router;
        this.redirectDelay = 0;
        this.strategy = '';
        this.redirectDelay = this.getConfigValue('forms.logout.redirectDelay');
        this.strategy = this.getConfigValue('forms.logout.strategy');
    }
    DaLogoutComponent.prototype.ngOnInit = function () {
        this.logout(this.strategy);
    };
    DaLogoutComponent.prototype.logout = function (strategy) {
        var _this = this;
        this.service.logout(strategy).subscribe(function (result) {
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
        });
    };
    DaLogoutComponent.prototype.getConfigValue = function (key) {
        return getDeepFromObject(this.options, key, null);
    };
    DaLogoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'da-logout',
                    template: "\n    <div>Logging out, please wait...</div>\n  ",
                },] },
    ];
    /** @nocollapse */
    DaLogoutComponent.ctorParameters = function () { return [
        { type: NbAuthService, },
        { type: undefined, decorators: [{ type: Inject, args: [NB_AUTH_OPTIONS,] },] },
        { type: Router, },
    ]; };
    return DaLogoutComponent;
}());
export { DaLogoutComponent };
//# sourceMappingURL=logout.component.js.map
