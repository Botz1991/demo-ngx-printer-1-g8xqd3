import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxPrinterModule } from "ngx-printer";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxPrinterModule.forRoot({
      printOpenWindow: false,
      renderClass: "custom-print",
      printPreviewOnly: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
