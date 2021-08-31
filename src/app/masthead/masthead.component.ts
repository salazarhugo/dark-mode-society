import {Component, HostListener, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {ThemeService} from "../services/theme.service";
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.sass']
})
export class MastheadComponent implements OnInit {

  public hideFloatingAccount: boolean = true;
  isDarkTheme: Observable<boolean> | undefined
  prevScrollpos = window.pageYOffset
  user$: Observable<any> | undefined

  constructor(
    public auth: AngularFireAuth,
    // public authService: AuthService,
    private router: Router,
    public themeService: ThemeService,
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
    // this.marketStatus = this.iexService.usMarketStatus()
    // this.marketStatus.subscribe(res => console.log(res.openTime))
  }

  toggleDarkTheme(checked: boolean) {
    // this.themeService.updateTheme(checked)
  }

  toggleFloatingAccount() {
    // this.hideFloatingAccount = !this.hideFloatingAccount;
  }

  tryLogout() {
    // this.authService.logout().then(res => {
    //   this.router.navigate(['../']);
    // })
  }

  toggleSideNav() {
    // this.sidenavService.toggle()
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    this.prevScrollpos = window.pageYOffset
  }

}
