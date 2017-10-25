import { Routes } from "@angular/router";
// importacion de componentes creados y que se utilizaran en el app
import { HomeComponent } from "./home/home.component";
export const ROUTES: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    }/*,
    {
        path: 'signup', component: SignUpComponent
    },
    {
        path: 'chat-container', component: ChatContainerComponent,
            children:[
                {
                    path: 'conversations', component: ConversationsComponent
                },
                {
                    path: 'chat', component: ChatComponent
                },
                {
                    path: 'new-message', component: NewMessageComponent
                }               
            ]
    },
    {
        path: '**', component: ErrorHandleComponent
    }*/
]