export function Inicio() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
            <div className="w-full max-w-xl space-y-4">
                <div className="collapse bg-black border border-base-300 rounded-box">
                    <input type="radio" name="my-accordion-1" defaultChecked />
                    <div className="collapse-title font-semibold">1. Diablada</div>
                    <div className="collapse-content text-sm">
                        Representa la lucha entre el bien y el mal, con trajes coloridos y máscaras de demonios. Es una de las danzas más icónicas del Carnaval de Oruro.
                        <img src="src\Danzas_Bolivianas\diablada.webp" alt="" />
                    </div>
                </div>

                <div className="collapse bg-black border border-base-300 rounded-box">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title font-semibold">2. Morenada</div>
                    <div className="collapse-content text-sm">
                        Destaca por sus pesados trajes, máscaras con ojos saltones y ritmo lento. Representa la esclavitud de los africanos en las minas coloniales.
                        <img src="src\Danzas_Bolivianas\2021052823454995981.jpg" alt="" />
                    </div>
                </div>

                <div className="collapse bg-black border border-base-300 rounded-box">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title font-semibold">3. Caporales</div>
                    <div className="collapse-content text-sm">
                        Inspirada en los capataces afrobolivianos, tiene pasos vigorosos y trajes llamativos. Es una danza juvenil y energética.
                        <img src="src\Danzas_Bolivianas\caporales-tradicional-de-bolivia_700x500.jpg" alt="" />
                    </div>
                </div>

                <div className="collapse bg-black border border-base-300 rounded-box">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title font-semibold">4. Tinku</div>
                    <div className="collapse-content text-sm">
                        Originaria del norte de Potosí, esta danza representa antiguas batallas rituales entre comunidades, con movimientos fuertes y combativos.
                        <img src="src\Danzas_Bolivianas\4595756_640px.jpg" alt="" />
                    </div>
                </div>

                <div className="collapse bg-black border border-base-300 rounded-box">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title font-semibold">5. Saya</div>
                    <div className="collapse-content text-sm">
                        De origen afroboliviano, la Saya mezcla canto, danza y percusión. Es una expresión viva de la cultura afrodescendiente en los Yungas.
                        <img src="src\Danzas_Bolivianas\449460408_871972624964155_1750829581398545972_n-2000x1333.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
}
