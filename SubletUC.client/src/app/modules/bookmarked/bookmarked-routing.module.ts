import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkedComponent } from './bookmarked/bookmarked.component';

const routes: Routes = [
    { path: '', title: 'bookmark', component: BookmarkedComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookmarkedRoutingModule { }