import { useState } from "react";

/* 
  my polish is not the best with technical explanations. it's possible that I misunderstood.
  From what I understand we need a hook with a value and a function for comparing with default value.
  In addidion the hook should only be updated if something changes
*/

export const useMemoizedState = (defaultValue, compareFn) => {
    // a random value
    const[myValue, setMyValue] = useState(
      // first paremeter
      "", 
      // second parameter: returns true with strict comparison
      () => {
      defaultValue === myValue ? true : false
    });
  
    // useEffekt will update the hook only on change
    useEffect(setMyValue(defaultValue), [compareFn]);
};
