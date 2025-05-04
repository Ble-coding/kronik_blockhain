import { useToast, toast } from "@/hooks/use-toast";

export { useToast, toast };



// src/components/ui/use-toast.ts
// import { useState } from 'react';

// export function useToast() {
//   const [toasts, setToasts] = useState([]);

//   const addToast = (message: string) => {
//     setToasts([...toasts, { message }]);
//   };

//   return { toasts, addToast };
// }
