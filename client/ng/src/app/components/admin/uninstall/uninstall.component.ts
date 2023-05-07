import { CommonModule } from "@angular/common";
import { Component, inject, signal } from "@angular/core";
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from "@angular/forms";
import { APIService } from "@components/backend/api/api.service";
import { FormStatus } from "@models/form-status";

@Component({
  selector: "app-uninstall",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./uninstall.component.html",
  styleUrls: ["./uninstall.component.css"],
})
export class UninstallComponent {
  private api = inject(APIService);
  status = signal<FormStatus>("idle");
  form = new FormGroup({
    agree: new FormControl<boolean | null>(null, {
      validators: [Validators.required],
      updateOn: "change",
    }),
  });
  get agree() { return this.form.controls.agree}
  
  async handleSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    };

    this.status.set("pending");
    const result = await this.api.uninstall();
    if (result.ok) {
      this.form.reset();
      this.status.set("ok");
    } else {
      this.status.set("ko");
    }
  }

  handleReset() {
    this.status.set("idle");
    this.form.reset();
  }
}
