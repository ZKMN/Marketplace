'use client';

/* eslint-disable max-len */
import React from 'react';
import { Divider, Grid, Typography } from '@mui/material';

import { BaseContainer, BaseImage } from '@/shared/components';

export const AboutUsEn = () => (
  <BaseContainer mt={3} mb={3} maxWidth={1000}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h1" fontSize="2rem" textAlign="center">
          WEESTEP Children&apos;s shoe store in Alicante:
          {' '}
          <br />
          {' '}
          Comfort and style for your Little Ones!
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography>
          Alicante is a city where every stone breathes history and beauty.
        </Typography>
        <Typography>
          In its heart, at Calle Jerusalén, 24, you&apos;ll find a true gem for moms and their little ones: the WEESTEP KIDS children&apos;s shoe store. Immerse yourself in the world of elegant and comfortable shoes with us!
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography>
          What makes our store unique? - you might ask. And we&apos;ll answer: You don&apos;t have to take our word for it! Come and check the quality of our shoes and our service yourself!
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography>
          But there&apos;s something that really sets our store apart from the rest. Let&apos;s talk about that in detail! 😊
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
          We have shoes for every little one, from first steps to adolescence, with sizes ranging from 18 to 37. Wide selection for both kids and their mothers (if mom has small feet: up to 37!) - Over 200 models in stock! We bring next season&apos;s merchandise to the store a month before other establishments! For example: we have summer sandals and sandals on our shelves since late February! While slip-ons, sneakers, and sneakers are available year-round.
          <br />
          <br />
          In our store, you&apos;ll find everything from colorful sports sneakers to comfortable house slippers and beach walks. We care about your child&apos;s comfort all day long.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography mb={2} variant="h6">
          In our store, true Magic of Color and Creativity is created!
        </Typography>

        <Typography
          mb={2}
          fontSize="1.2rem"
          fontWeight={700}
        >
          If we talk about details, in our store, you&apos;ll find:
        </Typography>

        <Grid component="ul" pl={4}>
          <Grid mb={1} component="li">
            <Typography>
              <strong>Sneakers:</strong>
              {' '}
              For any season of the year. For active play, elegant looks, and sports training.
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              <strong>Boots:</strong>
              {' '}
              Unique and unmatched designs for cold weather, where your kids will always stand out among other children!
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              <strong>Sandals:</strong>
              {' '}
              Lightweight and comfortable, ideal for summer days. Both open and closed, for all tastes and needs of your kids!
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              <strong>Slippers:</strong>
              {' '}
              For home, school, nurseries, park walks, playground games. They provide comfort during your child&apos;s rest.
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              <strong>Canvas sneakers:</strong>
              {' '}
              A stylish choice for everyday wear. Original with unique designs that will make your child&apos;s look unique and very stylish.
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              <strong>Slipons:</strong>
              {' '}
              Comfort and style in one product, perfect for active kids.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography>
          Visit the WEESTEP KIDS store in Alicante and make advantageous purchases for your little ones! Quality, style, and innovation await you every day. Join our family of satisfied customers!
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant="h2"
          fontSize="1.5rem"
          fontWeight={700}
        >
          Unique Models:
        </Typography>

        <Divider sx={{ margin: '16px 0' }}>
          <Typography
            variant="h3"
            fontSize="1rem"
            fontWeight={700}
          >
            Sneakers Hameleon
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
                alt="Weestep Kids Sneakers Hameleon"
                src="/images/articles/about-us/sneakers.jpg"
                width={200}
                height={200}
              />
            </Grid>

            <Typography>
              Imagine how your kids will marvel at seeing their shoes change color with the sun. Yes, you read that right! We have shoes that change color in the sun. Indoors, they&apos;re white, but in the sun, they turn blue (for boys&apos; models) or pink (for girls&apos; models). These shoes are marked in our catalog with a blue or pink image in a corner, you&apos;ll find them easily! You can also find these shoes in our special &quot;Chameleons&quot; catalog.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ margin: '16px 0' }}>
          <Typography
            variant="h3"
            fontSize="1rem"
            fontWeight={700}
          >
            Coloring Slipons
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
              Did you know that we have shoes in our store that kids can paint themselves? Markers are sold along with this footwear. When your child comes home with shoes from our store or when a package arrives from our store, your child can decorate their footwear to their liking and own a unique pair of shoes that no one else has!
              <br />
              <br />
              -What if they get tired of the design? - you might ask.
              -No problem! - we&apos;ll answer. Just throw them in the washing machine, and the shoes will be clean again! Your child can repaint them up to 5 times!
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ margin: '16px 0' }}>
          <Typography
            variant="h3"
            fontSize="1rem"
            fontWeight={700}
          >
            Luminous Sneakers
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
                alt="Weestep Kids Luminous Sneakers"
                src="/images/articles/about-us/sneakers-high.jpg"
                width={200}
                height={200}
              />
            </Grid>

            <Typography>
              If your child is a teenager and is looking for their own style, we have models that glow in the dark! This will make your child stand out and increase their safety when coming home at night! Bright clothing is easily visible to pedestrians, drivers, and cyclists, adding confidence to your child&apos;s nocturnal adventures.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" fontWeight={700}>
          Comfort and Care for Little Ones:
        </Typography>
        <Typography>
          In this section, we&apos;ll talk about your children&apos;s health and comfort. Our footwear is unique in the European market! After all, our shoes are recommended by orthopedists and podiatrists, which is very important for parents: knowing that their children&apos;s feet are developing correctly and that the child can run all day with these shoes without complaining of tiredness at the end of the day.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography
          mb={2}
          variant="h6"
          fontWeight={700}
        >
          In our footwear, you&apos;ll find:
        </Typography>

        <Typography mb={1}>
          <strong>Orthopedic insole:</strong>
          {' '}
          It&apos;s not just an additional accessory for your child&apos;s shoes, it&apos;s an investment in their health and comfort. It&apos;s designed with the anatomical characteristics of the child&apos;s foot in mind and promotes its proper formation during growth.
        </Typography>

        <Typography mb={1} fontWeight={700}>
          What makes our orthopedic insole special?
        </Typography>

        <Grid pl={4} component="ul">
          <Grid mb={1} component="li">
            <Typography>
              Anatomic shape: Designed with specific areas for the sole, arch, and toes of the foot, ensuring proper weight distribution and arch support.
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              High-quality materials: Made of breathable and hypoallergenic materials like natural leather or special technological fabrics, for the comfort and health of the feet.
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              Support and correction: Helps prevent and correct flat feet, toe deformity, and other deformities, ensuring a correct posture when walking.
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              Cushioning and elasticity: Absorbs impacts during walking and running, reducing the risk of foot injuries and fatigue.
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              Universality: Suitable for various types of footwear, from sneakers and sandals to slippers and boots, ensuring comfort in any situation.
            </Typography>
          </Grid>
        </Grid>

        <Typography mb={1} fontWeight={700}>
          Why is it important for your children?
        </Typography>

        <Grid pl={4} component="ul">
          <Grid mb={1} component="li">
            <Typography>
              Proper foot formation: Crucial for the child&apos;s development, ensuring a correct foot position and preventing future deformities.
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              Disease prevention: Reduces the risk of various foot diseases and deformities such as flat feet, valgus deformity, and others.
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              Comfort and confidence: Your child will feel more secure and comfortable, even after long walks or active play.
            </Typography>
          </Grid>
        </Grid>
        <Typography>
          So, if you care about the health and comfort of your little ones, the orthopedic insole is what you need for a full and active childhood for your child.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography fontWeight={700}>
          Anatomical Sole:
        </Typography>

        <Typography>
          It&apos;s an innovative solution in the world of footwear that provides maximum comfort and support to the feet throughout the day. Its design is intended with the characteristics of the human foot in mind, making shoes with this type of sole an ideal choice for an active and healthy lifestyle.
        </Typography>

        <Typography mt={2} fontWeight={700}>
          What distinguishes an anatomical sole? - you might ask.
        </Typography>

        <Typography mt={2} mb={1} fontWeight={700}>
          And we&apos;ll answer:
        </Typography>

        <Grid pl={4} component="ul">
          <Grid mb={1} component="li">
            <Typography>
              Perfect fit: The anatomical shape of the sole allows the foot to &quot;sink&quot; into the shoe, ensuring a natural foot position and minimizing foot fatigue.
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              Optimal support: Specially designed concavities and protrusions of the sole ensure that pressure on the foot is evenly distributed, avoiding pain and overloading.
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              Impact absorption and resilience: Advanced materials and technology allow the sole to absorb shock loads while walking, reducing the risk of foot injuries and fatigue.
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              Breathable materials: The use of breathable and high-quality materials ensures an optimal microclimate inside the shoes and prevents sweating and unpleasant odors.
            </Typography>
          </Grid>
          <Grid mb={1} component="li">
            <Typography>
              Versatility and durability: Suitable for different types of shoes and guarantees a long service life even with intensive use.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </BaseContainer>
);
