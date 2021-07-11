import { FormGroup, ValidationErrors, ValidatorFn, FormControl } from "@angular/forms";


export const validarQueSeanIguales: any | ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
    const password = control.get("claveNueva")
    const confirmarPassword = control.get("claveVerificar")
    return password!.value === confirmarPassword!.value? null : { noSonIguales: true }
}

export const fechaMaxima: any | ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
    const fecha = control.get("fechaDeNacimiento");
    let date = new Date();
    
    let fechaActual= Number(new Date().toISOString().substring(0,10).replace(new RegExp("-","g") ,""));
    
    let anio_maximo = Number(new Date().toISOString().substring(0,4)) -13;

    let fechaMaxima =  Number(anio_maximo +  new Date().toISOString().substring(5,7) + new Date().toISOString().substring(8,10));
    
    

    return Number( fecha!.value.replace(new RegExp("-","g") ,"") ) <= fechaMaxima!? null: {fechaMax: true} 
    
    //return password!.value === confirmarPassword!.value? null : { noSonIguales: true }
}


export const fechaMinima: any | ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
    const fecha = control.get("fechaDeNacimiento");
    let date = new Date();
    
    let fechaActual= Number(new Date().toISOString().substring(0,10).replace(new RegExp("-","g") ,""));
    
    let anio_minimo = Number(new Date().toISOString().substring(0,4)) - 120

    let fechaMinima =  Number(anio_minimo +  new Date().toISOString().substring(5,7) + new Date().toISOString().substring(8,10));
    
    

    return Number( fecha!.value.replace(new RegExp("-","g") ,"") ) >= fechaMinima!? null: {fechaMin: true} 
    
    //return password!.value === confirmarPassword!.value? null : { noSonIguales: true }
}

export const fechaActual: any | ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
    const fecha = control.get("fechaDeNacimiento");
    let date = new Date();
    
    let fechaActual= Number(new Date().toISOString().substring(0,10).replace(new RegExp("-","g") ,""));
    
    let anio_minimo = Number(new Date().toISOString().substring(0,4)) - 120

    let fechaMinima =  Number(anio_minimo +  new Date().toISOString().substring(5,7) + new Date().toISOString().substring(8,10));
    
    

    return Number( fecha!.value.replace(new RegExp("-","g") ,"") ) <= fechaActual!? null: {fechaAct: true} 
    
    //return password!.value === confirmarPassword!.value? null : { noSonIguales: true }
}


//se le aplica esta validacion dependiendo del control al que se le aplique
export const ContieneEspacios: any | ValidatorFn = (
  control: FormControl
): ValidationErrors | null => {
    const espacios = control
    
    
    return !espacios!.value.includes(" ")? null : { hayEspacio: true }

    //return Number( claveNueva!.value.replace(new RegExp("-","g") ,"") ) <= fechaActual!? null: {fechaAct: true} 
    
    //return password!.value === confirmarPassword!.value? null : { noSonIguales: true }
}