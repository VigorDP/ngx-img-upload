import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { ImgUploadComponent } from "./component";

@NgModule({
  imports: [NgZorroAntdModule, CommonModule, FormsModule],
  declarations: [ImgUploadComponent],
  exports: [ImgUploadComponent]
})
export class NgxImgUploadModule {}
