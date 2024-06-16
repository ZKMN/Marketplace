'use client';

/* eslint-disable max-len */
import React from 'react';
import { Divider, Grid, Typography } from '@mui/material';

import { BaseContainer, BaseImage } from '@/shared/components';

export const AboutUsEs = () => (
  <BaseContainer mt={3} mb={3} maxWidth={1000}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h1" fontSize="2rem" textAlign="center">
          ¡Tienda de zapatos para niños WEESTEP en Alicante:
          {' '}
          <br />
          {' '}
          Comodidad y estilo para tus Pequeños!
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography>
          Alicante es una ciudad donde cada piedra respira historia y belleza.
        </Typography>
        <Typography>
          En su corazón, en la Calle Jerusalén, 24, encontrarás una verdadera joya para mamás y sus pequeños: la tienda de zapatos para niños WEESTEP KIDS. ¡Sumérgete en el mundo de zapatos elegantes y cómodos con nosotros!
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography>
          ¿Qué hace única a nuestra tienda? - podrías preguntar. Y te responderemos: ¡No tienes que creer solo en nuestra palabra! ¡Ven y comprueba la calidad de nuestros zapatos y nuestro servicio por ti mismo!
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography>
          Pero hay algo que realmente distingue nuestra tienda del resto. ¡Hablemos de eso en detalle! 😊
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Grid
          sx={({ breakpoints }) => ({
            mr: 1,
            float: 'left',
            [breakpoints.down('sm')]: {
              mb: 1,
              float: 'none',
              display: 'flex',
              justifyContent: 'center',
            },
          })}
        >
          <BaseImage
            alt="Tienda Weestep Kids"
            src="/images/articles/about-us/store.jpg"
            width={300}
            height={300}
          />
        </Grid>

        <Typography>
          Tenemos zapatos para cada pequeño, desde los primeros pasos hasta la adolescencia, con tallas que van desde la 18 hasta la 37. Amplia selección tanto para niños como para sus madres (¡si mamá tiene pies pequeños: hasta la talla 37!) - ¡Más de 200 modelos en stock! ¡Traemos la mercancía de la próxima temporada a la tienda un mes antes que otros establecimientos! Por ejemplo: ¡tenemos sandalias de verano en nuestras estanterías desde finales de febrero! Mientras que los slip-ons, las zapatillas y las deportivas están disponibles durante todo el año.
          <br />
          <br />
          En nuestra tienda, encontrarás de todo, desde coloridas zapatillas deportivas hasta cómodas pantuflas y calzado para paseos por la playa. Nos preocupamos por la comodidad de tu hijo todo el día.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography mb={2} variant="h6">
          ¡En nuestra tienda, se crea la verdadera Magia del Color y la Creatividad!
        </Typography>

        <Typography
          mb={2}
          fontSize="1.2rem"
          fontWeight={700}
        >
          Si hablamos de detalles, en nuestra tienda encontrarás:
        </Typography>

        <Grid component="ul" pl={4}>
          <Grid mb={1} component="li">
            <Typography>
              <strong>Zapatillas:</strong>
              {' '}
              Para cualquier temporada del año. Para juegos activos, looks elegantes y entrenamiento deportivo.
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              <strong>Botas:</strong>
              {' '}
              Diseños únicos e incomparables para el clima frío, ¡donde tus hijos siempre se destacarán entre otros niños!
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              <strong>Sandalias:</strong>
              {' '}
              Ligeras y cómodas, ideales para los días de verano. Tanto abiertas como cerradas, para todos los gustos y necesidades de tus hijos.
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              <strong>Pantuflas:</strong>
              {' '}
              Para casa, la escuela, guarderías, paseos por el parque, juegos en el patio. Proporcionan comodidad durante el descanso de tu hijo.
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              <strong>Zapatillas de lona:</strong>
              {' '}
              Una opción elegante para el uso diario. Originales con diseños únicos que harán que el look de tu hijo sea único y muy elegante.
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              <strong>Slipons:</strong>
              {' '}
              Comodidad y estilo en un solo producto, perfectos para niños activos.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography>
          ¡Visita la tienda WEESTEP KIDS en Alicante y haz compras ventajosas para tus pequeños! Calidad, estilo e innovación te esperan cada día. ¡Únete a nuestra familia de clientes satisfechos!
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography
          mb={2}
          variant="h6"
          fontSize="1.5rem"
          fontWeight={700}
        >
          Modelos Únicos:
        </Typography>

        <Divider sx={{ margin: '16px 0' }}>
          <Typography
            variant="h3"
            fontSize="1rem"
            fontWeight={700}
          >
            Zapatillas
          </Typography>
        </Divider>

        <Grid container>
          <Grid item xs={12}>
            <Grid
              sx={({ breakpoints }) => ({
                mr: 1,
                float: 'left',
                [breakpoints.down('sm')]: {
                  mb: 1,
                  float: 'none',
                  display: 'flex',
                  justifyContent: 'center',
                },
              })}
            >
              <BaseImage
                alt="Weestep Kids Zapatillas"
                src="/images/articles/about-us/sneakers.jpg"
                width={200}
                height={200}
              />
            </Grid>

            <Typography>
              Imagina cómo se maravillarán tus hijos al ver sus zapatos cambiar de color con el sol. Sí, ¡lo leíste bien! Tenemos zapatos que cambian de color al sol. En interiores, son blancos, pero al sol, se vuelven azules (para modelos de niños) o rosas (para modelos de niñas). Estos zapatos están marcados en nuestro catálogo con una imagen azul o rosa en una esquina, ¡los encontrarás fácilmente! También puedes encontrar estos zapatos en nuestro catálogo especial &quot;Camaleones&quot;.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ margin: '16px 0' }}>
          <Typography
            variant="h3"
            fontSize="1rem"
            fontWeight={700}
          >
            Slipons
          </Typography>
        </Divider>

        <Grid container>
          <Grid item xs={12}>
            <Grid
              sx={({ breakpoints }) => ({
                mr: 1,
                float: 'left',
                [breakpoints.down('sm')]: {
                  mb: 1,
                  float: 'none',
                  display: 'flex',
                  justifyContent: 'center',
                },
              })}
            >
              <BaseImage
                alt="Weestep Kids Slipons"
                src="/images/articles/about-us/slipons.jpg"
                width={200}
                height={200}
              />
            </Grid>

            <Typography mb={1}>
              ¿Sabías que tenemos zapatos en nuestra tienda que los niños pueden pintar ellos mismos? Los marcadores se venden junto con este calzado. Cuando tu hijo llega a casa con zapatos de nuestra tienda o cuando llega un paquete de nuestra tienda, ¡tu hijo puede decorar su calzado a su gusto y tener un par de zapatos único que nadie más tiene!
              <br />
              <br />
              -¿Qué pasa si se cansan del diseño? - podrías preguntar.
              -¡No hay problema! - responderemos. ¡Solo tíralos a la lavadora y los zapatos estarán limpios de nuevo! ¡Tu hijo puede repintarlos hasta 5 veces!
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ margin: '16px 0' }}>
          <Typography
            variant="h3"
            fontSize="1rem"
            fontWeight={700}
          >
            Zapatillas Hameleon
          </Typography>
        </Divider>

        <Grid container>
          <Grid item xs={12}>
            <Grid
              sx={({ breakpoints }) => ({
                mr: 1,
                float: 'left',
                [breakpoints.down('sm')]: {
                  mb: 1,
                  float: 'none',
                  display: 'flex',
                  justifyContent: 'center',
                },
              })}
            >
              <BaseImage
                alt="Weestep Kids Zapatillas"
                src="/images/articles/about-us/sneakers-high.jpg"
                width={200}
                height={200}
              />
            </Grid>

            <Typography>
              Si tu hijo es adolescente y busca su propio estilo, ¡tenemos modelos que brillan en la oscuridad! Esto hará que tu hijo se destaque y aumentará su seguridad al regresar a casa por la noche. La ropa brillante es fácilmente visible para peatones, conductores y ciclistas, añadiendo confianza a las aventuras nocturnas de tu hijo.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" fontWeight={700}>
          Comodidad y Cuidado para los Pequeños:
        </Typography>
        <Typography>
          En esta sección, hablaremos sobre la salud y comodidad de tus hijos. ¡Nuestro calzado es único en el mercado europeo! Después de todo, nuestros zapatos son recomendados por ortopedistas y podólogos, lo cual es muy importante para los padres: saber que los pies de sus hijos se están desarrollando correctamente y que el niño puede correr todo el día con estos zapatos sin quejarse de cansancio al final del día.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography
          mb={2}
          variant="h6"
          fontWeight={700}
        >
          En nuestro calzado, encontrarás:
        </Typography>
        <Typography mb={1}>
          <strong>Plantilla ortopédica:</strong>
          {' '}
          No es solo un accesorio adicional para los zapatos de tu hijo, es una inversión en su salud y comodidad. Está diseñada teniendo en cuenta las características anatómicas del pie del niño y promueve su formación correcta durante el crecimiento.
        </Typography>

        <Typography mb={1} fontWeight={700}>
          ¿Qué hace especial a nuestra plantilla ortopédica?
        </Typography>

        <Grid pl={4} component="ul">
          <Grid mb={1} component="li">
            <Typography>
              Forma anatómica: Diseñada con áreas específicas para la planta, el arco y los dedos del pie, asegurando una correcta distribución del peso y soporte del arco.
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              Materiales de alta calidad: Hecha de materiales transpirables e hipoalergénicos como cuero natural o telas tecnológicas especiales, para la comodidad y salud de los pies.
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              Soporte y corrección: Ayuda a prevenir y corregir pies planos, deformidad de los dedos y otras deformidades, asegurando una postura correcta al caminar.
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              Amortiguación y elasticidad: Absorbe impactos durante la caminata y carrera, reduciendo el riesgo de lesiones en los pies y el cansancio.
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              Universalidad: Adecuada para varios tipos de calzado, desde zapatillas y sandalias hasta pantuflas y botas, asegurando comodidad en cualquier situación.
            </Typography>
          </Grid>
        </Grid>

        <Typography mb={1} fontWeight={700}>
          ¿Por qué es importante para tus hijos?
        </Typography>

        <Grid pl={4} component="ul">
          <Grid mb={1} component="li">
            <Typography>
              Formación correcta del pie: Crucial para el desarrollo del niño, asegurando una correcta posición del pie y previniendo futuras deformidades.
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              Prevención de enfermedades: Reduce el riesgo de diversas enfermedades y deformidades del pie como pies planos, deformidad en valgo, entre otras.
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              Comodidad y confianza: Tu hijo se sentirá más seguro y cómodo, incluso después de largas caminatas o juegos activos.
            </Typography>
          </Grid>
        </Grid>
        <Typography>
          Así que, si te preocupa la salud y comodidad de tus pequeños, la plantilla ortopédica es lo que necesitas para una infancia plena y activa de tu hijo.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography fontWeight={700}>
          Suela Anatómica:
        </Typography>

        <Typography>
          Es una solución innovadora en el mundo del calzado que proporciona la máxima comodidad y soporte a los pies durante todo el día. Su diseño está pensado con las características del pie humano en mente, haciendo que los zapatos con este tipo de suela sean una elección ideal para un estilo de vida activo y saludable.
        </Typography>
        <Typography>
          ¿Qué distingue a una suela anatómica? - podrías preguntar.
        </Typography>

        <Typography mt={2} mb={1} fontWeight={700}>
          Y te responderemos:
        </Typography>

        <Grid pl={4} component="ul">
          <Grid mb={1} component="li">
            <Typography>
              Ajuste perfecto: La forma anatómica de la suela permite que el pie se &quot;hundan&quot; en el zapato, asegurando una posición natural del pie y minimizando el cansancio del pie.
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              Soporte óptimo: Las concavidades y protuberancias especialmente diseñadas de la suela aseguran que la presión sobre el pie se distribuya uniformemente, evitando dolores y sobrecargas.
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              Absorción de impactos y resiliencia: Los materiales y la tecnología avanzados permiten que la suela absorba las cargas de choque al caminar, reduciendo el riesgo de lesiones en los pies y el cansancio.
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              Materiales transpirables: El uso de materiales transpirables y de alta calidad asegura un microclima óptimo dentro de los zapatos y previene la sudoración y los malos olores.
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              Versatilidad y durabilidad: Adecuada para diferentes tipos de zapatos y garantiza una larga vida útil incluso con uso intensivo.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </BaseContainer>

);
