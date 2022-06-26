import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './sections/about/about.component';
import { ContactComponent } from './sections/contact/contact.component';
import { LandingComponent } from './sections/landing/landing.component';
import { MySkillsComponent } from './sections/my-skills/my-skills.component';
import { PagenotfoundComponent } from './sections/pagenotfound/pagenotfound.component';
import { ProjectsComponent } from './sections/projects/projects.component';

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "about", component: AboutComponent },
  { path: "skills", component: MySkillsComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "contact", component: ContactComponent },
  {path: "**", pathMatch: 'full', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,   {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
