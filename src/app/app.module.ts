// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes'; // app.routes.ts からのインポート

@NgModule({
  declarations: [
    // AppComponentの宣言を削除
    // 他のコンポーネントをここに追加することもできます
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    // 他のモジュール...
  ],
  providers: [],
  // bootstrapプロパティを削除します
})
export class AppModule { }
