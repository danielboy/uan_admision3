import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ServiceProvider {

  APPID_PLAY: any;
  APPID_ITUNES: any;
  APP_URLSCHEME: any;
  PERIODO_PREINSCRIPCION: any;
  FECHA_RESULTADOS: any;
  CAT_VERSION: any;
  PAGOS: any;

  DEBUG: any;
  APP_DOMAIN: any;
  API_DOMAIN: any;
  PREFICHA_URL: any;
  API_URL: any;

  constructor(public http: HttpClient) {

    this.APPID_PLAY = "uan.se.admision",
    this.APPID_ITUNES = "uan-admisión",
    this.APP_URLSCHEME = "uanadmision",
    this.PERIODO_PREINSCRIPCION = "del 5 de Junio al 31 de Julio",
    this.FECHA_RESULTADOS = "31 de mayo de 2017",
    this.CAT_VERSION = "20171",
    this.PAGOS = {prepa: "1,164.58", lic: "1,164.58", equiv_publicas: "520.26", equiv_privadas: "1,120.56"};
    
    this.DEBUG = (window.localStorage && window.localStorage.DEV == "1"),
    this.APP_DOMAIN = this.DEBUG ? "https://admision.uan.xxx" : "https://admision.uan.mx",
    this.API_DOMAIN = this.DEBUG ? "https://api.se.uan.xxx" : "https://api.se.uan.mx",
    this.PREFICHA_URL = this.API_DOMAIN + '/preficha/v14/',
    this.API_URL = {
        test_cerrado: this.APP_DOMAIN + "/APP/v1/test_cerrado.1.20",
        eventos: this.APP_DOMAIN + "/APP/v1/eventos.json",
        avisos: this.APP_DOMAIN + "/APP/v1/avisos.json",
        resultados_puntajes: this.APP_DOMAIN + "/APP_API/cat_programas-puntajes.v"+this.CAT_VERSION+".json",
        resultados_programas: this.APP_DOMAIN + "/APP_API/cat_programas-{pre}.v"+this.CAT_VERSION+".json",
        resultados_listado: this.APP_DOMAIN + "/APP_API/cat_resultados-{nivel}@{id}.v"+this.CAT_VERSION+".json",
        ping: this.PREFICHA_URL + "ping",
        login: this.PREFICHA_URL + "login",
        logout: this.PREFICHA_URL + "logout",
        getSession: this.PREFICHA_URL + "getSession",
        puntaje: this.PREFICHA_URL + "puntaje",
    };
  }

  avisos(){
    return new Promise((resolve, reject) => {
        this.http.get(this.API_URL.avisos).subscribe(data => {

                resolve(data)
                console.log(data,'avisos datos')
        },
        error =>{
            reject(true)
        })
    })

  }

  eventos(){
    return new Promise((resolve, reject) => {
        this.http.get(this.API_URL.eventos).subscribe(data => {

                resolve(data)
                console.log(data,'eventos datos')
        },
        error =>{
            reject(true)
        })
    })

  }

  resultados_programas(){
    return new Promise((resolve, reject) => {
        this.http.get(this.API_URL.resultados_programas).subscribe(data => {

                resolve(data)
                console.log(data,'resultados_programas datos')
        },
        error =>{
            reject(true)
        })
    })

  }

}
