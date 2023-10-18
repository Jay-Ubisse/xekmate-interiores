import { Link } from "react-router-dom"

import { Header } from "../components/Header"
import { WhatsappButton } from "../components/WhatsappButton"
import { products } from "../data/products"
import { Footer } from "../components/Footer"

export const HomePage = () => {

  return (
    <div>
      <Header />
      <main className="relative min-h-screen bg-slate-100">
        <section className="bg-home-main-background bg-cover">
          <div className="bg-app-blue-100/70 w-full h-full p-5">
            <h1 className="text-app-orange-100 font-bold mobile:text-2xl w-3/4">
              Seu estilo, sua beleza, nossa missão.
            </h1>
            <hr className="bg-app-orange-100 h-1 w-[30%] rounded-lg mt-2 mb-5" />
            <p className="font-medium text-slate-50">
              Buscando os melhores produtos da <span className="text-app-orange-100 underline underline-offset-2">Tupperware</span> e cosméticos <span className="text-app-orange-100 underline underline-offset-2">Avon</span> para cuidar da sua pele e confiança? <br />
              Então você precisa visitar a nossa loja.
            </p>
            <Link to="/loja" className="flex border-2 border-app-text-app-orange-100 p-2 text-app-orange-100 w-fit hover:bg-app-text-app-orange-100 hover:text-white mt-5">
              <h1 className="font-semibold mobile:text-lg">
                Ver produtos
              </h1>
            </Link>
          </div>
        </section>
        <section className="mt-10">
          <h1 className="text-app-blue-100 font-bold mobile:text-2xl text-center">
            Nossos Produtos
          </h1>
          <hr className="bg-app-blue-100 h-1 w-[30%] rounded-lg mt-2 mb-8 mx-auto" />
          <h2 className="text-app-blue-100 font-semibold mobile:text-lg ml-2">Persianas</h2>
          <hr className="bg-app-btext-app-blue-100 h-[2px] w-[30%] rounded-lg mt-2 mb-5 ml-2" />
          {products.map((product) => {
            if (product.brand === "Tupperware") {
              return (
                <>
                  <div
                    key={product.id}
                    className="card w-[90%] mx-auto glass my-5 shadow-lg shadow-slate-400"
                  >
                    <figure>
                      <img src={product.imageUrl} alt="Product Image" />
                    </figure>
                    <div className="card-body px-4 bg-slate-200">
                      <h2 className="card-title flex flex-row items-start">
                        <span>{product.name}</span>
                        <span className="bg-blue-800 px-2 py-2 text-slate-50 font-medium text-xs rounded-lg">{product.category}</span>
                      </h2>
                      <p>{product.price}</p>
                      <div className="card-actions justify-end mt-5">
                        <button className="btn btn-primary bg-app-blue-100 border-none text-white">
                          Ver detalhes
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            }
          })}

          <h2 className="text-app-blue-100 font-semibold mobile:text-lg ml-2 mt-10">Papéis de parede</h2>
          <hr className="bg-app-btext-app-blue-100 h-[2px] w-[30%] rounded-lg mt-2 mb-5 ml-2" />
          {products.map((product) => {
            if (product.brand === "Avon") {
              return (
                <>
                  <div
                    key={product.id}
                    className="card w-[90%] mx-auto glass my-5 shadow-lg shadow-slate-400"
                  >
                    <figure>
                      <img src={product.imageUrl} alt="Product Image" />
                    </figure>
                    <div className="card-body px-4 bg-slate-200">
                      <h2 className="card-title flex flex-row items-start">
                        <span>{product.name}</span>
                        <span className="bg-blue-800 px-2 py-2 text-slate-50 font-medium text-xs rounded-lg">{product.category}</span>
                      </h2>
                      <p>{product.price}</p>
                      <div className="card-actions justify-end mt-5">
                        <button className="btn btn-primary bg-app-blue-100 border-none text-white">
                          Ver detalhes
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            }
          })}
        </section>
        <h1 id="about" className="text-app-blue-100 font-bold mobile:text-2xl text-center mt-10">
          Sobre nós
        </h1>
        <hr className="bg-app-btext-app-blue-100 h-1 w-[30%] rounded-lg mt-2 mb-8 mx-auto" />
        <section className="bg-home-background bg-cover">
          <div className="bg-yellow-200/90 w-full h-full p-5">
            <p className="font-normal text-slate-800 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis provident facere sit. Harum nesciunt possimus nam, quibusdam, laborum cumque debitis libero similique consectetur earum magni consequatur eligendi reiciendis, odit corrupti!
            </p>
            <form className="flex flex-col gap-2 w-full mx-auto mt-5">
              <label className="text-slate-800 text-sm font-bold text-center">
                Inscreva-se para receber actualizações
              </label>
              <input
                type="text"
                placeholder="Insira o seu email aqui"
                required
                className="bg-transparent outline-none focus:outline-none border-2 border-app-btext-app-blue-100 px-2 h-12 placeholder:text-slate-800 text-white"
              />
              <button
                type="submit"
                className="bg-app-btext-app-blue-100 text-white h-12 border-2 border-app-btext-app-blue-100 hover:bg-green-600 text-base"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </section>
        <WhatsappButton />
        <Footer />
      </main>
    </div>
  )
}
