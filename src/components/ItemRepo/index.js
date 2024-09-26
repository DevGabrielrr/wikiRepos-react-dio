import React from 'react';
import { ItemContainer } from './styles';

function ItemRepo({ repo, handleRemoveRepo }) {

  const handleRemove = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do link
    handleRemoveRepo(repo.id); // Chama a função de remoção
  }

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a><br />
      <a href="#" onClick={handleRemove} className="remover">Remover</a> {/* Evento de clique apenas no link "Remover" */}
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
