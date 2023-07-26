import { MessageService } from './messages/message.service';
import { Component } from '@angular/core';

import { AuthService } from './user/auth.service';
import { slideInAnimation, zoomInAnimation } from './app.animation';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, Event } from '@angular/router';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation, zoomInAnimation]
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
  isLoading: boolean = true

  constructor(private authService: AuthService, private router: Router, public messageService: MessageService){
    this.router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent)
    })
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart){
      this.isLoading = true
    }
    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError)
      this.isLoading = false
  }
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  logOut(): void {
    this.authService.logout();
    console.log('Log out');
  }

  message(){
    if (!this.messageService.isDisplayed){
      this.messageService.isDisplayed = true
      this.router.navigate([{outlets: {popup: ['messages']}}])
    }else{
      this.messageService.isDisplayed = false
      this.router.navigate([{outlets: {popup: null}}])
    }
  }

}
