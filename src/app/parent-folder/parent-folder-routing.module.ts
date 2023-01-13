import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
    {
        path: '',
        component: ParentComponent,
        children: [
            {
                path: 'child/:id/:fio',
                component: ChildComponent
            }
        ]

    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ParentFolderRoutingModule { }
