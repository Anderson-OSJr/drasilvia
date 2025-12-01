const Contatos = () => {
  return (
    <>
      <div className="container flex flex-col items-center gap-8 my-2">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="bg-amber-300">
            <p>Entre em contato</p>
            <div>
              <div>logo do whats</div>
              <p>(16) 99961-1968</p>
            </div>
            <div>
              <div>Logo de endereço</div>
              <p>primeira linha do endereçp</p>
              <p>segunda linha do endereço</p>
            </div>
            <div>
              <div>logo do agendamento</div>
              <p>Atendimento de segunda a sexta, das 8h às 20h</p>
            </div>
          </div>
          <div className="bg-blue-300">Mapa Google</div>
        </div>
        <div className="bg-emerald-300">
          <p>Meu Instagram</p>
          <div>logo do instagram</div>
        </div>
      </div>
    </>
  );
};
export default Contatos;
