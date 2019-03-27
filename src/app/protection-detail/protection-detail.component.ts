import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Protection} from '../protections';
import {ProtectionService} from '../protection.service';

@Component({
  selector: 'app-protection-detail',
  templateUrl: './protection-detail.component.html',
  styleUrls: ['./protection-detail.component.css']
})
export class ProtectionDetailComponent implements OnInit {
  @Input() protection: Protection;

  constructor(
    private route: ActivatedRoute,
    private protectionService: ProtectionService
  ) {
  }

  ngOnInit() {

  }

  close(): void {
    this.protection = null;
  }

  getProtection(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.protectionService.getProtection(id)
      .subscribe(protection => this.protection = protection);
  }
}
