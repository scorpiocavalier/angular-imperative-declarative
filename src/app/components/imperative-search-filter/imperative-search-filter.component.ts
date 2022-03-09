import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-imperative-search-filter',
  templateUrl: './imperative-search-filter.component.html',
  styleUrls: ['./imperative-search-filter.component.css'],
})
export class ImperativeSearchFilterComponent implements OnInit {
  filter: string = '';
  clients: Client[] = [];
  filteredClients: Client[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe((clients: Client[]) => {
      this.clients = clients;
      this.filteredClients = clients;
    });
  }

  filterList(): void {
    this.filteredClients = this.clients.filter(({ firstName, lastName }) => {
      const fullName = [firstName, lastName].join(' ');
      return [firstName, lastName, fullName].some((name: string) =>
        name.toLowerCase().includes(this.filter.toLowerCase())
      );
    });
  }
}
