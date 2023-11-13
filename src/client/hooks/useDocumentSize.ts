import { useEffect, useState } from "react";

export const useDocumentSize = () => {
  const [documentSize, setDocumentSize] = useState({
    documentWidth: 0,
    documentHeight: 0,
  });
  useEffect(() => {
    setDocumentSize({
      documentWidth: document.body.offsetWidth,
      documentHeight: document.body.offsetHeight,
    });
  }, []);
  return documentSize;
};
