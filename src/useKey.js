import { useEffect } from "react";
export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
          // console.log("CLOSING");
        }
      }

      document.addEventListener("keydown", callback);

      // CLEANIN UP for multiple eventlisteners
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
