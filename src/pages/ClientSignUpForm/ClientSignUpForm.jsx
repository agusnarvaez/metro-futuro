import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import './clientSignUpForm.css';
import SmallInput from "../../components/Contact/SmallInput";
import LargeInput from "../../components/Contact/LargeInput";
import AttachmentInput from "../../components/AttachmentInput/AttachmentInput";
import { countriesService } from "../../services/countriesService";

export default function ClientSignUpForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  const getStates = async (event) => {
    let country = event.target.value;
    countriesService.getStates(country).then((states) => {
      setStates(states);
    });
  };

  const onSubmit = async (data) => {
    console.log("Datos del formulario:", data);
  };

  useEffect(() => {
    if (countries.length > 0) return;

    countriesService.getCountries().then((countries) => {
      setCountries(countries);
    });
  }, [countries]);

  return (
    <main className="clientSignUp">
      <form className="clientSignUpForm" onSubmit={handleSubmit(onSubmit)}>
        <h2>Información Básica</h2>
        <article>
          <label htmlFor="razon_social">Razón Social:</label>
          <SmallInput
            field={{
              name: "razon_social",
              placeholder: "Razón Social",
              type: "text",
              error: "Este campo es requerido",
            }}
            {...register("razon_social", { required: true })}
            error={errors.razon_social}
          />
        </article>

        <article>
          <label htmlFor='numero_fiscal'>Número Fiscal (CUIT/CUIL):</label>
          <SmallInput
              field={{
                name: "numero_fiscal",
                placeholder: "Número Fiscal (CUIT/CUIL)",
                type: "text",
                isValid: !errors.numero_fiscal,
                showErrors: errors.numero_fiscal,
                error: "Este campo es requerido",
              }}
              {...register("numero_fiscal", { required: true })}
              error={errors.numero_fiscal}
          />
        </article>

          <article>
            <label htmlFor="fecha_incorporacion">Fecha de Incorporación:</label>
            <SmallInput
                field={{
                name: "fecha_incorporacion",
                placeholder: "Fecha de Incorporación",
                type: "date",
                isValid: !errors.fecha_incorporacion,
                showErrors: errors.fecha_incorporacion,
                error: "Este campo es requerido",
                }}
                {...register("fecha_incorporacion", { required: true })}
                error={errors.fecha_incorporacion}
            />
          </article>

          <article>
            <label htmlFor='direccion_entidad'>Dirección de la entidad:</label>
            <SmallInput
                field={{
                name: "direccion_entidad",
                placeholder: "Dirección de la entidad",
                type: "text",
                isValid: !errors.direccion_entidad,
                showErrors: errors.direccion_entidad,
                error: "Este campo es requerido",
                }}
                {...register("direccion_entidad", { required: true })}
                error={errors.direccion_entidad}
            />
          </article>

          <article>
            <label htmlFor='pais'>País:</label>
            <select id="pais" name="pais" onChange={(e)=>getStates(e)} required>
              <option key='' value="">Selecciona un país</option>
              {
                countries?.length > 0 &&
                countries.map((country) =>
                  <option
                    key={country.country_short_name}
                    value={country.country_name}
                  >
                    {country.country_name}
                  </option>
                )
              }
            </select>
          </article>

          <article>
            <label htmlFor='provincia'>Provincia:</label>
            <select id="provincia" name="provincia" required>
              <option key='' value="">Selecciona una provincia / estado</option>
              {
                states.length > 0 &&
                states.map((state) =>
                  <option
                    key={state.state_short_name}
                    value={state.state_name}
                  >
                    {state.state_name}
                  </option>
                )
              }
            </select>
          </article>

          <article>
            <label htmlFor='codigo_postal'>Código Postal:</label>
            <SmallInput
                field={{
                name: "codigo_postal",
                placeholder: "Código Postal",
                type: "text",
                isValid: !errors.codigo_postal,
                showErrors: errors.codigo_postal,
                error: "Este campo es requerido",
                }}
                {...register("codigo_postal", { required: true })}
                error={errors.codigo_postal}
            />
          </article>

          <article>
            <label htmlFor='direccion_comercial_operativa' >Dirección Comercial Operativa:</label>
            <SmallInput
                field={{
                  name: "direccion_comercial_operativa",
                  placeholder: "Dirección comercial operativa",
                  type: "text",
                  isValid: !errors.direccion_comercial_operativa,
                  showErrors: errors.direccion_comercial_operativa,
                  error: "Este campo es requerido",
                }}
                {...register("direccion_comercial_operativa", { required: true })}
                error={errors.direccion_comercial_operativa}
            />
          </article>

          <article>
            <label htmlFor='origen_capital'>Origen de capital societario:</label>
            <SmallInput
                field={{
                name: "origen_capital",
                placeholder: "Origen de capital societario",
                type: "text",
                isValid: !errors.origen_capital,
                showErrors: errors.origen_capital,
                error: "Este campo es requerido",
                }}
                {...register("origen_capital", { required: true })}
                error={errors.origen_capital}
            />
          </article>

          <article>
            <label htmlFor='fuente_ingresos'>Fuente de ingresos:</label>
            <SmallInput
                field={{
                  name: "fuente_ingresos",
                  placeholder: "Fuente de ingresos:",
                  type: "text",
                  isValid: !errors.fuente_ingresos,
                  showErrors: errors.fuente_ingresos,
                  error: "Este campo es requerido",
                }}
                {...register("fuente_ingresos", { required: true })}
                error={errors.fuente_ingresos}
            />
          </article>

          <article>
            <label htmlFor='origen_fondos'>Origen de fondos:</label>
            <SmallInput
                field={{
                  name: "origen_fondos",
                  placeholder: "Origen de fondos",
                  type: "text",
                  isValid: !errors.origen_fondos,
                  showErrors: errors.origen_fondos,
                  error: "Este campo es requerido",
                }}
                {...register("origen_fondos", { required: true })}
                error={errors.origen_fondos}
            />
          </article>

          <article>
            <label htmlFor='metodo_deposito'>Método de depósito de fondos:</label>
            <SmallInput
                field={{
                  name: "metodo_deposito",
                  placeholder: "Método de depósito de fondos:",
                  type: "text",
                  isValid: !errors.metodo_deposito,
                  showErrors: errors.metodo_deposito,
                  error: "Este campo es requerido",
                }}
                {...register("metodo_deposito", { required: true })}
                error={errors.metodo_deposito}
            />
          </article>

          <h2>Información adicional</h2>
          <article>
            <label htmlFor='valor_activos'>Valor total de activos en gestión:</label>
            <SmallInput
                field={{
                name: "valor_activos",
                placeholder: "Valor total de activos en gestión",
                type: "number",
                isValid: !errors.valor_activos,
                showErrors: errors.valor_activos,
                error: "Este campo es requerido",
                }}
                {...register("valor_activos", { required: true,  })}
                error={errors.valor_activos}
            />
          </article>

          <article>
            <label htmlFor='volumen_transacciones'>Volumen de transacciones mensuales:</label>
            <SmallInput
                field={{
                name: "volumen_transacciones",
                placeholder: "Volumen de Transacciones Mensuales",
                type: "number",
                isValid: !errors.volumen_transacciones,
                showErrors: errors.volumen_transacciones,
                error: "Este campo es requerido",
                }}
                {...register("volumen_transacciones", { required: true })}
                error={errors.volumen_transacciones}
            />
          </article>

          <article>
            <label htmlFor='numero_contacto'>Número de contacto:</label>
            <SmallInput
                field={{
                  name: "numero_contacto",
                  placeholder: "Número de contacto",
                  type: "text",
                  isValid: !errors.numero_contacto,
                  showErrors: errors.numero_contacto,
                  error: "Este campo es requerido",
                }}
                {...register("numero_contacto", { required: true })}
                error={errors.numero_contacto}
            />
          </article>

          <article>
            <label htmlFor='sitio_web'>Sitio Web:</label>
            <SmallInput
                field={{
                  name: "sitio_web",
                  placeholder: "Sitio Web",
                  type: "text",
                  isValid: !errors.sitio_web,
                  showErrors: errors.sitio_web,
                }}
                {...register("sitio_web")}
                error={errors.sitio_web}
            />
          </article>

          <article>
            <label htmlFor='objetivo_solicitud'>Objetivo de la solicitud:</label>
            <LargeInput
                field={{
                  name: "objetivo_solicitud",
                  placeholder: "Objetivo de la solicitud",
                  type: "text",
                  isValid: !errors.objetivo_solicitud,
                  showErrors: errors.objetivo_solicitud,
                  error: "Este campo es requerido",
                }}
                {...register("objetivo_solicitud", { required: true })}
                error={errors.objetivo_solicitud}
            />
          </article>

          <article>
            <label htmlFor='partes_relacionadas'>Partes relacionadas:</label>
            <LargeInput
                field={{
                  name: "partes_relacionadas",
                  placeholder: "Partes relacionadas",
                  type: "text",
                  isValid: !errors.partes_relacionadas,
                  showErrors: errors.partes_relacionadas,
                  error: "Este campo es requerido",
                }}
                {...register("partes_relacionadas", { required: true })}
                error={errors.partes_relacionadas}
            />
          </article>

          <h2>Información requerida de socios</h2>
          <section className='socios_form'>
            <article>
              <label htmlFor='nombre_socio'>Nombre y apellido:</label>
              <SmallInput
                  field={{
                    name: "nombre_socio",
                    placeholder: "Nombre y apellido",
                    type: "text",
                    isValid: !errors.nombre_socio,
                    showErrors: errors.nombre_socio,
                    error: "Este campo es requerido",
                  }}
                  {...register("nombre_socio", { required: true })}
                  error={errors.nombre_socio}
              />
            </article>

            <article>
              <label htmlFor='fecha_nacimiento'>Fecha de Nacimiento:</label>
              <SmallInput
                  field={{
                  name: "fecha_nacimiento",
                  placeholder: "Fecha de Nacimiento",
                  type: "date",
                  isValid: !errors.fecha_nacimiento,
                  showErrors: errors.fecha_nacimiento,
                  error: "Este campo es requerido",
                  }}
                  {...register("fecha_nacimiento", { required: true })}
                  error={errors.fecha_nacimiento}
              />
            </article>

            <article>
              <label htmlFor='pais_residencia'>País de Residencia:</label>
              <SmallInput
                  field={{
                    name: 'pais_residencia',
                    placeholder: 'País de Residencia',
                    type: 'text',
                    isValid: !errors.pais_residencia,
                    showErrors: errors.pais_residencia,
                    error: 'Este campo es requerido',
                  }}
                  {...register('pais_residencia', { required: true })}
                  error={errors.pais_residencia}
              />
            </article>

            <article>
              <label htmlFor='direccion_residencial'>Dirección Residencial:</label>
              <SmallInput
                  field={{
                    name: "direccion_residencial",
                    placeholder: "Dirección residencial",
                    type: "text",
                    isValid: !errors.direccion_residencial,
                    showErrors: errors.direccion_residencial,
                    error: "Este campo es requerido"
                  }}
                  {...register("direccion_residencial", { required: true })}
                  error={errors.direccion_residencial}
              />
            </article>

            <article>
              <label htmlFor='numero_documento'>Número de identificación:</label>
              <SmallInput
                  field={{
                    name: "numero_documento",
                    placeholder: "Número de identificación",
                    type: "text",
                    isValid: !errors.numero_documento,
                    showErrors: errors.numero_documento,
                    error: "Este campo es requerido",
                  }}
                  {...register("numero_documento", { required: true })}
                  error={errors.numero_documento}
              />
            </article>

            <article>
              <label htmlFor="foto_identificacion">Foto de identificación (INE/IFE o Pasaporte)</label>
              <AttachmentInput
                  field={{
                    name: "foto_identificacion",
                    placeholder: "Foto de identificación (INE/IFE o Pasaporte)",
                    error: "Este campo es requerido",
                  }}
                  {...register("foto_identificacion", { required: true })}
                  error={errors.foto_identificacion}
              />
            </article>

            <article>
              <label htmlFor='cargo'>Cargo:</label>
              <SmallInput
                  field={{
                    name: "cargo",
                    placeholder: "Cargo",
                    type: "text",
                    isValid: !errors.cargo,
                    showErrors: errors.cargo,
                    error: "Este campo es requerido",
                  }}
                  {...register("cargo", { required: true })}
                  error={errors.cargo}
              />
            </article>

            <article>
              <label htmlFor='porcentaje_societario'>Porcentaje Societario:</label>
              <SmallInput
                field={{
                  name: 'porcentaje_societario',
                  placeholder: 'Porcentaje Societario',
                  type: 'number',
                  isValid: !errors.porcentaje_societario,
                  showErrors: errors.porcentaje_societario,
                  error: 'Este campo es requerido',
                }}
                {...register('porcentaje_societario', { required: true, max: 100, min: 0.1 })}
                error={errors.porcentaje_societario}
              />
            </article>
          </section>


          <h2>Alta de Proyecto</h2>
          <article>
            <label htmlFor="acta_constitutiva">Acta Constitutiva / Estatuto / Contrato de Fideicomiso:</label>
            <AttachmentInput
                field={{
                  name: "acta_constitutiva",
                  placeholder: "Acta Constitutiva / Estatuto / Contrato de Fideicomiso",
                  error: "Este campo es requerido",
                }}
                {...register("acta_constitutiva", { required: true })}
                error={errors.acta_constitutiva}
            />
          </article>

          <article>
            <label htmlFor="constancia_situacion_fiscal">Constancia de situación fiscal:</label>
            <AttachmentInput
                field={{
                  name: "constancia_situacion_fiscal",
                  placeholder: "Constancia de situación fiscal",
                  error: "Este campo es requerido",
                }}
                {...register("constancia_situacion_fiscal", { required: true })}
                error={errors.constancia_situacion_fiscal}
            />
          </article>

          <article>
            <label htmlFor="comprobante_domicilio">Comprobante de domicilio de la entidad:</label>
            <AttachmentInput
                field={{
                  name: "comprobante_domicilio",
                  placeholder: "Comprobante de domicilio de la entidad",
                  error: "Este campo es requerido",
                }}
                {...register("comprobante_domicilio", { required: true })}
                error={errors.comprobante_domicilio}
            />
          </article>

          <article>
                  <label htmlFor="registro_tributario">Registro tributario completo (estado contable, declaración jurada de ganancia,
                    declaración de IVA):</label>
                  <AttachmentInput
                      field={{
                        name: "registro_tributario",
                        placeholder: "Registro tributario completo (estado contable, declaración jurada de ganancia, declaración de IVA)",
                        error: "Este campo es requerido",
                      }}
                      {...register("registro_tributario", { required: true })}
                      error={errors.registro_tributario}
                  />
          </article>

          <article>
            <label htmlFor="escritura_terreno">Escritura de Terreno (¿Posee Hipoteca?):</label>
            <select id="posee_hipoteca" name="posee_hipoteca" required>
                <option value="si">Sí</option>
                <option value="no">No</option>
            </select>
          </article>

          <article>
            <label htmlFor="deck_comercial">Deck Comercial:</label>
            <AttachmentInput
                field={{
                  name: "deck_comercial",
                  placeholder: "Deck Comercial",
                  error: "Este campo es requerido",
                }}
                {...register("deck_comercial", { required: true })}
                error={errors.deck_comercial}
            />
          </article>

          <article className='large-field'>
            <label htmlFor="proyeccion_ventas">Proyección de Ventas por Precio (stock / disponible):</label>
            <LargeInput
                field={{
                  name: "proyeccion_ventas",
                  placeholder: "Proyección de Ventas por Precio (stock / disponible):",
                  type: "text",
                  isValid: !errors.proyeccion_ventas,
                  showErrors: errors.proyeccion_ventas,
                  error: "Este campo es requerido",
                }}
                {...register("proyeccion_ventas", { required: true })}
                error={errors.proyeccion_ventas}
            />
          </article>

          <article>
            <label htmlFor='monto_tokenizar'>Monto a tokenizar - Unidad:</label>
            <SmallInput
                field={{
                  name: "monto_tokenizar",
                  placeholder: "Monto a tokenizar - Unidad:",
                  type: "number",
                  isValid: !errors.monto_tokenizar,
                  showErrors: errors.monto_tokenizar,
                  error: "Este campo es requerido",
                }}
                {...register("monto_tokenizar", { required: true })}
                error={errors.monto_tokenizar}
            />
          </article>

          <footer>
            <div className='degradedLink'>
                <button className='degradedLink_TextContainer degradedLink_TextContainer--white' type="submit">
                  <span className="degradedLink_Text">Guardar</span>
                </button>
            </div>
          </footer>
      </form>
    </main>
  );
}
