import { Pipe, PipeTransform } from '@angular/core';
import { Salesperson } from './sper.class';

@Pipe({
  name: 'searchSalesperson'
})
export class SearchSalespersonPipe implements PipeTransform {

  transform(spers: Salesperson[], searchCriteria: string): Salesperson[] {
    if(spers == null || searchCriteria.length === 0) {
      return spers;
    }
    let search = searchCriteria.toLowerCase();
    let selectedSpers: Salesperson[] = [];
    for(let s of spers) {
      if(
        s.id.toString().includes(search)
          || s.name.toLowerCase().includes(search)
          || s.stateCode.toString().toLowerCase().includes(search)
          || ( s.sales !== null && s.sales.toString().toLowerCase().includes(search) )
      ) {
        selectedSpers.push(s);
      }
    }
    return selectedSpers;
  }

}
