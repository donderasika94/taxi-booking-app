import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DriverLoginComponent } from './driver-login.component';
import { DriverRegistrationComponent } from './driver-registration.component';
import { DriverHomeComponent } from './driver-home.component';
import { DriverWelcomeComponent } from './driver-welcome.component';
import { RouterModule } from '@angular/router';
import { DriverRoutes } from './driver.router';
import { DriverService } from './driver.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { DriverNotificationComponent } from './driver-notification.component';
import { DriverReviewsComponent } from './driver-reviews.component';
import { DriverRidesComponent } from './driver-rides.component';


@NgModule({
    declarations:[
        DriverLoginComponent,
        DriverRegistrationComponent,
        DriverHomeComponent,
        DriverWelcomeComponent,
        DriverNotificationComponent,
        DriverReviewsComponent,
        DriverRidesComponent

    ],
    imports:[
        FormsModule,
        BrowserModule,
        RouterModule.forChild(DriverRoutes),
        HttpClientModule
    ],
    exports:[
        DriverLoginComponent,
        DriverRegistrationComponent,
        DriverHomeComponent,
        DriverWelcomeComponent,
        DriverNotificationComponent,
        DriverReviewsComponent,
        DriverRidesComponent,
        RouterModule
        
    ],
    providers:[
        DriverService
    ]
})

export class DriverModule{

}