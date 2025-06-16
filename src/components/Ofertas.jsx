export function Ofertas() {
    return (
        <div className="min-h-screen bg-black py-10 px-4">
            <h1 className="text-4xl font-bold text-center mb-10">Ofertas</h1>
            <div className="flex flex-wrap justify-center gap-6">

                <div className="collapse bg-base-100 border border-base-300 w-80 rounded-box shadow-md">
                    <input type="checkbox" />
                    <div className="collapse-title font-semibold text-xl">Diablada</div>
                    <div className="collapse-content text-sm">
                        Representa la lucha entre el bien y el mal. Destaca en el Carnaval de Oruro con trajes coloridos y máscaras de demonios.
                        <img src="src\Danzas_Bolivianas\diablada.webp" alt="" />
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>PRECIO</button>
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">PRECIO</h3>
                                <p className="py-4">100 bs.</p>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                </div>


                <div className="collapse bg-base-100 border border-base-300 w-80 rounded-box shadow-md">
                    <input type="checkbox" />
                    <div className="collapse-title font-semibold text-xl">Morenada</div>
                    <div className="collapse-content text-sm">
                        Danza con ritmo lento, trajes pesados y máscaras. Representa a los esclavos africanos en las minas coloniales.
                        <img src="src\Danzas_Bolivianas\2021052823454995981.jpg" alt="" />
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>PRECIO</button>
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">PRECIO</h3>
                                <p className="py-4">250 bs.</p>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                </div>


                <div className="collapse bg-base-100 border border-base-300 w-80 rounded-box shadow-md">
                    <input type="checkbox" />
                    <div className="collapse-title font-semibold text-xl">Caporales</div>
                    <div className="collapse-content text-sm">
                        Inspirada en los capataces afrobolivianos. Tiene pasos fuertes y rápidos, y es muy popular entre los jóvenes.
                        <img src="src\Danzas_Bolivianas\caporales-tradicional-de-bolivia_700x500.jpg" alt="" />
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>PRECIO</button>
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">PRECIO</h3>
                                <p className="py-4">356 bs.</p>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                </div>

                <div className="collapse bg-base-100 border border-base-300 w-80 rounded-box shadow-md">
                    <input type="checkbox" />
                    <div className="collapse-title font-semibold text-xl">Diablada</div>
                    <div className="collapse-content text-sm">
                        Representa la lucha entre el bien y el mal. Destaca en el Carnaval de Oruro con trajes coloridos y máscaras de demonios.
                        <img src="src\Danzas_Bolivianas\diablada.webp" alt="" />
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>PRECIO</button>
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">PRECIO</h3>
                                <p className="py-4">345 bs.</p>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                </div>


            </div>
        </div>
    );
}

