import { TestBed } from '@angular/core/testing';
import { AppHtmlComponent } from './app-html.component';

describe('AppHtmlComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppHtmlComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppHtmlComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ngx-pug-builders-karma-issue'`, () => {
    const fixture = TestBed.createComponent(AppHtmlComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ngx-pug-builders-karma-issue');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppHtmlComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ngx-pug-builders-karma-issue app is running!');
  });
});
