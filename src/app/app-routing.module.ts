import { WeatherComponent } from './components/weather/weather.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PlayersComponent } from './components/players/players.component';
import { MatchesComponent } from './components/matches/matches.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // http://localhost:4200 => le contenu de home.component.html va s'afficher
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "inscription", component: SignupComponent },
  { path: "addPlayer", component: AddPlayerComponent },
  { path: "addTeam", component: AddTeamComponent },
  { path: "addMatch", component: AddMatchComponent },
  { path: "admin", component: AdminComponent },
  { path: "matchInfo/:id", component: MatchInfoComponent },
  { path: "editMatch/:id", component: EditMatchComponent },
  { path: "matches", component: MatchesComponent },
  { path: "players", component: PlayersComponent },
  { path: "profile", component: ProfileComponent },
  { path: "weather", component: WeatherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
