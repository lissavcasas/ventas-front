import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/Cliente';
import { ClienteService } from 'src/app/servicio/cliente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  clientes?:Cliente[];

  constructor(private clienteService:ClienteService ) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      data => {
        this.clientes = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

}
