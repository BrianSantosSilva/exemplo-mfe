import { BehaviorSubject } from "rxjs";

var data = [{
  chave: "menu",
  valor: "ronaldo"
}]
export const DataSubject = new BehaviorSubject<any>([])

//LoginSubject.subscribe((obj: any) =>  );

export function setData(newData: any) {

  var idx = data.findIndex(p => p.chave == newData.chave);

  if(idx != -1)
    data[idx] = newData;
  else 
    data.push(newData);

  DataSubject.next(data)

  console.log("internal cross")
  console.log(data)
  console.log("internal cross")

  return true;
}

export function getData(chave) {
  var index = data.findIndex(p => p.chave == chave);

  console.log("get data")
  console.log(data)
  console.log(chave)
  console.log(index)
  console.log("get data")

  if (index != -1)
    return data[index];
  else
    return {}
}

