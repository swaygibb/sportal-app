import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SpotifyProfilePage } from './spotify-profile.page';

describe('SpotifyProfilePage', () => {
  let component: SpotifyProfilePage;
  let fixture: ComponentFixture<SpotifyProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpotifyProfilePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SpotifyProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
