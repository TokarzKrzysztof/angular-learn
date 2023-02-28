import "reflect-metadata";
const formatMetadataKey = Symbol("format");

export function Format(formatString: string) {
  return Reflect.metadata(formatMetadataKey, formatString);
}
function getFormat(target: any, propertyKey: string) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

export function Min(limit: number) {
    return function(target: Object, propertyKey: string) { 
      let value : string;
      const getter = function() {
        // console.log(value)
        return value?.toUpperCase();
      };
      const setter = function(newVal: string) {
        // console.log(newVal)
         if(newVal.length < limit) {
          Object.defineProperty(target, 'errors', {
            value: `Your password should be bigger than ${limit}`
          });
        }
        else {
          value = newVal;
        }      
      }; 
      Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
      }); 
    }
  }