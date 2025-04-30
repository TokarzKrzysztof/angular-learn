import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { SomeFake } from './fake-variables';

@Component({
  selector: 'app-fake-storage',
  imports: [],
  templateUrl: './fake-storage.component.html',
  styleUrl: './fake-storage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FakeStorageComponent {
  private cd = inject(ChangeDetectorRef)
  SomeFake = SomeFake;

  detect() {
    this.cd.detectChanges()
  }
}
