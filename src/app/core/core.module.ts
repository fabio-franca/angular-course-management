import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PaginaNaoEncontrada } from "./component/404/404.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        NavBarComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '**', component: PaginaNaoEncontrada
            }
        ])
    ],
    exports: [
        NavBarComponent
    ]
})
export class CoreModule {

}