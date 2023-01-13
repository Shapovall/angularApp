import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActiveChartComponent } from "./active-chart/active-chart.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SellingChartComponent } from "./selling-chart/selling-chart.component";

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'active-chart/:id',
                component: ActiveChartComponent
            },
            {
                path: 'selling-chart/:id',
                component: SellingChartComponent
            }
        ]

    },
];

@NgModule({
    declarations: [
        DashboardComponent,
        ActiveChartComponent,
        SellingChartComponent
    ],
    imports: [
        RouterModule.forChild(routes),
    ],
    providers: [],
    exports: [DashboardComponent]
})
export class FullDashboardModule { }