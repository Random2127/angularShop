import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { PicturesComponent } from './pictures/pictures.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from "./banner/banner.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, CategoriesComponent, PicturesComponent, FooterComponent, BannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shop';
}

