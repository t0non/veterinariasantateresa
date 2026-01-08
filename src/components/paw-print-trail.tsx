"use client";
import { useEffect, useRef } from "react";

const PawTrail = () => {
  // Guarda a última posição onde desenhamos uma patinha
  const lastPawPosition = useRef(0);
  // Controla se é a patinha esquerda ou direita
  const isLeftPaw = useRef(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      
      // Cria uma patinha a cada 100 pixels de rolagem (ajuste esse valor se quiser mais ou menos patinhas)
      if (Math.abs(currentScroll - lastPawPosition.current) > 100) {
        createPaw(currentScroll);
        lastPawPosition.current = currentScroll;
      }
    };

    const createPaw = (scrollY: number) => {
      const paw = document.createElement("div");
      
      // CONFIGURAÇÃO VISUAL
      const size = 40; // Tamanho da patinha em pixels
      // Alterna a posição horizontal: uma mais pra esquerda, uma mais pra direita (simulando caminhada)
      // Ajuste os valores (10% e 20%) para mudar a largura da "caminhada"
      const posX = isLeftPaw.current 
        ? window.innerWidth * 0.15 + (Math.random() * 50) // Lado Esquerdo
        : window.innerWidth * 0.25 + (Math.random() * 50); // Lado Direito (perto do primeiro)
      
      // Inverte o lado para a próxima
      isLeftPaw.current = !isLeftPaw.current;

      // ESTILOS DA PATINHA
      paw.style.position = "absolute";
      paw.style.left = `${posX}px`;
      // Coloca a patinha na altura atual do scroll + um pouco da tela
      paw.style.top = `${scrollY + window.innerHeight - 100}px`; 
      paw.style.width = `${size}px`;
      paw.style.height = `${size}px`;
      paw.style.zIndex = "9999"; // O MAIS IMPORTANTE: Garante que fique na frente
      paw.style.pointerEvents = "none"; // Deixa clicar através dela
      paw.style.opacity = "0.6"; // Levemente transparente para não atrapalhar a leitura
      
      // Rotação leve para parecer natural
      const rotation = isLeftPaw.current ? -20 : 20;
      paw.style.transform = `rotate(${rotation}deg)`;
      paw.style.transition = "opacity 2s ease-out";

      // SVG EXATO DA IMAGEM QUE VOCÊ MANDOU (Preto/Azul Marinho)
      // Estou usando a cor #142850 (Azul da sua marca). Se quiser preto mude fill para #000000
      paw.innerHTML = `
        <svg viewBox="0 0 512 512" fill="#142850" xmlns="http://www.w3.org/2000/svg">
         <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.7-33.3-14.3-70.1 10.2-84.1s59.7.9 78.7 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54.2-47.3 78.7-33.3s29.1 51.7 10.2 84.1s-54.2 47.3-78.7 33.3zM310.2 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/>
        </svg>
      `;

      document.body.appendChild(paw);

      // A patinha desaparece sozinha depois de 3 segundos
      setTimeout(() => {
        paw.style.opacity = "0";
        setTimeout(() => {
          paw.remove();
        }, 2000); // Espera o fade out terminar para remover do HTML
      }, 3000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
};

export { PawTrail };

export const PawPrintTrail = PawTrail;
