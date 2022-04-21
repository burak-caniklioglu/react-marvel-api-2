/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

function useClickOutside(ref,setSearch,setSearched) {
  const [isOutsideClicked, setIsOutsideClicked] = useState(false);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOutsideClicked(true);
      setSearch('')
      setSearched([])
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },[]);
  return [isOutsideClicked, setIsOutsideClicked];
}

export default useClickOutside;



