import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService, DialogService } from 'primeng/api';
import { ProfileService } from '../../../shared/profile/profile.service';
import { OrderVM } from './order-vm';
import { CardThemeVM } from './сard-theme-vm';

@Component({
  selector: 'app-profile-finished-orders',
  templateUrl: './profile-finished-orders.component.html',
  styleUrls: ['./profile-finished-orders.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileFinishedOrdersComponent implements OnInit {
  loading: boolean;
  orders: OrderVM[];
  years: string[];
  themes: CardThemeVM[];
  currentYear: string;

  constructor(
    private formBuilder: FormBuilder,
    private msg: MessageService,
    private profileService: ProfileService,
    private dialogService: DialogService
  ) {
    this.reload();
  }

  reload() {
    this.loading = true;

    let year = this.years ? (this.years.includes(this.currentYear) ? this.currentYear : undefined) : undefined;
    let themes = this.themes ? this.themes.filter(t => t.isSelected).map(t => t.id) : undefined;
    this.profileService.getFinishedOrders(year, themes).subscribe((data) => {
      this.loading = false;

      this.orders = data.orders.map(t => new OrderVM(this.profileService, this.dialogService, t));

      this.years = data.years;

      let oldThemes = this.themes;
      this.themes = data.themes && data.themes.map(t => new CardThemeVM(t));
      if (oldThemes && this.themes) {
        this.themes.forEach(theme => {
          let oldTheme = oldThemes.find(t => t.id == theme.id);
          if (oldTheme) {
            theme.isSelected = oldTheme.isSelected;
          }
        });
      }
    });
  }

  setYear(year: string) {
    this.currentYear = year;
    this.reload();
  }

  setTheme(theme: CardThemeVM) {
    if (theme) {
      theme.isSelected = !theme.isSelected;
    } else {
      this.themes.forEach(theme => theme.isSelected = false);
    }
    this.reload();
  }

  get allThemesDeselected() {
    return this.themes.every(theme => !theme.isSelected);
  }

  ngOnInit() {
  }
}