import { NgModule } from "@angular/core";
import { ChildComponent } from "./child/child.component";
import { ParentFolderRoutingModule } from "./parent-folder-routing.module";
import { ParentComponent } from "./parent/parent.component";

@NgModule({
    declarations: [
        ParentComponent,
        ChildComponent
    ],
    imports: [
        ParentFolderRoutingModule,
    ],
    providers: [],
    exports: [ParentComponent]
})
export class ParentFolderModule { }