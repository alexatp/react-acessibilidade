import { useState } from "react";

const useAcordeao = () => {
  const [aberturasPorItem, setAberturasPorItem] = useState<
    Record<string | number, boolean>
  >({});
  const alternarVisibilidade = (id: string | number) => {
    setAberturasPorItem((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return {
    aberturasPorItem,
    alternarVisibilidade,
  };
};

export default useAcordeao;
