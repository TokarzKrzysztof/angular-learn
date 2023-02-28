import { inject, NgZone, SimpleChanges } from '@angular/core';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import Swal, { SweetAlertOptions } from 'sweetalert2';

const enum ChangesStrategy {
  First = 'firstTime',
  Each = 'eachTime',
  NonFirst = 'nonFirst',
}

export function TrackChanges<TClass>(
  key: keyof TClass,
  methodName: keyof TClass,
  strategy: ChangesStrategy = ChangesStrategy.Each
): Function {
  return function (
    targetClass: any,
    functionName: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    const source = descriptor.value;

    descriptor.value = function (changes: SimpleChanges): Function {
      if (
        changes &&
        changes[key as any] &&
        changes[key as any].currentValue !== undefined
      ) {
        const isFirstChange = changes[key as any].firstChange;

        if (
          strategy === ChangesStrategy.Each ||
          (strategy === ChangesStrategy.First && isFirstChange) ||
          (strategy === ChangesStrategy.NonFirst && !isFirstChange)
        ) {
          targetClass[methodName as any].call(
            this,
            changes[key as any].currentValue as TClass
          );
        }
      }

      return source.call(this, changes);
    };

    return descriptor;
  };
}

export const Confirmable = () => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    {
      console.log(target);
      console.log(propertyKey);
      console.log(descriptor);
      // Again, cache the original method for later use
      const originalMethod = descriptor.value;
      // the configuration object for sweetalert
      const config: SweetAlertOptions = {
        title: 'Are you sure?',
        html: 'Do you want to perform this action?',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: 'No',
        icon: 'question',
      };
      // we write a new implementation for the method
      descriptor.value = async function (...args: any[]) {
        const res = await Swal.fire(config);
        // fire sweetalert with the config object
        if (res.isConfirmed) {
          // if user clicked yes,
          // we run the original method with the original arguments
          const result = originalMethod.apply(this, args);

          // and return the result
          return result;
        }
      };
      return descriptor;
    }
  };
};

export function OutsideZone(
  targetClass: any,
  functionName: string,
  descriptor: any
) {
  const source = descriptor.value;
  descriptor.value = function (...data: any[]): Function {
    return inject(NgZone).runOutsideAngular(() => source.call(this, ...data));
  };
  return descriptor;
}

export function Required(target: object, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    get() {
      throw new Error(`Attribute ${propertyKey} is required`);
    },
    set(value) {
      Object.defineProperty(target, propertyKey, {
        value,
        writable: true,
        configurable: true,
      });
    },
    configurable: true,
  });
}

export function Uppercase() {
  return function (target: Object, propertyKey: string) {
    let _val: string;
    Object.defineProperty(target, propertyKey, {
      get() {
        return _val?.toUpperCase() ?? _val;
      },
      set(value) {
        _val = value;
      },
    });
  };
}

type IChange = (prevValue: any, currentValue: any) => void;
export function CallOnChange<TClass>(methodName: keyof TClass) {
  return function (target: TClass, propertyKey: keyof TClass) {
    let _val: any;
    Object.defineProperty(target, propertyKey, {
      get() {
        return _val;
      },
      set(value) {
        if (value !== _val) {
          (target[methodName] as IChange)(_val, value);
        }
        _val = value;
      },
    });
  };
}

export function RunInInterval(interval: number = 1000): MethodDecorator {
  return function (target, propertyKey, descriptor) {
    const source = descriptor.value as Function;
    descriptor.value = function (...params: any[]) {
      setInterval(() => {
        source.apply(target, params);
      }, interval);
    } as any;
    return descriptor;
  };
}

// interface Constructor<Instance extends object> {
//   new (...args: any[]): Instance;
// }

// interface Method<Context extends object = object> {
//   (this: Context, ...args: any[]): any;
// }
// interface MethodDecoratorCustom<Instance extends object = object> {
//   (
//     target: Instance | Constructor<Instance>,
//     key: string,
//     descriptor: TypedPropertyDescriptor<
//       Method<Instance | Constructor<Instance>>
//     >
//   ): void | TypedPropertyDescriptor<Method<Instance | Constructor<Instance>>>;
// }
type CustomMethodDecorator<TMethod extends Function> = (
  target: Object,
  methodName: string,
  descriptor: TypedPropertyDescriptor<TMethod>
) => TypedPropertyDescriptor<TMethod>;
// declare type CustomMethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => TypedPropertyDescriptor<any> | void;
export function Cached(): CustomMethodDecorator<
  (...params: any[]) => Observable<any>
> {
  return (target, methodName, descriptor) => {
    const method = descriptor.value!;
    let _data: unknown;
    descriptor.value = (...params: any[]) => {
      if (_data) {
        return of(_data);
      } else {
        return method.apply(target, params).pipe(tap((data) => (_data = data)));
      }
    };
    return descriptor;
  };
}

export function WithErrorHandling(): CustomMethodDecorator<(...params: any[]) => Observable<any>> {
  return function(target, methodName, descriptor) {
    const method = descriptor.value!;
    descriptor.value = function(...params: any[]) {
      return method.apply(this, params).pipe(
        catchError((err) => {
          console.error("Some error happened!", methodName, err);
          return throwError(() => err);
        }),
      )
    };
    return descriptor;
  };
}

export function Min(limit: number) {
  return function (target: Object, propertyKey: string) {
    let value: string;
    const getter = function () {
      // console.log(value)
      return value?.toUpperCase();
    };
    const setter = function (newVal: string) {
      // console.log(newVal)
      if (newVal.length < limit) {
        Object.defineProperty(target, 'errors', {
          value: `Your password should be bigger than ${limit}`,
        });
      } else {
        value = newVal;
      }
    };
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  };
}

const enum StorageType {
  Local,
  Session,
}

// export function Storage<Type>(
//   key: string,
//   storageType: StorageType = StorageType.Local,
//   defaultValue: Type | null = null
// ): Function {
//   return (target: object, propName: string) => {
//     let _val: Type = target[propName];
//     Object.defineProperty(target, propName, {
//       get(): Type | unknown {
//         if (!isNull(_val)) {
//           return _val;
//         }
//         let item = StorageService.getItem(key);
//         if (isNull(item)) {
//           item = defaultValue;
//           _val = defaultValue;
//           StorageService.setItem(key, item, storageType === StorageType.Local);
//         }
//         return item;
//       },
//       set(item: Type): void {
//         _val = item;
//         StorageService.setItem(key, item, storageType === StorageType.Local);
//       },
//     });
//   };
// }
