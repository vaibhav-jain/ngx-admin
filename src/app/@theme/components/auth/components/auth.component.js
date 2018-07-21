import { Component } from '@angular/core';
import { NbAuthService } from '@nebular/auth/services/auth.service';
import { takeWhile } from 'rxjs/operators';

var DaAuthComponent = /** @class */ (function () {
    // showcase of how to use the onAuthenticationChange method
    function DaAuthComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.alive = true;
        this.authenticated = false;
        this.token = '';
        this.subscription = auth.onAuthenticationChange()
            .pipe(takeWhile(function () { return _this.alive; }))
            .subscribe(function (authenticated) {
            _this.authenticated = authenticated;
        });
    }
    DaAuthComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    DaAuthComponent.decorators = [
        { type: Component, args: [{
                    selector: 'da-auth',
                    styles: [":host /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column{padding:2.5rem}:host /deep/ nb-card{height:calc(100vh - 2 * 2.5rem)}:host /deep/ nb-card{margin:0}:host /deep/ .flex-centered{margin:auto}:host /deep/ nb-card-body{display:flex}@media (max-width: 550px){:host /deep/ /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column{padding:0}:host /deep/ nb-card{border-radius:0;height:100vh}} "],
                    template: "\n    <nb-layout>\n      <nb-layout-column>\n        <nb-card>\n          <nb-card-body>\n            <div class=\"flex-centered col-xl-4 col-lg-6 col-md-8 col-sm-12\">\n              <router-outlet></router-outlet>\n            </div>\n          </nb-card-body>\n        </nb-card>\n      </nb-layout-column>\n    </nb-layout>\n  ",
                },] },
    ];
    /** @nocollapse */
    DaAuthComponent.ctorParameters = function () { return [
        { type: NbAuthService, },
    ]; };
    return DaAuthComponent;
}());
export { DaAuthComponent };
//# sourceMappingURL=auth.component.js.map
