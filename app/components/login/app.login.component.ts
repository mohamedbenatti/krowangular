import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/user.auth.service';

@Component({
    moduleId    : module.id,
    templateUrl : '../../templates/login/app.login.component.html',
    styleUrls   : [ '/app/assets/login.css' ]
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // reset login status
        // this.authenticationService.logout();
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(
                result => {
                    if (result === true) {
                        this.router.navigate(['/company/list']);
                    } else {
                        this.error = 'Email or password is incorrect';
                        this.loading = false;
                    }
                });
    }
}
