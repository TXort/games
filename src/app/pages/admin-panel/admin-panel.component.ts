import {Component, Input} from '@angular/core';
import {VideogameFormComponent} from "../../component/videogame-form/videogame-form.component";
import {VideogameService} from "../../service/videogame.service";
import {CompanyService} from "../../service/company.service";
import {Company} from "../../models/company.model";
import {EsrbRating} from "../../models/esrbrating.model";
import {License} from "../../models/license.model";
import {combineLatest, map, Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {VideoGameForm} from "../../models/videogameform.model";
import {IRawVideoGameSubmission} from "../../interfaces/rawVideoGame.interface";

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [
    VideogameFormComponent,
    AsyncPipe
  ],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {

  formDataInput$: Observable<VideoGameForm>;


  constructor(
    private gameService: VideogameService,
    private companyService: CompanyService
  ) {
    this.formDataInput$ = combineLatest([
      this.companyService.getPublishers(),
      this.companyService.getDevelopers(),
      this.gameService.getLicenses(),
      this.gameService.getEsrbRatings()
    ]).pipe(
      map(([publishers, developers, licenses, esrbs]) => {
        return new VideoGameForm({
          publishers: publishers,
          developers: developers,
          licences: licenses,
          esrbs: esrbs
        });
      })
    );
  }

  public onSubmit(gameData: IRawVideoGameSubmission): void { // FIX
    this.gameService.submitVideoGame(gameData).subscribe(() => {
      console.log('Submitted');
    })
  }




}
