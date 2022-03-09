import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-imperative-search-filter',
  templateUrl: './imperative-search-filter.component.html',
  styleUrls: ['./imperative-search-filter.component.css'],
})
export class ImperativeSearchFilterComponent implements OnInit, OnDestroy {
  searchField: FormControl = new FormControl('');
  clients: Client[];
  filteredClients: Client[];

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService
      .getClients()
      .pipe(takeUntil(this.destroy$))
      .subscribe((clients: Client[]) => {
        this.clients = clients;
        this.filteredClients = clients;
      });

    this.searchField.valueChanges
      .pipe(takeUntil(this.destroy$), debounceTime(100))
      .subscribe((searchTerm: string) => {
        this.filteredClients =
          searchTerm === ''
            ? this.clients
            : this.clients.filter(({ firstName, lastName }) => {
                const fullName = [firstName, lastName].join(' ');

                return [firstName, lastName, fullName].some((name) =>
                  name.toLowerCase().includes(searchTerm.toLowerCase())
                );
              });
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
