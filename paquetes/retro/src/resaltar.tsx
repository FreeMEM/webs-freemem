/**
 * Resaltado de código sencillo (Dash y C) que se hace al construir la página: sin JavaScript en el navegador.
 * Comentarios, textos, números, palabras clave y llamadas, cada uno con su clase.
 */
const CLAVES = {
  dash: new Set([
    "Window", "Main", "EventLoop", "On", "Close", "end", "if", "elif", "else", "while", "for", "in", "func", "struct",
    "const", "return", "true", "false", "nil", "and", "or", "not", "Print", "Stop", "break", "self", "title", "width",
    "height", "Fixed", "Int", "String", "Bool", "Float",
  ]),
  c: new Set([
    "if", "else", "return", "struct", "static", "void", "while", "for", "switch", "case", "break", "BOOL", "ULONG",
    "UWORD", "LONG", "WORD", "TRUE", "FALSE", "NULL", "const", "DashFixed",
  ]),
};

const PATRON = {
  dash: /(#.*$)|("(?:[^"\\]|\\.)*")|(\b\d+(?:\.\d+)?\b)|([A-Za-z_]\w*)|(\s+|.)/gm,
  c: /(\/\/.*$|\/\*[\s\S]*?\*\/)|("(?:[^"\\]|\\.)*")|(\b(?:0x[\da-fA-F]+|\d+)\b)|([A-Za-z_]\w*)|(\s+|.)/gm,
};

export function Codigo({ codigo, lenguaje }: { codigo: string; lenguaje: "dash" | "c" }) {
  const partes: React.ReactNode[] = [];
  let m: RegExpExecArray | null;
  const re = new RegExp(PATRON[lenguaje]);
  let n = 0;
  while ((m = re.exec(codigo)) !== null) {
    const [todo, comentario, texto, numero, palabra] = m;
    let clase = "";
    if (comentario) clase = "co-comentario";
    else if (texto) clase = "co-texto";
    else if (numero) clase = "co-numero";
    else if (palabra) {
      if (CLAVES[lenguaje].has(palabra)) clase = "co-clave";
      else if (codigo[re.lastIndex] === "(") clase = "co-llamada";
    }
    partes.push(clase ? <span key={n++} className={clase}>{todo}</span> : todo);
  }
  return (
    <pre className={`codigo codigo-${lenguaje}`}>
      <code>{partes}</code>
    </pre>
  );
}
