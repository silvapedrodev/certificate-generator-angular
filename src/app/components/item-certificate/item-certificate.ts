import { Component } from '@angular/core';
import { PrimaryButton } from "../primary-button/primary-button";
import { SecondaryButton } from "../secondary-button/secondary-button";

@Component({
  selector: 'app-item-certificate',
  imports: [PrimaryButton, SecondaryButton],
  templateUrl: './item-certificate.html',
  styleUrl: './item-certificate.css',
})
export class ItemCertificate {}
