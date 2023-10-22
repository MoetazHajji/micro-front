import { Injectable } from '@angular/core';

import {commandeApi} from "../../api/commandeApi";
import {CommandeModel} from "../../models/Commande.model";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(
    private commondeApi:commandeApi
  ) {
  }
  createCommande(commande:CommandeModel){
    return this.commondeApi.createCommande(commande);
  }

  updatecommande(commande:CommandeModel){
    return this.commondeApi.updateCommande(commande);
  }

  getcommandeById(id:string){
    return this.commondeApi.searchCommandeById(id);
  }

  findAllCommandes(){
    return this.commondeApi.findAll();
  }

  removeCommande(id : number){
    return this.commondeApi.removeCommande(id);
  }

  generateCode(length: number): string {
    const characters =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

}
