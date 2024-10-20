import React from 'react';

interface NavigationButtonsProps {
  handleNext: () => void;
  handlePrev: () => void;
  isLastStep: boolean;
  isFirstStep: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  handleNext,
  handlePrev,
  isLastStep,
  isFirstStep,
}) => {
  return (
    <div className="navigation-buttons">
      {!isFirstStep &&
        !isLastStep && ( // Exibe o botão "Voltar" apenas se não estiver na primeira tela
          <button className="button" onClick={handlePrev}>
            Voltar
          </button>
        )}

      {/* Condicional para não renderizar o botão "Avançar" se estiver na última etapa */}
      {!isLastStep && (
        <button className="button" onClick={handleNext}>
          Avançar
        </button>
      )}

      {/* Se estiver na última etapa, o botão exibido será "Fechar" */}
      {isLastStep && (
        <button className="button" onClick={handleNext}>
          Fechar
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;
