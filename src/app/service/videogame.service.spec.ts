import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { VideogameService } from './videogame.service';
import { VideoGame } from '../models/videogame.model';
import {environment} from "../../environments/environment.development";

describe('VideogameService', () => {
  let service: VideogameService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VideogameService]
    });

    service = TestBed.inject(VideogameService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch video games', () => {
    const mockVideoGames: Array<VideoGame> = [
      new VideoGame({
        id_videogame: 15,
        title: 'The Witcher 3: Wild Hunt',
        description: 'The witcher Geralt of Rivia once lived in the secluded mountain fortress Kaer Morhen, where he enjoyed a peaceful life with his beloved Yennefer and, together with his fellow witchers, trained a young girl named Ciri, the daughter of Emhyr var Emreis, Emperor of Nilfgaard. Following a prolonged memory loss and other turbulent events described in his previous adventures, Geralt eventually gets close to a reunion with Yennefer, whom he hasn\'t seen in a long time. Meanwhile, the Empire of Nilfgaard invades the Northern Kingdoms, and Geralt is contacted by the Emperor who asks him to find Ciri. In the midst of these events, a supernatural army known as the Wild Hunt appears in the region, threatening to obliterate everything in their path towards an unknown goal.',
        game_picture_url: 'https://cdn.mobygames.com/covers/17397141-the-witcher-3-wild-hunt-windows-front-cover.jpg',
        esrb_rating: 'Mature',
        license: 'Commercial',
        num_of_reviews: 0,
        rating: undefined
      }),
    ];

    service.getVideoGamesByTitle("Witcher").subscribe(videoGames => {
      expect(videoGames.length).toBe(1);
      expect(videoGames).toEqual(mockVideoGames);
    });

    const req = httpMock.expectOne(environment.supabase.url + '/rest/v1/rpc/search_videogames_by_title?title_in=Witcher');
    expect(req.request.method).toBe('GET');
    req.flush(mockVideoGames);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
