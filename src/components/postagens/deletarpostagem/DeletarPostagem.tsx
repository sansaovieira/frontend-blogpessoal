export const DeletarPostagem = () => {
  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar Postagem</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar a postagem a seguir?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-indigo-400 text-white font-bold text-2xl">
          Postagem
        </header>
        <div className="p-4">
          <p className="text-xl h-full">Título da Postagem</p>
          <p>Texto da Postagem</p>
        </div>
        <div className="flex gap-2">
          <button className="rounded-full text-white bg-red-400 
                    hover:bg-red-600 w-1/2 flex items-center justify-center duration-700">
            Não
          </button>
          <button
            className="rounded-full w-1/2 text-white bg-indigo-400 
                    hover:bg-indigo-600 flex items-center justify-center py-2 duration-700"
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
};
