import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import useReadmeFetcher from "../hooks/useReadmeFetcher";
import remarkGfm from "remark-gfm";

export const MarkdownReader = () => {
  const { readmeContent, error } = useReadmeFetcher("jseiglie", "prueba-tec");

  return (
    <div className="text-start">
      MarkdownReader
      {readmeContent ? (
        <Markdown
          children={readmeContent
            .replaceAll("Ã³", "ó")
            .replaceAll("Ã©", "é")
            .replaceAll("Ã¡", "á")}
          remarkPlugins={[remarkGfm]}
        />
      ) : (
        <p>Cargando el contenido del README...</p>
      )}
    </div>
  );
};
