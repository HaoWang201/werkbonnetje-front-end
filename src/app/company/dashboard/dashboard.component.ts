import { Component, OnInit } from '@angular/core';
import {tabs} from './tabs';
import {filters} from './filters';
import Receipt from '../shared/models/receipt';
import {ReceiptService} from '../shared/services/receipt.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tabList = [];
  filtersList = [];
  selectedTab;
  receipts: Receipt[];
  statusColor = {
    Approved: {
      background: 'rgba(52, 199, 89, 0.35)',
      color: 'rgba(52, 199, 89, 1)',
    },
    Seen: {
      background: 'rgba(252, 175, 46, 0.35)',
      color: 'rgba(252, 175, 46, 1)',
    },
    New: {
      background: 'rgba(0, 122, 255, 0.35)',
      color: 'rgba(0, 122, 255, 1)',
    },
    Rejected: {
      background: 'rgba(255, 59, 48, 0.35)',
      color: 'rgba(255, 59, 48, 1)',
    }
  };

  constructor(private receiptService: ReceiptService) {
    this.tabList = tabs;
    this.selectedTab = tabs[0];
    this.filtersList = filters;
  }

  ngOnInit() {
    this.receipts = this.receiptService.getAllByCompanyId();
  }

  selectTab(tab) {
    this.selectedTab = tab;
  }

  getStatusColor
}
