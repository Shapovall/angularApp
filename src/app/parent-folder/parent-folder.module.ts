import { NgModule } from "@angular/core";
import { ChildComponent } from "./child/child.component";
import { ParentFolderRoutingModule } from "./parent-folder-routing.module";
import { ParentComponent } from "./parent/parent.component";
import { SecondChildComponent } from "./second-child/second-child.component";

@NgModule({
    declarations: [
        ParentComponent,
        ChildComponent,
        SecondChildComponent
    ],
    imports: [
        ParentFolderRoutingModule,
    ],
    providers: [],
    exports: [ParentComponent]
})
export class ParentFolderModule { }