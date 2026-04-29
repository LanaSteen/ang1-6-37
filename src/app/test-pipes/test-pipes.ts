import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-pipes',
  imports: [UpperCasePipe, LowerCasePipe, PercentPipe, CurrencyPipe, SlicePipe, DatePipe, JsonPipe],
  templateUrl: './test-pipes.html',
  styleUrl: './test-pipes.scss',
})
export class TestPipes {

  text = "hello world"
  text2 = "helLo worlD"

  variableInJson = '{"id":2}'

  sumPer = 10


  date = new Date()



  convertString(str : string){
    return str.toLowerCase()
  }



  formatString(str : string){
    let result = ""
    for (let index = 0; index < str.length; index++) {
        result +=str[index] 
        if(index !== str.length-1){
           result += "-"
        }
        
    }
     return result
  }

  format2String(str : string){
    return str.split("").join("-")
  }

}
