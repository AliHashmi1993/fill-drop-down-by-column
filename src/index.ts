export class DropDownValuesByColumn{
    static fillDropDownByName(name: string, key: string, dtos: any){
        var values = [];
        for(let dto of dtos){
          var keyDTO = Object.entries(dto);
          for(var i = 0 ; i < keyDTO.length ;i++){
            if(keyDTO[i][0]==key){
              if(keyDTO[i][1]==name){
                values = dto;
                return values;  
                
              }
            }    
          }
        }
      }
      static fillMultipleValueDropDownByName(name: string, key: string, dtos: any){
        var values = [];
        for(let dto of dtos){
          var keyDTO = Object.entries(dto);
          for(var i = 0 ; i < keyDTO.length ;i++){
            if(keyDTO[i][0]==key){
              if(keyDTO[i][1]==name){
                values.push(dto);           
              }
            }    
          }
        }
        return values;
      }
}