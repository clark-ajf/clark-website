import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
MatIconModule, MatListModule, MatLineModule, MatTabsModule, MatCardModule, MatChipsModule, MatExpansionModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { RecommendationsComponent } from './pages/recommendations/recommendations.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ContactmeComponent } from './pages/contactme/contactme.component';
import { EducationComponent } from './pages/education/education.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'aboutme', component: AboutmeComponent},
  {path: 'experiences', component: ExperiencesComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'education', component: EducationComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'recommendations', component: RecommendationsComponent},
  {path: 'blogs', component: BlogsComponent},
  {path: 'contactme', component: ContactmeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperiencesComponent,
    AboutmeComponent,
    SkillsComponent,
    ProjectsComponent,
    RecommendationsComponent,
    BlogsComponent,
    ContactmeComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatLineModule,
    MatTabsModule,
    MatCardModule,
    MatChipsModule,
    MatExpansionModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
