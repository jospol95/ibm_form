import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {MiembroViewModel} from "../../modulos/form/models/miembro.view-model";
import {CreateOrUpdateMiembroCommand} from "../../modulos/form/models/create-or-update-miembro-command";

@Injectable()

export class MiembrosService {
  private apiUrl = environment.apiBase + 'miembros/';

  constructor(private http: HttpClient) {

  }

  public Get(id: number){
    let params = new HttpParams();
    params = params.append('id', id)

    return this.http.get<MiembroViewModel>(this.apiUrl , {params: params});
  }

  // public GetAll(pagActual: number, tamPagina: number){
  //   let params = new HttpParams();
  //   params = params.append('pagActual', pagActual);
  //   params = params.append('tamPagina', tamPagina)
  //
  //   return this.http.get<PaginationResultViewModel<MiembroViewModel>>(this.apiUrl + 'getAll', {params: params});
  // }

  public CreateOrUpdateMiembro(miembro: CreateOrUpdateMiembroCommand){
    return this.http.post<boolean>(this.apiUrl, miembro );
  }
}



