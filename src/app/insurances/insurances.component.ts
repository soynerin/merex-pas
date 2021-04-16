import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../rest-services/insurance.service';

declare var $: any;

@Component({
  selector: 'app-insurances',
  templateUrl: './insurances.component.html',
  styleUrls: ['./insurances.component.scss']
})
export class InsurancesComponent implements OnInit {

  seguros: any;

  constructor(public insuranceService: InsuranceService) { 
  }

  ngOnInit(): void {
  }

  mostrarModal( seguro: any ) {
    $('#modalSeguro').modal('show');

    this.seguros = this.insuranceService.getInfoSeguro(seguro.id);
  }

}
