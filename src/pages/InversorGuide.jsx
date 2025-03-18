//* Importo Hooks y ReactGA (Google Anlytics)
import '../assets/css/inversorGuide.css'
import { useState } from 'react'
// COMPONENTS
import HelmetData from "../components/HelmetData"
import LazyReactPlayer from '../components/LazyReactPlayer'
import learnCourseVideoDownArrow from '../assets/img/icons/learnCourseVideoDownArrow.svg'
export default function InversorGuide({metaData}) {
/*     const [showBasics, setShowBasics] = useState(false)
 */    const [showInvest,setShowInvest] = useState(false)
    return (
        <main className='inversorGuidePage'>
            <HelmetData metaData={metaData} />
            <h1>Guía del inversor</h1>
            <aside>
                {/* <article className='first-list'>
                    <div className='title' onClick={()=>setShowBasics(!showBasics)}>
                        <h3>CONCEPTOS BÁSICOS</h3>
                        <img className={!showBasics?"videoArrow":"videoArrow videoArrow--rotated"}  alt="downArrow" title="downArrow" src={learnCourseVideoDownArrow} loading="lazy"/>
                    </div>
                    <div className={showBasics?"show index":"index"}>
                        <ul>
                            <li><a href='#guide-1'>¿Qué es Metro Futuro?</a></li>
                            <li><a href='#guide-2'>¿Cómo funciona Metro Futuro?</a></li>
                            <li><a href='#guide-3'>Nuestro Propósito</a></li>
                            <li><a href='#guide-4'>¿Qué es un token inmobiliario?</a></li>
                            <li><a href='#guide-5'>¿Qué obtengo al comprar un token inmobiliario en Metro Futuro?</a></li>
                            <li><a href='#guide-6'>¿Qué beneficios obtengo al invertir en tokens inmobiliarios?</a></li>
                            <li><a href='#guide-7'>¿Qué necesito saber para comenzar a invertir?</a></li>
                            <li><a href='#guide-8'>¿Qué son las finanzas descentralizadas?</a></li>
                            <li><a href='#guide-9'>¿Qué es blockchain?</a></li>
                            <li><a href='#guide-10'>¿Qué es un cripto activo?</a></li>
                            <li><a href='#guide-11'>¿Qué es una billetera virtual?</a></li>
                        </ul>
                    </div>
                </article> */}
                <article className='second-list'>
                    <div className='title' onClick={()=>setShowInvest(!showInvest)}>
                        <h3>CÓMO COMENZAR A INVERTIR</h3>
                        <img className={!showInvest?"videoArrow":"videoArrow videoArrow--rotated"}  alt="downArrow" title="downArrow" src={learnCourseVideoDownArrow} loading="lazy"/>
                    </div>
                    <div className={showInvest?"show index":"index"}>
                        <ul className={showInvest?"show":""}>
                            <li><a href='#guide-12'>¿Cómo depositar dólar cripto en tu billetera de Metro Futuro?</a></li>
                            <li><a href='#guide-13'>¿Cómo invertir en pesos argentinos?</a></li>
                            <li><a href='#guide-14'>¿Cómo invertir en dólares o euros?</a></li>
                            <li><a href='#guide-15'>¿Cómo elegir inmuebles?</a></li>
                            <li><a href='#guide-16'>¿Cómo verificar mi identidad?</a></li>
                            <li><a href='#guide-17'>¿Cómo registrarme en Metro Futuro?</a></li>
                            <li><a href='#guide-18'>¿Cómo reinvertir y generar interés compuesto?</a></li>
                            {/* <li><a href='#guide-13'>¿Cómo verificar tu identidad en Metro Futuro?</a></li>
                            <li><a href='#guide-14'>¿Cómo crear una billetera digital en MetaMask?</a></li>
                            <li><a href='#guide-15'>¿Cómo configurar tu billetera digital en MetaMask?</a></li>
                            <li><a href='#guide-16'>¿Cómo invertir en una propiedad a través de Metro Futuro?</a></li> */}
                        </ul>
                    </div>
                </article>
            </aside>
            <main>
            <section id='guide-1'>
                    <h2>¿Qué es Metro Futuro?</h2>
                    <p>Metro Futuro es una plataforma de inversión en inmuebles tokenizados en Europa. A través de Metro Futuro puedes comenzar a invertir desde 100 euros y recibir una renta mensual por el alquiler de los pisos.</p>
                </section>
                {/*
                <section id='guide-2'>
                    <h2>2- ¿Cómo funciona Metro Futuro?</h2>
                    <LazyReactPlayer url='https://youtu.be/jKbQe482oJw?si=hnNQHULAx3dnTAVR' borderRadius='10px' />
                </section>
                <section id='guide-3'>
                    <h2>3- Nuestro propósito</h2>
                    <p>Buscamos democratizar el acceso a las inversiones inmobiliarias. En Metro Futuro queremos que cada vez más personas puedan alcanzar la libertad financiera. El mercado inmobiliario es la inversión más segura de la historia, porque un inmueble es un bien de primera necesidad, un activo físico con muy bajo riesgo de pérdida y que aumenta su valor a lo largo del tiempo. Al igual que en generaciones pasadas, hacer crecer el patrimonio en metros cuadrados es posible pero hoy, de un modo muy fácil y accesible para todos, a través de Metro Futuro.</p>
                    <p>El principio general de la inversión en Real Estates es aumentar la cantidad de metros que se va comprando a lo largo del tiempo, para tener mayor rendimiento en renta y capital patrimonial, y esto se genera a través del famoso interés compuesto.</p>
                    <p>Un ejemplo, una persona compra 100 MF2, esos tokens le generan una rentabilidad mensual en euros, puede utilizar esa renta para cubrir gastos o volver a comprar 1 MF2 por mes. A lo largo de un ciclo de inversión de 3 años, tendría 136 MF2. Cuando se vende el inmueble representado por los tokens, obtendrá un capital en euros que le permitiría comprar 150 MF2 en otro proyecto. De este modo, obtendría mayor renta, y todo esto lo logró con una inversión principal de 100 MF2. ¡De esto se trata la inversión inmobiliaria! De resguardar tu capital en ladrillo y aumentarlo para obtener más ingresos pasivos.</p>
                </section>
                <section id='guide-4'>
                    <h2>4- ¿Qué es un token inmobiliario?</h2>
                    <p>A lo largo de los últimos años la tecnología ha cambiado la forma en que vivimos y hacemos negocios. Los tokens inmobiliarios son la última gran revolución del mercado inmobiliario. Una analogía para comprender los tokens son las acciones. Al igual que se generan acciones de empresas, se generan tokens de inmuebles. Cada token representa una fracción del piso, es decir, si la propiedad vale 100.000 euros, se pueden generar 1000 tokens de 100 euros cada uno.</p>
                </section>
                <section id='guide-5'>
                    <h2>5- ¿Qué obtengo al comprar un token inmobiliario en Metro Futuro?</h2>
                    <p>Metro Futuro es una compañía española regulada por la Comisión Nacional del Mercado de Valores de España. Nuestros tokens son instrumentos regulados con supervisión. Jurídicamente un token representa el derecho económico que genera el inmueble. Es decir, la renta y plusvalía que el mismo genera. Además, cada emisión de tokens de Metro Futuro, es presentada a través de un Whitepaper (prospecto legal) ante la CNMV, el mismo puede encontrarlo en las características del inmueble.</p>
                </section>
                <section id='guide-6'>
                    <h2>6- ¿Qué beneficios obtengo al invertir en tokens inmobiliarios?</h2>
                    <p>La tecnología facilita el acceso al negocio inmobiliario. Los tokens inmobiliarios permiten:</p>
                    <ul>
                        <li>Invertir desde 100 euros</li>
                        <li>Invertir en un inmuebles europeos desde cualquier país del mundo</li>
                        <li>Invertir con unos simples clicks. Todo el proceso se encuentra digitalizado y se realiza con la misma facilidad de utilizar el homebanking de cualquier banco tradicional.</li>
                        <li>Facilidad de retiro de fondos a países europeos.</li>
                        <li>Obtener una renta con pago mensual por el alquiler del piso.</li>
                        <li>Desde que compras los tokens se almacenan en tu billetera virtual y puedes venderlo a un tercero cuando quieras.</li>
                        <li>Inviertes en inmuebles en economías estables y recibes pagos en moneda fuerte como el euro o dólar.</li>
                    </ul>
                </section>
                <section id='guide-7'>
                    <h2>7- ¿Qué necesito saber para comenzar a invertir?</h2>
                    <p>Para iniciar en el mundo de las inversiones inmobiliarias 3.0 debes comprender el significado de finanzas descentralizadas, billetera virtual, cripto activos y la tecnología blockchain. Iremos explicando cada uno de ellos de un modo muy simple.</p>
                </section>
                <section id='guide-8'>
                    <h2>8- ¿Qué son las finanzas descentralizadas?</h2>
                    <p>La revolución financiera de los últimos años hizo que los usuarios se vuelvan más formados e independientes. El mundo financiero que conocemos, bancos tradicionales, brokers, fondos de inversión, etc, actúan a través de un ente central donde el usuario nunca posee sus activos, sino que siempre son de control de este ente. Es decir, si uno deposita dinero en el banco, el mismo tendrá la posesión de ese dinero para poder operarlo como quiera, hasta que permite el retiro del mismo. El problema de esto, son las crisis mundiales, como fue la del 2008, donde varias entidades globales se vieron en quiebra y muchos usuarios perdieron la totalidad de sus fondos. </p>
                    <p>En búsqueda de soluciones a estas situaciones, surgieron las finanzas descentralizadas, inversiones en donde el control de los activos le pertenece al usuario y no existe un ente central que pueda tener control de los mismos. Esto se logró solucionar a través de la famosa tecnología Blockchain o cadena de bloques.</p>
                    <LazyReactPlayer url='https://youtu.be/TKCREVJmBME?si=WcFpyuR79KWwrB67' borderRadius='10px' />
                </section>
                <section id='guide-9'>
                    <h2>9- ¿Qué es blockchain?</h2>
                    <p>Blockchain es una tecnología similar al internet. Es decir, una red mundial que permite transmitir información de manera global e instantánea.</p>
                    <p>La principal diferencia con el protocolo de internet es que no necesita de un actor central para controlar esa información. Por ejemplo, cuando enviamos una foto por mail, la compañía de correo (Gmail) cuenta con un servidor, donde llega esa foto, genera una copia y luego la envía al remitente. Lo mismo sucede con los bancos y el dinero que almacenamos en ellos o cualquier sistema que utilice internet. En cambio, con la Web 3.0 o Blockchain, este ente central no existe. Se puede transferir información entre usuario y usuario (P2P) con la misma velocidad, seguridad y alcance que el internet.</p>
                    <p>Además, las redes blockchain cuentan con las características de ser redes en la que sus usuarios no requieren de inscribirse con datos personales, sino que actúan de manera anónima. Sus transacciones son trazables, dado que las block chains son registros públicos donde cada transacción realizada se visualiza para todos por igual y de modo anónimo. Imaginemos un gran libro de registro, donde el usuario A1 le transfirió 1 MF2 a A2. Luego el usuario A2 le transfirió ese token al usuario A41… y así sucesivamente. Esto permite trazabilidad, seguridad e independencia al usuario.</p>
                    <p>Esta revolución del mundo de las finanzas dio origen a la creación de cripto activos y a la tokenización, cambiando el mundo de los negocios como los conocemos para siempre.</p>
                </section>
                <section id='guide-10'>
                    <h2>10- ¿Qué es un cripto activo?</h2>
                    <p>Primero comprendamos que es un activo, es un recurso con la capacidad de generar ingresos. Pueden ser bienes inmuebles, un vehículo, una maquinaria o una acción o bono. Los cripto activos son activos que fueron digitalizados a través de la tecnología blockchain, por ejemplo, un token que representa un vehículo o un token que representa un fondo de dinero. Hay muchas alternativas de digitalizar distintos activos que en la economía generan ingresos para los inversionistas.</p>
                </section>
                <section id='guide-11'>
                    <h2>11- ¿Qué es una billetera virtual?</h2>
                    <p>Al igual que una billetera que utilizamos para guardar tarjetas o dinero en efectivo, existen billeteras digitales que permiten almacenar nuestro dinero y tokens. Un ejemplo de estas es Metamask, la billetera digital que recomendamos en Metro Futuro, es uno de los monederos virtuales más populares para interactuar con blockchains compatibles con la red Ethereum y con otras importantes redes.</p>
                    <LazyReactPlayer url='https://youtu.be/m2V0nTONHL8?si=zE9dfmWGTIbGSER5' borderRadius='10px' />
                </section> */}


                <section id='guide-12'>
                    <h2>1- ¿Cómo depositar dólar cripto en tu billetera de Metro Futuro?</h2>
                    <LazyReactPlayer url='https://youtu.be/p2oyEsgMA7c?si=VB6E9Py7ReabCeMz' borderRadius='10px' />
                </section>
                <section id='guide-13'>
                    <h2>2- ¿Cómo invertir en pesos argentinos?</h2>
                    <LazyReactPlayer url='https://youtu.be/D_-9Nq4ehHo?si=Y7FTiuKd6p0sJ7il' borderRadius='10px' />
                </section>
                <section id='guide-14'>
                    <h2>3- ¿Cómo invertir en dólares o euros?</h2>
                    <LazyReactPlayer url='https://youtu.be/JO_F0YZPOgQ?si=CAOhjUz9nf1cmcpf' borderRadius='10px' />
                </section>
                <section id='guide-15'>
                    <h2>4- ¿Cómo elegir inmuebles?</h2>
                    <LazyReactPlayer url='https://youtu.be/xDpEkTnoZqU?si=bL14VvWXNE9QQww9' borderRadius='10px' />
                </section>
                <section id='guide-16'>
                    <h2>5- ¿Cómo verificar mi identidad?</h2>
                    <LazyReactPlayer url='https://youtu.be/fGHZ1AirtQA?si=O6ok7WM9ErjdKZgq' borderRadius='10px' />
                </section>
                <section id='guide-17'>
                    <h2>6- ¿Cómo registrarme en Metro Futuro?</h2>
                    <LazyReactPlayer url='https://youtu.be/K72v_KtwF74?si=YMr4k_jiESGnKqhp' borderRadius='10px' />
                </section>
                <section id='guide-18'>
                    <h2>7- ¿Cómo reinvertir y generar interés compuesto?</h2>
                    <LazyReactPlayer url='https://youtu.be/jIOYJeQkCx4?si=wWGZQfGQ4qhQnbtI' borderRadius='10px' />
                </section>
            </main>
        </main>
    )
}
