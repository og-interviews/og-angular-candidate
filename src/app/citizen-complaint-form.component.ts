import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  CitizenComplaintRecord,
  citizenComplaintDefaultValue,
  CitizenComplaintMetadata,
} from './citizen-complaint.model';

@Component({
  selector: 'app-citizen-complaint-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  template: `
    <form>
      <button type="submit">Submit</button>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitizenComplaintFormComponent {
  readonly model: CitizenComplaintRecord = citizenComplaintDefaultValue;
  readonly citizenComplaintMetadata = CitizenComplaintMetadata;

  ngOnInit(): void {}

  async onSubmit(): Promise<void> {}
}
